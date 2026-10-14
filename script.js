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

// BANCO DE FLASHCARDS EXPANDIDO (20 ITENS DE CONHECIMENTOS ESPECÍFICOS)
const flashcardsData = [
    {
        category: "Lei 13.022/14",
        q: "Qual é o foco dos princípios mínimos de atuação das Guardas Municipais?",
        a: "A proteção dos direitos humanos fundamentais, a preservação da vida, o uso progressivo da força e a garantia do bem-estar da comunidade."
    },
    {
        category: "Constituição Federal (Art. 144)",
        q: "Qual é a finalidade constitucional atribuída às Guardas Municipais?",
        a: "A proteção de bens, serviços e instalações dos Municípios, conforme dispuser a lei."
    },
    {
        category: "Direito Administrativo (LIMPE)",
        q: "O que exige o princípio da Impessoalidade na Administração Pública?",
        a: "Que a atuação administrativa vise o interesse público geral, sem favorecer ou prejudicar pessoas específicas por interesses particulares."
    },
    {
        category: "Estatuto da GCM",
        q: "A Guarda Municipal é uma instituição de caráter predominantemente...",
        a: "Civil, uniformizada e armada, conforme previsto em lei."
    },
    {
        category: "Lei 13.022/14",
        q: "A estrutura hierárquica da Guarda Municipal pode ter subordinação aos comandos militares?",
        a: "Não. É expressamente vedada a subordinação ou equiparação a órgãos militares de segurança."
    },
    {
        category: "Lei 13.022/14",
        q: "Quem exerce o controle INTERNO e EXTERNO do funcionamento da Guarda Municipal?",
        a: "Controle interno: Corregedoria (nos grupamentos maiores). Controle externo: Ouvidoria independente."
    },
    {
        category: "Direito Constitucional",
        q: "Qual remédio constitucional protege a liberdade de locomoção contra ilegalidade ou abuso de poder?",
        a: "Habeas Corpus (Art. 5º, LXVIII da CF/88)."
    },
    {
        category: "Direito Administrativo",
        q: "O que significa o atributo da 'Autoexecutoriedade' dos atos administrativos?",
        a: "A prerrogativa da Administração de executar suas decisões diretamente, sem necessidade de prévia autorização do Poder Judiciário."
    },
    {
        category: "Código Penal (Art. 147)",
        q: "Qual é a ação penal aplicável ao crime de Ameaça?",
        a: "Ação Penal Pública Condicionada à representação do ofendido."
    },
    {
        category: "Legislação de Trânsito (CTB)",
        q: "O que caracteriza o crime do Art. 304 do CTB (omissão de socorro no trânsito)?",
        a: "Deixar o condutor de prestar socorro imediato à vítima de acidente, quando possível fazê-lo sem risco pessoal."
    },
    {
        category: "Estatuto da Criança e do Adolescente",
        q: "Qual é a faixa etária que o ECA define legalmente como 'Adolescente'?",
        a: "Pessoa entre 12 e 18 anos de idade incompletos."
    },
    {
        category: "Direitos Humanos (DUDH)",
        q: "O que estabelece o Artigo 5º da Declaração Universal dos Direitos Humanos?",
        a: "Ninguém será submetido a tortura nem a tratamento ou castigo cruel, desumano ou degradante."
    },
    {
        category: "Direito Administrativo",
        q: "Qual é a diferença entre anulação e revogação de um ato administrativo?",
        a: "Anulação desfaz ato ilegal (com efeitos retroativos). Revogação desfaz ato legal, mas que se tornou inconveniente (efeitos futuros)."
    },
    {
        category: "Lei de Crimes Ambientais",
        q: "Pela Lei nº 9.605/98, as pessoas jurídicas podem sofrer sanções penais?",
        a: "Sim, podem ser responsabilizadas administrativa, civil e penalmente em crimes contra o meio ambiente."
    },
    {
        category: "Direito Penal (Crimes Funcionais)",
        q: "Qual a diferença entre Concussão (Art. 316) e Corrupção Passiva (Art. 317)?",
        a: "Concussão envolve *exigir* a vantagem indevida. Corrupção passiva envolve *solicitar, receber ou aceitar promessa* de vantagem."
    },
    {
        category: "Código Penal (Prevaricação)",
        q: "O que configura o crime de Prevaricação (Art. 319 do CP)?",
        a: "Retardar ou deixar de praticar ato de ofício indevidamente, ou praticá-lo contra lei, para satisfazer interesse ou sentimento pessoal."
    },
    {
        category: "Processo Penal / Prisões",
        q: "Quem pode efetuar a prisão em flagrante delito?",
        a: "Qualquer do povo PODERÁ (faculdade) e as autoridades policiais e seus agentes DEVERÃO (dever legal) prender quem esteja em flagrante."
    },
    {
        category: "Lei 13.022/14",
        q: "Quais são os requisitos de escolaridade e idade para investidura no cargo de Guarda Municipal?",
        a: "Ensino médio completo e idade mínima de 18 anos (além de outros requisitos previstos em edital e lei local)."
    },
    {
        category: "Direitos Humanos / LBI",
        q: "O que assegura a Lei Brasileira de Inclusão (Estatuto da Pessoa com Deficiência - Lei 13.146/15)?",
        a: "Promover em condições de igualdade o exercício dos direitos e liberdades fundamentais, visando à inclusão social e cidadania."
    },
    {
        category: "Segurança Pública Municipal",
        q: "A Guarda Municipal pode colaborar com os demais órgãos de segurança pública (Polícias Civil e Militar)?",
        a: "Sim, mediante ações integradas e operações conjuntas coordenadas para a segurança pública local."
    }
];

// ESTADO DA APLICAÇÃO
let currentQuestionIndex = 0;
let userAnswers = new Array(questoesSimulado.length).fill(null);
let currentFlashcardIndex = 0;

// NAVEGAÇÃO DE ABAS
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove a classe active de todos os botões
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));

        // Esconde todas as secções adicionando 'hidden' e removendo 'active'
        document.querySelectorAll('.content-section').forEach(s => {
            s.classList.remove('active');
            s.classList.add('hidden');
        });

        // Ativa o botão clicado
        btn.classList.add('active');

        // Mostra a secção alvo removendo o 'hidden' e adicionando 'active'
        const targetId = btn.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.remove('hidden');
            targetSection.classList.add('active');
        }
    });
});

// SIMULADO PRINCIPAL
const startBtn = document.getElementById('start-simulado-btn');
const introDiv = document.getElementById('simulado-intro');
const quizArea = document.getElementById('simulado-quiz-area');
const resultArea = document.getElementById('simulado-result-area');

if (startBtn) {
    startBtn.addEventListener('click', () => {
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
        if (currentQuestionIndex < questoesSimulado.length - 1) {
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

const restartSimuladoBtn = document.getElementById('restart-simulado-btn');
if (restartSimuladoBtn) {
    restartSimuladoBtn.addEventListener('click', () => {
        userAnswers = new Array(questoesSimulado.length).fill(null);
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
        currentFlashcardIndex = (currentFlashcardIndex + 1) % flashcardsData.length;
        loadFlashcard(currentFlashcardIndex);
        incrementFlashcardStat();
    });
}

const fcPrevBtn = document.getElementById('fc-prev');
if (fcPrevBtn) {
    fcPrevBtn.addEventListener('click', () => {
        currentFlashcardIndex = (currentFlashcardIndex - 1 + flashcardsData.length) % flashcardsData.length;
        loadFlashcard(currentFlashcardIndex);
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
        if (lastScore !== null) {
            let media = Math.round((parseInt(lastScore) / 50) * 100);
            mediaEl.innerText = `${media}%`;
        } else {
            mediaEl.innerText = '0%';
        }
    }
}

updateStatsDisplay();
loadFlashcard(0);

// =========================================================================
// SUPER SIMULADO POR MATÉRIA (100 QUESTÕES DE CONHECIMENTOS ESPECÍFICOS)
// =========================================================================
const superBancoQuestoes = [
    // DIREITO CONSTITUCIONAL (1 a 20)
    { materia: "Constitucional", subject: "Direito Constitucional", text: "01. Conforme o Art. 5º, LXVIII da CF/88, conceder-se-á Habeas Corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por:", options: ["A) Apenas abuso de autoridade de agentes federais.", "B) Ilegalidade ou abuso de poder.", "C) Exclusivamente por ordem administrativa municipal.", "D) Decisão do Ministério Público."], answer: 1 },
    { materia: "Constitucional", subject: "Direito Constitucional", text: "02. De acordo com a CF/88, o remédio constitucional adequado para assegurar o conhecimento de informações relativas à pessoa do impetrante, constantes de bancos de dados governamentais, é o:", options: ["A) Mandado de Segurança.", "B) Habeas Corpus.", "C) Habeas Data.", "D) Mandado de Injunção."], answer: 2 },
    { materia: "Constitucional", subject: "Direito Constitucional", text: "03. São gratuitas as ações constitucionais de:", options: ["A) Mandado de Segurança e Mandado de Injunção.", "B) Habeas Corpus e Habeas Data.", "C) Ação Popular e Mandado de Segurança.", "D) Todas as ações judiciais no âmbito municipal."], answer: 1 },
    { materia: "Constitucional", subject: "Direito Constitucional", text: "04. Conforme o Art. 144, § 8º da CF/88, os Municípios poderão constituir guardas municipais destinadas à:", options: ["A) Segurança ostensiva das rodovias estaduais.", "B) Investigação de crimes contra o patrimônio privado.", "C) Proteção de seus bens, serviços e instalações.", "D) Execução primária de prisão preventiva."], answer: 2 },
    { materia: "Constitucional", subject: "Direito Constitucional", text: "05. É competência privativa da União legislar sobre:", options: ["A) Assuntos de interesse estritamente local.", "B) Proteção ao patrimônio histórico municipal.", "C) Direito Penal e Processual Penal.", "D) Criação de guardas municipais."], answer: 2 },
    { materia: "Constitucional", subject: "Direito Constitucional", text: "06. Nos termos da CF/88, a inviolabilidade do domicílio é regra, SALVO em caso de:", options: ["A) Determinação do Prefeito a qualquer hora.", "B) Flagrante delito, desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial.", "C) Apenas com consentimento do síndico.", "D) Qualquer horário mediante suspeita fundada."], answer: 1 },
    { materia: "Constitucional", subject: "Direito Constitucional", text: "07. O direito de petição aos órgãos públicos em defesa de direitos ou contra ilegalidade ou abuso de poder é assegurado a todos:", options: ["A) Mediante taxa estipulada em lei municipal.", "B) Independentemente do pagamento de taxas.", "C) Apenas se representado por advogado.", "D) Exclusivamente para cidadãos natos."], answer: 1 },
    { materia: "Constitucional", subject: "Direito Constitucional", text: "08. É garantido o direito de propriedade, devendo a propriedade atender à sua:", options: ["A) Função comercial e lucrativa.", "B) Função social.", "C) Isenção tributária anual.", "D) Destinação exclusivamente pública."], answer: 1 },
    { materia: "Constitucional", subject: "Direito Constitucional", text: "09. Ninguém será privado de direitos por motivo de crença religiosa ou convicção política, salvo se as invocar para eximir-se de:", options: ["A) Prestação alternativa fixada em lei.", "B) Obrigação legal a todos imposta e recusar-se a cumprir prestação alternativa.", "C) Qualquer dever civil sem exceção.", "D) Pagamento de impostos diretos."], answer: 1 },
    { materia: "Constitucional", subject: "Direito Constitucional", text: "10. É livre a expressão da atividade intelectual, artística, científica e de comunicação, independentemente de:", options: ["A) Autorização judicial prévia.", "B) Censura ou licença.", "C) Registro em cartório público.", "D) Comprovação de diploma."], answer: 1 },
    { materia: "Constitucional", subject: "Direito Constitucional", text: "11. A criação de Municípios faz-se por lei estadual, dentro do período determinado por Lei Complementar Federal, e dependerá de consulta prévia, mediante:", options: ["A) Plebiscito, às populações dos Municípios envolvidos.", "B) Referendo do Congresso Nacional.", "C) Decreto do Governador.", "D) Resolução das Câmaras."], answer: 0 },
    { materia: "Constitucional", subject: "Direito Constitucional", text: "12. Compete aos Municípios promover, no que couber, adequado ordenamento territorial, mediante planejamento e controle do uso e ocupação do:", options: ["A) Solo urbano.", "B) Mar territorial.", "C) Espaço aéreo nacional.", "D) Leito das rodovias."], answer: 0 },
    { materia: "Constitucional", subject: "Direito Constitucional", text: "13. O rol de direitos fundamentais previsto no Art. 5º da CF/88 é:", options: ["A) Exaustivo e taxativo.", "B) Exemplificativo (não excludente de outros decorrentes do regime).", "C) Aplicável exclusivamente aos natos.", "D) Revogável por medida provisória."], answer: 1 },
    { materia: "Constitucional", subject: "Direito Constitucional", text: "14. A lei penal não retroagirá, SALVO para:", options: ["A) Beneficiar o réu.", "B) Agravar a pena em crimes hediondos.", "C) Ajustar prazos processuais.", "D) Atender interesse da vítima."], answer: 0 },
    { materia: "Constitucional", subject: "Direito Constitucional", text: "15. Não haverá penas de morte (salvo guerra declarada), de caráter perpétuo, de trabalhos forçados, de banimento e:", options: ["A) Multa pecuniária.", "B) Cruéis.", "C) Privativas de liberdade.", "D) Restritivas de direitos."], answer: 1 },
    { materia: "Constitucional", subject: "Direito Constitucional", text: "16. A prisão de qualquer pessoa e o local onde se encontre serão comunicados imediatamente ao juiz competente e:", options: ["A) À família do preso ou à pessoa por ele indicada.", "B) Ao Prefeito do Município.", "C) Ao Comando da Polícia Militar.", "D) Exclusivamente à Defensoria Pública."], answer: 0 },
    { materia: "Constitucional", subject: "Direito Constitucional", text: "17. O preso tem direito à identificação dos responsáveis por sua prisão ou por seu:", options: ["A) Transporte comunitário.", "B) Interrogatório policial.", "C) Julgamento administrativo.", "D) Acompanhamento familiar."], answer: 1 },
    { materia: "Constitucional", subject: "Direito Constitucional", text: "18. Conforme a CF/88, a segurança pública é exercida para a preservação da ordem pública e da incolumidade das pessoas e do:", options: ["A) Lucro comercial.", "B) Patrimônio.", "C) Sistema partidário.", "D) Orçamento estadual."], answer: 1 },
    { materia: "Constitucional", subject: "Direito Constitucional", text: "19. A Ação Popular permite a qualquer cidadão pleitear a anulação de ato lesivo ao patrimônio público, à moralidade, ao meio ambiente e ao:", options: ["A) Patrimônio histórico e cultural.", "B) Mercado imobiliário privado.", "C) Sistema bancário.", "D) Plano de cargos interno."], answer: 0 },
    { materia: "Constitucional", subject: "Direito Constitucional", text: "20. O alistamento eleitoral e o voto são facultativos para os analfabetos, maiores de 70 anos e para os jovens entre:", options: ["A) 12 e 16 anos.", "B) 14 e 18 anos.", "C) 16 e 18 anos.", "D) 15 e 17 anos."], answer: 2 },

    // DIREITO ADMINISTRATIVO (21 a 40)
    { materia: "Administrativo", subject: "Direito Administrativo", text: "21. O acrônimo LIMPE sintetiza os princípios expressos no Art. 37 da CF. A letra 'M' refere-se ao princípio da:", options: ["A) Moderação.", "B) Moralidade.", "C) Motivação.", "D) Manutenção."], answer: 1 },
    { materia: "Administrativo", subject: "Direito Administrativo", text: "22. O princípio pelo qual a Administração deve agir visando o interesse público sem favorecer pessoas específicas é o da:", options: ["A) Legalidade.", "B) Impessoalidade.", "C) Eficiência.", "D) Publicidade."], answer: 1 },
    { materia: "Administrativo", subject: "Direito Administrativo", text: "23. O ato administrativo que pode ser revogado por razões de conveniência e oportunidade é o:", options: ["A) Vinculado.", "B) Discricionário.", "C) Inexistente.", "D) Nulo."], answer: 1 },
    { materia: "Administrativo", subject: "Direito Administrativo", text: "24. A anulação de um ato administrativo ocorre quando ele apresenta vício de:", options: ["A) Conveniência.", "B) Ilegalidade.", "C) Oportunidade.", "D) Mérito puro."], answer: 1 },
    { materia: "Administrativo", subject: "Direito Administrativo", text: "25. Os bens públicos destinados à execução de serviços e sedes administrativas (ex.: sede da Guarda) são bens:", options: ["A) De uso comum do povo.", "B) De uso especial.", "C) Dominicais.", "D) Privados comunitários."], answer: 1 },
    { materia: "Administrativo", subject: "Direito Administrativo", text: "26. As praças, ruas, mares e rios públicos são bens classificados como:", options: ["A) Bens de uso comum do povo.", "B) Bens dominicais.", "C) Bens de uso especial.", "D) Bens empresariais."], answer: 0 },
    { materia: "Administrativo", subject: "Direito Administrativo", text: "27. Os bens públicos dominicais constituem o patrimônio disponível do Estado. Sobre eles é correto afirmar que:", options: ["A) Podem ser alienados nos termos da lei.", "B) Podem ser adquiridos por usucapião.", "C) São insuscetíveis de valor econômico.", "D) Têm uso irrestrito sem controle."], answer: 0 },
    { materia: "Administrativo", subject: "Direito Administrativo", text: "28. Os bens públicos são imprescritíveis, o que significa que:", options: ["A) Não podem ser penhorados.", "B) Não estão sujeitos a usucapião.", "C) Não podem ser destruídos.", "D) Não exigem manutenção."], answer: 1 },
    { materia: "Administrativo", subject: "Direito Administrativo", text: "29. A prerrogativa do Poder Público de rever seus próprios atos, anulando os ilegais, fundamenta-se no princípio da:", options: ["A) Autotutela.", "B) Razoabilidade.", "C) Continuidade do serviço.", "D) Hierarquia estrita."], answer: 0 },
    { materia: "Administrativo", subject: "Direito Administrativo", text: "30. Na Lei de Licitações (Lei 8.666/93), a modalidade para alienação de bens móveis inservíveis ou apreendidos é o:", options: ["A) Convite.", "B) Leilão.", "C) Concurso.", "D) Pregão."], answer: 1 },
    { materia: "Administrativo", subject: "Direito Administrativo", text: "31. A modalidade de licitação para escolha de trabalho técnico, científico ou artístico mediante prêmio é o:", options: ["A) Concurso.", "B) Leilão.", "C) Convite.", "D) Tomada de Preços."], answer: 0 },
    { materia: "Administrativo", subject: "Direito Administrativo", text: "32. São atributos do ato administrativo:", options: ["A) Presunção de legitimidade, imperatividade e autoexecutoriedade.", "B) Oportunidade, lucratividade e conveniência.", "C) Irrevogabilidade, gratuidade e sigilo.", "D) Informalidade e discricionariedade absoluta."], answer: 0 },
    { materia: "Administrativo", subject: "Direito Administrativo", text: "33. A autoexecutoriedade do ato administrativo permite que a Administração:", options: ["A) Crie leis sem o Legislativo.", "B) Execute diretamente suas decisões sem prévia autorização judicial.", "C) Cobre impostos sem lei.", "D) Anule contratos vigentes sem motivo."], answer: 1 },
    { materia: "Administrativo", subject: "Direito Administrativo", text: "34. O ato administrativo eivado de vício insanável de legalidade deve ser:", options: ["A) Revogado com efeito retroativo.", "B) Anulado, produzindo efeitos ex tunc.", "C) Mantido por conveniência.", "D) Suspenso em período eleitoral."], answer: 1 },
    { materia: "Administrativo", subject: "Direito Administrativo", text: "35. O princípio da Publicidade admite exceção em casos de:", options: ["A) Interesses comerciais do prefeito.", "B) Segurança da sociedade e do Estado e sigilo protegido por lei.", "C) Atos de rotina de patrulhamento.", "D) Processos licitatórios concluídos."], answer: 1 },
    { materia: "Administrativo", subject: "Direito Administrativo", text: "36. O poder de polícia administrativa caracteriza-se pela faculdade de limitar direitos individuais em razão do:", options: ["A) Lucro das autarquias.", "B) Interesse público geral.", "C) Desejo privado da autoridade.", "D) Valor de taxas arrecadadas."], answer: 1 },
    { materia: "Administrativo", subject: "Direito Administrativo", text: "37. São elementos ou requisitos do ato administrativo:", options: ["A) Competência, finalidade, forma, motivo e objeto.", "B) Lucro, oportunidade, conveniência, agente e foro.", "C) Prazo, sigilo, multa, contrato e atestado.", "D) Vontade privada, custo, taxa e protocolo."], answer: 0 },
    { materia: "Administrativo", subject: "Direito Administrativo", text: "38. A delegação de competência administrativa é VEDADA na edição de:", options: ["A) Atos normativos, decisão de recursos e matérias de competência exclusiva.", "B) Ações de patrulhamento de rua.", "C) Atendimento de público em balcão.", "D) Relatórios diários de rotina."], answer: 0 },
    { materia: "Administrativo", subject: "Direito Administrativo", text: "39. O abuso de poder pode ocorrer sob a forma de excesso de poder ou de:", options: ["A) Desvio de finalidade (atuar visando fim diverso do interesse público).", "B) Erro material de digitação.", "C) Atraso no horário de serviço.", "D) Falta de viatura operacional."], answer: 0 },
    { materia: "Administrativo", subject: "Direito Administrativo", text: "40. A responsabilidade civil do Estado para atos comissivos de seus agentes é objetiva, baseada no:", options: ["A) Risco Administrativo (independe de dolo ou culpa do agente).", "B) Dolo exclusivo da vítima.", "C) Risco Integral sem excludentes.", "D) Culpa subjetiva comprovada."], answer: 0 },

    // LEGISLAÇÃO DA GUARDA MUNICIPAL - LEI 13.022/2014 (41 a 60)
    { materia: "LegislacaoGCM", subject: "Legislação da Guarda", text: "41. Segundo a Lei nº 13.022/2014, a Guarda Municipal é uma instituição de caráter predominantemente:", options: ["A) Militar e ostensivo.", "B) Civil, uniformizada e armada.", "C) Auxiliar e reservista das Forças Armadas.", "D) Privado sob regência trabalhista."], answer: 1 },
    { materia: "LegislacaoGCM", subject: "Legislação da Guarda", text: "42. Constitui princípio mínimo de atuação da Guarda Municipal, nos termos do Art. 3º da Lei nº 13.022/2014:", options: ["A) Patrulhamento repressivo permanente.", "B) Uso progressivo da força.", "C) Investigação criminal de homicídios.", "D) Cumprimento de ordens militares."], answer: 1 },
    { materia: "LegislacaoGCM", subject: "Legislação da Guarda", text: "43. É competência geral das Guardas Municipais a proteção de bens, serviços, logradouros públicos municipais e:", options: ["A) Instalações do Município.", "B) Presídios estaduais.", "C) Rodovias federais e estaduais.", "D) Fronteiras nacionais marítimas."], answer: 0 },
    { materia: "LegislacaoGCM", subject: "Legislação da Guarda", text: "44. O controle INTERNO do funcionamento da Guarda Municipal deve ser exercido por órgão próprio denominado:", options: ["A) Ouvidoria.", "B) Corregedoria.", "C) Conselho Tutelar.", "D) Tribunal de Contas."], answer: 1 },
    { materia: "LegislacaoGCM", subject: "Legislação da Guarda", text: "45. O controle EXTERNO para receber denúncias, reclamações e elogios é exercido por:", options: ["A) Corregedoria.", "B) Ouvidoria.", "C) Comando Militar de Área.", "D) Polícia Civil."], answer: 1 },
    { materia: "LegislacaoGCM", subject: "Legislação da Guarda", text: "46. É VEDADO às Guardas Municipais a utilização de denominação idêntica à das:", options: ["A) Forças Armadas.", "B) Secretarias de obras públicas.", "C) Autarquias municipais.", "D) Defesas civis locais."], answer: 0 },
    { materia: "LegislacaoGCM", subject: "Legislação da Guarda", text: "47. A estrutura hierárquica da Guarda Municipal NÃO pode, em hipótese alguma, ter subordinação a:", options: ["A) Prefeitos Municipais.", "B) Comandos militares.", "C) Secretários Municipais de Segurança.", "D) Inspetores da própria carreira."], answer: 1 },
    { materia: "LegislacaoGCM", subject: "Legislação da Guarda", text: "48. Requisito básico para investidura em cargo na Guarda Municipal, conforme a Lei nº 13.022/2014:", options: ["A) Idade mínima de 21 anos.", "B) Nível médio completo de escolaridade.", "C) Ter servido às Forças Armadas.", "D) CNH categoria E."], answer: 1 },
    { materia: "LegislacaoGCM", subject: "Legislação da Guarda", text: "49. As Guardas Municipais utilizarão uniforme e equipamentos padronizados, preferencialmente na cor:", options: ["A) Azul-marinho.", "B) Verde-oliva.", "C) Preta fosca.", "D) Cinza-camuflada."], answer: 0 },
    { materia: "LegislacaoGCM", subject: "Legislação da Guarda", text: "50. O documento de porte de arma de fogo dos integrantes das Guardas Municipais é expedido pela:", options: ["A) Ministério da Defesa.", "B) Polícia Federal.", "C) Câmara de Vereadores.", "D) Polícia Militar Estadual."], answer: 1 },
    { materia: "LegislacaoGCM", subject: "Legislação da Guarda", text: "51. Em Municípios com mais de 50.000 e menos de 500.000 habitantes, o limite do efetivo da Guarda é de até:", options: ["A) 0,4% da população.", "B) 0,3% da população.", "C) 0,2% da população.", "D) 1,0% da população."], answer: 1 },
    { materia: "LegislacaoGCM", subject: "Legislação da Guarda", text: "52. Em relação aos cargos de comando da Guarda Municipal, o Estatuto exige que sejam providos por:", options: ["A) Oficiais da Polícia Militar.", "B) Servidores de carreira do quadro efetivo da corporação.", "C) Indicação política externa sem concurso.", "D) Agentes da Polícia Civil requisitados."], answer: 1 },
    { materia: "LegislacaoGCM", subject: "Legislação da Guarda", text: "53. Dentre as competências específicas das Guardas Municipais inclui-se atuar preventivamente para a proteção da população e para o desenvolvimento de:", options: ["A) Patrulhamento de divisas de Estados.", "B) Ações preventivas de segurança escolar e comunitária.", "C) Inquéritos de polícia judiciária militar.", "D) Julgamentos de infrações penais."], answer: 1 },
    { materia: "LegislacaoGCM", subject: "Legislação da Guarda", text: "54. É competência específica da Guarda colaborar com órgãos de trânsito estaduais ou municipais para exercer atribuições de trânsito mediante:", options: ["A) Ordem verbal do Prefeito.", "B) Conveniamento celebrado na forma da lei.", "C) Mandado judicial específico.", "D) Autorização do Exército."], answer: 1 },
    { materia: "LegislacaoGCM", subject: "Legislação da Guarda", text: "55. As Guardas Municipais podem encaminhar ao delegado de polícia, diante de flagrante delito, o autor da infração, preservando o local do crime quando:", options: ["A) For solicitado pela família.", "B) Possível e necessário.", "C) Exclusivamente em horário noturno.", "D) Autorizado pela Câmara."], answer: 1 },
    { materia: "LegislacaoGCM", subject: "Legislação da Guarda", text: "56. A agência reguladora autorizará código de rádio próprio para comunicação das Guardas com frequência destinada à:", options: ["A) Segurança pública.", "B) Rádio comunitária comercial.", "C) Redes privadas de uso comercial.", "D) Defesa aérea nacional."], answer: 0 },
    { materia: "LegislacaoGCM", subject: "Legislação da Guarda", text: "57. No exercício de suas atribuições, o guarda municipal pode utilizar recursos tecnológicos de monitoramento para:", options: ["A) Proteção do patrimônio e da incolumidade das pessoas.", "B) Divulgação pública de imagens sem autorização.", "C) Monitoramento partidário.", "D) Cobrança de impostos."], answer: 0 },
    { materia: "LegislacaoGCM", subject: "Legislação da Guarda", text: "58. No Regulamento Disciplinar da Guarda Municipal é VEDADA a fixação de sanções de natureza:", options: ["A) Advertência verbal escrita.", "B) Prisão disciplinar ou punição privativa de liberdade administrativa.", "C) Suspensão temporária.", "D) Demissão por falta grave."], answer: 1 },
    { materia: "LegislacaoGCM", subject: "Legislação da Guarda", text: "59. O curso de formação do Guarda Municipal deve seguir matriz curricular compatível com as diretrizes do:", options: ["A) Ministério da Justiça e Segurança Pública.", "B) Ministério da Educação unicamente.", "C) Comando da Marinha.", "D) Conselho de Arquitetura."], answer: 0 },
    { materia: "LegislacaoGCM", subject: "Legislação da Guarda", text: "60. Diante de calamidade pública ou grande evento no Município, a Guarda Municipal atua de forma integrada com a:", options: ["A) Defesa Civil e demais órgãos de segurança.", "B) Apenas empresas privadas de vigilância.", "C) Junta Comercial Estadual.", "D) Receita Federal."], answer: 0 },

    // DIREITO PENAL, PROCESSUAL PENAL E LEGISLAÇÃO ESPECIAL (61 a 80)
    { materia: "PenalEspecial", subject: "Direito Penal & Especial", text: "61. Nos termos do Código Penal (Art. 147), o crime de Ameaça é de Ação Penal Pública:", options: ["A) Incondicionada.", "B) Condicionada à representação do ofendido.", "C) Privada exclusivamente.", "D) Condicionada à requisição do Prefeito."], answer: 1 },
    { materia: "PenalEspecial", subject: "Direito Penal & Especial", text: "62. O prazo decadencial para que o ofendido exerça o direito de representação na Ação Penal Pública Condicionada é de:", options: ["A) 30 dias do fato.", "B) 6 meses contados do dia em que vier a saber quem é o autor do crime.", "C) 1 ano da abertura do inquérito.", "D) 3 meses do registro."], answer: 1 },
    { materia: "PenalEspecial", subject: "Direito Penal & Especial", text: "63. No CTB (Lei 9.503/97), deixar o condutor de prestar socorro à vítima de acidente quando possível fazê-lo é:", options: ["A) Infração administrativa leve apenas.", "B) Crime de trânsito (Art. 304 do CTB).", "C) Contravenção penal de perturbação.", "D) Mero ilícito civil sem sanção penal."], answer: 1 },
    { materia: "PenalEspecial", subject: "Direito Penal & Especial", text: "64. Segundo a Lei de Crimes Ambientais (Lei nº 9.605/1998), as penas aplicáveis às pessoas jurídicas incluem:", options: ["A) Prisão do conselho fiscal.", "B) Multa, penas restritivas de direitos e prestação de serviços à comunidade.", "C) Cassação de direitos políticos de sócios.", "D) Prisão disciplinar obrigatória."], answer: 1 },
    { materia: "PenalEspecial", subject: "Direito Penal & Especial", text: "65. Na apreensão de produtos ou fauna de infração ambiental, a lei prevê que os produtos perecíveis serão:", options: ["A) Vendidos sem laudo imediatamente.", "B) Avaliados e doados a instituições científicas, hospitalares ou assistenciais.", "C) Sempre devolvidos ao infrator.", "D) Incinerados sem qualquer registro."], answer: 1 },
    { materia: "PenalEspecial", subject: "Direito Penal & Especial", text: "66. Exigir, para si ou para outrem, em razão da função pública, vantagem indevida configura o crime de:", options: ["A) Concussão (Art. 316 do CP).", "B) Corrupção passiva.", "C) Prevaricação.", "D) Peculato culposo."], answer: 0 },
    { materia: "PenalEspecial", subject: "Direito Penal & Especial", text: "67. Solicitar ou receber, para si ou para outrem, em razão da função, vantagem indevida é o crime de:", options: ["A) Concussão.", "B) Corrupção passiva (Art. 317 do CP).", "C) Prevaricação.", "D) Advocacia administrativa."], answer: 1 },
    { materia: "PenalEspecial", subject: "Direito Penal & Especial", text: "68. Retardar ou deixar de praticar ato de ofício para satisfazer interesse ou sentimento pessoal é crime de:", options: ["A) Concussão.", "B) Corrupção ativa.", "C) Prevaricação (Art. 319 do CP).", "D) Condescendência criminosa."], answer: 2 },
    { materia: "PenalEspecial", subject: "Direito Penal & Especial", text: "69. Qualquer do povo PODERÁ e as autoridades policiais DEVERÃO prender quem quer que seja encontrado em:", options: ["A) Atitude suspeita noturna.", "B) Flagrante delito.", "C) Débito fiscal municipal.", "D) Desobediência administrativa."], answer: 1 },
    { materia: "PenalEspecial", subject: "Direito Penal & Especial", text: "70. Considera-se em flagrante delito quem:", options: ["A) Está cometendo a infração penal ou acaba de cometê-la.", "B) É apenas citado em redes sociais.", "C) Possui antecedentes criminais antigos.", "D) É parente de investigado."], answer: 0 },
    { materia: "PenalEspecial", subject: "Direito Penal & Especial", text: "71. O crime de desobediência (Art. 330 do CP) consiste em desobedecer a ordem legal de:", options: ["A) Funcionário público.", "B) Empregado de empresa privada.", "C) Síndico de prédio residencial.", "D) Qualquer cidadão eleitor."], answer: 0 },
    { materia: "PenalEspecial", subject: "Direito Penal & Especial", text: "72. O crime de desacato (Art. 331 do CP) configura-se quando o agente desacata funcionário público no exercício da função ou:", options: ["A) Em razão dela.", "B) Apenas fora do expediente comercial.", "C) Exclusivamente se houver agressão física.", "D) Mediante uso de arma."], answer: 0 },
    { materia: "PenalEspecial", subject: "Direito Penal & Especial", text: "73. Dirigir veículo automotor sem habilitação gerando perigo de dano é previsto no Art. 309 do CTB como:", options: ["A) Mero ilícito administrativo.", "B) Crime de trânsito.", "C) Contravenção penal extinguível.", "D) Falta grave disciplinar."], answer: 1 },
    { materia: "PenalEspecial", subject: "Direito Penal & Especial", text: "74. O crime de peculato-apropriação (Art. 312 do CP) ocorre quando o funcionário apropria-se de bem móvel que tem a posse em razão do:", options: ["A) Seu cargo ou função pública.", "B) Seu contrato bancário privado.", "C) Seu histórico eleitoral.", "D) Seu grau de parentesco com a vítima."], answer: 0 },
    { materia: "PenalEspecial", subject: "Direito Penal & Especial", text: "75. Submeter o preso a constrangimento não autorizado em lei configura crime de abuso de autoridade conforme a:", options: ["A) Lei Federal nº 13.869/2019.", "B) Lei de Contravenções Penais.", "C) Consolidação das Leis do Trabalho.", "D) Lei de Licitações Pública."], answer: 0 },
    { materia: "PenalEspecial", subject: "Direito Penal & Especial", text: "76. A lesão corporal culposa na direção de veículo automotor (Art. 303 do CTB) exige, via de regra, para ação penal:", options: ["A) Representação da vítima.", "B) Prisão preventiva imediata sem fiança.", "C) Julgamento por júri popular.", "D) Queixa-crime privada."], answer: 0 },
    { materia: "PenalEspecial", subject: "Direito Penal & Especial", text: "77. Inovar artificiosamente o estado de lugar, de coisa ou de pessoa para induzir o perito a erro configura:", options: ["A) Fraude processual (Art. 347 do CP).", "B) Falso testemunho.", "C) Prevaricação.", "D) Usurpação de função."], answer: 0 },
    { materia: "PenalEspecial", subject: "Direito Penal & Especial", text: "78. Fazer afirmação falsa ou calar a verdade como testemunha ou perito em inquérito ou processo é crime de:", options: ["A) Falso testemunho ou falsa perícia (Art. 342 do CP).", "B) Denunciação caluniosa.", "C) Coação no curso do processo.", "D) Desobediência simples."], answer: 0 },
    { materia: "PenalEspecial", subject: "Direito Penal & Especial", text: "79. Usar de violência ou grave ameaça para favorecer interesse próprio contra pessoa que funciona em processo é:", options: ["A) Coação no curso do processo (Art. 344 do CP).", "B) Resistência passiva.", "C) Ameaça comum.", "D) Concussão."], answer: 0 },
    { materia: "PenalEspecial", subject: "Direito Penal & Especial", text: "80. Opor-se à execução de ato legal mediante violência ou ameaça a funcionário competente configura o crime de:", options: ["A) Resistência (Art. 329 do CP).", "B) Desobediência.", "C) Desacato.", "D) Lesão corporal leve."], answer: 0 },

    // DIREITOS HUMANOS E LEGISLAÇÃO SOCIAL (81 a 100)
    { materia: "DireitosHumanos", subject: "Direitos Humanos", text: "81. A Declaração Universal dos Direitos Humanos (DUDH) estabelece que todos os seres humanos nascem livres e iguais em:", options: ["A) Dignidade e direitos.", "B) Renda e patrimônio.", "C) Cargo público e escolaridade.", "D) Nacionalidade e religião."], answer: 0 },
    { materia: "DireitosHumanos", subject: "Direitos Humanos", text: "82. Segundo a DUDH, a escravidão e o tráfico de escravos serão proibidos em:", options: ["A) Todas as suas formas.", "B) Apenas durante tempos de paz.", "C) Salvo se houver sentença penal.", "D) Apenas para menores."], answer: 0 },
    { materia: "DireitosHumanos", subject: "Direitos Humanos", text: "83. Conforme o Artigo 5º da DUDH, ninguém será submetido a tortura nem a tratamento ou castigo:", options: ["A) Cruel, desumano ou degradante.", "B) Exclusivamente pecuniário.", "C) Fixado por autoridade judicial.", "D) De prestação comunitária."], answer: 0 },
    { materia: "DireitosHumanos", subject: "Direitos Humanos", text: "84. O Estatuto da Criança e do Adolescente (ECA - Lei 8.069/90) considera criança a pessoa até:", options: ["A) 12 anos de idade incompletos.", "B) 14 anos completos.", "C) 10 anos incompletos.", "D) 18 anos de idade."], answer: 0 },
    { materia: "DireitosHumanos", subject: "Direitos Humanos", text: "85. Nos termos do ECA, considera-se adolescente a pessoa entre:", options: ["A) 12 e 18 anos de idade.", "B) 10 e 16 anos de idade.", "C) 14 e 21 anos de idade.", "D) 16 e 18 anos completos."], answer: 0 },
    { materia: "DireitosHumanos", subject: "Direitos Humanos", text: "86. É dever de todos assegurar, com absoluta prioridade, os direitos da criança e do adolescente, expressando o princípio da:", options: ["A) Proteção Integral e Absoluta Prioridade.", "B) Responsabilidade exclusiva do Estado.", "C) Subsidiariedade penal.", "D) Prevenção especial restrita."], answer: 0 },
    { materia: "DireitosHumanos", subject: "Direitos Humanos", text: "87. As medidas socioeducativas aplicáveis ao adolescente pelo ECA incluem prestação de serviços, semiliberdade e:", options: ["A) Internação em estabelecimento educacional.", "B) Prisão disciplinar militar.", "C) Multa com penhora de bens.", "D) Prestação de trabalho forçado."], answer: 0 },
    { materia: "DireitosHumanos", subject: "Direitos Humanos", text: "88. A internação provisória do adolescente em ato infracional pode ser determinada pelo juiz pelo prazo máximo de:", options: ["A) 45 dias.", "B) 30 dias.", "C) 90 dias.", "D) 180 dias."], answer: 0 },
    { materia: "DireitosHumanos", subject: "Direitos Humanos", text: "89. Nenhum menor de 18 anos poderá ser apreendido senão em flagrante de ato infracional ou por:", options: ["A) Ordem escrita e fundamentada da autoridade judiciária competente.", "B) Solicitação verbal de qualquer policial.", "C) Requerimento de vizinhos.", "D) Decisão do Conselho Tutelar."], answer: 0 },
    { materia: "DireitosHumanos", subject: "Direitos Humanos", text: "90. A Lei Brasileira de Inclusão da Pessoa com Deficiência (Lei nº 13.146/2015) destina-se a promover a sua:", options: ["A) Inclusão social e cidadania.", "B) Segregação em instituições fechadas.", "C) Tutela permanente obrigatória.", "D) Isenção irrestrita de penalidades."], answer: 0 },
    { materia: "DireitosHumanos", subject: "Direitos Humanos", text: "91. Considera-se pessoa com deficiência aquela que tem impedimento de longo prazo em interação com barreiras em:", options: ["A) Igualdade de condições com as demais pessoas.", "B) Caráter secundário apenas.", "C) Dependência exclusiva de terceiros.", "D) Regime de curatela obrigatória."], answer: 0 },
    { materia: "DireitosHumanos", subject: "Direitos Humanos", text: "92. É dever de todos comunicar à autoridade competente qualquer forma de violação aos direitos da pessoa com deficiência, via:", options: ["A) Proteção e denúncia comunitária.", "B) Sigilo obrigatório público.", "C) Assistência privada remunerada.", "D) Notificação fiscal."], answer: 0 },
    { materia: "DireitosHumanos", subject: "Direitos Humanos", text: "93. Todo ser humano tem direito a um padrão de vida capaz de assegurar saúde e bem-estar. Esse trecho integra o Artigo 25 da:", options: ["A) Declaração Universal dos Direitos Humanos.", "B) Consolidação das Leis do Trabalho.", "C) Lei de Licitações.", "D) Lei de Improbidade."], answer: 0 },
    { materia: "DireitosHumanos", subject: "Direitos Humanos", text: "94. Segundo a DUDH, todo ser humano tem direito de deixar qualquer país, inclusive o próprio, e a este:", options: ["A) Regressar.", "B) Renunciar sem taxas.", "C) Pedir restituição fiscal.", "D) Doar seu patrimônio."], answer: 0 },
    { materia: "DireitosHumanos", subject: "Direitos Humanos", text: "95. O Conselho Tutelar é composto em cada Município por:", options: ["A) 5 membros, escolhidos pela população local para mandato de 4 anos.", "B) 3 membros, nomeados pelo Prefeito por tempo indeterminado.", "C) 10 membros, indicados pela Câmara de Vereadores.", "D) Agentes concursados da Guarda."], answer: 0 },
    { materia: "DireitosHumanos", subject: "Direitos Humanos", text: "96. Entende-se por ato infracional, para os efeitos do Estatuto da Criança e do Adolescente (ECA), a conduta descrita como:", options: ["A) Crime ou contravenção penal.", "B) Apenas falta disciplinar escolar.", "C) Violação exclusiva de regras de trânsito.", "D) Ilícito civil sem reponsabilidade."], answer: 0 },
    { materia: "DireitosHumanos", subject: "Direitos Humanos", text: "97. A DUDH prevê que todo ser humano tem o direito de procurar asilo, SALVO em caso de perseguição motivada por:", options: ["A) Crimes de direito comum ou atos contrários aos princípios da ONU.", "B) Divergência de opinião política pacífica.", "C) Exercício da liberdade de imprensa.", "D) Origem étnica."], answer: 0 },
    { materia: "DireitosHumanos", subject: "Direitos Humanos", text: "98. Segundo a DUDH, a instrução elemental e fundamental será gratuita e:", options: ["A) Obrigatória.", "B) Facultativa.", "C) Paga pelo aluno.", "D) Exclusivamente militar."], answer: 0 },
    { materia: "DireitosHumanos", subject: "Direitos Humanos", text: "99. Nos termos da Lei Brasileira de Inclusão, edifícios e transportes coletivos devem garantir acessibilidade para:", options: ["A) Pessoas com deficiência ou com mobilidade reduzida.", "B) Apenas idosos acima de 80 anos.", "C) Exclusivamente cadeirantes.", "D) Somente residentes locais."], answer: 0 },
    { materia: "DireitosHumanos", subject: "Direitos Humanos", text: "100. A Lei do Castigo Físico (Lei nº 13.010/2014) assegura o direito da criança e do adolescente de serem educados sem o uso de:", options: ["A) Castigos físicos ou tratamento cruel ou degradante.", "B) Tarefas domésticas educativas.", "C) Limites e horários de estudo.", "D) Diálogo familiar disciplinar."], answer: 0 }
];

let superQuestoesAtuais = [];
let superIndex = 0;
let superRespostas = [];

document.querySelectorAll('.materia-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const materiaEscolhida = btn.getAttribute('data-materia');

        if (materiaEscolhida === 'Todas') {
            superQuestoesAtuais = [...superBancoQuestoes];
            document.getElementById('super-titulo-materia').innerText = "Simulado Geral (Todas as 100 Questões)";
        } else {
            superQuestoesAtuais = superBancoQuestoes.filter(q => q.materia === materiaEscolhida);
            document.getElementById('super-titulo-materia').innerText = `Matéria: ${btn.innerText}`;
        }

        if (superQuestoesAtuais.length === 0) {
            alert("Ainda estamos cadastrando mais questões para esta disciplina específica!");
            return;
        }

        superRespostas = new Array(superQuestoesAtuais.length).fill(null);
        superIndex = 0;

        document.getElementById('super-menu').classList.add('hidden');
        document.getElementById('super-quiz-area').classList.remove('hidden');
        document.getElementById('super-result-area').classList.add('hidden');

        initSuperGrid();
        loadSuperQuestion(0);
    });
});

const voltarMenuBtn = document.getElementById('voltar-menu-btn');
if (voltarMenuBtn) {
    voltarMenuBtn.addEventListener('click', () => {
        document.getElementById('super-quiz-area').classList.add('hidden');
        document.getElementById('super-menu').classList.remove('hidden');
    });
}

const superRestartBtn = document.getElementById('super-restart-btn');
if (superRestartBtn) {
    superRestartBtn.addEventListener('click', () => {
        document.getElementById('super-result-area').classList.add('hidden');
        document.getElementById('super-menu').classList.remove('hidden');
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

    document.getElementById('super-q-subject').innerText = q.subject;
    document.getElementById('super-q-number').innerText = `Questão ${index + 1} de ${superQuestoesAtuais.length}`;
    document.getElementById('super-q-text').innerText = q.text;

    const optContainer = document.getElementById('super-options-container');
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
            document.getElementById('super-quiz-area').classList.add('hidden');
            document.getElementById('super-result-area').classList.remove('hidden');

            let acertos = 0;
            superRespostas.forEach((ans, idx) => {
                if (ans === superQuestoesAtuais[idx].answer) acertos++;
            });

            document.getElementById('super-score-display').innerText = `${acertos} / ${superQuestoesAtuais.length}`;
            document.getElementById('super-score-feedback').innerText = acertos === superQuestoesAtuais.length ?
                "Perfeito! Domínio total da matéria." : "Bom treino! Continue revisando os pontos que errou.";
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

// --- Motor do Simulado RLM ---
let rlmCurrentIndex = 0;
let rlmUserAnswers = new Array(rlmQuestions.length).fill(null);

const startRlmBtn = document.getElementById('start-rlm-btn');
const rlmIntro = document.getElementById('rlm-intro');
const rlmQuizArea = document.getElementById('rlm-quiz-area');
const rlmResultArea = document.getElementById('rlm-result-area');

if (startRlmBtn) {
    startRlmBtn.addEventListener('click', () => {
        rlmIntro.classList.add('hidden');
        rlmQuizArea.classList.remove('hidden');
        rlmCurrentIndex = 0;
        rlmUserAnswers = new Array(rlmQuestions.length).fill(null);
        loadRlmQuestion(rlmCurrentIndex);
        buildRlmGrid();
        startRlmTimer();
    });
}

function loadRlmQuestion(index) {
    const q = rlmQuestions[index];
    document.getElementById('rlm-q-number').innerText = `Questão ${index + 1} de ${rlmQuestions.length}`;
    document.getElementById('rlm-q-text').innerText = q.question;

    const optionsContainer = document.getElementById('rlm-options-container');
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
    const grid = document.getElementById('rlm-question-grid');
    grid.innerHTML = '';
    rlmQuestions.forEach((_, i) => {
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

document.getElementById('rlm-next-q-btn').addEventListener('click', () => {
    if (rlmCurrentIndex < rlmQuestions.length - 1) {
        rlmCurrentIndex++;
        loadRlmQuestion(rlmCurrentIndex);
    }
});

document.getElementById('rlm-prev-q-btn').addEventListener('click', () => {
    if (rlmCurrentIndex > 0) {
        rlmCurrentIndex--;
        loadRlmQuestion(rlmCurrentIndex);
    }
});

document.getElementById('rlm-finish-btn').addEventListener('click', () => {
    let score = 0;
    rlmQuestions.forEach((q, i) => {
        if (rlmUserAnswers[i] === q.answer) score++;
    });

    rlmQuizArea.classList.add('hidden');
    rlmResultArea.classList.remove('hidden');
    document.getElementById('rlm-score-display').innerText = `${score} / ${rlmQuestions.length}`;
});

document.getElementById('rlm-restart-btn').addEventListener('click', () => {
    rlmResultArea.classList.add('hidden');
    rlmIntro.classList.remove('hidden');
});

// --- Cronômetro do Simulado RLM ---
let rlmTimerInterval;
let rlmTotalSeconds = 3 * 60 * 60; // 3 horas em segundos

function startRlmTimer() {
    clearInterval(rlmTimerInterval);
    rlmTotalSeconds = 3 * 60 * 60; // Reseta para 3 horas
    const timerDisplay = document.getElementById('rlm-timer');

    if (!timerDisplay) return;

    rlmTimerInterval = setInterval(() => {
        if (rlmTotalSeconds <= 0) {
            clearInterval(rlmTimerInterval);
            alert("O tempo do simulado esgotou!");
            document.getElementById('rlm-finish-btn').click();
            return;
        }

        rlmTotalSeconds--;
        const hours = Math.floor(rlmTotalSeconds / 3600);
        const minutes = Math.floor((rlmTotalSeconds % 3600) / 60);
        const seconds = rlmTotalSeconds % 60;

        timerDisplay.innerHTML = `<i class="fa-solid fa-clock"></i> ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
}

// ==========================================
// MOTOR DO SIMULADO DE INFORMÁTICA (100Q)
// ==========================================

let infoCurrentIndex = 0;
let infoUserAnswers = new Array(infoQuestions.length).fill(null);
let infoTimerInterval;
let infoTotalSeconds = 4 * 60 * 60; // 4 horas para 100 questões

const startInfoBtn = document.getElementById('start-info-btn');
const infoIntro = document.getElementById('info-intro');
const infoQuizArea = document.getElementById('info-quiz-area');
const infoResultArea = document.getElementById('info-result-area');
const infoQuestionGrid = document.getElementById('info-question-grid');
const infoQNumber = document.getElementById('info-q-number');
const infoQText = document.getElementById('info-q-text');
const infoOptionsContainer = document.getElementById('info-options-container');
const infoPrevBtn = document.getElementById('info-prev-q-btn');
const infoNextBtn = document.getElementById('info-next-q-btn');
const infoFinishBtn = document.getElementById('info-finish-btn');
const infoRestartBtn = document.getElementById('info-restart-btn');
const infoExitBtn = document.getElementById('info-exit-btn');

// Iniciar Simulado de Informática
if (startInfoBtn) {
    startInfoBtn.addEventListener('click', () => {
        infoIntro.classList.add('hidden');
        infoQuizArea.classList.remove('hidden');
        infoCurrentIndex = 0;
        infoUserAnswers = new Array(infoQuestions.length).fill(null);
        loadInfoQuestion(infoCurrentIndex);
        buildInfoGrid();
        startInfoTimer();
    });
}

// Cronômetro de Informática (4 horas)
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

// Carregar Questão
function loadInfoQuestion(index) {
    const q = infoQuestions[index];
    infoQNumber.textContent = `Questão ${index + 1} de ${infoQuestions.length}`;
    infoQText.textContent = q.question;
    infoOptionsContainer.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D', 'E'];

    q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        if (infoUserAnswers[index] === i) {
            btn.classList.add('selected');
        }
        btn.innerHTML = `<strong>${letters[i]})</strong> ${opt}`;
        btn.addEventListener('click', () => selectInfoOption(i));
        infoOptionsContainer.appendChild(btn);
    });

    infoPrevBtn.disabled = index === 0;
    infoNextBtn.textContent = index === infoQuestions.length - 1 ? "Rever Prova" : "Próxima ➔";
}

// Selecionar Alternativa
function selectInfoOption(optionIndex) {
    infoUserAnswers[infoCurrentIndex] = optionIndex;
    loadInfoQuestion(infoCurrentIndex);
    updateInfoGridItem(infoCurrentIndex);
}

// Navegação
if (infoNextBtn) {
    infoNextBtn.addEventListener('click', () => {
        if (infoCurrentIndex < infoQuestions.length - 1) {
            infoCurrentIndex++;
            loadInfoQuestion(infoCurrentIndex);
        } else {
            // Se estiver na última, avança para o final ou confirma
            if (confirm("Deseja finalizar e ver o resultado da prova?")) {
                finishInfoExam();
            }
        }
    });
}

if (infoPrevBtn) {
    infoPrevBtn.addEventListener('click', () => {
        if (infoCurrentIndex > 0) {
            infoCurrentIndex--;
            loadInfoQuestion(infoCurrentIndex);
        }
    });
}

// Construir Gabarito Lateral (1 a 100)
function buildInfoGrid() {
    if (!infoQuestionGrid) return;
    infoQuestionGrid.innerHTML = '';
    for (let i = 0; i < infoQuestions.length; i++) {
        const box = document.createElement('button'); // ou div
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

// Finalizar Prova
if (infoFinishBtn) {
    infoFinishBtn.addEventListener('click', () => {
        if (confirm("Tem certeza de que deseja finalizar o simulado de informática?")) {
            finishInfoExam();
        }
    });
}

function finishInfoExam() {
    clearInterval(infoTimerInterval);
    infoQuizArea.classList.add('hidden');
    infoResultArea.classList.remove('hidden');

    let score = 0;
    infoQuestions.forEach((q, i) => {
        if (infoUserAnswers[i] === q.answer) {
            score++;
        }
    });

    const scoreDisplay = document.getElementById('info-score-display');
    if (scoreDisplay) {
        scoreDisplay.textContent = `${score} / ${infoQuestions.length}`;
    }
}

// Botão Sair do Simulado de Informática
if (infoExitBtn) {
    infoExitBtn.addEventListener('click', () => {
        if (confirm("Deseja realmente sair do simulado? O seu progresso atual será reiniciado.")) {
            clearInterval(infoTimerInterval);
            infoQuizArea.classList.add('hidden');
            infoResultArea.classList.add('hidden');
            infoIntro.classList.remove('hidden');
        }
    });
}

// Tentar Novamente
if (infoRestartBtn) {
    infoRestartBtn.addEventListener('click', () => {
        infoResultArea.classList.add('hidden');
        infoIntro.classList.remove('hidden');
    });
}