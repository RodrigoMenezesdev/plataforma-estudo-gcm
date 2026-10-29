
let currentQuestionIndex = 0;

// Variável dinâmica que receberá o banco de questões ativo no momento
let questoesAtuais = (typeof questoesSimulado !== 'undefined') ? questoesSimulado : [];
let userAnswers = new Array(questoesAtuais.length).fill(null);
let currentFlashcardIndex = 0;

// Função global para embaralhar um array de forma aleatória (Fisher-Yates)
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// NAVEGAÇÃO DE ABAS GERAL
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.content-section').forEach(sec => {
            sec.classList.add('hidden');
            sec.classList.remove('active');
        });

        btn.classList.add('active');

        const targetId = btn.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.remove('hidden');
            targetSection.classList.add('active');
        }
    });
});

// SIMULADO PRINCIPAL (Geral)
const startBtn = document.getElementById('start-simulado-btn');
const introDiv = document.getElementById('simulado-intro');
const quizArea = document.getElementById('simulado-quiz-area');
const resultArea = document.getElementById('simulado-result-area');

if (startBtn) {
    startBtn.addEventListener('click', () => {
        questoesAtuais = (typeof questoesSimulado !== 'undefined') ? questoesSimulado : [];
        userAnswers = new Array(questoesAtuais.length).fill(null);
        introDiv.classList.add('hidden');
        quizArea.classList.remove('hidden');
        initQuestionGrid();
        loadQuestion(0);
        startTimer();
    });
}

function initQuestionGrid() {
    const grid = document.getElementById('question-grid');
    if (!grid) return;
    grid.innerHTML = '';
    questoesAtuais.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.classList.add('q-dot');
        dot.innerText = idx + 1;
        dot.addEventListener('click', () => loadQuestion(idx));
        grid.appendChild(dot);
    });
    updateGridVisuals();
}

function loadQuestion(index) {
    currentQuestionIndex = index;
    const q = questoesAtuais[index];
    if (!q) return;

    const badge = document.getElementById('q-subject-badge');
    if (badge) badge.innerText = q.subject;

    const numEl = document.getElementById('q-number');
    if (numEl) numEl.innerText = `Questão ${index + 1} de ${questoesAtuais.length}`;

    const textEl = document.getElementById('q-text');
    if (textEl) textEl.innerText = q.text;

    const optContainer = document.getElementById('options-container');
    if (!optContainer) return;
    optContainer.innerHTML = '';

    q.options.forEach((opt, optIdx) => {
        const optDiv = document.createElement('div');
        optDiv.classList.add('option-item');
        if (userAnswers[index] === optIdx) {
            optDiv.classList.add('selected');
        }
        optDiv.innerText = opt;
        optDiv.addEventListener('click', () => {
            userAnswers[index] = optIdx;
            loadQuestion(index);
            updateGridVisuals();
        });
        optContainer.appendChild(optDiv);
    });

    updateGridVisuals();
}

function updateGridVisuals() {
    const dots = document.querySelectorAll('#question-grid .q-dot');
    dots.forEach((dot, idx) => {
        dot.classList.remove('current', 'answered');
        if (idx === currentQuestionIndex) {
            dot.classList.add('current');
        }
        if (userAnswers[idx] !== null) {
            dot.classList.add('answered');
        }
    });
}

const nextQBtn = document.getElementById('next-q-btn');
if (nextQBtn) {
    nextQBtn.addEventListener('click', () => {
        if (currentQuestionIndex < questoesAtuais.length - 1) {
            loadQuestion(currentQuestionIndex + 1);
        }
    });
}

const prevQBtn = document.getElementById('prev-q-btn');
if (prevQBtn) {
    prevQBtn.addEventListener('click', () => {
        if (currentQuestionIndex > 0) {
            loadQuestion(currentQuestionIndex - 1);
        }
    });
}

const finishSimulatedBtn = document.getElementById('finish-simulado-btn');
if (finishSimulatedBtn) {
    finishSimulatedBtn.addEventListener('click', () => {
        if (confirm("Deseja realmente finalizar e enviar a prova?")) {
            finishSimulado();
        }
    });
}

function finishSimulado() {
    quizArea.classList.add('hidden');
    resultArea.classList.remove('hidden');

    let score = 0;
    userAnswers.forEach((ans, idx) => {
        // Usa questoesAtuais e valida a propriedade correta (answer ou correta)
        const q = questoesAtuais[idx];
        if (q) {
            const respostaCorreta = (q.answer !== undefined) ? q.answer : q.correta;
            if (ans === respostaCorreta) {
                score++;
            }
        }
    });

    const totalQ = questoesAtuais.length;
    document.getElementById('score-display').innerText = `${score} / ${totalQ}`;
    const percent = (score / totalQ) * 100;
    document.getElementById('score-feedback').innerText = percent >= 70 ?
        "Excelente desempenho! Você está no caminho certo para a aprovação." :
        "Bom esforço! Continue revisando os flashcards e resumos para fixar a matéria.";

    let totalSimulados = parseInt(localStorage.getItem('gcm_simulados') || '0') + 1;
    localStorage.setItem('gcm_simulados', totalSimulados);
    localStorage.setItem('gcm_ultimo_score', score);
    if (typeof updateStatsDisplay === 'function') {
        updateStatsDisplay();
    }
}

const restartSimuladoBtn = document.getElementById('restart-simulado-btn');
if (restartSimuladoBtn) {
    restartSimuladoBtn.addEventListener('click', () => {
        userAnswers = new Array(questoesAtuais.length).fill(null);
        resultArea.classList.add('hidden');
        introDiv.classList.remove('hidden');
    });
}

function startTimer() {
    let seconds = 4 * 3600;
    const timerBadge = document.getElementById('timer');
    if (!timerBadge) return;
    setInterval(() => {
        if (seconds > 0) seconds--;
        let h = Math.floor(seconds / 3600).toString().padStart(2, '0');
        let m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
        let s = (seconds % 60).toString().padStart(2, '0');
        timerBadge.innerHTML = `<i class="fa-solid fa-clock"></i> ${h}:${m}:${s}`;
    }, 1000);
}

// FLASHCARDS
const flashcardEl = document.getElementById('flashcard');
if (flashcardEl) {
    flashcardEl.addEventListener('click', () => {
        flashcardEl.classList.toggle('flipped');
    });
}

function loadFlashcard(index) {
    if (!flashcardEl) return;
    flashcardEl.classList.remove('flipped');
    const fc = flashcardsData[index];
    document.getElementById('fc-category').innerText = fc.category;
    document.getElementById('fc-question').innerText = fc.q;
    document.getElementById('fc-answer').innerText = fc.a;
}

const fcFlipBtn = document.getElementById('fc-flip');
if (fcFlipBtn) {
    fcFlipBtn.addEventListener('click', () => {
        if (flashcardEl) flashcardEl.classList.toggle('flipped');
    });
}

const fcNextBtn = document.getElementById('fc-next');
if (fcNextBtn) {
    fcNextBtn.addEventListener('click', () => {
        if (typeof flashcardsData !== 'undefined' && flashcardsData.length > 0) {
            currentFlashcardIndex = (currentFlashcardIndex + 1) % flashcardsData.length;
            loadFlashcard(currentFlashcardIndex);
            incrementFlashcardStat();
        }
    });
}

const fcPrevBtn = document.getElementById('fc-prev');
if (fcPrevBtn) {
    fcPrevBtn.addEventListener('click', () => {
        if (typeof flashcardsData !== 'undefined' && flashcardsData.length > 0) {
            currentFlashcardIndex = (currentFlashcardIndex - 1 + flashcardsData.length) % flashcardsData.length;
            loadFlashcard(currentFlashcardIndex);
        }
    });
}

function incrementFlashcardStat() {
    let viewed = parseInt(localStorage.getItem('gcm_flashcards') || '0') + 1;
    localStorage.setItem('gcm_flashcards', viewed);
    updateStatsDisplay();
}

function updateStatsDisplay() {
    const totalSimEl = document.getElementById('stat-total-simulados');
    const flashEl = document.getElementById('stat-flashcards');
    const mediaEl = document.getElementById('stat-media-acertos');

    if (totalSimEl) totalSimEl.innerText = localStorage.getItem('gcm_simulados') || '0';
    if (flashEl) flashEl.innerText = localStorage.getItem('gcm_flashcards') || '0';

    let lastScore = localStorage.getItem('gcm_ultimo_score');
    if (mediaEl) {
        if (lastScore !== null && questoesAtuais.length > 0) {
            let media = Math.round((parseInt(lastScore) / questoesAtuais.length) * 100);
            mediaEl.innerText = `${media}%`;
        } else {
            mediaEl.innerText = '0%';
        }
    }
}

updateStatsDisplay();
if (typeof flashcardsData !== 'undefined' && flashcardsData.length > 0) {
    loadFlashcard(0);
}

let superQuestoesAtuais = [];
let superIndex = 0;
let superRespostas = [];

document.querySelectorAll('.materia-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const materiaEscolhida = btn.getAttribute('data-materia');

        if (typeof superBancoQuestoes === 'undefined') {
            alert("O banco de questões específicas não foi carregado. Verifique a ordem dos scripts no index.html.");
            return;
        }

        if (materiaEscolhida === 'Todas') {
            superQuestoesAtuais = [...superBancoQuestoes];
            const tituloEl = document.getElementById('super-titulo-materia');
            if (tituloEl) tituloEl.innerText = "Simulado Geral (Todas as 100 Questões)";
        } else {
            superQuestoesAtuais = superBancoQuestoes.filter(q => q.materia === materiaEscolhida);
            const tituloEl = document.getElementById('super-titulo-materia');
            if (tituloEl) tituloEl.innerText = `Matéria: ${btn.innerText}`;
        }

        if (superQuestoesAtuais.length === 0) {
            alert("Ainda estamos cadastrando mais questões para esta disciplina específica!");
            return;
        }

        superRespostas = new Array(superQuestoesAtuais.length).fill(null);
        superIndex = 0;

        const sMenu = document.getElementById('super-menu');
        const sQuiz = document.getElementById('super-quiz-area');
        const sRes = document.getElementById('super-result-area');

        if (sMenu) sMenu.classList.add('hidden');
        if (sQuiz) sQuiz.classList.remove('hidden');
        if (sRes) sRes.classList.add('hidden');

        initSuperGrid();
        loadSuperQuestion(0);
    });
});

const voltarMenuBtn = document.getElementById('voltar-menu-btn');
if (voltarMenuBtn) {
    voltarMenuBtn.addEventListener('click', () => {
        const sQuiz = document.getElementById('super-quiz-area');
        const sMenu = document.getElementById('super-menu');
        if (sQuiz) sQuiz.classList.add('hidden');
        if (sMenu) sMenu.classList.remove('hidden');
    });
}

const superRestartBtn = document.getElementById('super-restart-btn');
if (superRestartBtn) {
    superRestartBtn.addEventListener('click', () => {
        const sRes = document.getElementById('super-result-area');
        const sMenu = document.getElementById('super-menu');
        if (sRes) sRes.classList.add('hidden');
        if (sMenu) sMenu.classList.remove('hidden');
    });
}

function initSuperGrid() {
    const grid = document.getElementById('super-question-grid');
    if (!grid) return;
    grid.innerHTML = '';
    superQuestoesAtuais.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.classList.add('q-dot');
        dot.innerText = idx + 1;
        dot.addEventListener('click', () => loadSuperQuestion(idx));
        grid.appendChild(dot);
    });
    updateSuperGridVisuals();
}

function loadSuperQuestion(index) {
    superIndex = index;
    const q = superQuestoesAtuais[index];
    if (!q) return;

    const subEl = document.getElementById('super-q-subject');
    if (subEl) subEl.innerText = q.subject;

    const numEl = document.getElementById('super-q-number');
    if (numEl) numEl.innerText = `Questão ${index + 1} de ${superQuestoesAtuais.length}`;

    const textEl = document.getElementById('super-q-text');
    if (textEl) textEl.innerText = q.text;

    const optContainer = document.getElementById('super-options-container');
    if (!optContainer) return;
    optContainer.innerHTML = '';

    q.options.forEach((opt, optIdx) => {
        const optDiv = document.createElement('div');
        optDiv.classList.add('option-item');
        if (superRespostas[index] === optIdx) {
            optDiv.classList.add('selected');
        }
        optDiv.innerText = opt;
        optDiv.addEventListener('click', () => {
            superRespostas[index] = optIdx;
            loadSuperQuestion(index);
            updateSuperGridVisuals();
        });
        optContainer.appendChild(optDiv);
    });

    updateSuperGridVisuals();
}

function updateSuperGridVisuals() {
    const dots = document.querySelectorAll('#super-question-grid .q-dot');
    dots.forEach((dot, idx) => {
        dot.classList.remove('current', 'answered');
        if (idx === superIndex) dot.classList.add('current');
        if (superRespostas[idx] !== null) dot.classList.add('answered');
    });
}

const superNextBtn = document.getElementById('super-next-btn');
if (superNextBtn) {
    superNextBtn.addEventListener('click', () => {
        if (superIndex < superQuestoesAtuais.length - 1) loadSuperQuestion(superIndex + 1);
    });
}

const superPrevBtn = document.getElementById('super-prev-btn');
if (superPrevBtn) {
    superPrevBtn.addEventListener('click', () => {
        if (superIndex > 0) loadSuperQuestion(superIndex - 1);
    });
}

const superFinishBtn = document.getElementById('super-finish-btn');
if (superFinishBtn) {
    superFinishBtn.addEventListener('click', () => {
        if (confirm("Deseja finalizar este bloco de questões?")) {
            const sQuiz = document.getElementById('super-quiz-area');
            const sRes = document.getElementById('super-result-area');
            if (sQuiz) sQuiz.classList.add('hidden');
            if (sRes) sRes.classList.remove('hidden');

            let acertos = 0;
            superRespostas.forEach((ans, idx) => {
                const q = superQuestoesAtuais[idx];
                if (q) {
                    const respostaCorreta = (q.answer !== undefined) ? q.answer : q.correta;
                    if (ans === respostaCorreta) acertos++;
                }
            });

            const scoreDisplay = document.getElementById('super-score-display');
            if (scoreDisplay) scoreDisplay.innerText = `${acertos} / ${superQuestoesAtuais.length}`;

            const scoreFeedback = document.getElementById('super-score-feedback');
            if (scoreFeedback) {
                scoreFeedback.innerText = acertos === superQuestoesAtuais.length ?
                    "Perfeito! Domínio total da matéria." : "Bom treino! Continue revisando os pontos que errou.";
            }
        }
    });
}

// --- LÓGICA PARA ZERAR ESTATÍSTICAS ---
const resetStatsBtn = document.getElementById('reset-stats-btn');
if (resetStatsBtn) {
    resetStatsBtn.addEventListener('click', () => {
        if (confirm("Deseja realmente apagar todo o seu histórico de estatísticas e flashcards vistos?")) {
            localStorage.removeItem('gcm_simulados');
            localStorage.removeItem('gcm_flashcards');
            localStorage.removeItem('gcm_ultimo_score');

            // Atualiza os valores na tela para 0
            updateStatsDisplay();
            alert("Estatísticas zeradas com sucesso!");
        }
    });
}

// Registro do Service Worker para PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('PWA Service Worker registrado com sucesso!'))
            .catch(err => console.log('Erro ao registrar Service Worker:', err));
    });
}

// ==========================================
// MOTOR DO SIMULADO RLC / RLM
// ==========================================

let rlmCurrentIndex = 0;
let rlmUserAnswers = [];
let rlmTimerInterval;
let rlmTotalSeconds = 3 * 60 * 60; // 3 horas em segundos
let rlmActiveBank = []; // Banco ativo com as questões embaralhadas da sessão

const startRlmBtn = document.getElementById('start-rlm-btn');
const rlmIntro = document.getElementById('rlm-intro');
const rlmQuizArea = document.getElementById('rlm-quiz-area');
const rlmResultArea = document.getElementById('rlm-result-area');

if (startRlmBtn) {
    startRlmBtn.addEventListener('click', () => {
        if (typeof rlmQuestions === 'undefined' || !rlmQuestions.length) {
            alert("O arquivo do simulado de RLM não foi carregado corretamente.");
            return;
        }

        // Embaralha as questões de forma aleatória toda vez que inicia
        rlmActiveBank = shuffleArray(rlmQuestions);

        if (rlmIntro) rlmIntro.classList.add('hidden');
        if (rlmResultArea) rlmResultArea.classList.add('hidden');
        if (rlmQuizArea) rlmQuizArea.classList.remove('hidden');

        rlmCurrentIndex = 0;
        rlmUserAnswers = new Array(rlmActiveBank.length).fill(null);

        loadRlmQuestion(rlmCurrentIndex);
        buildRlmGrid();
        startRlmTimer();
    });
}

function loadRlmQuestion(index) {
    const bank = rlmActiveBank.length ? rlmActiveBank : (typeof rlmQuestions !== 'undefined' ? rlmQuestions : []);
    if (!bank[index]) return;

    const q = bank[index];
    const qNum = document.getElementById('rlm-q-number');
    if (qNum) qNum.innerText = `Questão ${index + 1} de ${bank.length}`;

    const qText = document.getElementById('rlm-q-text');
    if (qText) qText.innerText = q.question;

    const optionsContainer = document.getElementById('rlm-options-container');
    if (!optionsContainer) return;
    optionsContainer.innerHTML = '';

    q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        if (rlmUserAnswers[index] === i) {
            btn.classList.add('selected');
        }
        btn.innerHTML = `<strong>${String.fromCharCode(65 + i)})</strong> ${opt}`;
        btn.addEventListener('click', () => {
            rlmUserAnswers[index] = i;
            highlightRlmOption(i);
            updateRlmGridItem(index);
        });
        optionsContainer.appendChild(btn);
    });
}

function highlightRlmOption(selectedIndex) {
    const buttons = document.querySelectorAll('#rlm-options-container .option-btn');
    buttons.forEach((btn, i) => {
        if (i === selectedIndex) {
            btn.classList.add('selected');
        } else {
            btn.classList.remove('selected');
        }
    });
}

function buildRlmGrid() {
    const bank = rlmActiveBank.length ? rlmActiveBank : (typeof rlmQuestions !== 'undefined' ? rlmQuestions : []);
    const grid = document.getElementById('rlm-question-grid');
    if (!grid || !bank.length) return;

    grid.innerHTML = '';
    bank.forEach((_, i) => {
        const box = document.createElement('div');
        box.classList.add('q-box');
        box.innerText = i + 1;
        if (rlmUserAnswers[i] !== null) box.classList.add('answered');
        box.addEventListener('click', () => {
            rlmCurrentIndex = i;
            loadRlmQuestion(rlmCurrentIndex);
        });
        grid.appendChild(box);
    });
}

function updateRlmGridItem(index) {
    const boxes = document.querySelectorAll('#rlm-question-grid .q-box');
    if (boxes[index]) {
        if (rlmUserAnswers[index] !== null) {
            boxes[index].classList.add('answered');
        } else {
            boxes[index].classList.remove('answered');
        }
    }
}

const rlmNextBtn = document.getElementById('rlm-next-q-btn');
if (rlmNextBtn) {
    rlmNextBtn.addEventListener('click', () => {
        const bank = rlmActiveBank.length ? rlmActiveBank : (typeof rlmQuestions !== 'undefined' ? rlmQuestions : []);
        if (rlmCurrentIndex < bank.length - 1) {
            rlmCurrentIndex++;
            loadRlmQuestion(rlmCurrentIndex);
        }
    });
}

const rlmPrevBtn = document.getElementById('rlm-prev-q-btn');
if (rlmPrevBtn) {
    rlmPrevBtn.addEventListener('click', () => {
        if (rlmCurrentIndex > 0) {
            rlmCurrentIndex--;
            loadRlmQuestion(rlmCurrentIndex);
        }
    });
}

const rlmFinishBtn = document.getElementById('rlm-finish-btn');
if (rlmFinishBtn) {
    rlmFinishBtn.addEventListener('click', () => {
        const bank = rlmActiveBank.length ? rlmActiveBank : (typeof rlmQuestions !== 'undefined' ? rlmQuestions : []);
        if (!bank.length) return;

        let score = 0;
        bank.forEach((q, i) => {
            if (rlmUserAnswers[i] === q.answer) score++;
        });

        clearInterval(rlmTimerInterval);
        if (rlmQuizArea) rlmQuizArea.classList.add('hidden');
        if (rlmResultArea) rlmResultArea.classList.remove('hidden');

        const scoreDisplay = document.getElementById('rlm-score-display');
        if (scoreDisplay) scoreDisplay.innerText = `${score} / ${bank.length}`;
    });
}

// Botão Sair do RLM
const rlmExitBtn = document.getElementById('rlm-exit-btn');
if (rlmExitBtn) {
    rlmExitBtn.addEventListener('click', () => {
        if (confirm("Deseja realmente sair do simulado? O seu progresso atual será reiniciado.")) {
            clearInterval(rlmTimerInterval);
            if (rlmQuizArea) rlmQuizArea.classList.add('hidden');
            if (rlmResultArea) rlmResultArea.classList.add('hidden');
            if (rlmIntro) rlmIntro.classList.remove('hidden');
        }
    });
}

const rlmRestartBtn = document.getElementById('rlm-restart-btn');
if (rlmRestartBtn) {
    rlmRestartBtn.addEventListener('click', () => {
        if (rlmResultArea) rlmResultArea.classList.add('hidden');
        if (rlmIntro) rlmIntro.classList.remove('hidden');
    });
}

// --- Cronômetro do Simulado RLM ---
function startRlmTimer() {
    clearInterval(rlmTimerInterval);
    rlmTotalSeconds = 3 * 60 * 60;
    const timerDisplay = document.getElementById('rlm-timer');

    if (!timerDisplay) return;

    rlmTimerInterval = setInterval(() => {
        if (rlmTotalSeconds <= 0) {
            clearInterval(rlmTimerInterval);
            alert("O tempo do simulado esgotou!");
            const finishBtn = document.getElementById('rlm-finish-btn');
            if (finishBtn) finishBtn.click();
            return;
        }

        rlmTotalSeconds--;
        const hours = Math.floor(rlmTotalSeconds / 3600);
        const minutes = Math.floor((rlmTotalSeconds % 3600) / 60);
        const seconds = rlmTotalSeconds % 60; // corrigido para segundos

        timerDisplay.innerHTML = `<i class="fa-solid fa-clock"></i> ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
}

// ==========================================
// MOTOR DO SIMULADO DE INFORMÁTICA (100Q)
// ==========================================

let infoCurrentIndex = 0;
let infoUserAnswers = [];
let infoTimerInterval;
let infoTotalSeconds = 4 * 60 * 60; // 4 horas
let infoActiveBank = []; // Banco ativo com as questões embaralhadas da sessão

const startInfoBtn = document.getElementById('start-info-btn');

// Iniciar Simulado de Informática
if (startInfoBtn) {
    startInfoBtn.addEventListener('click', () => {
        if (typeof infoQuestions === 'undefined' || !infoQuestions.length) {
            alert("O banco de questões de Informática não foi encontrado. Verifique se o arquivo info-100q.js está carregado.");
            return;
        }

        // Embaralha as questões de forma aleatória toda vez que inicia
        infoActiveBank = shuffleArray(infoQuestions);

        const infoIntro = document.getElementById('info-intro');
        const infoQuizArea = document.getElementById('info-quiz-area');
        const infoResultArea = document.getElementById('info-result-area');

        if (infoIntro) infoIntro.classList.add('hidden');
        if (infoResultArea) infoResultArea.classList.add('hidden');
        if (infoQuizArea) infoQuizArea.classList.remove('hidden');

        infoCurrentIndex = 0;
        infoUserAnswers = new Array(infoActiveBank.length).fill(null);

        loadInfoQuestion(infoCurrentIndex);
        if (typeof buildInfoGrid === 'function') buildInfoGrid();
        if (typeof startInfoTimer === 'function') startInfoTimer();
    });
}

// Carregar Questão
function loadInfoQuestion(index) {
    const bank = infoActiveBank.length ? infoActiveBank : (typeof infoQuestions !== 'undefined' ? infoQuestions : []);
    if (!bank[index]) return;

    const q = bank[index];
    const infoQNumber = document.getElementById('info-q-number');
    const infoQText = document.getElementById('info-q-text');
    const infoOptionsContainer = document.getElementById('info-options-container');
    const infoPrevBtn = document.getElementById('info-prev-q-btn');
    const infoNextBtn = document.getElementById('info-next-q-btn');

    if (infoQNumber) infoQNumber.textContent = `Questão ${index + 1} de ${bank.length}`;
    if (infoQText) infoQText.textContent = q.question || q.text;

    const userAnswer = infoUserAnswers[index];

    if (infoOptionsContainer) {
        infoOptionsContainer.innerHTML = '';
        const letters = ['A', 'B', 'C', 'D', 'E'];
        const correctIndex = q.correct ?? q.answer;

        q.options.forEach((opt, i) => {
            const btn = document.createElement('button');
            btn.classList.add('option-btn');

            // Se o usuário já respondeu esta questão
            if (userAnswer !== null) {
                if (i === correctIndex) {
                    btn.classList.add('correta'); // destaca a certa
                }
                if (i === userAnswer && userAnswer !== correctIndex) {
                    btn.classList.add('errada'); // destaca a errada escolhida
                }
            }

            btn.innerHTML = `<strong>${letters[i]})</strong> ${opt}`;
            btn.addEventListener('click', () => selectInfoOption(i));
            infoOptionsContainer.appendChild(btn);
        });
    }

    // Exibe ou oculta a caixinha de feedback/explicação
    renderInfoFeedback(q, userAnswer);

    if (infoPrevBtn) infoPrevBtn.disabled = index === 0;
    if (infoNextBtn) infoNextBtn.textContent = index === bank.length - 1 ? "Rever Prova" : "Próxima ➔";
}

// Selecionar Alternativa com Feedback Instantâneo
function selectInfoOption(optionIndex) {
    infoUserAnswers[infoCurrentIndex] = optionIndex;
    loadInfoQuestion(infoCurrentIndex);
    if (typeof updateInfoGridItem === 'function') updateInfoGridItem(infoCurrentIndex);
}

// Renderizar Caixinha de Feedback e Lembrete/Explicação
function renderInfoFeedback(q, userAnswer) {
    const feedbackBox = document.getElementById('info-feedback-box');
    const feedbackStatus = document.getElementById('info-feedback-status');
    const feedbackText = document.getElementById('info-feedback-text');

    if (!feedbackBox) return;

    if (userAnswer === null) {
        feedbackBox.classList.add('hidden');
        return;
    }

    feedbackBox.classList.remove('hidden');

    const correctIndex = q.correct ?? q.answer;

    if (userAnswer === correctIndex) {
        feedbackBox.className = 'feedback-box correto';
        if (feedbackStatus) {
            feedbackStatus.innerHTML = '<i class="fa-solid fa-circle-check"></i> Resposta Correta!';
        }
    } else {
        feedbackBox.className = 'feedback-box incorreto';
        const correctLetter = String.fromCharCode(65 + correctIndex);
        if (feedbackStatus) {
            feedbackStatus.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> Resposta Incorreta. A alternativa certa é a <strong>${correctLetter}</strong>.`;
        }
    }

    if (feedbackText) {
        feedbackText.innerText = q.explanation || q.explicacao || "Sem explicação cadastrada para esta questão.";
    }
}

// Navegação
const infoNextBtn = document.getElementById('info-next-q-btn');
if (infoNextBtn) {
    infoNextBtn.addEventListener('click', () => {
        const bank = infoActiveBank.length ? infoActiveBank : (typeof infoQuestions !== 'undefined' ? infoQuestions : []);
        if (!bank.length) return;

        if (infoCurrentIndex < bank.length - 1) {
            infoCurrentIndex++;
            loadInfoQuestion(infoCurrentIndex);
        } else {
            if (confirm("Deseja finalizar e ver o resultado da prova?")) {
                if (typeof finishInfoExam === 'function') finishInfoExam();
            }
        }
    });
}

const infoPrevBtn = document.getElementById('info-prev-q-btn');
if (infoPrevBtn) {
    infoPrevBtn.addEventListener('click', () => {
        if (infoCurrentIndex > 0) {
            infoCurrentIndex--;
            loadInfoQuestion(infoCurrentIndex);
        }
    });
}

// Construir Gabarito Lateral (1 ao total)
function buildInfoGrid() {
    const bank = infoActiveBank.length ? infoActiveBank : (typeof infoQuestions !== 'undefined' ? infoQuestions : []);
    const infoQuestionGrid = document.getElementById('info-question-grid');
    if (!infoQuestionGrid || !bank.length) return;

    infoQuestionGrid.innerHTML = '';
    for (let i = 0; i < bank.length; i++) {
        const box = document.createElement('button');
        box.classList.add('q-dot');
        box.textContent = i + 1;
        box.id = `info-grid-${i}`;
        if (infoUserAnswers[i] !== null) {
            box.classList.add('answered');
        }
        box.addEventListener('click', () => {
            infoCurrentIndex = i;
            loadInfoQuestion(infoCurrentIndex);
        });
        infoQuestionGrid.appendChild(box);
    }
}

function updateInfoGridItem(index) {
    const box = document.getElementById(`info-grid-${index}`);
    if (box) {
        if (infoUserAnswers[index] !== null) {
            box.classList.add('answered');
        } else {
            box.classList.remove('answered');
        }
    }
}

// Cronômetro de Informática
function startInfoTimer() {
    clearInterval(infoTimerInterval);
    infoTotalSeconds = 4 * 60 * 60;
    const timerDisplay = document.getElementById('info-timer');

    if (!timerDisplay) return;

    infoTimerInterval = setInterval(() => {
        if (infoTotalSeconds <= 0) {
            clearInterval(infoTimerInterval);
            alert("O tempo do simulado de informática esgotou!");
            finishInfoExam();
            return;
        }

        infoTotalSeconds--;
        const hours = Math.floor(infoTotalSeconds / 3600);
        const minutes = Math.floor((infoTotalSeconds % 3600) / 60);
        const seconds = infoTotalSeconds % 60;

        timerDisplay.innerHTML = `<i class="fa-solid fa-clock"></i> ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
}

// Finalizar Prova
const infoFinishBtn = document.getElementById('info-finish-btn');
if (infoFinishBtn) {
    infoFinishBtn.addEventListener('click', () => {
        if (confirm("Tem certeza de que deseja finalizar o simulado de informática?")) {
            finishInfoExam();
        }
    });
}

function finishInfoExam() {
    clearInterval(infoTimerInterval);
    const infoQuizArea = document.getElementById('info-quiz-area');
    const infoResultArea = document.getElementById('info-result-area');

    if (infoQuizArea) infoQuizArea.classList.add('hidden');
    if (infoResultArea) infoResultArea.classList.remove('hidden');

    const bank = infoActiveBank.length ? infoActiveBank : (typeof infoQuestions !== 'undefined' ? infoQuestions : []);
    let score = 0;

    if (bank.length) {
        bank.forEach((q, i) => {
            const correctAns = q.correct ?? q.answer;
            if (infoUserAnswers[i] === correctAns) {
                score++;
            }
        });
    }

    const scoreDisplay = document.getElementById('info-score-display');
    if (scoreDisplay && bank.length) {
        scoreDisplay.textContent = `${score} / ${bank.length}`;
    }
}

// Botão Sair
const infoExitBtn = document.getElementById('info-exit-btn');
if (infoExitBtn) {
    infoExitBtn.addEventListener('click', () => {
        if (confirm("Deseja realmente sair do simulado? O seu progresso atual será reiniciado.")) {
            clearInterval(infoTimerInterval);
            const infoQuizArea = document.getElementById('info-quiz-area');
            const infoResultArea = document.getElementById('info-result-area');
            const infoIntro = document.getElementById('info-intro');

            if (infoQuizArea) infoQuizArea.classList.add('hidden');
            if (infoResultArea) infoResultArea.classList.add('hidden');
            if (infoIntro) infoIntro.classList.remove('hidden');
        }
    });
}

// Tentar Novamente
const infoRestartBtn = document.getElementById('info-restart-btn');
if (infoRestartBtn) {
    infoRestartBtn.addEventListener('click', () => {
        const infoResultArea = document.getElementById('info-result-area');
        const infoIntro = document.getElementById('info-intro');
        if (infoResultArea) infoResultArea.classList.add('hidden');
        if (infoIntro) infoIntro.classList.remove('hidden');
    });
}

// ==========================================
// MOTOR DO SIMULADO DE CTB (50Q)
// ==========================================

let ctbCurrentIndex = 0;
let ctbUserAnswers = [];
let ctbTimerInterval;
let ctbTotalSeconds = 2 * 60 * 60; // 2 horas
let ctbActiveBank = []; // Banco ativo com as questões embaralhadas da sessão

const startCtbBtn = document.getElementById('start-ctb-btn');

if (startCtbBtn) {
    startCtbBtn.addEventListener('click', () => {
        const ctbBank = (typeof simuladoCTB !== 'undefined' && simuladoCTB.length)
            ? simuladoCTB
            : ((typeof ctbQuestions !== 'undefined' && ctbQuestions.length) ? ctbQuestions : null);

        if (!ctbBank) {
            alert("O banco de questões do CTB não foi encontrado.");
            return;
        }

        // Embaralha as questões de forma aleatória toda vez que inicia
        ctbActiveBank = shuffleArray(ctbBank);

        const ctbIntro = document.getElementById('ctb-intro');
        const ctbQuizArea = document.getElementById('ctb-quiz-area');
        const ctbResultArea = document.getElementById('ctb-result-area');

        if (ctbIntro) ctbIntro.classList.add('hidden');
        if (ctbResultArea) ctbResultArea.classList.add('hidden');
        if (ctbQuizArea) ctbQuizArea.classList.remove('hidden');

        ctbCurrentIndex = 0;
        ctbUserAnswers = new Array(ctbActiveBank.length).fill(null);

        loadCtbQuestion(ctbCurrentIndex);
        buildCtbGrid();
        startCtbTimer();
    });
}

function loadCtbQuestion(index) {
    const ctbBank = ctbActiveBank.length ? ctbActiveBank : ((typeof simuladoCTB !== 'undefined') ? simuladoCTB : ctbQuestions);
    if (!ctbBank || !ctbBank[index]) return;

    const q = ctbBank[index];
    const ctbQNumber = document.getElementById('ctb-q-number');
    const ctbQText = document.getElementById('ctb-q-text');
    const ctbOptionsContainer = document.getElementById('ctb-options-container');
    const ctbPrevBtn = document.getElementById('ctb-prev-q-btn');
    const ctbNextBtn = document.getElementById('ctb-next-q-btn');

    if (ctbQNumber) ctbQNumber.textContent = `Questão ${index + 1} de ${ctbBank.length}`;
    if (ctbQText) ctbQText.textContent = q.pergunta || q.question || q.text;

    const userAnswer = ctbUserAnswers[index];

    if (ctbOptionsContainer) {
        ctbOptionsContainer.innerHTML = '';
        const opts = q.opcoes || q.options || [];
        const correctIndex = (q.correta !== undefined) ? q.correta : q.answer;

        opts.forEach((opt, i) => {
            const btn = document.createElement('button');
            btn.classList.add('option-btn');

            if (userAnswer !== null) {
                if (i === correctIndex) {
                    btn.classList.add('correta');
                }
                if (i === userAnswer && userAnswer !== correctIndex) {
                    btn.classList.add('errada');
                }
            }

            btn.innerHTML = opt;
            btn.addEventListener('click', () => selectCtbOption(i));
            ctbOptionsContainer.appendChild(btn);
        });
    }

    renderCtbFeedback(q, userAnswer);

    if (ctbPrevBtn) ctbPrevBtn.disabled = index === 0;
    if (ctbNextBtn) ctbNextBtn.textContent = index === ctbBank.length - 1 ? "Rever Prova" : "Próxima ➔";
}

function selectCtbOption(optionIndex) {
    ctbUserAnswers[ctbCurrentIndex] = optionIndex;
    loadCtbQuestion(ctbCurrentIndex);
    updateCtbGridItem(ctbCurrentIndex);
}

function renderCtbFeedback(q, userAnswer) {
    const feedbackBox = document.getElementById('ctb-feedback-box');
    const feedbackStatus = document.getElementById('ctb-feedback-status');
    const feedbackText = document.getElementById('ctb-feedback-text');

    if (!feedbackBox) return;

    if (userAnswer === null) {
        feedbackBox.classList.add('hidden');
        return;
    }

    feedbackBox.classList.remove('hidden');

    const correctIndex = (q.correta !== undefined) ? q.correta : q.answer;

    if (userAnswer === correctIndex) {
        feedbackBox.className = 'feedback-box correto';
        if (feedbackStatus) {
            feedbackStatus.innerHTML = '<i class="fa-solid fa-circle-check"></i> Resposta Correta!';
        }
    } else {
        feedbackBox.className = 'feedback-box incorreto';
        const correctLetter = String.fromCharCode(65 + correctIndex);
        if (feedbackStatus) {
            feedbackStatus.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> Resposta Incorreta. A alternativa certa é a <strong>${correctLetter}</strong>.`;
        }
    }

    if (feedbackText) {
        feedbackText.innerText = q.explanation || q.explicacao || "Sem explicação cadastrada para esta questão.";
    }
}

const ctbNextBtn = document.getElementById('ctb-next-q-btn');
if (ctbNextBtn) {
    ctbNextBtn.addEventListener('click', () => {
        const ctbBank = ctbActiveBank.length ? ctbActiveBank : ((typeof simuladoCTB !== 'undefined') ? simuladoCTB : ctbQuestions);
        if (!ctbBank) return;

        if (ctbCurrentIndex < ctbBank.length - 1) {
            ctbCurrentIndex++;
            loadCtbQuestion(ctbCurrentIndex);
        } else {
            if (confirm("Deseja finalizar e ver o resultado da prova?")) {
                finishCtbExam();
            }
        }
    });
}

const ctbPrevBtn = document.getElementById('ctb-prev-q-btn');
if (ctbPrevBtn) {
    ctbPrevBtn.addEventListener('click', () => {
        if (ctbCurrentIndex > 0) {
            ctbCurrentIndex--;
            loadCtbQuestion(ctbCurrentIndex);
        }
    });
}

function buildCtbGrid() {
    const ctbBank = ctbActiveBank.length ? ctbActiveBank : ((typeof simuladoCTB !== 'undefined') ? simuladoCTB : ctbQuestions);
    const ctbQuestionGrid = document.getElementById('ctb-question-grid');
    if (!ctbQuestionGrid || !ctbBank) return;

    ctbQuestionGrid.innerHTML = '';
    for (let i = 0; i < ctbBank.length; i++) {
        const box = document.createElement('button');
        box.classList.add('q-dot');
        box.textContent = i + 1;
        box.id = `ctb-grid-${i}`;
        if (ctbUserAnswers[i] !== null) {
            box.classList.add('answered');
        }
        box.addEventListener('click', () => {
            ctbCurrentIndex = i;
            loadCtbQuestion(ctbCurrentIndex);
        });
        ctbQuestionGrid.appendChild(box);
    }
}

function updateCtbGridItem(index) {
    const box = document.getElementById(`ctb-grid-${index}`);
    if (box) {
        if (ctbUserAnswers[index] !== null) {
            box.classList.add('answered');
        } else {
            box.classList.remove('answered');
        }
    }
}

function startCtbTimer() {
    clearInterval(ctbTimerInterval);
    ctbTotalSeconds = 2 * 60 * 60;
    const timerDisplay = document.getElementById('ctb-timer');

    if (!timerDisplay) return;

    ctbTimerInterval = setInterval(() => {
        if (ctbTotalSeconds <= 0) {
            clearInterval(ctbTimerInterval);
            alert("O tempo do simulado de CTB esgotou!");
            finishCtbExam();
            return;
        }

        ctbTotalSeconds--;
        const hours = Math.floor(ctbTotalSeconds / 3600);
        const minutes = Math.floor((ctbTotalSeconds % 3600) / 60);
        const seconds = ctbTotalSeconds % 60;

        timerDisplay.innerHTML = `<i class="fa-solid fa-clock"></i> ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
}

const ctbFinishBtn = document.getElementById('ctb-finish-btn');
if (ctbFinishBtn) {
    ctbFinishBtn.addEventListener('click', () => {
        if (confirm("Tem certeza de que deseja finalizar o simulado de CTB?")) {
            finishCtbExam();
        }
    });
}

function finishCtbExam() {
    clearInterval(ctbTimerInterval);
    const ctbQuizArea = document.getElementById('ctb-quiz-area');
    const ctbResultArea = document.getElementById('ctb-result-area');

    if (ctbQuizArea) ctbQuizArea.classList.add('hidden');
    if (ctbResultArea) ctbResultArea.classList.remove('hidden');

    const ctbBank = ctbActiveBank.length ? ctbActiveBank : ((typeof simuladoCTB !== 'undefined') ? simuladoCTB : ctbQuestions);
    let score = 0;

    if (ctbBank) {
        ctbBank.forEach((q, i) => {
            const correctAns = (q.correta !== undefined) ? q.correta : q.answer;
            if (ctbUserAnswers[i] === correctAns) {
                score++;
            }
        });
    }

    const scoreDisplay = document.getElementById('ctb-score-display');
    if (scoreDisplay && ctbBank) {
        scoreDisplay.textContent = `${score} / ${ctbBank.length}`;
    }
}

const ctbExitBtn = document.getElementById('ctb-exit-btn');
if (ctbExitBtn) {
    ctbExitBtn.addEventListener('click', () => {
        if (confirm("Deseja realmente sair do simulado? O seu progresso atual será reiniciado.")) {
            clearInterval(ctbTimerInterval);
            const ctbQuizArea = document.getElementById('ctb-quiz-area');
            const ctbResultArea = document.getElementById('ctb-result-area');
            const ctbIntro = document.getElementById('ctb-intro');

            if (ctbQuizArea) ctbQuizArea.classList.add('hidden');
            if (ctbResultArea) ctbResultArea.classList.add('hidden');
            if (ctbIntro) ctbIntro.classList.remove('hidden');
        }
    });
}

const ctbRestartBtn = document.getElementById('ctb-restart-btn');
if (ctbRestartBtn) {
    ctbRestartBtn.addEventListener('click', () => {
        const ctbResultArea = document.getElementById('ctb-result-area');
        const ctbIntro = document.getElementById('ctb-intro');
        if (ctbResultArea) ctbResultArea.classList.add('hidden');
        if (ctbIntro) ctbIntro.classList.remove('hidden');
    });
}

// ==========================================
// MOTOR DO SIMULADO LEI 1416 (Estatuto de São Gonçalo)
// ==========================================

let lei1416CurrentIndex = 0;
let lei1416UserAnswers = [];
let lei1416TimerInterval;
let lei1416TotalSeconds = 2 * 60 * 60; // 2 horas
let lei1416ActiveBank = []; // Banco ativo com as questões embaralhadas da sessão

const startLei1416Btn = document.getElementById('start-lei1416-btn');

if (startLei1416Btn) {
    startLei1416Btn.addEventListener('click', () => {
        // Obtém o banco base original
        const baseBank = (typeof lei1416Quiz !== 'undefined') ? lei1416Quiz : ((typeof simuladoLei1416 !== 'undefined') ? simuladoLei1416 : []);

        if (!baseBank.length) {
            alert("O banco de questões da Lei 1416 não foi encontrado. Verifique se o arquivo lei1416-50q.js está carregado.");
            return;
        }

        // Embaralha as questões de forma aleatória toda vez que clica em iniciar
        lei1416ActiveBank = shuffleArray(baseBank);

        const lei1416Intro = document.getElementById('lei1416-intro');
        const lei1416QuizArea = document.getElementById('lei1416-quiz-area');
        const lei1416ResultArea = document.getElementById('lei1416-result-area');

        if (lei1416Intro) lei1416Intro.classList.add('hidden');
        if (lei1416ResultArea) lei1416ResultArea.classList.add('hidden');
        if (lei1416QuizArea) lei1416QuizArea.classList.remove('hidden');

        lei1416CurrentIndex = 0;
        lei1416UserAnswers = new Array(lei1416ActiveBank.length).fill(null);

        loadLei1416Question(lei1416CurrentIndex);
        if (typeof buildLei1416Grid === 'function') buildLei1416Grid();
        if (typeof startLei1416Timer === 'function') startLei1416Timer();
    });
}

function loadLei1416Question(index) {
    const lei1416Bank = lei1416ActiveBank;
    const q = lei1416Bank[index];
    if (!q) return;

    const qNumber = document.getElementById('lei1416-q-number');
    const qText = document.getElementById('lei1416-q-text');
    const optionsContainer = document.getElementById('lei1416-options-container');
    const prevBtn = document.getElementById('lei1416-prev-q-btn');
    const nextBtn = document.getElementById('lei1416-next-q-btn');

    if (qNumber) qNumber.textContent = `Questão ${index + 1} de ${lei1416Bank.length}`;
    if (qText) qText.textContent = q.pergunta || q.text;

    const userAnswer = lei1416UserAnswers[index];
    const correctIndex = q.resposta !== undefined ? q.resposta : q.correta;

    if (optionsContainer) {
        optionsContainer.innerHTML = '';
        const letters = ['A', 'B', 'C', 'D', 'E'];
        const opcoesArr = q.opcoes || q.options;

        if (opcoesArr) {
            opcoesArr.forEach((opt, i) => {
                const btn = document.createElement('button');
                btn.classList.add('option-btn');

                if (userAnswer !== null) {
                    if (i === correctIndex) {
                        btn.classList.add('correta');
                    }
                    if (i === userAnswer && userAnswer !== correctIndex) {
                        btn.classList.add('errada');
                    }
                }

                // Aplica exatamente o mesmo padrão visual do RLM com as letras em negrito e largura total
                btn.innerHTML = `<strong>${letters[i]})</strong> ${opt}`;
                btn.addEventListener('click', () => selectLei1416Option(i));
                optionsContainer.appendChild(btn);
            });
        }
    }

    renderLei1416Feedback(q, userAnswer);

    if (prevBtn) prevBtn.disabled = index === 0;
    if (nextBtn) nextBtn.textContent = index === lei1416Bank.length - 1 ? "Rever Prova" : "Próxima ➔";
}

function selectLei1416Option(optionIndex) {
    lei1416UserAnswers[lei1416CurrentIndex] = optionIndex;
    loadLei1416Question(lei1416CurrentIndex);
    if (typeof updateLei1416GridItem === 'function') updateLei1416GridItem(lei1416CurrentIndex);
}

function renderLei1416Feedback(q, userAnswer) {
    const feedbackBox = document.getElementById('lei1416-feedback-box');
    const feedbackStatus = document.getElementById('lei1416-feedback-status');
    const feedbackText = document.getElementById('lei1416-feedback-text');

    if (!feedbackBox) return;

    if (userAnswer === null) {
        feedbackBox.classList.add('hidden');
        return;
    }

    feedbackBox.classList.remove('hidden');
    const correctIndex = q.resposta !== undefined ? q.resposta : q.correta;

    if (userAnswer === correctIndex) {
        feedbackBox.className = 'feedback-box correto';
        if (feedbackStatus) {
            feedbackStatus.innerHTML = '<i class="fa-solid fa-circle-check"></i> Resposta Correta!';
        }
    } else {
        feedbackBox.className = 'feedback-box incorreto';
        const letters = ['A', 'B', 'C', 'D', 'E'];
        const correctLetter = letters[correctIndex] || (correctIndex + 1);
        if (feedbackStatus) {
            feedbackStatus.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> Resposta Incorreta. A alternativa certa é a <strong>${correctLetter}</strong>.`;
        }
    }

    if (feedbackText) {
        // Mapeia para a propriedade correta do teu objeto (exibicaoResposta)
        feedbackText.innerText = q.exibicaoResposta || q.explicacao || "Sem explicação cadastrada para esta questão.";
    }
}

const lei1416NextBtn = document.getElementById('lei1416-next-q-btn');
if (lei1416NextBtn) {
    lei1416NextBtn.addEventListener('click', () => {
        const lei1416Bank = (typeof lei1416Quiz !== 'undefined') ? lei1416Quiz : ((typeof simuladoLei1416 !== 'undefined') ? simuladoLei1416 : []);
        if (lei1416CurrentIndex < lei1416Bank.length - 1) {
            lei1416CurrentIndex++;
            loadLei1416Question(lei1416CurrentIndex);
        } else {
            if (confirm("Deseja finalizar e ver o resultado da prova?")) {
                if (typeof finishLei1416Exam === 'function') finishLei1416Exam();
            }
        }
    });
}

const lei1416PrevBtn = document.getElementById('lei1416-prev-q-btn');
if (lei1416PrevBtn) {
    lei1416PrevBtn.addEventListener('click', () => {
        if (lei1416CurrentIndex > 0) {
            lei1416CurrentIndex--;
            loadLei1416Question(lei1416CurrentIndex);
        }
    });
}

function buildLei1416Grid() {
    const lei1416Grid = document.getElementById('lei1416-question-grid');
    const lei1416Bank = (typeof lei1416Quiz !== 'undefined') ? lei1416Quiz : ((typeof simuladoLei1416 !== 'undefined') ? simuladoLei1416 : []);
    if (!lei1416Grid || !lei1416Bank.length) return;

    lei1416Grid.innerHTML = '';
    for (let i = 0; i < lei1416Bank.length; i++) {
        const box = document.createElement('button');
        box.classList.add('q-dot');
        box.textContent = i + 1;
        box.id = `lei1416-grid-${i}`;
        if (lei1416UserAnswers[i] !== null) {
            box.classList.add('answered');
        }
        box.addEventListener('click', () => {
            lei1416CurrentIndex = i;
            loadLei1416Question(lei1416CurrentIndex);
        });
        lei1416Grid.appendChild(box);
    }
}

function updateLei1416GridItem(index) {
    const box = document.getElementById(`lei1416-grid-${index}`);
    if (box) {
        if (lei1416UserAnswers[index] !== null) {
            box.classList.add('answered');
        } else {
            box.classList.remove('answered');
        }
    }
}

function startLei1416Timer() {
    clearInterval(lei1416TimerInterval);
    lei1416TotalSeconds = 2 * 60 * 60; // 2 horas
    const timerDisplay = document.getElementById('lei1416-timer');
    if (!timerDisplay) return;

    lei1416TimerInterval = setInterval(() => {
        if (lei1416TotalSeconds <= 0) {
            clearInterval(lei1416TimerInterval);
            alert("O tempo do simulado da Lei 1416 esgotou!");
            finishLei1416Exam();
            return;
        }

        lei1416TotalSeconds--;
        const hours = Math.floor(lei1416TotalSeconds / 3600);
        const minutes = Math.floor((lei1416TotalSeconds % 3600) / 60);
        const seconds = lei1416TotalSeconds % 60;

        timerDisplay.innerHTML = `<i class="fa-solid fa-clock"></i> ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
}

const lei1416FinishBtn = document.getElementById('lei1416-finish-btn');
if (lei1416FinishBtn) {
    lei1416FinishBtn.addEventListener('click', () => {
        if (confirm("Tem certeza de que deseja finalizar o simulado da Lei 1416?")) {
            finishLei1416Exam();
        }
    });
}

function finishLei1416Exam() {
    clearInterval(lei1416TimerInterval);
    const quizArea = document.getElementById('lei1416-quiz-area');
    const resultArea = document.getElementById('lei1416-result-area');

    if (quizArea) quizArea.classList.add('hidden');
    if (resultArea) resultArea.classList.remove('hidden');

    const lei1416Bank = (typeof lei1416Quiz !== 'undefined') ? lei1416Quiz : ((typeof simuladoLei1416 !== 'undefined') ? simuladoLei1416 : []);
    let score = 0;

    lei1416Bank.forEach((q, i) => {
        const correctIndex = q.resposta !== undefined ? q.resposta : q.correta;
        if (lei1416UserAnswers[i] === correctIndex) {
            score++;
        }
    });

    const scoreDisplay = document.getElementById('lei1416-score-display');
    if (scoreDisplay) {
        scoreDisplay.textContent = `${score} / ${lei1416Bank.length}`;
    }
}

const lei1416ExitBtn = document.getElementById('lei1416-exit-btn');
if (lei1416ExitBtn) {
    lei1416ExitBtn.addEventListener('click', () => {
        if (confirm("Deseja realmente sair do simulado? O seu progresso atual será reiniciado.")) {
            clearInterval(lei1416TimerInterval);
            document.getElementById('lei1416-quiz-area')?.classList.add('hidden');
            document.getElementById('lei1416-result-area')?.classList.add('hidden');
            document.getElementById('lei1416-intro')?.classList.remove('hidden');
        }
    });
}

const lei1416RestartBtn = document.getElementById('lei1416-restart-btn');
if (lei1416RestartBtn) {
    lei1416RestartBtn.addEventListener('click', () => {
        document.getElementById('lei1416-result-area')?.classList.add('hidden');
        document.getElementById('lei1416-intro')?.classList.remove('hidden');
    });
}