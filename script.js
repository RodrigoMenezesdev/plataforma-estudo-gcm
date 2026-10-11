// BANCO COM AS 50 QUESTÕES COMPLETAS (PADRÃO COSEAC / GUARDA DE MARICÁ)
const questoesSimulado = [
    // 1 a 10: PORTUGUÊS
    {
        subject: "Língua Portuguesa",
        text: "Assinale a alternativa em que o processo de formação de palavra está INCORRETAMENTE classificado:",
        options: ["A) Infelizmente — derivação sufixal.", "B) Desleal — derivação prefixal.", "C) Pontapé — composição por aglutinação.", "D) Guarda-chuva — composição por justaposição."],
        answer: 2
    },
    {
        subject: "Língua Portuguesa",
        text: "Na frase 'O agente entregou o relatório AO SUPERIOR', o termo destacado exerce a função sintática de:",
        options: ["A) Objeto direto.", "B) Objeto indireto.", "C) Adjunto adnominal.", "D) Complemento nominal."],
        answer: 1
    },
    {
        subject: "Língua Portuguesa",
        text: "Assinale a opção em que a concordância verbal respeita estritamente a norma-padrão:",
        options: ["A) Faltou detalhes na elaboração do relatório.", "B) Devem haver muitos inscritos no concurso.", "C) Fazem três anos que a lei foi criada.", "D) Havia muitos candidatos no local da prova."],
        answer: 3
    },
    {
        subject: "Língua Portuguesa",
        text: "No trecho 'O agente agiu CONFORME determinava o regulamento', a palavra destacada introduz oração subordinada de:",
        options: ["A) Causa.", "B) Condição.", "C) Conformidade.", "D) Concessão."],
        answer: 2
    },
    {
        subject: "Língua Portuguesa",
        text: "Considere a frase: 'A segurança pública — dever do Estado — é direito de todos.' O uso dos travessões serve para:",
        options: ["A) Indicar a fala de um personagem.", "B) Isolar um trecho explicativo.", "C) Substituir aspas em citação.", "D) Separar orações condicionais."],
        answer: 1
    },
    {
        subject: "Língua Portuguesa",
        text: "Assinale a alternativa cujos vocábulos apresentam, respectivamente, DÍGRAFO e ENCONTRO CONSONANTAL:",
        options: ["A) Chave / Bloco", "B) Carro / Seta", "C) Passagem / Ritmo", "D) Guerra / Subsolo"],
        answer: 0
    },
    {
        subject: "Língua Portuguesa",
        text: "A regência do verbo 'aspirar' no sentido de 'desejar' está correta em:",
        options: ["A) O candidato aspirava o cargo.", "B) O guarda aspirava ao cargo de inspetor.", "C) Todos aspiravam o ar puro.", "D) A guarnição aspirava a aprovação."],
        answer: 1
    },
    {
        subject: "Língua Portuguesa",
        text: "Assinale a opção onde todas as palavras são acentuadas pela mesma regra das Oxítonas:",
        options: ["A) Café, vatapá, cipó.", "B) Pássaro, árvore, fácil.", "C) Baú, país, saída.", "D) Álbum, tórax, lápis."],
        answer: 0
    },
    {
        subject: "Língua Portuguesa",
        text: "Indique a figura de linguagem presente em: 'Aquele guarda é um leão na proteção do município.'",
        options: ["A) Metáfora.", "B) Metonímia.", "C) Hipérbole.", "D) Prosopopeia."],
        answer: 0
    },
    {
        subject: "Língua Portuguesa",
        text: "Qual das frases abaixo apresenta emprego adequado da crase?",
        options: ["A) Chegamos à Maricá pela manhã.", "B) Dirigiu-se à ela com respeito.", "C) O agente entregou a chave à motorista.", "D) Ele passou à caminhar devagar."],
        answer: 2
    },

    // 11 a 15: RACIOCÍNIO LÓGICO
    {
        subject: "Raciocínio Lógico",
        text: "Usando as letras A, B, C, D, E, F, G, a quantidade de siglas com 4 letras distintas iniciadas por vogal (A, E) é:",
        options: ["A) 240", "B) 120", "C) 480", "D) 360"],
        answer: 0
    },
    {
        subject: "Raciocínio Lógico",
        text: "Em uma sequência lógica: 3, 6, 12, 24, 48, ... Qual é o próximo termo?",
        options: ["A) 72", "B) 96", "C) 100", "D) 120"],
        answer: 1
    },
    {
        subject: "Raciocínio Lógico",
        text: "Se todo guarda é corajoso e alguns guardas são motoristas, conclui-se que:",
        options: ["A) Todo motorista é corajoso.", "B) Alguns motoristas são corajosos.", "C) Nenhum motorista é corajoso.", "D) Quem não é corajoso é motorista."],
        answer: 1
    },
    {
        subject: "Raciocínio Lógico",
        text: "A negação lógica de 'Todo Guarda Municipal utiliza farda' é:",
        options: ["A) Nenhum Guarda Municipal utiliza farda.", "B) Algum Guarda Municipal não utiliza farda.", "C) Todo Guarda não utiliza farda.", "D) Ninguém utiliza farda."],
        answer: 1
    },
    {
        subject: "Raciocínio Lógico",
        text: "Numa operação, 4 guardas vistoriam 4 viaturas em 4 horas. Quantos guardas vistoriam 8 viaturas em 2 horas?",
        options: ["A) 4 guardas", "B) 8 guardas", "C) 12 guardas", "D) 16 guardas"],
        answer: 3
    },

    // 16 a 20: INFORMÁTICA
    {
        subject: "Noções de Informática",
        text: "No Windows 7, qual caractere É PROIBIDO para nomear arquivos ou pastas?",
        options: ["A) Hífen (-)", "B) Sublinhado (_)", "C) Asterisco (*)", "D) Ponto (.)"],
        answer: 2
    },
    {
        subject: "Noções de Informática",
        text: "No Microsoft Excel, a fórmula para somar o intervalo de células de A1 até A10 é:",
        options: ["A) =SOMA(A1:A10)", "B) =SOMAR(A1;A10)", "C) =TOTAL(A1..A10)", "D) =SOMA(A1+A10)"],
        answer: 0
    },
    {
        subject: "Noções de Informática",
        text: "Qual protocolo é utilizado primariamente para envio de mensagens de e-mail na internet?",
        options: ["A) HTTP", "B) FTP", "C) SMTP", "D) DNS"],
        answer: 2
    },
    {
        subject: "Noções de Informática",
        text: "Qual componente do computador é encarregado de processar e executar as instruções dos programas?",
        options: ["A) Memória RAM", "B) Processador (CPU)", "C) Disco Rígido (HD)", "D) Placa Mãe"],
        answer: 1
    },
    {
        subject: "Noções de Informática",
        text: "A extensão de arquivo associada a arquivos compactados padrão é:",
        options: ["A) .pdf", "B) .docx", "C) .zip", "D) .exe"],
        answer: 2
    },

    // 21 a 50: CONHECIMENTOS ESPECÍFICOS
    {
        subject: "Conhecimentos Específicos",
        text: "Segundo a Lei Federal nº 13.022/2014 (Estatuto das Guardas), é princípio mínimo de atuação:",
        options: ["A) O patrulhamento ostensivo repressivo.", "B) O uso progressivo da força.", "C) A subordinação às Forças Armadas.", "D) A competência para investigação judiciária."],
        answer: 1
    },
    {
        subject: "Conhecimentos Específicos",
        text: "Conforme o Art. 144, § 8º da Constituição Federal de 1988, as Guardas Municipais destinam-se a:",
        options: ["A) Proteção de bens, serviços e instalações do Município.", "B) Policiamento ostensivo e preservação da ordem pública estadual.", "C) Investigação de crimes afins.", "D) Patrulhamento das rodovias federais."],
        answer: 0
    },
    {
        subject: "Conhecimentos Específicos",
        text: "No Direito Administrativo, o princípio que exige atuação sem favorecimentos pessoais é:",
        options: ["A) Legalidade", "B) Impessoalidade", "C) Moralidade", "D) Publicidade"],
        answer: 1
    },
    {
        subject: "Conhecimentos Específicos",
        text: "O controle interno e externo das Guardas Municipais é exercido, respectivamente, por:",
        options: ["A) Corregedoria e Ouvidoria.", "B) Polícia Civil e Polícia Militar.", "C) Ministério Público e Tribunal de Justiça.", "D) Câmara Municipal e Prefeito."],
        answer: 0
    },
    {
        subject: "Conhecimentos Específicos",
        text: "Pela Lei nº 13.022/2014, a Guarda Municipal é uma instituição de caráter predominantemente:",
        options: ["A) Militar e ostensivo.", "B) Civil, uniformizada e armada.", "C) Auxiliar e reservista do Exército.", "D) Privado sob concessão pública."],
        answer: 1
    },
    {
        subject: "Conhecimentos Específicos",
        text: "Nos termos do Código Penal, o crime de Ameaça (Art. 147) é de ação penal:",
        options: ["A) Pública incondicionada.", "B) Pública condicionada à representação.", "C) Privada exclusivamente.", "D) Pública condicionada à requisição do Prefeito."],
        answer: 1
    },
    {
        subject: "Conhecimentos Específicos",
        text: "No Código de Trânsito Brasileiro (CTB), deixar de prestar socorro à vítima de acidente quando possível fazê-lo é:",
        options: ["A) Apenas infração administrativa leve.", "B) Crime de trânsito e infração gravíssima.", "C) Infração média sem penalidade de suspensão.", "D) Atentado contra a segurança nacional."],
        answer: 1
    },
    {
        subject: "Conhecimentos Específicos",
        text: "O Estatuto da Criança e do Adolescente (ECA - Lei 8.069/90) considera adolescente a pessoa entre:",
        options: ["A) 10 e 16 anos.", "B) 12 e 18 anos incompletos.", "C) 14 e 18 anos completos.", "D) 12 e 21 anos."],
        answer: 1
    },
    {
        subject: "Conhecimentos Específicos",
        text: "Na Lei de Crimes Ambientais (Lei nº 9.605/1998), ao constatar infração ambiental, os produtos e instrumentos são:",
        options: ["A) Vendidos imediatamente em leilão.", "B) Apreendidos lavrando-se o respectivo auto.", "C) Incinerados sem perícia.", "D) Devolvidos ao infrator sob fiança."],
        answer: 1
    },
    {
        subject: "Conhecimentos Específicos",
        text: "Segundo a Declaração Universal dos Direitos Humanos, todo ser humano tem direito à vida, à liberdade e à:",
        options: ["A) Propriedade privada ilimitada.", "B) Segurança pessoal.", "C) Isenção tributária.", "D) Nacionalidade dupla."],
        answer: 1
    },
    {
        subject: "Conhecimentos Específicos",
        text: "Qual garantia constitucional (remédio) protege a liberdade de locomoção contra ilegalidade ou abuso de poder?",
        options: ["A) Mandado de Segurança", "B) Habeas Data", "C) Habeas Corpus", "D) Ação Popular"],
        answer: 2
    },
    {
        subject: "Conhecimentos Específicos",
        text: "É correto afirmar sobre a suspensão de direitos políticos no Brasil que:",
        options: ["A) Ocorre no caso de condenação criminal transitada em julgado enquanto durarem seus efeitos.", "B) É permitida a cassação de direitos políticos a qualquer tempo.", "C) Ocorre mediante decisão administrativa do Prefeito.", "D) Não é aplicável aos servidores públicos."],
        answer: 0
    },
    {
        subject: "Conhecimentos Específicos",
        text: "A prerrogativa da Administração Pública de rever seus próprios atos quando eivados de vício decorre da:",
        options: ["A) Autotutela.", "B) Indisponibilidade.", "C) Continuidade dos serviços.", "D) Ampla defesa."],
        answer: 0
    },
    {
        subject: "Conhecimentos Específicos",
        text: "O ato administrativo que pode ser revogado por razões de conveniência e oportunidade é classificado como:",
        options: ["A) Vinculado.", "B) Discricionário.", "C) Nulo de pleno direito.", "D) Inexistente."],
        answer: 1
    },
    {
        subject: "Conhecimentos Específicos",
        text: "Qual das seguintes hipóteses admite a prisão em flagrante por qualquer do povo?",
        options: ["A) Quem está cometendo a infração penal.", "B) Quem é suspeito sem provas concretas.", "C) Apenas agentes policiais de carreira.", "D) Apenas mediante ordem escrita de juiz."],
        answer: 0
    },
    {
        subject: "Conhecimentos Específicos",
        text: "A Guarda Municipal pode colaborar com os órgãos de segurança pública em situações de emergência?",
        options: ["A) Sim, mediante convênio ou atuação conjunta regulamentada.", "B) Não, por vedação constitucional expressa.", "C) Apenas com autorização do Senado.", "D) Somente para transporte de documentos."],
        answer: 0
    },
    {
        subject: "Conhecimentos Específicos",
        text: "Qual dos princípios da Administração Pública exige transparência na divulgação dos atos oficiais?",
        options: ["A) Moralidade", "B) Publicidade", "C) Eficiência", "D) Razoabilidade"],
        answer: 1
    },
    {
        subject: "Conhecimentos Específicos",
        text: "No que se refere ao uso da força pela Guarda Municipal, a intensidade da ação deve ser:",
        options: ["A) Sempre máxima para intimidação.", "B) Proporcional e estritamente necessária.", "C) Decidida individualmente sem limites legais.", "D) Nula em qualquer situação de risco."],
        answer: 1
    },
    {
        subject: "Conhecimentos Específicos",
        text: "São bens de uso comum do povo:",
        options: ["A) Rios, mares, estradas, ruas e praças.", "B) Prédios onde funcionam as secretarias municipais.", "C) Veículos operacionais da frota municipal.", "D) Terrenos privados não edificados."],
        answer: 0
    },
    {
        subject: "Conhecimentos Específicos",
        text: "A CF/88 estabelece que ninguém será submetido a tortura nem a tratamento desumano ou degradante no artigo:",
        options: ["A) Art. 1º", "B) Art. 5º", "C) Art. 37", "D) Art. 144"],
        answer: 1
    },
    {
        subject: "Conhecimentos Específicos",
        text: "Conforme o Estatuto das Guardas, é vedado às Guardas Municipais o uso de denominação idêntica às:",
        options: ["A) Forças Armadas.", "B) Empresas de vigilância privada.", "C) Brigadas de incêndio civis.", "D) Secretarias municipais."],
        answer: 0
    },
    {
        subject: "Conhecimentos Específicos",
        text: "O porte de arma para os integrantes das Guardas Municipais é regulamentado pelo:",
        options: ["A) Estatuto do Desarmamento (Lei nº 10.826/2003) e decisões do STF.", "B) Código de Processo Civil.", "C) Código Comercial.", "D) Decreto Municipal sem amparo federal."],
        answer: 0
    },
    {
        subject: "Conhecimentos Específicos",
        text: "Dentre as garantias constitucionais, a casa é asilo inviolável do indivíduo, podendo nela penetrar sem consentimento:",
        options: ["A) Durante a noite por ordem administrativa.", "B) De dia, por determinação judicial, ou a qualquer hora em caso de flagrante delito.", "C) Em qualquer momento para fiscalização tributária.", "D) Apenas durante os finais de semana."],
        answer: 1
    },
    {
        subject: "Conhecimentos Específicos",
        text: "A Lei de Improbidade Administrativa (Lei nº 8.429/1992 com alterações) pune atos que causam:",
        options: ["A) Enriquecimento ilícito, lesão ao erário e atentado contra os princípios da administração.", "B) Mero atraso em relatórios sem dolo.", "C) Divergências de opinião política.", "D) Erros de digitação em certidões."],
        answer: 0
    },
    {
        subject: "Conhecimentos Específicos",
        text: "Constitui crime contra a Administração Pública praticado por funcionário público:",
        options: ["A) Peculato.", "B) Latrocínio.", "C) Estelionato comum.", "D) Dano qualificado por particular."],
        answer: 0
    },
    {
        subject: "Conhecimentos Específicos",
        text: "Exigir, para si ou para outrem, direta ou indiretamente, em razão da função, vantagem indevida configura o crime de:",
        options: ["A) Concussão.", "B) Corrupção passiva.", "C) Prevaricação.", "D) Peculato mediante erro de outrem."],
        answer: 0
    },
    {
        subject: "Conhecimentos Específicos",
        text: "Retardar ou deixar de praticar, indevidamente, ato de ofício para satisfazer interesse ou sentimento pessoal é:",
        options: ["A) Concussão.", "B) Corrupção ativa.", "C) Prevaricação.", "D) Usurpação de função pública."],
        answer: 2
    },
    {
        subject: "Conhecimentos Específicos",
        text: "Segundo o Estatuto das Guardas Municipais, a estrutura hierárquica da corporação NÃO pode ter subordinação aos:",
        options: ["A) Prefeitos Municipais.", "B) Comandos militares.", "C) Secretários Municipais de Segurança.", "D) Órgãos de controle interno."],
        answer: 1
    },
    {
        subject: "Conhecimentos Específicos",
        text: "Qual a idade mínima para o ingresso no cargo de Guarda Municipal de acordo com as diretrizes da Lei 13.022/2014?",
        options: ["A) 16 anos.", "B) 18 anos.", "C) 21 anos.", "D) 25 anos."],
        answer: 1
    },
    {
        subject: "Conhecimentos Específicos",
        text: "O cumprimento das diretrizes de segurança urbana em Maricá envolve ações intersetoriais voltadas prioritariamente para:",
        options: ["A) Prevenção comunitária e proteção da população.", "B) Repressão penal exclusiva e julgamento sumário.", "C) Aplicação de multas sem fiscalização.", "D) Policiamento de fronteiras internacionais."],
        answer: 0
    }
];

// BANCO DE FLASHCARDS
const flashcardsData = [
    { category: "Lei 13.022/14", q: "Qual o foco dos princípios mínimos das Guardas Municipais?", a: "Proteção dos direitos humanos fundamentais, preservação da vida e redução de sofrimento." },
    { category: "Constituição Federal (Art. 144)", q: "Qual a finalidade constitucional das Guardas Municipais?", a: "Proteção de bens, serviços e instalações dos Municípios." },
    { category: "Direito Administrativo (LIMPE)", q: "O que significa o princípio da Impessoalidade?", a: "A atuação administrativa deve visar o interesse público geral, sem favorecer ou prejudicar pessoas específicas." },
    { category: "Estatuto de Maricá / GCM", q: "A Guarda Municipal é uma instituição de caráter...", a: "Civil, uniformizada e armada conforme previsto em lei." }
];

// ESTADO DA APLICAÇÃO
let currentQuestionIndex = 0;
let userAnswers = new Array(questoesSimulado.length).fill(null);
let currentFlashcardIndex = 0;

// NAVEGAÇÃO DE ABAS
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
        
        btn.classList.add('active');
        const targetId = btn.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
    });
});

// SIMULADO
const startBtn = document.getElementById('start-simulado-btn');
const introDiv = document.getElementById('simulado-intro');
const quizArea = document.getElementById('simulado-quiz-area');
const resultArea = document.getElementById('simulado-result-area');

startBtn.addEventListener('click', () => {
    introDiv.classList.add('hidden');
    quizArea.classList.remove('hidden');
    initQuestionGrid();
    loadQuestion(0);
    startTimer();
});

function initQuestionGrid() {
    const grid = document.getElementById('question-grid');
    grid.innerHTML = '';
    questoesSimulado.forEach((_, idx) => {
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
    const q = questoesSimulado[index];
    
    document.getElementById('q-subject-badge').innerText = q.subject;
    document.getElementById('q-number').innerText = `Questão ${index + 1} de ${questoesSimulado.length}`;
    document.getElementById('q-text').innerText = q.text;

    const optContainer = document.getElementById('options-container');
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
    const dots = document.querySelectorAll('.q-dot');
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

document.getElementById('next-q-btn').addEventListener('click', () => {
    if (currentQuestionIndex < questoesSimulado.length - 1) {
        loadQuestion(currentQuestionIndex + 1);
    }
});

document.getElementById('prev-q-btn').addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        loadQuestion(currentQuestionIndex - 1);
    }
});

document.getElementById('finish-simulado-btn').addEventListener('click', () => {
    if (confirm("Deseja realmente finalizar e enviar a prova?")) {
        finishSimulado();
    }
});

function finishSimulado() {
    quizArea.classList.add('hidden');
    resultArea.classList.remove('hidden');

    let score = 0;
    userAnswers.forEach((ans, idx) => {
        if (ans === questoesSimulado[idx].answer) {
            score++;
        }
    });

    document.getElementById('score-display').innerText = `${score} / ${questoesSimulado.length}`;
    const percent = (score / questoesSimulado.length) * 100;
    document.getElementById('score-feedback').innerText = percent >= 70 ? 
        "Excelente desempenho! Você está no caminho certo para a aprovação." : 
        "Bom esforço! Continue revisando os flashcards e resumos para fixar a matéria.";

    let totalSimulados = parseInt(localStorage.getItem('gcm_simulados') || '0') + 1;
    localStorage.setItem('gcm_simulados', totalSimulados);
    localStorage.setItem('gcm_ultimo_score', score);
    updateStatsDisplay();
}

document.getElementById('restart-simulado-btn').addEventListener('click', () => {
    userAnswers = new Array(questoesSimulado.length).fill(null);
    resultArea.classList.add('hidden');
    introDiv.classList.remove('hidden');
});

// CRONÔMETRO DE PROVA
function startTimer() {
    let seconds = 4 * 3600;
    const timerBadge = document.getElementById('timer');
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
flashcardEl.addEventListener('click', () => {
    flashcardEl.classList.toggle('flipped');
});

function loadFlashcard(index) {
    flashcardEl.classList.remove('flipped');
    const fc = flashcardsData[index];
    document.getElementById('fc-category').innerText = fc.category;
    document.getElementById('fc-question').innerText = fc.q;
    document.getElementById('fc-answer').innerText = fc.a;
}

document.getElementById('fc-flip').addEventListener('click', () => {
    flashcardEl.classList.toggle('flipped');
});

document.getElementById('fc-next').addEventListener('click', () => {
    currentFlashcardIndex = (currentFlashcardIndex + 1) % flashcardsData.length;
    loadFlashcard(currentFlashcardIndex);
    incrementFlashcardStat();
});

document.getElementById('fc-prev').addEventListener('click', () => {
    currentFlashcardIndex = (currentFlashcardIndex - 1 + flashcardsData.length) % flashcardsData.length;
    loadFlashcard(currentFlashcardIndex);
});

function incrementFlashcardStat() {
    let viewed = parseInt(localStorage.getItem('gcm_flashcards') || '0') + 1;
    localStorage.setItem('gcm_flashcards', viewed);
    updateStatsDisplay();
}

// ESTATÍSTICAS
function updateStatsDisplay() {
    document.getElementById('stat-total-simulados').innerText = localStorage.getItem('gcm_simulados') || '0';
    document.getElementById('stat-flashcards').innerText = localStorage.getItem('gcm_flashcards') || '0';
    let lastScore = localStorage.getItem('gcm_ultimo_score');
    if (lastScore !== null) {
        let media = Math.round((parseInt(lastScore) / 50) * 100);
        document.getElementById('stat-media-acertos').innerText = `${media}%`;
    }
}

updateStatsDisplay();
loadFlashcard(0);