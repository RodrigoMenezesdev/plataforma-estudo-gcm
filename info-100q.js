const infoQuestions = [
    {
        id: 1,
        subject: "Noções de Informática",
        topic: "Windows",
        question: "No sistema operacional Microsoft Windows, qual atalho de teclado é utilizado para abrir o 'Explorador de Arquivos' diretamente?",
        options: ["Ctrl + E", "Windows + E", "Alt + E", "Ctrl + Shift + E", "Windows + D"],
        answer: 1,
        explanation: "O atalho de teclado Windows + E abre rapidamente o Explorador de Arquivos (File Explorer) no Windows."
    },
    {
        id: 2,
        subject: "Noções de Informática",
        topic: "Windows",
        question: "Qual ferramenta nativa do Windows é utilizada para gerenciar processos em execução, verificar o uso de CPU e memória RAM, e fechar aplicações travadas?",
        options: ["Painel de Controle", "Gerenciador de Tarefas", "Prompt de Comando", "Editor de Registro", "Desfragmentador de Disco"],
        answer: 1,
        explanation: "O Gerenciador de Tarefas (Task Manager) permite monitorar o desempenho do sistema e finalizar tarefas ou processos que não respondem."
    },
    {
        id: 3,
        subject: "Noções de Informática",
        topic: "Microsoft Word",
        question: "No Microsoft Word, qual é a função do atalho de teclado 'Ctrl + S' (ou Ctrl + B dependendo da versão localizada) quando acionado em um documento ativo?",
        options: ["Localizar texto", "Salvar o documento", "Substituir palavras", "Selecionar tudo", "Imprimir o documento"],
        answer: 1,
        explanation: "O atalho Ctrl + S (em inglês, Save) ou Ctrl + B (Salvar) é universalmente utilizado para salvar as alterações do documento ativo."
    },
    {
        id: 4,
        subject: "Noções de Informática",
        topic: "Microsoft Excel",
        question: "No Microsoft Excel, qual função é utilizada para retornar a média aritmética de um intervalo de células selecionadas?",
        options: ["SOMA", "MÉDIA", "CONT.VALORES", "SE", "PROCX"],
        answer: 1,
        explanation: "A função MÉDIA calcula a média aritmética dos números contidos no intervalo de células especificado."
    },
    {
        id: 5,
        subject: "Noções de Informática",
        topic: "Microsoft Excel",
        question: "Em uma planilha do Excel, uma fórmula que se inicia com o símbolo de cifrão fixando uma linha ou coluna é chamada de:",
        options: ["Referência Relativa", "Referência Absoluta", "Função Condicional", "Erro de Sintaxe", "Matriz Dinâmica"],
        answer: 1,
        explanation: "O uso do cifrão ($), como em $A$1 ou A$1, define uma referência absoluta ou mista, fixando a coluna e/ou a linha ao copiar fórmulas."
    },
    {
        id: 6,
        subject: "Noções de Informática",
        topic: "Segurança da Informação",
        question: "Assinale a alternativa que define corretamente um tipo de software malicioso (malware) projetado para se disfarçar de um programa legítimo e útil, mas que executa funções maliciosas ocultas quando executado:",
        options: ["Ransomware", "Worm", "Cavalo de Troia (Trojan)", "Spyware", "Adware"],
        answer: 2,
        explanation: "O Cavalo de Troia (Trojan) simula ser um programa inofensivo ou desejável para enganar o usuário, abrindo brechas ou executando cargas maliciosas em segundo plano."
    },
    {
        id: 7,
        subject: "Noções de Informática",
        topic: "Segurança da Informação",
        question: "O tipo de malware que sequestra os dados do computador, criptografando os ficheiros do usuário e exigindo o pagamento de resgate (geralmente em criptomoedas) para a liberação da chave de descriptografia é denominado:",
        options: ["Keylogger", "Ransomware", "Botnet", "Phishing", "Rootkit"],
        answer: 1,
        explanation: "O Ransomware é o software malicioso focado em extorsão financeira através da criptografia de dados vitais da vítima."
    },
    {
        id: 8,
        subject: "Noções de Informática",
        topic: "Redes e Internet",
        question: "Qual protocolo é utilizado na Internet para a transferência segura de páginas web, garantindo a criptografia dos dados trocados entre o navegador e o servidor através de certificados digitais?",
        options: ["HTTP", "FTP", "HTTPS", "SMTP", "POP3"],
        answer: 2,
        explanation: "O HTTPS (HyperText Transfer Protocol Secure) utiliza camadas de segurança (como SSL/TLS) para criptografar a comunicação web."
    },
    {
        id: 9,
        subject: "Noções de Informática",
        topic: "Redes e Internet",
        question: "Dentre os protocolos de correio eletrônico abaixo, assinale aquele que é utilizado especificamente para o **envio** de mensagens de e-mail:",
        options: ["POP3", "IMAP", "SMTP", "HTTP", "TCP"],
        answer: 2,
        explanation: "O SMTP (Simple Mail Transfer Protocol) é o protocolo padrão da internet dedicado ao transporte e envio de mensagens de correio eletrônico."
    },
    {
        id: 10,
        subject: "Noções de Informática",
        topic: "Conceitos de Hardware",
        question: "Qual dos componentes abaixo é considerado a memória primária volátil do computador, responsável por armazenar temporariamente os dados e instruções dos programas em execução?",
        options: ["Disco Rígido (HDD)", "Memória ROM", "Memória RAM", "Pen Drive", "Unidade SSD"],
        answer: 2,
        explanation: "A memória RAM (Random Access Memory) é volátil (perde os dados ao desligar o computador) e armazena os processos ativos da CPU."
    },
    {
        id: 11,
        subject: "Noções de Informática",
        topic: "Windows",
        question: "No ambiente Windows, qual é a extensão padrão associada aos ficheiros compactados que podem ser abertos de forma nativa pelo sistema operacional sem a necessidade de softwares de terceiros?",
        options: [".rar", ".zip", ".tar", ".7z", ".gz"],
        answer: 1,
        explanation: "O Windows possui suporte nativo para compactação e descompactação de pastas e ficheiros no formato .zip."
    },
    {
        id: 12,
        subject: "Noções de Informática",
        topic: "Microsoft Word",
        question: "No editor de texto Microsoft Word, o recurso 'Pincel de Formatação' tem como principal utilidade:",
        options: ["Inserir imagens e formas geométricas", "Copiar a formatação de um texto e aplicá-la rapidamente a outro", "Corrigir erros gramaticais automaticamente", "Salvar o documento em formato PDF", "Alterar o idioma padrão do corretor ortográfico"],
        answer: 1,
        explanation: "O Pincel de Formatação serve para capturar os atributos visuais de um trecho de texto (como fonte, tamanho, cor e estilo) e colá-los noutro local."
    },
    {
        id: 13,
        subject: "Noções de Informática",
        topic: "Microsoft Excel",
        question: "No Excel, se uma célula exibe o erro `#####`, isso geralmente indica que:",
        options: ["Ocorreu uma divisão por zero", "A fórmula contém uma referência de célula inválida", "A coluna é muito estreita para exibir o número ou data formatado", "O nome da função foi digitado incorretamente", "Não há dados suficientes no intervalo"],
        answer: 2,
        explanation: "O erro de sequência de hashtags (`#####`) significa que a largura da coluna é insuficiente para acomodar o valor numérico ou a data contida na célula."
    },
    {
        id: 14,
        subject: "Noções de Informática",
        topic: "Segurança da Informação",
        question: "O golpe de engenharia social no qual criminosos enviam mensagens falsas (por e-mail, SMS ou aplicativos de chat) simulando instituições financeiras ou órgãos públicos para induzir o usuário a fornecer dados confidenciais é chamado de:",
        options: ["Phishing", "Spoofing", "DDoS", "Sniffing", "Firewall"],
        answer: 0,
        explanation: "Phishing (pescaria digital) é a técnica fraudulenta de roubo de identidade e credenciais mediante o uso de comunicações enganosas."
    },
    {
        id: 15,
        subject: "Noções de Informática",
        topic: "Redes e Internet",
        question: "O dispositivo de hardware de rede que opera na camada de rede (Camada 3 do modelo OSI) interligando diferentes redes e determinando a melhor rota para o tráfego de pacotes de dados é o:",
        options: ["Switch", "Hub", "Roteador", "Repetidor", "Modem ADSL"],
        answer: 2,
        explanation: "O Roteador (Router) é o equipamento inteligente encarregado de encaminhar pacotes de dados entre redes distintas."
    },
    {
        id: 16,
        subject: "Noções de Informática",
        topic: "Conceitos de Hardware",
        question: "Unidades de armazenamento em estado sólido baseadas em memória flash, conhecidas comercialmente como **SSD**, substituíram progressivamente os discos rígidos tradicionais (HDD) por apresentarem:",
        options: ["Maior fragilidade a impactos mecânicos", "Tempo de acesso e taxas de leitura/escrita consideravelmente superiores", "Necessidade constante de desfragmentação física de trilhas", "Capacidade de armazenamento exclusivamente volátil", "Incompatibilidade com sistemas operacionais modernos"],
        answer: 1,
        explanation: "Os SSDs não possuem partes mecânicas móveis, o que garante velocidades de leitura e escrita muito mais rápidas e maior resistência física."
    },
    {
        id: 17,
        subject: "Noções de Informática",
        topic: "Windows",
        question: "Qual atalho de teclado no Windows minimiza todas as janelas abertas e exibe instantaneamente a Área de Trabalho (Desktop)?",
        options: ["Windows + M", "Windows + D", "Ctrl + D", "Alt + Tab", "Windows + L"],
        answer: 1,
        explanation: "O atalho Windows + D alterna diretamente para a visualização da Área de Trabalho."
    },
    {
        id: 18,
        subject: "Noções de Informática",
        topic: "Microsoft Word",
        question: "Para inserir uma quebra de página manual no Microsoft Word, forçando o início imediato de uma nova página, pode-se utilizar o atalho de teclado:",
        options: ["Ctrl + Enter", "Shift + Enter", "Alt + Enter", "Ctrl + Shift + P", "Tab + Enter"],
        answer: 0,
        explanation: "O atalho Ctrl + Enter insere uma quebra de página de forma direta no documento."
    },
    {
        id: 19,
        subject: "Noções de Informática",
        topic: "Microsoft Excel",
        question: "No Excel, qual operador matemático é utilizado para indicar a exponenciação (potenciação) em uma fórmula?",
        options: ["*", "^", "%", "#", "&"],
        answer: 1,
        explanation: "O acento circunflexo (^), como em `=2^3`, é o operador padrão de exponenciação no Excel."
    },
    {
        id: 20,
        subject: "Noções de Informática",
        topic: "Segurança da Informação",
        question: "O sistema de segurança (hardware ou software) que atua como uma barreira de controle de tráfego entre uma rede interna confiável e a internet externa, filtrando pacotes com base em regras de segurança, chama-se:",
        options: ["Antivírus", "Firewall", "Proxy Reverso", "Certificado SSL", "Switch Gerenciável"],
        answer: 1,
        explanation: "O Firewall monitora e filtra o tráfego de entrada e saída com base em políticas de segurança preestabelecidas."
    },
    {
        id: 21,
        subject: "Noções de Informática",
        topic: "Redes e Internet",
        question: "Assinale a alternativa que apresenta uma porta padrão comumente utilizada pelo protocolo seguro **HTTPS**:",
        options: ["Porta 21", "Porta 25", "Porta 80", "Porta 443", "Porta 110"],
        answer: 3,
        explanation: "A porta padrão designada para conexões seguras via HTTPS é a porta 443 (enquanto o HTTP padrão utiliza a porta 80)."
    },
    {
        id: 22,
        subject: "Noções de Informática",
        topic: "Windows",
        question: "No explorador de ficheiros do Windows, ao selecionar um ficheiro e pressionar a combinação de teclas **Shift + Delete**, o resultado prático é:",
        options: ["O ficheiro é enviado diretamente para a Lixeira", "O ficheiro é duplicado na mesma pasta", "O ficheiro é excluído permanentemente, sem passar pela Lixeira", "O ficheiro é compactado em formato zip", "As propriedades do ficheiro são exibidas"],
        answer: 2,
        explanation: "O comando Shift + Delete apaga o ficheiro de forma definitiva, contornando o armazenamento temporário na Lixeira."
    },
    {
        id: 23,
        subject: "Noções de Informática",
        topic: "Microsoft Word",
        question: "No Word, a ferramenta de verificação que sugere sinônimos e palavras com significados semelhantes para enriquecer o vocabulário do texto é o:",
        options: ["Corretor Ortográfico", "Dicionário de Sinônimos (Tesauro)", "Controle de Alterações", "Painel de Navegação", "Marcador de Texto"],
        answer: 1,
        explanation: "O recurso de Tesauro (Dicionário de Sinônimos) auxilia na busca por palavras equivalentes e sinônimos adequados."
    },
    {
        id: 24,
        subject: "Noções de Informática",
        topic: "Microsoft Excel",
        question: "Qual função do Excel realiza a contagem do número de células que contêm valores numéricos dentro de um determinado intervalo?",
        options: ["CONT.SE", "CONTAR.VAZIO", "CONT.VALORES", "CONT.NUM", "SOMA"],
        answer: 3,
        explanation: "A função CONT.NUM conta exclusivamente as células que possuem dados numéricos no intervalo indicado."
    },
    {
        id: 25,
        subject: "Noções de Informática",
        topic: "Conceitos de Software",
        question: "Os softwares que possuem código-fonte aberto, permitindo que qualquer usuário os estude, modifique, aperfeiçoe e redistribua livremente, são classificados como:",
        options: ["Software Proprietário", "Software de Código Aberto (Open Source)", "Shareware", "Freeware comercial", "Abandonware"],
        answer: 1,
        explanation: "O Software de Código Aberto (Open Source) baseia-se na liberdade de acesso, modificação e partilha do código-fonte."
    },
    {
        id: 26,
        subject: "Noções de Informática",
        topic: "Windows",
        question: "No Microsoft Windows, qual combinação de teclas permite abrir diretamente o menu de Configurações (Settings) do sistema?",
        options: ["Windows + I", "Windows + S", "Windows + R", "Windows + X", "Ctrl + Alt + Del"],
        answer: 0,
        explanation: "O atalho Windows + I aciona diretamente a janela principal de Configurações do Windows."
    },
    {
        id: 27,
        subject: "Noções de Informática",
        topic: "Windows",
        question: "Para abrir a ferramenta de linha de comando (Prompt de Comando) executando comandos administrativos de forma rápida através da caixa 'Executar', digita-se:",
        options: ["notepad", "cmd", "calc", "mspaint", "explorer"],
        answer: 1,
        explanation: "O comando 'cmd' invoca o interpretador de comandos do Windows."
    },
    {
        id: 28,
        subject: "Noções de Informática",
        topic: "Microsoft Word",
        question: "No Microsoft Word, qual guia da faixa de opções (Ribbon) abriga as ferramentas de verificação ortográfica, controle de alterações e contagem de palavras?",
        options: ["Página Inicial", "Inserir", "Design", "Revisão", "Exibição"],
        answer: 3,
        explanation: "A guia Revisão (Review) centraliza os recursos de gramática, ortografia, comentários, controle de alterações e tradução."
    },
    {
        id: 29,
        subject: "Noções de Informática",
        topic: "Microsoft Word",
        question: "No editor de texto Word, o recurso que permite criar cartas circulares ou etiquetas enviadas a múltiplos destinatários personalizados a partir de uma base de dados externa é conhecido como:",
        options: ["Macros", "Mala Direta (Mail Merge)", "Hiperlink Dinâmico", "Estilos Rápidos", "Formatação Condicional"],
        answer: 1,
        explanation: "A Mala Direta automatiza a geração de documentos em lote combinando um modelo padrão com dados de destinatários."
    },
    {
        id: 30,
        subject: "Noções de Informática",
        topic: "Microsoft Excel",
        question: "No Microsoft Excel, se uma fórmula for digitada na célula B2 como `=A$1`, o que acontece se essa fórmula for copiada e colada para a célula B3?",
        options: ["A referência continuará apontando rigidamente para A$1", "A referência mudará automaticamente para A$2", "A referência mudará para B$1", "O Excel exibirá um erro de referência circular", "A célula retornará um valor vazio"],
        answer: 0,
        explanation: "Como a linha 1 está travada pelo cifrão ($A$1), ao arrastar a fórmula para baixo, a coluna e a linha mantêm-se fixas na célula A1."
    },
    {
        id: 31,
        subject: "Noções de Informática",
        topic: "Microsoft Excel",
        question: "Qual função do Excel é utilizada para realizar buscas de valores em uma linha horizontal ou vertical, retornando um valor correspondente na mesma posição de outra linha ou coluna?",
        options: ["PROCV / PROCX", "SOMA", "CONT.VALORES", "MEDIA", "EXT.TEXTO"],
        answer: 0,
        explanation: "As funções PROCV (Vertical) e PROCX (Avançada) são empregadas para pesquisar dados em tabelas e planilhas."
    },
    {
        id: 32,
        subject: "Noções de Informática",
        topic: "Segurança da Informação",
        question: "O conceito de segurança da informação que garante que a informação seja acessível e utilizável apenas por pessoas autorizadas, preservando o sigilo dos dados, refere-se ao princípio da:",
        options: ["Integridade", "Disponibilidade", "Confidencialidade", "Autenticidade", "Não repúdio"],
        answer: 2,
        explanation: "A Confidencialidade assegura que dados sensíveis não sejam divulgados a entidades não autorizadas."
    },
    {
        id: 33,
        subject: "Noções de Informática",
        topic: "Segurança da Informação",
        question: "O princípio de segurança que garante que o documento ou transação eletrônica não possa ser negado pelo seu autor posteriormente, comprovando a autoria, é conhecido como:",
        options: ["Integridade", "Autenticidade", "Disponibilidade", "Não repúdio (ou irretratabilidade)", "Confidencialidade"],
        answer: 3,
        explanation: "O Não repúdio impede que um utilizador negue a autoria de uma mensagem ou transação realizada digitalmente."
    },
    {
        id: 34,
        subject: "Noções de Informática",
        topic: "Redes e Internet",
        question: "Qual é o nome dado ao endereço numérico lógico exclusivo que identifica cada dispositivo conectado a uma rede de computadores que utiliza o protocolo IP (versão 4)?",
        options: ["Endereço MAC", "Endereço IP", "URL", "DNS", "Gateway Padrão"],
        answer: 1,
        explanation: "O Endereço IP (Internet Protocol) atua como a identificação lógica de nós e computadores em redes IP."
    },
    {
        id: 35,
        subject: "Noções de Informática",
        topic: "Redes e Internet",
        question: "O serviço de infraestrutura de rede responsável por traduzir nomes de domínios fáceis de memorizar (como `www.gov.br`) em endereços IP numéricos compreensíveis pelos roteadores é o:",
        options: ["DHCP", "DNS", "FTP", "HTTP", "SNMP"],
        answer: 1,
        explanation: "O DNS (Domain Name System) funciona como a 'lista telefônica' da internet, convertendo nomes textuais em endereços IP."
    },
    {
        id: 36,
        subject: "Noções de Informática",
        topic: "Conceitos de Hardware",
        question: "Em arquitetura de computadores, qual é a unidade central de processamento responsável por executar instruções de programas, realizar cálculos e gerenciar o fluxo de dados?",
        options: ["Placa de Vídeo (GPU)", "Processador (CPU)", "Fonte de Alimentação", "Memória ROM", "Barramento PCI"],
        answer: 1,
        explanation: "A CPU (Central Processing Unit) é o cérebro do computador, encarregada do processamento lógico e aritmético."
    },
    {
        id: 37,
        subject: "Noções de Informática",
        topic: "Windows",
        question: "Qual recurso do Windows permite criar múltiplos ambientes de trabalho virtuais na mesma tela para organizar janelas de aplicativos abertos de forma separada?",
        options: ["Painel de Tarefas", "Visão de Tarefas (Task View)", "Gerenciador de Dispositivos", "Prompt Avançado", "Centro de Ação"],
        answer: 1,
        explanation: "A Visão de Tarefas (Windows + Tab) permite gerenciar áreas de trabalho virtuais independentes."
    },
    {
        id: 38,
        subject: "Noções de Informática",
        topic: "Microsoft Word",
        question: "No Microsoft Word, qual é a finalidade principal do recurso 'Controlar Alterações' (Track Changes)?",
        options: ["Impedir que arquivos sejam editados por qualquer usuário", "Registrar e destacar adições, exclusões e formatações feitas por diferentes revisores no texto", "Converter automaticamente o documento em formato web HTML", "Restaurar versões anteriores salvas na nuvem", "Proteger o documento com senha de criptografia forte"],
        answer: 1,
        explanation: "O Controle de Alterações rastreia todas as edições efetuadas num documento colaborativo para auditoria e revisão posterior."
    },
    {
        id: 39,
        subject: "Noções de Informática",
        topic: "Microsoft Excel",
        question: "No Excel, se a célula A1 contém o valor 10 e a célula B1 contém o valor `=SE(A1>5; 'Aprovado'; 'Reprovado')`, qual será o resultado exibido na célula B1?",
        options: ["Aprovado", "Reprovado", "10", "FALSO", "VERDADEIRO"],
        answer: 0,
        explanation: "Como 10 é maior que 5, a condição lógica é verdadeira, retornando o primeiro argumento ('Aprovado')."
    },
    {
        id: 40,
        subject: "Noções de Informática",
        topic: "Segurança da Informação",
        question: "O código malicioso que se propaga autonomamente pela rede explorando vulnerabilidades em sistemas, infectando computadores sem a necessidade de um arquivo hospedeiro ou ação direta do usuário, é denominado:",
        options: ["Cavalo de Troia", "Worm (Verme)", "Spyware", "Adware", "Rootkit"],
        answer: 1,
        explanation: "O Worm diferencia-se por sua capacidade de autorreplicação e propagação automática através de redes."
    },
    {
        id: 41,
        subject: "Noções de Informática",
        topic: "Redes e Internet",
        question: "Qual é a porta padrão utilizada pelo protocolo de transferência de hipertexto não criptografado (**HTTP**) na internet?",
        options: ["Porta 21", "Porta 25", "Porta 80", "Porta 443", "Porta 110"],
        answer: 2,
        explanation: "O protocolo HTTP padrão opera na porta 80."
    },
    {
        id: 42,
        subject: "Noções de Informática",
        topic: "Windows",
        question: "No Windows, o atalho de teclado composto pelas teclas **Windows + L** tem como utilidade prática imediata:",
        options: ["Localizar ficheiros no computador", "Bloquear a sessão do usuário (Lock Screen)", "Desligar o sistema operacional", "Abrir o navegador web padrão", "Minimizar todas as janelas ativas"],
        answer: 1,
        explanation: "O atalho Windows + L bloqueia o computador instantaneamente, exigindo senha ou PIN para retornar."
    },
    {
        id: 43,
        subject: "Noções de Informática",
        topic: "Microsoft Word",
        question: "No Word, qual tecla de função (F1 a F12) aciona de forma rápida o recurso de verificação ortográfica e gramatical (Ortografia e Gramática)?",
        options: ["F1", "F4", "F7", "F10", "F12"],
        answer: 2,
        explanation: "A tecla F7 é o atalho padrão do pacote Office para iniciar a verificação ortográfica."
    },
    {
        id: 44,
        subject: "Noções de Informática",
        topic: "Microsoft Excel",
        question: "No Excel, qual função calcula o número total de células preenchidas com qualquer tipo de dado (texto ou número) em um intervalo?",
        options: ["CONT.NUM", "CONT.VALORES (COUNTA)", "CONTAR.VAZIO", "SOMA", "MÉDIA"],
        answer: 1,
        explanation: "A função CONT.VALORES conta todas as células que não estão vazias, independentemente do tipo de conteúdo."
    },
    {
        id: 45,
        subject: "Noções de Informática",
        topic: "Segurança da Informação",
        question: "O programa espião instalado sorrateiramente em um computador para monitorar as ações do usuário, capturando teclas digitadas (para roubo de senhas) ou registrando imagens da tela, é chamado de:",
        options: ["Firewall", "Keylogger / Spyware", "Ransomware", "Worm", "Antivírus"],
        answer: 1,
        explanation: "Keyloggers e spyware são categorias de programas voltados à coleta sigilosa de informações pessoais da vítima."
    },
    {
        id: 46,
        subject: "Noções de Informática",
        topic: "Redes e Internet",
        question: "Em redes sem fio (Wi-Fi), qual protocolo de segurança atual oferece criptografia mais robusta e avançada para proteger as conexões contra acessos não autorizados em comparação aos antigos WEP e WPA?",
        options: ["WPA3", "WEP", "HTTP", "TCP/IP", "FTP"],
        answer: 0,
        explanation: "O padrão WPA3 representa a geração mais recente e segura de criptografia para redes sem fio."
    },
    {
        id: 47,
        subject: "Noções de Informática",
        topic: "Conceitos de Hardware",
        question: "A memória permanente não volátil do computador que armazena os códigos fundamentais de inicialização do sistema (como as rotinas básicas de teste de hardware ao ligar, chamadas de BIOS ou UEFI) é a:",
        options: ["Memória RAM", "Memória ROM", "Disco SSD", "Memória Cache L3", "Memória Virtual"],
        answer: 1,
        explanation: "A memória ROM (Read-Only Memory) armazena permanentemente o firmware de arranque da placa-mãe."
    },
    {
        id: 48,
        subject: "Noções de Informática",
        topic: "Windows",
        question: "No sistema Windows, o comando de teclado **Ctrl + Shift + Esc** aciona diretamente qual utilitário do sistema?",
        options: ["Explorador de Arquivos", "Gerenciador de Tarefas", "Menu Iniciar", "Painel de Controle", "Bloco de Notas"],
        answer: 1,
        explanation: "Ctrl + Shift + Esc abre de forma direta o Gerenciador de Tarefas, dispensando a tela intermediária de bloqueio."
    },
    {
        id: 49,
        subject: "Noções de Informática",
        topic: "Microsoft Word",
        question: "No Microsoft Word, a opção de alinhamento de parágrafo que distribui o texto uniformemente entre as margens esquerda e direita, ajustando automaticamente o espaçamento entre as palavras, chama-se:",
        options: ["Alinhamento à Esquerda", "Alinhamento à Direita", "Centralizado", "Justificado", "Recuo Deslocado"],
        answer: 3,
        explanation: "O alinhamento justificado alinha o texto perfeitamente em ambas as margens laterais."
    },
    {
        id: 50,
        subject: "Noções de Informática",
        topic: "Microsoft Excel",
        question: "No Excel, qual símbolo de erro aparece quando uma fórmula tenta dividir um número por zero ou por uma célula vazia?",
        options: ["#NOME?", "#VALOR!", "#DIV/0!", "#REF!", "#####"],
        answer: 2,
        explanation: "O erro `#DIV/0!` ocorre sempre que há uma tentativa matemática de divisão por zero."
    },
    {
        id: 51,
        subject: "Noções de Informática",
        topic: "Windows",
        question: "No sistema operacional Microsoft Windows, qual atalho de teclado é utilizado para fechar a janela ativa ou aplicativo em primeiro plano atual?",
        options: ["Alt + F4", "Ctrl + F4", "Windows + F4", "Shift + F4", "Ctrl + Alt + F4"],
        answer: 0,
        explanation: "O atalho Alt + F4 fecha imediatamente a janela ativa ou programa em execução no momento."
    },
    {
        id: 52,
        subject: "Noções de Informática",
        topic: "Windows",
        question: "Quando um utilizador pretende renomear rapidamente um ficheiro selecionado no Explorador de Arquivos do Windows sem usar o menu de contexto do rato, qual tecla de função deve pressionar?",
        options: ["F2", "F3", "F5", "F6", "F11"],
        answer: 0,
        explanation: "A tecla F2 é o atalho padrão do Windows para iniciar o modo de renomeação do ficheiro ou pasta selecionada."
    },
    {
        id: 53,
        subject: "Noções de Informática",
        topic: "Microsoft Word",
        question: "No Microsoft Word, qual é a função do atalho de teclado 'Ctrl + U' (ou 'Ctrl + L' dependendo da versão localizada em português)?",
        options: ["Sublinhar o texto selecionado", "Localizar e substituir termos no documento", "Alinhar o texto à esquerda", "Criar um novo documento em branco", "Desfazer a última ação"],
        answer: 1,
        explanation: "O atalho Ctrl + L (ou Ctrl + U na versão internacional de Substitute/Find) abre a caixa de diálogo para localizar e substituir palavras."
    },
    {
        id: 54,
        subject: "Noções de Informática",
        topic: "Microsoft Excel",
        question: "No Microsoft Excel, qual função lógica é utilizada para verificar se **todas** as condições fornecidas são verdadeiras, retornando VERDADEIRO se cumpridas e FALSO caso contrário?",
        options: ["OU (OR)", "E (AND)", "SE (IF)", "NÃO (NOT)", "SEERRO"],
        answer: 1,
        explanation: "A função E (AND) exige que todos os argumentos lógicos avaliados sejam verdadeiros para o resultado ser verdadeiro."
    },
    {
        id: 55,
        subject: "Noções de Informática",
        topic: "Microsoft Excel",
        question: "Em uma planilha eletrônica do Excel, o que representa o símbolo de erro `#VALOR!` em uma célula?",
        options: ["Uso incorreto do tipo de argumento ou operando em uma fórmula matemática", "Coluna estreita para exibir o dado", "Referência de célula apagada ou inválida", "Tentativa de divisão por zero", "Nome de função inexistente"],
        answer: 0,
        explanation: "O erro `#VALOR!` surge quando a fórmula espera um tipo específico de dado (como número) e encontra texto ou outro formato incompatível."
    },
    {
        id: 56,
        subject: "Noções de Informática",
        topic: "Segurança da Informação",
        question: "Dentre as alternativas abaixo, assinale a medida técnica de segurança considerada fundamental para mitigar a perda de dados críticos decorrente de falhas de hardware, ataques de ransomware ou exclusões acidentais:",
        options: ["Desfragmentação semanal do disco rígido", "Realização periódica de cópias de segurança (Backup)", "Desativação total do firewall do sistema operacional", "Atualização constante dos planos de fundo da área de trabalho", "Aumento da resolução da placa gráfica"],
        answer: 1,
        explanation: "O backup regular e isolado dos dados é a principal salvaguarda contra perdas de informação em cenários de incidentes."
    },
    {
        id: 57,
        subject: "Noções de Informática",
        topic: "Segurança da Informação",
        question: "O conceito de segurança que garante que os dados não foram adulterados, modificados ou corrompidos de forma não autorizada durante o seu armazenamento ou transmissão refere-se à:",
        options: ["Confidencialidade", "Disponibilidade", "Integridade", "Autenticidade", "Irretratabilidade"],
        answer: 2,
        explanation: "A Integridade assegura a exatidão e a originalidade da informação, prevenindo alterações indevidas."
    },
    {
        id: 58,
        subject: "Noções de Informática",
        topic: "Redes e Internet",
        question: "Qual protocolo da camada de aplicação da internet é utilizado para a transferência de ficheiros entre computadores através de uma rede cliente-servidor?",
        options: ["FTP", "SMTP", "HTTP", "POP3", "DHCP"],
        answer: 0,
        explanation: "O FTP (File Transfer Protocol) é o protocolo clássico voltado especificamente à movimentação e envio de ficheiros."
    },
    {
        id: 59,
        subject: "Noções de Informática",
        topic: "Redes e Internet",
        question: "O protocolo de rede responsável por atribuir automaticamente endereços IP temporários e parâmetros de configuração de rede aos computadores que se conectam a uma rede local é o:",
        options: ["DNS", "DHCP", "FTP", "HTTPS", "SMTP"],
        answer: 1,
        explanation: "O DHCP (Dynamic Host Configuration Protocol) dinamiza a distribuição de IPs na rede local."
    },
    {
        id: 60,
        subject: "Noções de Informática",
        topic: "Conceitos de Hardware",
        question: "Na estrutura de um computador pessoal, os barramentos e slots de expansão PCI Express localizam-se fisicamente conectados diretamente a qual placa central do sistema?",
        options: ["Placa-Mãe (Motherboard)", "Placa de Rede sem fio", "Unidade de Armazenamento SSD", "Fonte de Alimentação ATX", "Módulo de Memória RAM"],
        answer: 0,
        explanation: "A placa-mãe é o circuito impresso principal que interliga todos os componentes e periféricos do computador."
    },
    {
        id: 61,
        subject: "Noções de Informática",
        topic: "Windows",
        question: "No Windows, qual é a ferramenta integrada de diagnóstico e reparo rápido que permite verificar a integridade dos ficheiros protegidos do sistema operacional?",
        options: ["Comando SFC (System File Checker)", "Gerenciador de Dispositivos", "Desfragmentador de Unidades", "Painel de Acessibilidade", "Monitor de Recursos"],
        answer: 0,
        explanation: "O comando `sfc /scannow` executado no prompt de comando verifica e substitui ficheiros corrompidos do Windows."
    },
    {
        id: 62,
        subject: "Noções de Informática",
        topic: "Microsoft Word",
        question: "No Microsoft Word, qual recurso permite criar elementos visuais estruturados, tais como diagramas organizacionais, fluxogramas e representações hierárquicas de forma automatizada?",
        options: ["WordArt", "SmartArt", "Macros", "Equações Matemáticas", "Marcas d'água"],
        answer: 1,
        explanation: "O SmartArt disponibiliza gráficos e diagramas prontos para ilustrar conceitos e estruturas visuais."
    },
    {
        id: 63,
        subject: "Noções de Informática",
        topic: "Microsoft Excel",
        question: "No Excel, se a célula C1 contém a fórmula `=\$A\$1 + B1` e ela é copiada para a célula C2, a fórmula resultante em C2 será:",
        options: ["=\$A\$1 + B2", "=\$A\$2 + B2", "=\$A\$1 + B1", "=#REF!", "=\$B\$1 + C2"],
        answer: 0,
        explanation: "Como $A$1 está totalmente travada, ela permanece inalterada; já B1, sendo relativa, atualiza a linha para B2."
    },
    {
        id: 64,
        subject: "Noções de Informática",
        topic: "Segurança da Informação",
        question: "O ataque cibernético no qual múltiplos computadores infectados (uma botnet) enviam massivamente um volume colossal de tráfego falso e requisitório contra um servidor web com o objetivo de esgotar seus recursos e derrubar o serviço é conhecido como:",
        options: ["Phishing", "Ataque de Negação de Serviço Distribuída (DDoS)", "Engenharia Social", "Sniffing de Pacotes", "Spoofing de DNS"],
        answer: 1,
        explanation: "O ataque DDoS visa comprometer a Disponibilidade do sistema através da saturação de acessos maliciosos."
    },
    {
        id: 65,
        subject: "Noções de Informática",
        topic: "Redes e Internet",
        question: "Qual é a função do elemento de rede conhecido como **Gateway Padrão** (Default Gateway) em uma rede corporativa ou residencial?",
        options: ["Armazenar backups de segurança locais", "Servir como ponto de saída para o tráfego destinado a outras redes externas (como a internet)", "Criptografar senhas de acesso wi-fi", "Imprimir documentos em rede de forma centralizada", "Traduzir endereços MAC em endereços físicos"],
        answer: 1,
        explanation: "O gateway padrão é o roteador que encaminha pacotes locais para fora da rede de origem."
    },
    {
        id: 66,
        subject: "Noções de Informática",
        topic: "Conceitos de Software",
        question: "Assinale a alternativa que descreve corretamente o software utilitário ou serviço do sistema operacional encarregado de organizar os blocos físicos de dados nos pratos de um disco rígido tradicional (HDD) para otimizar o tempo de leitura:",
        options: ["Desfragmentador de Disco", "Compactador ZIP", "Antivírus em tempo real", "Utilitário de formatação de baixo nível", "Driver de vídeo"],
        answer: 0,
        explanation: "A desfragmentação reorganiza os ficheiros fragmentados no HDD, melhorando a performance geral de acesso."
    },
    {
        id: 67,
        subject: "Noções de Informática",
        topic: "Windows",
        question: "No Windows, qual atalho abre a barra lateral ou painel de Notificações e Ações rápidas (Wi-Fi, Bluetooth, brilho, modo avião)?",
        options: ["Windows + N", "Windows + A", "Windows + S", "Windows + X", "Ctrl + Alt + N"],
        answer: 1,
        explanation: "O atalho Windows + A abre o painel lateral de Central de Ações e configurações rápidas."
    },
    {
        id: 68,
        subject: "Noções de Informática",
        topic: "Microsoft Word",
        question: "No Word, qual é a utilidade do recurso de cabeçalho e rodapé em um documento de várias páginas?",
        options: ["Inserir marcas fixas, números de página ou títulos que se repetem automaticamente no topo ou fundo de todas as folhas", "Proteger o ficheiro contra cópias de texto", "Ajustar o zoom automático da visualização de leitura", "Corrigir a margem de encadernação do documento impresso", "Modificar a paleta de cores padrão das imagens inseridas"],
        answer: 0,
        explanation: "Cabeçalhos e rodapés servem para exibir informações consistentes (como número de páginas e títulos) em todas as páginas do documento."
    },
    {
        id: 69,
        subject: "Noções de Informática",
        topic: "Microsoft Excel",
        question: "No Excel, qual função lógica retorna um valor alternativo caso o resultado de uma fórmula principal resulte em erro?",
        options: ["SE.ERRO (IFERROR)", "SE (IF)", "E (AND)", "PROCV", "CONT.SE"],
        answer: 0,
        explanation: "A função SE.ERRO avalia uma expressão e, se ocorrer qualquer erro, exibe um valor alternativo customizado pelo utilizador."
    },
    {
        id: 70,
        subject: "Noções de Informática",
        topic: "Segurança da Informação",
        question: "O método de ataque cibernético onde um indivíduo mal-intencionado intercepta e capta o tráfego de dados trocado entre dois pontos de uma rede para espionar informações confidenciais é chamado de:",
        options: ["Sniffing (ou escuta de rede)", "Ransomware", "Worm", "Bootnet", "Adware"],
        answer: 0,
        explanation: "O sniffing consiste na monitorização e captura passiva ou ativa de pacotes de dados que trafegam pela rede."
    },
    {
        id: 71,
        subject: "Noções de Informática",
        topic: "Redes e Internet",
        question: "Assinale a alternativa correta referente ao protocolo **POP3** utilizado em correio eletrónico:",
        options: ["Sua principal função é descarregar as mensagens do servidor de e-mail para o dispositivo local, normalmente removendo-as do servidor remoto", "Utiliza a porta 443 para envio de dados criptografados", "Serve exclusivamente para sincronizar pastas IMAP na nuvem", "É o protocolo padrão obrigatório para envio de mensagens web", "Permite navegação anônima em páginas web seguras"],
        answer: 0,
        explanation: "O POP3 descarrega as mensagens do servidor para a máquina local (embora possa opcionalmente deixá-las guardadas por um período)."
    },
    {
        id: 72,
        subject: "Noções de Informática",
        topic: "Windows",
        question: "No ambiente Windows, a barra de ferramentas inferior interativa onde ficam fixados os aplicativos abertos e o Menu Iniciar é denominada:",
        options: ["Barra de Tarefas (Taskbar)", "Área de Trabalho", "Painel de Controle", "Barra de Endereços", "Janela de Contexto"],
        answer: 0,
        explanation: "A Barra de Tarefas centraliza o acesso rápido a aplicações fixadas, atalhos e relógio do sistema."
    },
    {
        id: 73,
        subject: "Noções de Informática",
        topic: "Microsoft Word",
        question: "No editor de texto Microsoft Word, para selecionar integralmente todo o conteúdo contido no documento ativo de uma só vez, utiliza-se o atalho:",
        options: ["Ctrl + T (ou Ctrl + A dependendo da localização)", "Ctrl + S", "Ctrl + P", "Ctrl + C", "Ctrl + B"],
        answer: 0,
        explanation: "O atalho Ctrl + T (em inglês, Ctrl + A para All) seleciona todo o texto do documento."
    },
    {
        id: 74,
        subject: "Noções de Informática",
        topic: "Microsoft Excel",
        question: "No Excel, qual função estatística é utilizada para identificar e retornar o **maior** valor numérico presente em um intervalo de células selecionado?",
        options: ["MIN", "MÁXIMO (MAX)", "MAIOR", "MÉDIA", "CONT.NUM"],
        answer: 1,
        explanation: "A função MÁXIMO localiza o valor de maior magnitude numérica no intervalo indicado."
    },
    {
        id: 75,
        subject: "Noções de Informática",
        topic: "Segurança da Informação",
        question: "O conceito tecnológico que consiste na conversão de dados legíveis em um formato cifrado ilegível por meio de algoritmos matemáticos complexos, exigindo uma chave específica para reversão, chama-se:",
        options: ["Criptografia", "Compactação", "Virtualização", "Indexação", "Normalização"],
        answer: 0,
        explanation: "A criptografia protege a confidencialidade dos dados através de cifragem matemática."
    },
    {
        id: 76,
        subject: "Noções de Informática",
        topic: "Windows",
        question: "No sistema Windows, qual é a função da ferramenta utilitária nativa chamada 'Desfragmentar e Otimizar Unidades'?",
        options: ["Apagar permanentemente ficheiros duplicados do sistema", "Reorganizar os dados fragmentados nos discos rígidos mecânicos para agilizar o acesso", "Aumentar fisicamente a capacidade de armazenamento da memória RAM", "Bloquear o acesso de vírus e malwares em tempo real", "Compactar o sistema operacional em formato .zip"],
        answer: 1,
        explanation: "A otimização e desfragmentação reorganizam os blocos de dados para otimizar o desempenho de leitura de discos magnéticos."
    },
    {
        id: 77,
        subject: "Noções de Informática",
        topic: "Windows",
        question: "Qual atalho de teclado no Windows abre diretamente a caixa de diálogo 'Executar' (Run), permitindo abrir programas e pastas rapidamente digitando comandos?",
        options: ["Windows + R", "Windows + X", "Ctrl + R", "Alt + R", "Windows + P"],
        answer: 0,
        explanation: "O atalho Windows + R invoca a janela 'Executar'."
    },
    {
        id: 78,
        subject: "Noções de Informática",
        topic: "Microsoft Word",
        question: "No Microsoft Word, qual é a finalidade principal da ferramenta de quebra de seção?",
        options: ["Forçar o início de uma nova linha num parágrafo", "Permitir aplicar formatações de página diferentes (como orientação retrato/paisagem ou margens distintas) em partes separadas do mesmo documento", "Apagar o histórico de revisões do documento", "Proteger o documento contra impressões não autorizadas", "Inserir uma tabela dinâmica de dados"],
        answer: 1,
        explanation: "As quebras de seção dividem o documento em blocos independentes de formatação de página."
    },
    {
        id: 79,
        subject: "Noções de Informática",
        topic: "Microsoft Excel",
        question: "No Excel, se uma fórmula contém `=SOMA(A1:A5) + MÁXIMO(B1:B5)`, qual é a ordem padrão de precedência dos operadores matemáticos e funções?",
        options: ["As funções internas (SOMA e MÁXIMO) são calculadas primeiro e depois os seus valores são somados", "A adição é feita antes de avaliar os argumentos dos parênteses", "O Excel calcula da direita para a esquerda obrigatoriamente", "As células são multiplicadas antes da adição", "Ocorre um erro de sintaxe se houver duas funções na mesma fórmula"],
        answer: 0,
        explanation: "As funções e operações dentro de parênteses têm prioridade de execução na hierarquia do Excel."
    },
    {
        id: 80,
        subject: "Noções de Informática",
        topic: "Microsoft Excel",
        question: "Qual função do Excel retorna o menor valor numérico encontrado em um intervalo de células selecionado?",
        options: ["MÁXIMO", "MÉDIA", "MENOR", "MÍNIMO (MIN)", "CONT.NUM"],
        answer: 3,
        explanation: "A função MÍNIMO localiza o menor número dentro do intervalo especificado."
    },
    {
        id: 81,
        subject: "Noções de Informática",
        topic: "Segurança da Informação",
        question: "Assinale a alternativa que descreve uma boa prática recomendada para a criação de senhas de acesso seguras e resistentes a ataques de força bruta:",
        options: ["Utilizar a data de nascimento combinada com o primeiro nome", "Empregar sequências numéricas simples como 123456", "Combinar letras maiúsculas, minúsculas, números e caracteres especiais com um comprimento adequado", "Utilizar a mesma senha em todos os serviços corporativos", "Anotar a senha num papel colado ao monitor do computador"],
        answer: 2,
        explanation: "Senhas robustas exigem complexidade mista de caracteres e boa extensão para evitar quebra por adivinhação."
    },
    {
        id: 82,
        subject: "Noções de Informática",
        topic: "Segurança da Informação",
        question: "O mecanismo de autenticação que exige duas ou mais formas independentes de verificação de identidade (como uma senha e um código numérico enviado por SMS ou gerado por aplicativo) é conhecido como:",
        options: ["Autenticação de Fator Único", "Autenticação Multifator (MFA / 2FA)", "Criptografia Simétrica Avançada", "Assinatura Digital Básica", "Certificado SSL Self-Signed"],
        answer: 1,
        explanation: "A Autenticação Multifator (MFA ou 2FA) eleva significativamente a segurança ao exigir barreiras extras de comprovação de identidade."
    },
    {
        id: 83,
        subject: "Noções de Informática",
        topic: "Redes e Internet",
        question: "O conjunto de protocolos fundamental que sustenta a comunicação e o endereçamento na internet, composto pelas camadas de transporte e rede, é denominado:",
        options: ["TCP/IP", "HTTP/HTML", "SMTP/POP3", "FTP/SFTP", "DNS/DHCP"],
        answer: 0,
        explanation: "O TCP/IP é a suíte de protocolos padrão que viabiliza a interconexão de redes e a troca de pacotes na internet."
    },
    {
        id: 84,
        subject: "Noções de Informática",
        topic: "Redes e Internet",
        question: "Em uma rede local (LAN), qual equipamento opera na Camada 2 (Camada de Enlace) do modelo OSI, encaminhando frames com base nos endereços físicos (endereço MAC) dos dispositivos conectados?",
        options: ["Roteador", "Switch", "Hub", "Modem ADSL", "Repetidor de sinal"],
        answer: 1,
        explanation: "O Switch é o comutador de rede inteligente que utiliza endereços MAC para direcionar o tráfego localmente."
    },
    {
        id: 85,
        subject: "Noções de Informática",
        topic: "Conceitos de Hardware",
        question: "Qual das seguintes memórias do computador possui a maior velocidade de acesso e menor capacidade de armazenamento, ficando situada fisicamente o mais próximo possível do núcleo da CPU?",
        options: ["Memória RAM principal", "Memória Cache (L1/L2/L3)", "Disco Rígido SSD NVMe", "Unidade de CD/DVD", "Memória ROM BIOS"],
        answer: 1,
        explanation: "A memória cache integrada à CPU é ultrarrápida, servindo para guardar dados de uso imediato do processador."
    },
    {
        id: 86,
        subject: "Noções de Informática",
        topic: "Windows",
        question: "No Windows, qual atalho de teclado abre diretamente a ferramenta de pesquisa global do sistema para localizar aplicações, ficheiros e configurações?",
        options: ["Windows + S", "Windows + D", "Windows + E", "Ctrl + F", "Alt + S"],
        answer: 0,
        explanation: "O atalho Windows + S (ou Windows + Q) abre a barra de pesquisa integrada do Windows."
    },
    {
        id: 87,
        subject: "Noções de Informática",
        topic: "Microsoft Word",
        question: "No Word, para alterar rapidamente todas as ocorrências de uma palavra específica por outro termo em todo o documento, qual atalho de teclado pode ser empregado?",
        options: ["Ctrl + H (Localizar e Substituir)", "Ctrl + F", "Ctrl + B", "Ctrl + P", "Ctrl + G"],
        answer: 0,
        explanation: "O atalho Ctrl + H aciona diretamente a aba de substituição em massa de termos no texto."
    },
    {
        id: 88,
        subject: "Noções de Informática",
        topic: "Microsoft Excel",
        question: "No Excel, se inserirmos a fórmula `=HOJE()`, o que ela retornará na célula?",
        options: ["A hora exata atual do sistema", "A data atual do sistema formatada", "O dia da semana por extenso", "O número de dias decorridos no ano", "Um erro de sintaxe"],
        answer: 1,
        explanation: "A função `=HOJE()` retorna a data atual do sistema operacional, atualizando-se dinamicamente."
    },
    {
        id: 89,
        subject: "Noções de Informática",
        topic: "Microsoft Excel",
        question: "Qual função do Excel retorna tanto a data quanto a hora atual do sistema em tempo real?",
        options: ["=DATA()", "=HORA()", "=AGORA()", "=TEMPO()", "=CALENDARIO()"],
        answer: 2,
        explanation: "A função `=AGORA()` (NOW) exibe a data e a hora correntes combinadas na célula."
    },
    {
        id: 90,
        subject: "Noções de Informática",
        topic: "Segurança da Informação",
        question: "Assinale a alternativa que indica um exemplo clássico de engenharia social voltado a obter informações confidenciais de forma sorrateira através de conversas ou simulação de suporte técnico:",
        options: ["Ataque de força bruta por software robô", "Enganação de um funcionário por telefone simulando ser o administrador de redes para capturar senhas", "Intercepção de pacotes cifrados por sniffing", "Formatação acidental de disco rígido", "Queda de energia por descarga elétrica"],
        answer: 1,
        explanation: "A engenharia social manipula a psicologia humana para burlar a segurança da informação sem recorrer a invasões puramente técnicas."
    },
    {
        id: 91,
        subject: "Noções de Informática",
        topic: "Redes e Internet",
        question: "O protocolo seguro utilizado para acesso remoto criptografado a servidores em modo texto (substituindo o antigo e inseguro Telnet) é o:",
        options: ["SSH (Secure Shell)", "FTP", "HTTP", "SMTP", "POP3"],
        answer: 0,
        explanation: "O SSH fornece um canal seguro e cifrado para administração remota de sistemas e computadores."
    },
    {
        id: 92,
        subject: "Noções de Informática",
        topic: "Windows",
        question: "No Explorador de Arquivos do Windows, qual guia superior do menu Ribbon deve ser selecionada para visualizar extensões de nomes de ficheiros e itens ocultos?",
        options: ["Página Inicial", "Compartilhar", "Exibir (View)", "Ferramentas de Disco", "Editar"],
        answer: 2,
        explanation: "A aba 'Exibir' concentra opções de visualização, incluindo mostrar ficheiros ocultos e extensões."
    },
    {
        id: 93,
        subject: "Noções de Informática",
        topic: "Microsoft Word",
        question: "No editor Microsoft Word, qual é a utilidade do recurso de 'Marcas d'água' (Watermark)?",
        options: ["Inserir textos transparentes ou logotipos no fundo das páginas do documento, geralmente indicando confidencialidade", "Apagar marcas de formatação ocultas", "Corrigir falhas de impressão na impressora", "Inserir cabeçalhos dinâmicos em formato gráfico", "Criptografar o documento com senha de abertura"],
        answer: 0,
        explanation: "Marcas d'água servem para identificar o status do documento (ex: 'Confidencial', 'Minuta') ao fundo do texto."
    },
    {
        id: 94,
        subject: "Noções de Informática",
        topic: "Microsoft Excel",
        question: "No Excel, se quisermos contar quantas células preenchidas de um intervalo atendem a um critério específico (por exemplo, contar quantas vezes aparece a palavra 'Aprovado'), qual função devemos usar?",
        options: ["CONT.VALORES", "CONT.SE (COUNTIF)", "SOMA", "PROCV", "MÉDIA"],
        answer: 1,
        explanation: "A função CONT.SE efetua a contagem condicional de células com base num critério pré-definido."
    },
    {
        id: 95,
        subject: "Noções de Informática",
        topic: "Segurança da Informação",
        question: "O tipo de software antivírus que atua escaneando ficheiros assim que estes são descarregados, abertos ou executados no sistema opera no modo conhecido como:",
        options: ["Varredura em tempo real (on-access)", "Varredura offline manual exclusiva", "Firewall de borda de rede", "Criptografia de disco rígido", "Servidor DNS primário"],
        answer: 0,
        explanation: "A proteção em tempo real monitora ativamente as atividades do sistema para bloquear ameaças no momento da execução."
    },
    {
        id: 96,
        subject: "Noções de Informática",
        topic: "Redes e Internet",
        question: "O protocolo de correio eletrônico que permite gerenciar e sincronizar as mensagens diretamente no servidor de e-mail, mantendo-as acessíveis de múltiplos dispositivos sem necessariamente removê-las da nuvem, é o:",
        options: ["POP3", "IMAP", "SMTP", "HTTP", "FTP"],
        answer: 1,
        explanation: "O IMAP (Internet Message Access Protocol) mantém os e-mails sincronizados no servidor, ideal para acesso multiplataforma."
    },
    {
        id: 97,
        subject: "Noções de Informática",
        topic: "Conceitos de Hardware",
        question: "Qual dispositivo de armazenamento secundário utiliza discos magnéticos circulares que giram em alta velocidade sob cabeças de leitura/gravação magnéticas?",
        options: ["Disco Rígido (HDD)", "Memória RAM", "Unidade SSD em estado sólido", "Memória Cache", "Cartão de memória Flash"],
        answer: 0,
        explanation: "O HDD tradicional emprega discos mecânicos magnetizados e cabeças de leitura físicas."
    },
    {
        id: 98,
        subject: "Noções de Informática",
        topic: "Windows",
        question: "No Windows, o que ocorre quando se utiliza o atalho **Windows + Shift + S**?",
        options: ["Bloqueia o computador imediatamente", "Abre a ferramenta de captura de ecrã (Recorte de tela) para selecionar uma área e copiá-la para a área de transferência", "Abre o explorador de ficheiros", "Minimiza todas as janelas ativas", "Reinicia o sistema operacional"],
        answer: 1,
        explanation: "O atalho Windows + Shift + S aciona a ferramenta de captura rápida de ecrã do Windows."
    },
    {
        id: 99,
        subject: "Noções de Informática",
        topic: "Microsoft Word",
        question: "No Microsoft Word, qual é a função da combinação de teclas 'Ctrl + N' (ou 'Ctrl + B' dependendo da tradução da versão para Negrito)?",
        options: ["Criar um novo documento", "Aplicar o estilo de Negrito ao texto selecionado", "Imprimir o documento ativo", "Salvar o documento atual", "Abrir um arquivo existente"],
        answer: 1,
        explanation: "O atalho Ctrl + N (em inglês, Ctrl + B para Bold) aplica a formatação de negrito ao texto."
    },
    {
        id: 100,
        subject: "Noções de Informática",
        topic: "Microsoft Excel",
        question: "No Excel, qual é o resultado lógico gerado pela fórmula `=E(5>3; 10<20)`?",
        options: ["VERDADEIRO", "FALSO", "#VALOR!", "#DIV/0!", "0"],
        answer: 0,
        explanation: "Como 5 é maior que 3 (Verdadeiro) e 10 é menor que 20 (Verdadeiro), a função E retorna VERDADEIRO."
    }
];