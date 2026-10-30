// ==========================================
// BANCO DE QUESTÕES - GUARDA MUNICIPAL SÃO GONÇALO (200 QUESTÕES UNIFICADAS)
// Categorias:
// 1. legislacao-guarda (40Q) - Leis 13.022 e 13.675
// 2. extravagante (40Q) - Leis Penais Extravagantes
// 3. constitucional-administrativo (40Q) - CF/88 e LIA
// 4. penal-processual (40Q) - Código Penal e CPP
// 5. estatutos-municipais (40Q) - Leis Municipais 1.416/2022 e 1.625/2026
// ==========================================

const especificasQuestions = [
    // ==================================================================
    // 1. LEGISLAÇÃO DA GUARDA MUNICIPAL (LEIS 13.022 E 13.675) - 40 QUESTÕES
    // ==================================================================
    {
        topic: "legislacao-guarda",
        question: "De acordo com a Lei Federal nº 13.022/2014 (Estatuto Geral das Guardas Municipais), qual é um dos princípios mínimos de atuação das guardas municipais?",
        options: [
            "Uso discricionário e ilimitado da força em manifestações públicas.",
            "Proteção dos direitos humanos fundamentais, do exercício da cidadania e das liberdades públicas.",
            "Atuação ostensiva e exclusiva na investigação de crimes contra o patrimônio municipal.",
            "Subordinação direta às Forças Armadas em operações de garantia da lei e da ordem.",
            "Independência operacional absoluta em relação aos órgãos de segurança pública estaduais e federais."
        ],
        correct: 1,
        explanation: "O art. 3º da Lei nº 13.022/2014 estabelece como princípios mínimos de atuação das guardas municipais a proteção aos direitos humanos fundamentais, ao exercício da cidadania e às liberdades públicas."
    },
    {
        topic: "legislacao-guarda",
        question: "Conforme a Lei nº 13.022/2014, compete às guardas municipais, entre outras atribuições, o seguinte:",
        options: [
            "Realizar policiamento ostensivo de trânsito em rodovias federais e estaduais sem convênio.",
            "Conduzir inquéritos policiais por meio de delegados de polícia municipais.",
            "Proteger os bens, serviços, instalações e recursos do Município.",
            "Executar prisões em flagrante delito fora do território municipal em perseguição contínua sem comunicação prévia.",
            "Exercer competência exclusiva de polícia judiciária no âmbito municipal."
        ],
        correct: 2,
        explanation: "O art. 4º da Lei nº 13.022/2014 define que compete às guardas municipais a proteção dos bens, serviços, instalações e recursos do Município."
    },
    {
        topic: "legislacao-guarda",
        question: "A criação de Guarda Municipal é facultativa para os Municípios. No entanto, segundo a Lei nº 13.022/2014, o controle externo do funcionamento da guarda municipal será exercido por:",
        options: [
            "Conselho Nacional de Justiça (CNJ) e Tribunais Regionais Federais.",
            "Comando do Exército Brasileiro.",
            "Ministério da Justiça e Segurança Pública exclusivamente.",
            "Conselho Municipal de Segurança Pública, além de controle interno por corregedoria e ouvidoria.",
            "Tribunal de Contas da União (TCU) e Polícia Federal."
        ],
        correct: 3,
        explanation: "A lei prevê o controle interno através de corregedoria própria (nas guardas com mais de 20 servidores) e ouvidoria, além do controle externo social/conselhos."
    },
    {
        topic: "legislacao-guarda",
        question: "No âmbito do Sistema Único de Segurança Pública (SUSP), instituído pela Lei nº 13.675/2018, as guardas municipais integram o SUSP como:",
        options: [
            "Órgãos de atuação complementar e integrada na segurança pública.",
            "Órgãos centrais de deliberação financeira do Fundo Nacional.",
            "Unidades subordinadas diretamente ao Ministério da Defesa.",
            "Entidades privadas de apoio operacional voluntário.",
            "Órgãos de fiscalização tributária municipal."
        ],
        correct: 0,
        explanation: "As guardas municipais integram o SUSP como órgãos operacionais de segurança pública, atuando de forma integrada."
    },
    {
        topic: "legislacao-guarda",
        question: "Segundo a Lei Federal nº 13.022/2014, para o provimento do cargo de guarda municipal, exige-se, entre outros requisitos:",
        options: [
            "Ensino superior completo em Direito ou Segurança Pública.",
            "Idade máxima de 45 anos no momento da posse.",
            "Ensino médio completo e aprovação em concurso público.",
            "Experiência prévia de 2 anos em forças armadas ou segurança privada.",
            "CNH obrigatória nas categorias C, D e E."
        ],
        correct: 2,
        explanation: "Entre os requisitos para investidura no cargo estão o ensino médio completo e a aprovação em concurso público de provas ou de provas e títulos."
    },
    {
        topic: "legislacao-guarda",
        question: "De acordo com a Lei nº 13.022/2014, as guardas municipais podem, em situações de urgência e calamidade:",
        options: [
            "Assumir o comando exclusivo das Forças Armadas no município.",
            "Colaborar de forma integrada com os demais órgãos de segurança pública em operações conjuntas.",
            "Exercer funções privativas de polícia judiciária e investigação criminal de homicídios.",
            "Determinar o bloqueio de contas bancárias de investigados por corrupção.",
            "Emitir mandados de prisão preventiva independentemente de ordem judicial."
        ],
        correct: 1,
        explanation: "As guardas municipais atuam de forma integrada com os demais órgãos de segurança pública, conforme o espírito do SUSP e da Lei 13.022/2014."
    },
    {
        topic: "legislacao-guarda",
        question: "No que concerne ao uniforme e equipamentos das guardas municipais, a Lei nº 13.022/2014 estabelece que:",
        options: [
            "O uso de uniforme azul-marinho é obrigatório, sendo vedado o uso de qualquer equipamento de proteção letal.",
            "O uniforme e o equipamento operacional devem seguir padronização específica, sendo o uso de armas de fogo regulamentado por lei própria.",
            "Os agentes podem utilizar vestimentas civis livremente durante o patrulhamento ostensivo.",
            "O armamento letal é de uso exclusivo e restrito das Forças Armadas e Polícias Militares.",
            "A guarda municipal não possui prerrogativa para portar nenhum tipo de equipamento de menor potencial ofensivo."
        ],
        correct: 1,
        explanation: "A legislação prevê a padronização de uniforme e equipamentos, com regras claras para o porte de armas e itens operacionais."
    },
    {
        topic: "legislacao-guarda",
        question: "A fiscalização e o controle das atividades das guardas municipais, além da corregedoria interna (quando exigida), envolvem também a participação da sociedade civil através de:",
        options: [
            "Conselhos Municipais de Segurança Pública.",
            "Tribunais Regionais Eleitorais.",
            "Sindicatos patronais do comércio local.",
            "Conselhos tutelares da infância e juventude exclusivamente.",
            "Auditorias fiscais da Receita Federal."
        ],
        correct: 0,
        explanation: "O controle externo social é exercido tipicamente por conselhos municipais de segurança pública ou equivalentes."
    },
    {
        topic: "legislacao-guarda",
        question: "Segundo a Lei Federal nº 13.022/2014, a competência das guardas municipais para colaborar com os órgãos de segurança pública compreende operações conjuntas, EXCETO:",
        options: [
            "Ações coordenadas com a Polícia Federal no combate a crimes ambientais e federais.",
            "Patrulhamento ostensivo de trânsito em rodovias estaduais sem prévio convênio.",
            "Apoio em operações de defesa civil e calamidades públicas.",
            "Ações integradas de preservação da ordem pública e incolumidade das pessoas.",
            "Segurança de grandes eventos e proteção de autoridades municipais."
        ],
        correct: 1,
        explanation: "O patrulhamento de trânsito em rodovias estaduais ou federais depende estritamente de convênio formal, não sendo competência nativa isolada da guarda municipal fora de suas atribuições locais."
    },
    {
        topic: "legislacao-guarda",
        question: "Conforme o Estatuto Geral das Guardas Municipais, o quantitativo de servidores para a criação obrigatória de corregedoria própria em regime permanente é de guardas municipais superior a:",
        options: [
            "10 servidores.",
            "20 servidores.",
            "50 servidores.",
            "100 servidores.",
            "500 servidores."
        ],
        correct: 1,
        explanation: "O art. 13 da Lei nº 13.022/2014 estabelece que as guardas municipais serão dotadas de corregedoria própria, nas guardas com mais de 20 servidores."
    },
    {
        topic: "legislacao-guarda",
        question: "De acordo com a Lei nº 13.675/2018 (SUSP), constitui diretriz do Sistema Único de Segurança Pública:",
        options: [
            "A centralização absoluta das decisões operacionais na esfera federal.",
            "A valorização dos profissionais de segurança pública e o fomento à integração dos órgãos.",
            "A desmilitarização imediata de todas as forças de segurança estadual.",
            "A extinção gradual das guardas municipais em prol de uma polícia única.",
            "A subordinação exclusiva das polícias civis ao Ministério da Defesa."
        ],
        correct: 1,
        explanation: "A valorização profissional e a integração operacional entre os órgãos são pilares fundamentais trazidos pela lei do SUSP."
    },
    {
        topic: "legislacao-guarda",
        question: "Sobre os deveres e proibições aplicáveis aos integrantes das Guardas Municipais, a atuação funcional exige:",
        options: [
            "Postura ética intransigente, respeito aos direitos fundamentais e uso proporcional da força.",
            "Isolamento absoluto e recusa de cooperação com a Polícia Civil.",
            "Liberdade total para arbitrar penas privativas de liberdade no local da ocorrência.",
            "Atuação partidária institucional em períodos eleitorais municipais.",
            "Uso de força física máxima independentemente do nível de resistência do infrator."
        ],
        correct: 0,
        explanation: "O perfil do guarda municipal exige conduta ética, legalidade estrita e respeito aos direitos humanos."
    },
    {
        topic: "legislacao-guarda",
        question: "A Guarda Municipal, nos termos da legislação federal, tem como uma de suas funções instrumentais colaborar na fiscalização de:",
        options: [
            "Posturas municipais, meio ambiente, trânsito e proteção ao patrimônio histórico.",
            "Arrecadação de tributos federais e imposto de renda da população.",
            "Concessão de patentes industriais e propriedade intelectual.",
            "Controle de câmbio de moedas estrangeiras no comércio local.",
            "Licenciamento de embarcações de grande porte em águas internacionais."
        ],
        correct: 0,
        explanation: "As guardas atuam na proteção dos bens, serviços e instalações, colaborando ativamente com as leis de posturas municipais e meio ambiente."
    },
    {
        topic: "legislacao-guarda",
        question: "O Ouvidor da Guarda Municipal, nos termos do Estatuto Geral das Guardas, tem como atribuição principal:",
        options: [
            "Dirigir o tráfego urbano e aplicar multas de trânsito em caráter exclusivo.",
            "Receber, examinar e encaminhar reclamações, elogios e sugestões da sociedade e dos servidores.",
            "Promover o julgamento sumário e a demissão de servidores sem direito de defesa.",
            "Representar o município em causas judiciais perante o Supremo Tribunal Federal.",
            "Determinar o trancamento de inquéritos policiais militares."
        ],
        correct: 1,
        explanation: "A Ouvidoria atua como canal de transparência e controle social e interno para receber manifestações da sociedade e da corporação."
    },
    {
        topic: "legislacao-guarda",
        question: "A formação dos integrantes das guardas municipais deve atender a matriz curricular nacional estabelecida pelo órgão competente, priorizando:",
        options: [
            "Direitos humanos, uso progressivo da força, técnica operacional e tiro defensivo.",
            "Estratégias de guerra convencional e combate em selva.",
            "Técnicas exclusivas de investigação de crimes financeiros complexos.",
            "Legislação tributária internacional e comércio exterior.",
            "Auditoria contábil e fiscal de empresas privadas."
        ],
        correct: 0,
        explanation: "A matriz curricular nacional para guardas municipais foca em direitos humanos, uso proporcional/progressivo da força e policiamento comunitário."
    },
    {
        topic: "legislacao-guarda",
        question: "A criação de cargos de provimento efetivo na carreira da Guarda Municipal depende impreterivelmente de:",
        options: [
            "Aprovação prévia por decreto isolado do chefe do executivo sem respaldo legal.",
            "Lei municipal específica e aprovação prévia em concurso público de provas ou de provas e títulos.",
            "Autorização por portaria do Ministério da Justiça.",
            "Indicação direta de conselhos comunitários de bairros.",
            "Comprovação de tempo de serviço militar obrigatório."
        ],
        correct: 1,
        explanation: "A investidura e criação de cargos públicos exigem lei formal e concurso público, conforme princípios constitucionais e estatutários."
    },
    {
        topic: "legislacao-guarda",
        question: "De acordo com o Estatuto Geral das Guardas Municipais (Lei nº 13.022/2014), a criação de ouvidoria independente e autônoma é obrigatória para:",
        options: [
            "Todas as guardas municipais, independentemente do contingente de efetivo.",
            "Apenas as guardas municipais situadas em capitais de estados e no Distrito Federal.",
            "As guardas municipais que possuam mais de 20 servidores em seu quadro.",
            "Exclusivamente as corporações que utilizam armamento letal de calibre restrito.",
            "A critério exclusivo do Chefe do Executivo Municipal, sem imposição legal."
        ],
        correct: 2,
        explanation: "O art. 13 da Lei nº 13.022/2014 estabelece que as guardas municipais serão dotadas de corregedoria própria (nas com mais de 20 servidores) e de ouvidoria."
    },
    {
        topic: "legislacao-guarda",
        question: "No que se refere às prerrogativas funcionais dos guardas municipais estabelecidas na Lei nº 13.022/2014, o exercício das competências de proteção municipal deve pautar-se por:",
        options: [
            "Ações sigilosas sem comunicação aos demais órgãos de segurança pública.",
            "Prerrogativas equivalentes às de polícia judiciária e investigação criminal civil.",
            "Uso proporcional da força, respeito à dignidade da pessoa humana e legalidade estrita.",
            "Autonomia para requisitar diretamente mandados judiciais de busca e apreensão.",
            "Isenção total de responsabilidade administrativa em intervenções de força."
        ],
        correct: 2,
        explanation: "A atuação da guarda municipal exige estrito respeito aos direitos fundamentais, legalidade e proporcionalidade no uso da força."
    },
    {
        topic: "legislacao-guarda",
        question: "Segundo a Lei nº 13.675/2018, que instituiu o Sistema Único de Segurança Pública (SUSP), os municípios podem constituir conselhos municipais de segurança como órgãos de:",
        options: [
            "Deliberação financeira e execução orçamentária militar.",
            "Consulta, acompanhamento e fiscalização das políticas de segurança pública locais.",
            "Julgamento privativo de crimes funcionais praticados por servidores.",
            "Inspeção e intervenção direta nas corregedorias estaduais.",
            "Gestão exclusiva do sistema prisional e penitenciário."
        ],
        correct: 1,
        explanation: "Os conselhos municipais atuam no âmbito do SUSP como instâncias de participação social, consulta, acompanhamento e fiscalização das políticas de segurança."
    },
    {
        topic: "legislacao-guarda",
        question: "A atuação das guardas municipais na proteção do patrimônio público municipal abrange a salvaguarda de:",
        options: [
            "Bens de uso comum, bens de uso especial e bens dominicais afetados aos serviços municipais.",
            "Exclusivamente edifícios de representação federal localizados no município.",
            "Imóveis particulares residenciais situados em zonas de risco comercial.",
            "Frotas de transportes interestaduais de passageiros e cargas.",
            "Instalações portuárias e aeroportuárias federais."
        ],
        correct: 0,
        explanation: "O art. 4º da Lei 13.022/2014 define que compete proteger os bens, serviços, instalações e recursos do Município."
    },
    {
        topic: "legislacao-guarda",
        question: "Constitui requisito básico e obrigatório para investidura no cargo de guarda municipal, conforme o Estatuto Geral:",
        options: [
            "Idade mínima de 25 anos e máxima de 60 anos.",
            "Quitação com as obrigações eleitorais e militares.",
            "Posse prévia em outro cargo público federal ou estadual.",
            "Apresentação de certificado de formação em direito penal.",
            "Comprovação de residência fixa no exterior por mais de dois anos."
        ],
        correct: 1,
        explanation: "A legislação federal e as normas estatutárias gerais exigem quitação eleitoral e militar, além de idoneidade moral e aprovação em concurso."
    },
    {
        topic: "legislacao-guarda",
        question: "O patrulhamento preventivo exercido pelas guardas municipais tem como objetivo principal:",
        options: [
            "Substituir o policiamento ostensivo focado das polícias militares estaduais.",
            "Inibir a prática de infrações penais ou administrativas que atentem contra os bens e serviços municipais.",
            "Realizar operações de inteligência e espionagem industrial urbana.",
            "Investigar crimes contra a ordem tributária e sonegação fiscal.",
            "Executar prisões preventivas decorrentes de decretos judiciais cíveis."
        ],
        correct: 1,
        explanation: "O foco preventivo da guarda municipal visa proteger o patrimônio municipal e garantir a segurança difusa nos espaços públicos locais."
    },
    {
        topic: "legislacao-guarda",
        question: "No contexto da cooperação interinstitucional prevista no SUSP, a Guarda Municipal pode atuar em conjunto com órgãos estaduais em:",
        options: [
            "Eventos públicos, grandes calamidades, catástrofes e operações de patrulhamento integrado.",
            "Apenas em missões de caráter militar no exterior.",
            "Inspeções fiscais de mercadorias importadas em portos secos.",
            "Julgamento de processos administrativos disciplinares de policiais civis.",
            "Elaboração de laudos periciais de balística forense criminal."
        ],
        correct: 0,
        explanation: "A integração do SUSP fomenta a atuação conjunta em grandes eventos, calamidades e segurança pública preventiva."
    },
    {
        topic: "legislacao-guarda",
        question: "A capacitação específica para o porte de arma de fogo pelos integrantes das guardas municipais rege-se por normas federais que exigem:",
        options: [
            "Autorização verbal concedida pelo prefeito do município.",
            "Comprovação de aptidão psicológica e capacidade técnica para o manuseio de armas.",
            "Isenção de qualquer tipo de teste prático de tiro em estande credenciado.",
            "Porte automático extensivo a familiares de primeiro grau.",
            "Regime de uso livre irrestrito fora do horário de folga em qualquer estado."
        ],
        correct: 1,
        explanation: "O Estatuto do Desarmamento e normas correlatas exigem testes rigorosos de capacidade técnica e aptidão psicológica para o porte funcional."
    },
    {
        topic: "legislacao-guarda",
        question: "De acordo com a Lei Federal nº 13.022/2014, as guardas municipais são instituições de caráter:",
        options: [
            "Civil, uniformizadas e armadas conforme previsto em lei, para o exercício de competência municipal.",
            "Militar, subordinadas diretamente aos Comandantes do Exército nas capitais.",
            "Privado, com fins lucrativos de prestação de segurança comercial.",
            "Judiciário, com competência exclusiva para instruir inquéritos criminais.",
            "Tributário, voltadas à arrecadação de taxas e impostos municipais."
        ],
        correct: 0,
        explanation: "O art. 2º da Lei nº 13.022/2014 define expressamente que a guarda municipal é uma instituição de caráter civil, uniformizada e armada."
    },
    {
        topic: "legislacao-guarda",
        question: "Segundo a Lei nº 13.022/2014, o uso de armas de fogo pelas guardas municipais:",
        options: [
            "É proibido em qualquer hipótese no território nacional.",
            "É obrigatório e irrestrito para todos os servidores independentemente de capacitação.",
            "É admitido, nos termos da lei, obedecendo a requisitos de formação, capacitação e controle rigorosos.",
            "Depende exclusivamente de autorização por decreto do Prefeito sem exigência federal.",
            "Restringe-se unicamente ao interior dos quartéis e sedes administrativas."
        ],
        correct: 2,
        explanation: "O porte de arma para guardas municipais é regulamentado pelo Estatuto do Desarmamento e pela Lei 13.022, exigindo rigorosa formação e controle técnico."
    },
    {
        topic: "legislacao-guarda",
        question: "No âmbito do Sistema Único de Segurança Pública (SUSP), a atuação integrada das guardas municipais com os demais órgãos de segurança visa:",
        options: [
            "A eliminação das polícias civis estaduais.",
            "A otimização de recursos e a eficácia na prevenção e enfrentamento à violência e criminalidade.",
            "A centralização exclusiva da arrecadação de tributos federais.",
            "A extinção das corregedorias municipais.",
            "A subordinação militar dos guardas aos comandos estaduais."
        ],
        correct: 1,
        explanation: "A integração no SUSP fomenta a cooperação mútua, otimização de recursos e foco na prevenção e combate à violência urbana."
    },
    {
        topic: "legislacao-guarda",
        question: "A fiscalização das normas de trânsito urbanas pelas guardas municipais, quando autorizada por convênio ou competência legal própria, constitui:",
        options: [
            "Atividade de polícia judiciária penal.",
            "Atribuição voltada à segurança viária e circulação de veículos no âmbito do município.",
            "Competência exclusiva privativa da Polícia Rodoviária Federal.",
            "Atividade comercial de exploração de estacionamentos.",
            "Função militar de defesa de fronteiras."
        ],
        correct: 1,
        explanation: "As guardas municipais colaboram e executam fiscalização de trânsito urbano nos limites das atribuições legais e convênios específicos."
    },
    {
        topic: "legislacao-guarda",
        question: "Conforme o Estatuto Geral das Guardas Municipais, a criação de corregedoria própria e independente é obrigatória para apurar infrações disciplinares nas guardas com efetivo superior a:",
        options: [
            "10 servidores.",
            "20 servidores.",
            "50 servidores.",
            "100 servidores.",
            "500 servidores."
        ],
        correct: 1,
        explanation: "O art. 13 da Lei 13.022/2014 exige corregedoria própria para guardas com mais de 20 servidores."
    },
    {
        topic: "legislacao-guarda",
        question: "Constitui princípio mínimo de atuação da guarda municipal a garantia do respeito aos:",
        options: [
            "Interesses exclusivos da administração financeira da prefeitura.",
            "Direitos humanos fundamentais, à cidadania e às liberdades públicas.",
            "Sigilos bancários e fiscais de autoridades públicas.",
            "Interesses partidários predominantes no legislativo.",
            "Privilégios corporativos de classes sindicais."
        ],
        correct: 1,
        explanation: "O respeito aos direitos humanos e à cidadania é princípio estruturante e obrigatório de atuação das guardas municipais."
    },
    {
        topic: "legislacao-guarda",
        question: "A cooperação da Guarda Municipal com órgãos de segurança pública estaduais e federais em situações de catástrofes e calamidades públicas é:",
        options: [
            "Facultativa e condicionada a pagamento de diárias extras.",
            "Vedada pela legislação federal.",
            "Permitida e integrada no âmbito dos objetivos de proteção à sociedade e defesa civil.",
            "Exclusiva de oficiais generais das Forças Armadas.",
            "Proibida sem prévia autorização do Supremo Tribunal Federal."
        ],
        correct: 2,
        explanation: "A atuação integrada em calamidades e defesa civil é plenamente respaldada pelas leis orgânicas e pelo SUSP."
    },
    {
        topic: "legislacao-guarda",
        question: "O provimento do cargo público efetivo de guarda municipal exige aprovação prévia em concurso público de provas ou de provas e títulos, além de:",
        options: [
            "Comprovação de filiação partidária ativa.",
            "Requisitos de idoneidade moral, exames médicos e psicológicos específicos.",
            "Posse anterior em cargos federais de escalão superior.",
            "Idade mínima de 35 anos.",
            "Apresentação de diploma de pós-graduação estrito senso."
        ],
        correct: 1,
        explanation: "Além do concurso público, os editais e leis exigem idoneidade moral comprovada e aprovação em rigorosos exames médicos e psicológicos."
    },
    {
        topic: "legislacao-guarda",
        question: "De acordo com a Lei Federal nº 13.022/2014, a Guarda Municipal é obrigada a manter, em sua estrutura de controle interno, uma Ouvidoria:",
        options: [
            "Autônoma e independente para receber reclamações, elogios e sugestões da sociedade e dos servidores.",
            "Subordinada financeiramente aos comandos militares estaduais.",
            "Com competência para julgar e condenar réus em processos penais comuns.",
            "Integrada de forma exclusiva por delegados de polícia civil.",
            "Opcional, dependendo exclusivamente da vontade do chefe do legislativo."
        ],
        correct: 0,
        explanation: "O art. 13 da Lei nº 13.022/2014 estabelece a ouvidoria como órgão autônomo e independente para controle social e interno."
    },
    {
        topic: "legislacao-guarda",
        question: "Conforme o Estatuto Geral das Guardas Municipais, o uso de uniformes e equipamentos nas corporações municipais deve seguir:",
        options: [
            "Padrões definidos livremente por cada agente em serviço.",
            "Padronização específica recomendada pela legislação federal e regulamento local.",
            "Exclusivamente modelos importados das forças armadas estrangeiras.",
            "Modelos civis informais sem distintivos de identificação.",
            "Roupas esportivas leves para patrulhamento urbano."
        ],
        correct: 1,
        explanation: "A lei exige padronização de uniformes e equipamentos operacionais para identificação e segurança jurídica."
    },
    {
        topic: "legislacao-guarda",
        question: "Segundo a Lei nº 13.675/2018 (SUSP), a atuação integrada das guardas municipais com os demais órgãos de segurança pública fundamenta-se nos princípios de:",
        options: [
            "Proteção aos direitos humanos, uso proporcional da força e cooperação federativa.",
            "Centralização militarizada absoluta em âmbito federal.",
            "Independência isolada sem partilha de dados ou inteligência.",
            "Subordinação aos comandos partidários municipais.",
            "Isenção total de responsabilidade em operações de trânsito."
        ],
        correct: 0,
        explanation: "Os princípios fundamentais do SUSP e da atuação integrada envolvem direitos humanos, cooperação, transparência e uso proporcional da força."
    },
    {
        topic: "legislacao-guarda",
        question: "A competência das guardas municipais para proteger os bens, serviços e instalações do Município abrange também:",
        options: [
            "Bens de uso comum do povo, bens de uso especial e bens dominicais afetados ao serviço público local.",
            "Exclusivamente edifícios de representação diplomática internacional.",
            "Territórios marítimos federais em águas internacionais.",
            "Empresas privadas de comércio varejista sem relação com o município.",
            "Rodovias federais concedidas à iniciativa privada."
        ],
        correct: 0,
        explanation: "O escopo de proteção patrimonial municipal engloba os bens afetados aos serviços e instalações da administração local."
    },
    {
        topic: "legislacao-guarda",
        question: "Constitui requisito legal básico para investidura no cargo de guarda municipal, além de aprovação em concurso público:",
        options: [
            "Possuir nacionalidade brasileira, quitação eleitoral e militar, e idoneidade moral comprovada.",
            "Comprovar residência em outro estado da federação por cinco anos.",
            "Ter exercido cargos políticos eletivos anteriormente.",
            "Possuir idade superior a 50 anos no momento da posse.",
            "Estar filiado a sindicatos de trabalhadores urbanos."
        ],
        correct: 0,
        explanation: "Os requisitos gerais de investidura pública incluem nacionalidade, quitações legais e idoneidade moral, além do concurso."
    },
    {
        topic: "legislacao-guarda",
        question: "O patrulhamento preventivo realizado pelas guardas municipais tem como foco principal a preservação da ordem pública e a:",
        options: [
            "Proteção da incolumidade das pessoas e do patrimônio municipal.",
            "Investigação sigilosa de crimes cibernéticos internacionais.",
            "Arrecadação de tributos estaduais e federais.",
            "Emissão de passaportes e vistos diplomáticos.",
            "Fiscalização de balança comercial exterior."
        ],
        correct: 0,
        explanation: "O patrulhamento preventivo foca na segurança urbana, proteção das pessoas e salvaguarda do patrimônio público local."
    },
    {
        topic: "legislacao-guarda",
        question: "No âmbito da segurança pública municipal, a corregedoria própria é obrigatória nas guardas municipais que possuam efetivo superior a:",
        options: [
            "10 servidores.",
            "20 servidores.",
            "50 servidores.",
            "100 servidores.",
            "500 servidores."
        ],
        correct: 1,
        explanation: "O art. 13 da Lei 13.022/2014 estabelece o limite numérico de mais de 20 servidores para a obrigatoriedade de corregedoria própria."
    },
    {
        topic: "legislacao-guarda",
        question: "A formação técnico-profissional dos integrantes das guardas municipais deve priorizar diretrizes curriculares nacionais voltadas para:",
        options: [
            "Cidadania, direitos humanos, mediação de conflitos e uso progressivo da força.",
            "Estratégias de guerra de guerrilha em zonas rurais.",
            "Investigação de crimes corporativos financeiros complexos.",
            "Auditoria fiscal contábil de empresas privadas.",
            "Operações de salvamento marítimo em alto mar."
        ],
        correct: 0,
        explanation: "A matriz curricular nacional prioriza direitos humanos, uso progressivo da força e policiamento comunitário preventivo."
    },

    // ==================================================================
    // 2. LEGISLAÇÃO PENAL EXTRAVAGANTE - 40 QUESTÕES
    // ==================================================================
    {
        topic: "extravagante",
        question: "De acordo com a Lei nº 13.869/2019 (Lei de Abuso de Autoridade), constitui crime de abuso de autoridade praticado por agente público:",
        options: [
            "Decretar a condução coercitiva de testemunha ou investigado manifestamente sem antes intimá-lo legalmente perante o juízo.",
            "Realizar prisão em flagrante delito de indivíduo encontrado cometendo infração penal em horário noturno.",
            "Utilizar algemas em qualquer situação de condução de preso, independentemente de resistência ou receio de fuga.",
            "Cumprir mandado de busca e apreensão domiciliar após as 21 horas mediante autorização verbal do delegado.",
            "Interrogar preso que tenha recusado constituir advogado particular sem a presença de defensor público."
        ],
        correct: 0,
        explanation: "O art. 27 da Lei nº 13.869/2019 tipifica como crime de abuso de autoridade o ato de requisitar condução coercitiva de testemunha ou investigado manifestamente descumprindo a lei de intimação."
    },
    {
        topic: "extravagante",
        question: "Conforme a Lei dos Crimes Hediondos (Lei nº 8.072/1990), assinale a alternativa que apresenta um crime considerado hediondo por força de lei:",
        options: [
            "Furto qualificado pelo emprego de explosivos.",
            "Homicídio simples quando praticado em atividade típica de grupo de extermínio.",
            "Tráfico de influência e corrupção ativa majorada.",
            "Receptação dolosa qualificada de veículos automotores.",
            "Porte ilegal de arma de fogo de uso permitido com numeração raspada."
        ],
        correct: 1,
        explanation: "O art. 1º, inciso I, da Lei nº 8.072/1990 estabelece que o homicídio simples, quando praticado em atividade típica de grupo de extermínio, ainda que cometido por um só agente, é hediondo."
    },
    {
        topic: "extravagante",
        question: "Segundo a Lei nº 9.455/1997 (Lei de Tortura), o crime de tortura é inafiançável e insuscetível de graça ou anistia. Além disso, constitui efeito automático da condenação:",
        options: [
            "A suspensão temporária dos direitos políticos pelo prazo de 2 anos.",
            "A interdição para o exercício de qualquer cargo público pelo dobro do prazo da pena.",
            "A perda do cargo, função ou emprego público e a interdição para seu exercício pelo dobro do prazo da pena.",
            "A obrigação imediata de reparação civil dos danos em dobro.",
            "O recolhimento domiciliar noturno obrigatório em regime aberto."
        ],
        correct: 2,
        explanation: "O art. 1º, § 5º, da Lei nº 9.455/1997 prevê que a condenação acarretará a perda do cargo, função ou emprego público e a interdição para seu exercício pelo dobro do prazo da pena."
    },
    {
        topic: "extravagante",
        question: "No que diz respeito à Lei nº 11.340/2006 (Lei Maria da Penha), assinale a alternativa correta sobre as formas de violência doméstica e familiar contra a mulher:",
        options: [
            "A violência psicológica restringe-se exclusivamente a agressões verbais cometidas na presença de testigos.",
            "A violência patrimonial abrange qualquer conduta que configure retenção, subtração ou destruição de seus bens e instrumentos de trabalho.",
            "A violência moral é caracterizada unicamente por vias de fato que deixem vestígios externos leves.",
            "A violência sexual obriga a vítima a casar-se mediante coação física ou psicológica.",
            "A lei aplica-se exclusivamente a relações conjugais formalizadas em certidão de casamento civil."
        ],
        correct: 1,
        explanation: "O art. 7º, inciso IV, da Lei nº 11.340/2006 define a violência patrimonial como qualquer conduta que configure retenção, subtração, destruição parcial ou total de seus objetos, instrumentos de trabalho, bens e valores."
    },
    {
        topic: "extravagante",
        question: "Conforme o Estatuto do Desarmamento (Lei nº 10.826/2003), o porte de arma de fogo para os integrantes das guardas municipais:",
        options: [
            "É expressamente proibido em qualquer hipótese fora do horário de expediente.",
            "É autorizado em serviço para os municípios previstos em lei, observados os requisitos de formação e capacitação.",
            "Depende exclusivamente de autorização por decreto do Governo do Estado.",
            "É concedido de forma automática e vitalícia a todo servidor aprovado em concurso público municipal.",
            "Restringe-se unicamente ao interior das instalações físicas da prefeitura."
        ],
        correct: 1,
        explanation: "A Lei nº 10.826/2003 autoriza o porte de arma para os integrantes das guardas municipais, observados os requisitos legais de formação e controle."
    },
    {
        topic: "extravagante",
        question: "De acordo com a Lei de Drogas (Lei nº 11.343/2006), para diferenciar o uso pessoal do tráfico de drogas, o juiz atenderá a alguns critérios, EXCETO:",
        options: [
            "A natureza e a quantidade da substância apreendida.",
            "O local e as condições em que se desenvolveu a ação.",
            "A primariedade e os antecedentes criminais do agente.",
            "A cor da pele, a classe social e o nível de escolaridade do acusado.",
            "A situação social e familiar do agente."
        ],
        correct: 3,
        explanation: "O art. 28, § 2º, da Lei 11.343/06 elenca os critérios legais, sendo expressamente vedada e inconstitucional qualquer diferenciação baseada em cor, classe social ou escolaridade."
    },
    {
        topic: "extravagante",
        question: "Conforme a Lei nº 8.072/1990 (Crimes Hediondos), assinale a alternativa que indica um crime considerado hediondo:",
        options: [
            "Estupro e estupro de vulnerável.",
            "Furto simples cometido em período noturno.",
            "Apropriação indébita previdenciária.",
            "Resistência qualificada pelo resultado morte.",
            "Porte ilegal de arma de fogo de uso permitido."
        ],
        correct: 0,
        explanation: "Os crimes contra a dignidade sexual (estupro e estupro de vulnerável) constam expressamente no rol dos crimes hediondos da Lei 8.072/90."
    },
    {
        topic: "extravagante",
        question: "Conforme a Lei nº 13.869/2019 (Abuso de Autoridade), é crime de abuso de autoridade constranger o preso ou o detento com violência ou grave ameaça a:",
        options: [
            "Exibir-se para a imprensa ou reproduzir simulação de crime sem autorização expressa em juízo.",
            "Assinar termo de confissão espontânea na presença de dois advogados particulares.",
            "Realizar exame de corpo de delito sem a presença de algemas.",
            "Receber visitas de familiares em horário regulamentar de descanso.",
            "Prestar depoimento acompanhado de defensor público."
        ],
        correct: 0,
        explanation: "O art. 13 da Lei de Abuso de Autoridade tipifica o constrangimento ilegal de preso para exibição pública vexatória ou simulação de fatos."
    },
    {
        topic: "extravagante",
        question: "Segundo a Lei dos Crimes Hediondos (Lei nº 8.072/1990), o crime de extorsão qualificada pela morte (latrocínio):",
        options: [
            "Não integra o rol dos crimes hediondos por possuir natureza patrimonial.",
            "É considerado crime hediondo por expressa disposição legal.",
            "É equiparado a hediondo apenas quando praticado em feriados prolongados.",
            "Deixou de ser hediondo após as alterações da Lei anticrime.",
            "Apenas se torna hediondo se houver concurso de três ou mais agentes."
        ],
        correct: 1,
        explanation: "O latrocínio (extorsão qualificada pelo resultado morte) é expressamente classificado como crime hediondo no art. 1º, inciso II, da Lei nº 8.072/90."
    },
    {
        topic: "extravagante",
        question: "De acordo com a Lei nº 9.455/1997 (Tortura), a omissão diante da prática de tortura, quando o agente tinha o dever de evitar ou apurar, constitui:",
        options: [
            "Fato atípico, punível apenas administrativamente.",
            "Crime autônomo de omissão, punido com reclusão de 1 a 4 anos.",
            "Participação de menor importância no crime principal de tortura.",
            "Contravenção penal de simples negligência funcional.",
            "Crime hediondo com a mesma pena do executor direto."
        ],
        correct: 1,
        explanation: "O art. 1º, § 2º, da Lei de Tortura tipifica a conduta omissiva própria como crime autônomo, com pena de reclusão de 1 a 4 anos."
    },
    {
        topic: "extravagante",
        question: "A medida protetiva de urgência que obriga o agressor ao afastamento do lar, domicílio ou local de convivência com a ofendida, prevista na Lei Maria da Penha:",
        options: [
            "Depende de prévia audiência de conciliação com a presença do agressor e da vítima.",
            "Pode ser concedida pelo juiz liminarmente, de ofício ou a requerimento do Ministério Público ou da ofendida.",
            "Exige representação criminal formal irretratável por escrito com firma reconhecida.",
            "Apenas pode ser aplicada após o trânsito em julgado da sentença condenatória.",
            "É de competência exclusiva das varas cíveis de família."
        ],
        correct: 1,
        explanation: "O art. 19 da Lei nº 11.340/2006 permite que o juiz conceda medidas protetivas de urgência de imediato, de ofício ou a requerimento."
    },
    {
        topic: "extravagante",
        question: "Conforme o Estatuto do Desarmamento (Lei nº 10.826/2003), o crime de posse ou porte ilegal de arma de fogo de uso restrito:",
        options: [
            "É considerado inafiançável e equiparado a hediondo.",
            "Possui pena idêntica à de arma de uso permitido sem qualquer majoração.",
            "Permite sempre a concessão de liberdade provisória sem pagamento de fiança pelo delegado.",
            "Não incide caso o agente guarde a arma desmontada no interior de guarda-roupa.",
            "Aplica-se exclusivamente a empresas de transporte de valores."
        ],
        correct: 0,
        explanation: "O porte e a posse ilegal de arma de fogo de uso restrito são tipificados nos arts. 16 e 18 da Lei 10.826/03 e são equiparados a hediondos, sendo inafiançáveis."
    },
    {
        topic: "extravagante",
        question: "Na Lei de Drogas (Lei nº 11.343/2006), o delito de conduzir veículo automotor sob a influência de drogas ilícitas gerando perigo de dano:",
        options: [
            "Constitui crime específico tipificado na própria lei de drogas, com suspensão da habilitação.",
            "É tratado como mera infração de trânsito de natureza leve.",
            "Equipara-se automaticamente ao crime hediondo de homicídio doloso.",
            "Não possui previsão punitiva na esfera penal brasileira.",
            "Apenas gera multa administrativa emitida pelo DETRAN."
        ],
        correct: 0,
        explanation: "A Lei de Drogas tipifica condutas específicas relacionadas ao uso e tráfego, havendo também tipificações penais e administrativas no CTB."
    },
    {
        topic: "extravagante",
        question: "O crime de abuso de autoridade cometido por membro de órgão de segurança pública no exercício de suas funções, segundo a Lei 13.869/2019, pode acarretar como efeitos da condenação:",
        options: [
            "A perda do cargo e a inabilitação para o exercício de cargo público por 1 a 5 anos, sendo efeitos não automáticos.",
            "A perda automática e imediata de todos os direitos civis e políticos vitaliciamente.",
            "A obrigatoriedade de prestação de serviços comunitários em hospitais psiquiátricos.",
            "O pagamento de multa reversível exclusivamente ao fundo partidário.",
            "A interdição de dirigir veículos automotores pelo prazo de 10 anos."
        ],
        correct: 0,
        explanation: "O art. 47 da Lei nº 13.869/2019 estabelece os efeitos da condenação (perda do cargo e inabilitação), ressalvando expressamente que não são automáticos, exigindo motivação expressa na sentença."
    },
    {
        topic: "extravagante",
        question: "Nos termos da Lei nº 13.869/2019 (Abuso de Autoridade), prolongar a execução de prisão temporária ou preventiva, deixando de liberar o preso quando expirado o prazo legal, constitui crime:",
        options: [
            "Punição apenas com advertência verbal da corregedoria.",
            "De abuso de autoridade, passível de detenção e perda do cargo em caso de reincidência específica.",
            "Inafiançável e equiparado a hediondo por força constitucional.",
            "De mera infração administrativa disciplinar leve.",
            "Praticado exclusivamente por magistrados de primeira instância."
        ],
        correct: 1,
        explanation: "O art. 12 da Lei de Abuso de Autoridade tipifica a conduta de manter preso ilegalmente por prolongamento indevido do prazo."
    },
    {
        topic: "extravagante",
        question: "Conforme a Lei nº 8.072/1990, o crime de genocídio, previsto em lei própria, é classificado no direito brasileiro como:",
        options: [
            "Crime hediondo por equiparação legal direta.",
            "Crime comum afiançável em qualquer fase inquisitorial.",
            "Contravenção penal de menor potencial ofensivo.",
            "Infração de competência exclusiva dos juizados especiais.",
            "Delito prescritível após cinco anos da data do fato."
        ],
        correct: 0,
        explanation: "O art. 1º, parágrafo único, da Lei dos Crimes Hediondos estipula que todos os crimes de genocídio são hediondos."
    },
    {
        topic: "extravagante",
        question: "Segundo a Lei nº 9.455/1997, a tortura praticada por agente público mediante sequestro:",
        options: [
            "Aumenta a pena de um sexto até um terço.",
            "Aplica-se a pena ordinária de reclusão sem majorantes.",
            "Reduz a pena pela metade se houver arrependimento posterior.",
            "Descaracteriza o crime de tortura transformando-o em cárcere privado simples.",
            "Exclui a perda automática do cargo público."
        ],
        correct: 0,
        explanation: "O § 4º do art. 1º da Lei de Tortura prevê causas de aumento de pena, entre elas a prática mediante sequestro."
    },
    {
        topic: "extravagante",
        question: "No âmbito da Lei Maria da Penha (Lei nº 11.340/2006), as medidas protetivas de urgência obrigam o agressor, entre outras ações, a:",
        options: [
            "Prestar caução em dinheiro em favor da vítima no ato da concessão.",
            "Restrição ou suspensão temporária de visitas aos dependentes menores, a critério do juiz.",
            "Assumir obrigações comerciais e fiscais das empresas da ofendida.",
            "Abandonar definitivamente o país por período superior a um ano.",
            "Transferir a propriedade de todos os seus bens particulares para o Estado."
        ],
        correct: 1,
        explanation: "O art. 22 da Lei Maria da Penha enumera medidas protetivas que obrigam o agressor, como a suspensão ou restrição de visitas aos filhos menores."
    },
    {
        topic: "extravagante",
        question: "O crime de comércio ilegal de armas de fogo, previsto no Estatuto do Desarmamento (Lei nº 10.826/2003):",
        options: [
            "É considerado crime inafiançável e equiparado a hediondo.",
            "Permite fiança arbitrada diretamente pela autoridade policial na delegacia.",
            "É punido exclusivamente com penas restritivas de direitos pecuniárias.",
            "Aplica-se apenas a colecionadores registrados no Exército.",
            "Não possui tipificação penal se a arma estiver desmuniciada."
        ],
        correct: 0,
        explanation: "O comércio ilegal e o tráfico internacional de armas de fogo (arts. 17 e 18 da Lei 10.826/03) são equiparados a hediondos e inafiançáveis."
    },
    {
        topic: "extravagante",
        question: "Na Lei de Drogas (Lei nº 11.343/2006), a causa de diminuição de pena para o traficante eventual que seja primário, de bons antecedentes e não se dedique a atividades criminosas (tráfico privileged):",
        options: [
            "Permite reduzir a pena de um sexto a dois terços.",
            "Veda a conversão da pena privativa de liberdade em restritiva de direitos.",
            "Elimina inteiramente a exigência de cumprimento de pena.",
            "Transforma o crime em infração de menor potencial ofensivo.",
            "Depende de autorização do Conselho Nacional de Justiça."
        ],
        correct: 0,
        explanation: "O art. 33, § 4º, da Lei 11.343/06 traz o tráfico privilegiado, permitindo a redução de 1/6 a 2/3 para agentes primários e sem antecedentes."
    },
    {
        topic: "extravagante",
        question: "De acordo com a Lei de Abuso de Autoridade, decretar medida de privação de liberdade em manifesta desconformidade com as hipóteses legais constitui crime punido com:",
        options: [
            "Detenção de 1 a 4 anos e multa.",
            "Reclusão de 15 a 30 anos em regime fechado.",
            "Multa administrativa paga à prefeitura municipal.",
            "Suspensão temporária do passaporte por trinta dias.",
            "Prestação de serviços comunitários por uma semana."
        ],
        correct: 0,
        explanation: "O art. 9º da Lei nº 13.869/2019 tipifica a prisão em manifesta desconformidade legal como crime de abuso de autoridade, com pena de detenção de 1 a 4 anos."
    },
    {
        topic: "extravagante",
        question: "De acordo com a Lei nº 13.869/2019 (Abuso de Autoridade), constitui crime de abuso de autoridade impedir sem justa causa a reunião de advogado com seu cliente preso:",
        options: [
            "Em qualquer circunstância de horário, sem exceção.",
            "Na sala de atendimento reservada do estabelecimento prisional, salvo em estado de incomunicabilidade judicialmente decretada em lei.",
            "Apenas após o trânsito em julgado da condenação.",
            "Mediante prévia autorização por escrito do delegado plantonista.",
            "Exclusivamente aos domingos e feriados."
        ],
        correct: 1,
        explanation: "O art. 20 da Lei de Abuso de Autoridade tipifica como crime impedir o encontro reservado do preso com seu advogado."
    },
    {
        topic: "extravagante",
        question: "Conforme a Lei dos Crimes Hediondos (Lei nº 8.072/1990), o crime de extorsão mediante sequestro (art. 159 do CP):",
        options: [
            "Não é hediondo por envolver subtração patrimonial.",
            "É considerado crime hediondo em todas as suas formas e modalidades.",
            "Equipara-se a crime hediondo apenas se houver participação de menores.",
            "Deixou de integrar o rol após as reformas de 2019.",
            "Torna-se hediondo unicamente se resultar em lesão leve."
        ],
        correct: 1,
        explanation: "O art. 1º, inciso III, da Lei nº 8.072/90 classifica expressamente a extorsão mediante sequestro em qualquer de suas formas como crime hediondo."
    },
    {
        topic: "extravagante",
        question: "Segundo a Lei nº 9.455/1997, o crime de tortura caracteriza-se por submeter alguém a intenso sofrimento físico ou mental, por meio de violência ou grave ameaça, com o objetivo de:",
        options: [
            "Obter informação, confissão ou declaração da vítima ou de terceira pessoa.",
            "Praticar furto simples de pequeno valor comercial.",
            "Sonegar impostos municipais de circulação de mercadorias.",
            "Cometer infração de trânsito em via urbana.",
            "Descumprir contrato de natureza cível."
        ],
        correct: 0,
        explanation: "O art. 1º, inciso I, alínea 'a', da Lei de Tortura aponta a obtenção de informação, confissão ou declaração como elemento típico da conduta."
    },
    {
        topic: "extravagante",
        question: "A descumprimento de medida protetiva de urgência concedida no âmbito da Lei Maria da Penha (Lei nº 11.340/2006):",
        options: [
            "Configura crime específico tipificado no art. 24-A da própria lei, punido com detenção.",
            "Gera apenas advertência verbal applied pelo comissário de menores.",
            "Constitui mera infração civil sem repercussão criminal.",
            "Aplica-se exclusivamente multa pecuniária administrativa.",
            "Anula automaticamente todas as provas do inquérito policial."
        ],
        correct: 0,
        explanation: "O art. 24-A da Lei Maria da Penha tipifica criminalmente o descumprimento de medidas protetivas de urgência."
    },
    {
        topic: "extravagante",
        question: "Conforme o Estatuto do Desarmamento (Lei nº 10.826/2003), o crime de disparo de arma de fogo em via pública ou em lugar habitado:",
        options: [
            "É crime inafiançável e equiparado a hediondo em qualquer situação.",
            "É punido com reclusão, sendo afiançável dependendo das circunstâncias ou inafiançável se cometido sob certas condições previstas.",
            "Não possui tipificação penal caso a arma seja de uso permitido.",
            "Configura mera contravenção penal de perigo abstrato leve.",
            "É absorvido pelo crime de homicídio tentado automaticamente."
        ],
        correct: 1,
        explanation: "O art. 15 da Lei 10.826/03 tipifica o disparo de arma de fogo com pena de reclusão de 2 a 4 anos e multa."
    },
    {
        topic: "extravagante",
        question: "Na Lei de Drogas (Lei nº 11.343/2006), o delito de associação para o tráfico (art. 35):",
        options: [
            "Exige a estabilidade e permanência de duas ou mais pessoas para o fim de cometer os crimes previstos na lei.",
            "Configura-se com o encontro ocasional de dois usuários em via pública.",
            "É punido com detenção de até seis meses sem multa.",
            "Equipara-se a infração de menor potencial ofensivo.",
            "Aplica-se exclusivamente a farmácias e drogarias comerciais."
        ],
        correct: 0,
        explanation: "O crime de associação para o tráfico exige o animus associativo estável e permanente de duas ou mais pessoas."
    },
    {
        topic: "extravagante",
        question: "O mandado de busca e apreensão domiciliar cumprido por autoridade policial fora das formalidades legais ou violando garantias da Lei de Abuso de Autoridade:",
        options: [
            "Não gera qualquer consequência jurídica para os executores.",
            "Pode configurar crime de abuso de autoridade caso cumprido após as 21h sem consentimento ou fora das ressalvas constitucionais.",
            "Transforma automaticamente o inquérito em processo civil.",
            "Convalida-se se forem encontradas drogas ilícitas no local.",
            "É de competência exclusiva de juízes eleitorais."
        ],
        correct: 1,
        explanation: "O art. 22 da Lei de Abuso de Autoridade pune invasão ou busca domiciliar realizada fora das formalidades legais ou sem motivação."
    },
    {
        topic: "extravagante",
        question: "De acordo com a Lei de Abuso de Autoridade (Lei nº 13.869/2019), constitui crime constranger o depoente a depor sob ameaça de uso de força física:",
        options: [
            "Sim, configurando crime punido com detenção e multa, além de sanções administrativas.",
            "Não, pois o delegado possui liberdade absoluta de coação em inquéritos.",
            "Apenas se o depoente for menor de idade ou idoso.",
            "Trata-se de mera infração disciplinar leve sem tipicidade penal.",
            "Permitido em casos de crimes hediondos de repercussão."
        ],
        correct: 0,
        explanation: "A lei de abuso de autoridade pune severamente o constrangimento de testemunha, investigado ou vítima mediante violência ou grave ameaça."
    },
    {
        topic: "extravagante",
        question: "Conforme a Lei nº 8.072/1990 (Crimes Hediondos), o crime de estupro de vulnerável é classificado como:",
        options: [
            "Crime hediondo por força de expressa disposição legal.",
            "Contravenção penal de menor potencial ofensivo.",
            "Crime afiançável em qualquer fase da persecução criminal.",
            "Delito prescritível em prazo inferior a dois anos.",
            "Excluído do rol de hediondos após as atualizações legislativas."
        ],
        correct: 0,
        explanation: "Os crimes sexuais contra vulneráveis constam no art. 1º da Lei 8.072/90 como hediondos por determinação legal."
    },
    {
        topic: "extravagante",
        question: "Segundo a Lei nº 9.455/1997, a condenação por crime de tortura acarretará como efeito automático:",
        options: [
            "A perda do cargo, função ou emprego público e a interdição para seu exercício pelo dobro do prazo da pena.",
            "A suspensão temporária dos direitos políticos por apenas um ano.",
            "A obrigação imediata de prestação de serviços comunitários noturnos.",
            "O recolhimento domiciliar em regime aberto sem perda funcional.",
            "A inabilitação para dirigir veículos automotores."
        ],
        correct: 0,
        explanation: "O § 5º do art. 1º da Lei de Tortura prevê a perda do cargo público e interdição pelo dobro do prazo como efeito da condenação."
    },
    {
        topic: "extravagante",
        question: "No tocante à Lei Maria da Penha (Lei nº 11.340/2006), as formas de violência doméstica contra a mulher incluem, entre outras:",
        options: [
            "Violência física, psicológica, sexual, patrimonial e moral.",
            "Exclusivamente agressões corporais que deixem marcas visíveis.",
            "Apenas danos causados em bens particulares comerciais.",
            "Litígios puramente contratuais de natureza civil bancária.",
            "Disputas salariais entre empregador e empregada doméstica."
        ],
        correct: 0,
        explanation: "O art. 7º da Lei Maria da Penha elenca exaustivamente as cinco formas de violência doméstica e familiar contra a mulher."
    },
    {
        topic: "extravagante",
        question: "Conforme o Estatuto do Desarmamento, o porte ilegal de arma de fogo de uso permitido é crime punido com reclusão, sendo afiançável ou não conforme as regras gerais, mas com pena base de:",
        options: [
            "2 a 4 anos de reclusão e multa.",
            "10 a 15 anos de reclusão em regime fechado.",
            "Prisão simples de 15 dias.",
            "Prestação pecuniária exclusiva.",
            "Multa administrativa simples sem reclusão."
        ],
        correct: 0,
        explanation: "O art. 14 da Lei 10.826/03 tipifica o porte ilegal de arma de uso permitido com pena de reclusão de 2 a 4 anos e multa."
    },
    {
        topic: "extravagante",
        question: "Na Lei de Drogas (Lei nº 11.343/2006), o usuário de drogas que porta substância para consumo pessoal está sujeito a penas alternativas, EXCETO:",
        options: [
            "Pena privativa de liberdade em regime fechado inicial.",
            "Advertência sobre os efeitos das drogas.",
            "Prestação de serviços à comunidade.",
            "Medida educativa de comparecimento a programa ou curso educativo.",
            "Multa pecuniária."
        ],
        correct: 0,
        explanation: "O art. 28 da Lei de Drogas descriminalizou a pena privativa de liberdade para o usuário, applying penas restritivas e educativas alternativas."
    },
    {
        topic: "extravagante",
        question: "O crime de abuso de autoridade praticado por agente público municipal pode acarretar sanções nas esferas:",
        options: [
            "Civil, administrativa e criminal, de forma independente.",
            "Exclusivamente cível de reparação de danos monetários.",
            "Apenas administrativa interna na corregedoria.",
            "Somente criminal perante juizados especiais cíveis.",
            "Exclusivamente trabalhista perante a justiça do trabalho."
        ],
        correct: 0,
        explanation: "As infrações e responsabilidades por abuso de autoridade desdobram-se de forma autônoma nas esferas civil, administrativa e penal."
    },
    {
        topic: "extravagante",
        question: "Conforme o Estatuto da Criança e do Adolescente (Lei nº 8.069/1990), vender, fornecer ou entregar a criança ou adolescente bebida alcoólica constitui:",
        options: [
            "Crime punido com pena de detenção e multa.",
            "Mera contravenção penal de perigo simples.",
            "Infração puramente administrativa sujeita apenas a interdição comercial.",
            "Fato atípico se houver autorização dos pais por escrito.",
            "Delito de competência exclusiva da Justiça Federal."
        ],
        correct: 0,
        explanation: "O art. 243 do ECA tipifica como crime a venda ou fornecimento não autorizado de bebidas alcoólicas a crianças ou adolescentes."
    },
    {
        topic: "extravagante",
        question: "A prática de ato infracional análogo a crime praticado por adolescente autoriza a aplicação de medidas socioeducativas, entre as quais a mais severa é:",
        options: [
            "A internação em estabelecimento educacional.",
            "A prestação de serviços comunitários aos fins de semana.",
            "A advertência verbal aplicável pelo conselho tutelar.",
            "A reparação do dano cível por desconto mesada.",
            "A proibição de frequentar praças públicas noturnas."
        ],
        correct: 0,
        explanation: "A internação é a medida socioeducativa mais privativa e severa prevista no ECA, aplicável a atos infracionais graves com violência."
    },
    {
        topic: "extravagante",
        question: "De acordo com o Estatuto do Idoso (Lei nº 10.741/2003), discriminar pessoa idosa, impedindo ou dificultando seu acesso a transporte ou meios de locomoção constitui:",
        options: [
            "Crime punido com reclusão e multa.",
            "Contravenção penal sem pena de reclusão.",
            "Atribuição exclusiva de polícia comunitária cível.",
            "Infração de trânsito de natureza média.",
            "Fato atípico penalmente."
        ],
        correct: 0,
        explanation: "O Estatuto do Idoso tipifica como crime discriminar a pessoa idosa ou obstar seu acesso a meios de transporte e direitos fundamentais."
    },
    {
        topic: "extravagante",
        question: "O crime de recepção culposa previsto no Código Penal difere da receptação dolosa qualificada por exigir:",
        options: [
            "Negligência, imprudência ou imperícia em presumir a origem ilícita da coisa pela sua natureza ou desproporção do preço.",
            "Prévia associação criminosa armada de três ou mais indivíduos.",
            "Conluio com servidores públicos das repartições fiscais.",
            "Uso de armas de fogo de uso restrito na abordagem.",
            "Subtração prévia mediante arrombamento de caixas fortes."
        ],
        correct: 0,
        explanation: "A receptação culposa (art. 180, § 3º, CP) ocorre quando o agente adquire coisa que, por sua natureza ou desproporção de preço, devia presumir obtida por meio ilícito."
    },
    {
        topic: "extravagante",
        question: "Na Lei de Crimes Ambientais (Lei nº 9.605/1998), a responsabilidade penal das pessoas jurídicas:",
        options: [
            "É admitida nos casos em que a infração seja cometida por decisão de seu representante legal ou contratual no interesse da entidade.",
            "É vedada pelo ordenamento constitucional brasileiro em qualquer hipótese.",
            "Aplica-se apenas a empresas públicas da administração direta.",
            "Exclui a responsabilidade individual das pessoas físicas autoras da conduta.",
            "Restringe-se a multas administrativas sem processo penal."
        ],
        correct: 0,
        explanation: "A Constituição Federal (art. 225) e a Lei 9.605/98 preveem expressamente a responsabilidade penal da pessoa jurídica por crimes ambientais."
    },

    // ==================================================================
    // 3. DIREITO CONSTITUCIONAL & ADMINISTRATIVO - 40 QUESTÕES
    // ==================================================================
    {
        topic: "constitucional-administrativo",
        question: "Segundo a Constituição Federal de 1988, a segurança pública, dever do Estado, direito e responsabilidade de todos, é exercida para a preservação da ordem pública e da incolumidade das pessoas e do patrimônio, através dos órgãos enumerados no art. 144, entre os quais se incluem:",
        options: [
            "As Guardas Municipais como órgão ostensivo principal da União.",
            "As Polícias Militares, os Corpos de Bombeiros Militares e as Polícias Civis.",
            "As Forças Armadas em regime de subordinação permanente aos governos estaduais.",
            "As Guardas Portuárias e os agentes de trânsito municipais com poder de polícia judiciária.",
            "As empresas privadas de segurança patrimonial credenciadas pela Polícia Federal."
        ],
        correct: 1,
        explanation: "O art. 144 da CF/88 elenca as instituições policiais essenciais de segurança pública, destacando as polícias civis, militares e corpos de bombeiros militares."
    },
    {
        topic: "constitucional-administrativo",
        question: "No que tange aos princípios constitucionais da Administração Pública expressos no art. 37 da Constituição Federal de 1988, assinale a alternativa que indica corretamente todos eles:",
        options: [
            "Legalidade, impessoalidade, moralidade, publicidade e eficiência.",
            "Honestidade, celeridade, economicidade, lealdade e sigilo.",
            "Legalidade, soberania, probidade, publicidade e gratuidade.",
            "Legitimidade, eficiência, hierarquia, disciplina e moralidade.",
            "Impessoalidade, publicidade, gratuidade, competência e motivação."
        ],
        correct: 0,
        explanation: "O caput do art. 37 da CF/88 consagra expressamente o mnemônico LIMPE: Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência."
    },
    {
        topic: "constitucional-administrativo",
        question: "De acordo com a Lei de Improbidade Administrativa (Lei nº 8.429/1992), constitui ato de improbidade administrativa que importa em enriquecimento ilícito:",
        options: [
            "Auferir qualquer vantagem patrimonial indevida em razão do exercício de cargo, mandato, função, emprego ou atividade nas entidades públicas.",
            "Praticar ato visando fim proibido em lei ou regulamentação administrativa interna.",
            "Negligenciar a arrecadação de tributos e rendas municipais devidas ao erário.",
            "Frustrar a licitude de concurso público sem dolo específico de obtenção de vantagem.",
            "Permitir ou facilitar a aquisição de bem por preço superior ao de mercado sem prejuízo ao erário."
        ],
        correct: 0,
        explanation: "O art. 9º da Lei nº 8.429/1992 define expressamente que constitui ato de improbidade administrativa importando em enriquecimento ilícito auferir qualquer vantagem patrimonial indevida."
    },
    {
        topic: "constitucional-administrativo",
        question: "No âmbito dos Poderes da Administração Pública, o poder que confere à autoridade administrativa a prerrogativa de condicionar e limitar o exercício dos direitos individuais em benefício do interesse público é denominado:",
        options: [
            "Poder Hierárquico.",
            "Poder Disciplinar.",
            "Poder Regulamentar.",
            "Poder de Polícia.",
            "Poder Vinculado."
        ],
        correct: 3,
        explanation: "O Poder de Polícia é a atividade da administração pública que, limitando ou disciplinando direito, interesse ou liberdade, regula a prática de ato em razão do interesse público."
    },
    {
        topic: "constitucional-administrativo",
        question: "Sobre os direitos e deveres individuais e coletivos previstos no art. 5º da Constituição Federal de 1988, é correto afirmar que:",
        options: [
            "A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial.",
            "A prisão de qualquer pessoa e o local onde se encontre serão comunicados imediatamente ao juiz competente e à família do preso, sendo dispensável a assistência de advogado.",
            "É livre a expressão da atividade intelectual, artística, científica e de comunicação, sujeita a censura prévia do Estado em locais públicos.",
            "As associações civis só poderão ser compulsoriamente dissolvidas por ato administrativo fundamentado do Chefe do Executivo.",
            "A pena de morte é applied em regime comum no Brasil em caso de crimes patrimoniais violentos."
        ],
        correct: 0,
        explanation: "O art. 5º, inciso XI, da CF/88 consagra a inviolabilidade do domicílio, ressalvando o flagrante delito, desastre ou prestação de socorro, ou durante o dia por determinação judicial."
    },
    {
        topic: "constitucional-administrativo",
        question: "Conforme o art. 37 da Constituição Federal, a acumulação remunerada de cargos públicos é, em regra, proibida. Contudo, há exceções, desde que haja compatibilidade de horários. Assinale a hipótese constitucionalmente permitida:",
        options: [
            "Três cargos de professor.",
            "Dois cargos ou empregos privativos de profissionais de saúde, com profissões regulamentadas.",
            "Dois cargos de técnico administrativo em autarquias municipais.",
            "Um cargo de professor com dois cargos de técnico ou científico.",
            "Qualquer cargo público acumulável com mandato de empresário."
        ],
        correct: 1,
        explanation: "O art. 37, XVI, da CF/88 permite a acumulação de dois cargos privativos de profissionais de saúde, de dois cargos de professor, ou de um cargo de professor com outro técnico/científico."
    },
    {
        topic: "constitucional-administrativo",
        question: "O princípio da Administração Pública que obriga o Estado a dar ampla divulgação aos seus atos, programas, obras e serviços, visando à transparência e ao controle social, denomina-se:",
        options: [
            "Impessoalidade.",
            "Moralidade.",
            "Publicidade.",
            "Eficiência.",
            "Legalidade."
        ],
        correct: 2,
        explanation: "O princípio da publicidade exige transparência e divulgação oficial dos atos administrativos."
    },
    {
        topic: "constitucional-administrativo",
        question: "De acordo com a Constituição Federal de 1988, a Ação Popular é o instrumento processual constitucional adequado para:",
        options: [
            "Anular ato lesivo ao patrimônio público ou de entidade de que o Estado participe, à moralidade administrativa, ao meio ambiente e ao patrimônio histórico e cultural.",
            "Proteger direito líquido e certo não amparado por habeas corpus ou habeas data.",
            "Assegurar o conhecimento de informações relativas à pessoa do impetrante constantes de registros públicos.",
            "Garantir a liberdade de locomoção quando alguém sofre ameaça de violência por ilegalidade.",
            "Questionar a inconstitucionalidade abstrata de leis federais perante o Supremo Tribunal Federal."
        ],
        correct: 0,
        explanation: "O art. 5º, inciso LXXIII, da CF/88 define a Ação Popular como remédio constitucional imprescritível para anulação de atos lesivos ao erário, moralidade, meio ambiente e patrimônio."
    },
    {
        topic: "constitucional-administrativo",
        question: "Os atos administrativos possuem atributos ou características próprias que os diferenciam dos atos de direito privado. O atributo que presume que o ato foi emitido em conformidade com a lei até prova em contrário denomina-se:",
        options: [
            "Imperatividade.",
            "Autoexecutoriedade.",
            "Presunção de legitimidade (ou veracidade).",
            "Tipicidade.",
            "Retroatividade."
        ],
        correct: 2,
        explanation: "A presunção de legitimidade e veracidade é um atributo basilar dos atos administrativos, invertendo o ônus da prova para quem o contesta."
    },
    {
        topic: "constitucional-administrativo",
        question: "Segundo a Lei de Improbidade Administrativa (Lei nº 8.429/1992 com alterações recentes), constitui ato de improbidade que atenta contra os princípios da administração pública:",
        options: [
            "Praticar ato visando fim proibido em lei ou regulamento ou diverso daquele previsto na regra de competência.",
            "Receber herança de ente familiar sem declarar ao imposto de renda.",
            "Atrasar o pagamento de fornecedores particulares por motivo de força maior.",
            "Deixar de comparecer a reuniões ordinárias de conselhos municipais sem justificativa.",
            "Contratar assessoria jurídica privada para defesa pessoal em processos particulares."
        ],
        correct: 0,
        explanation: "O art. 11 da Lei nº 8.429/1992 tipifica os atos que atentam contra os princípios da administração pública, destacando o desvio de finalidade e violação de deveres funcionais."
    },
    {
        topic: "constitucional-administrativo",
        question: "A forma de provimento em cargo público que consiste no retorno do servidor estável ao cargo anteriormente ocupado, em decorrência de inabilitação em estágio probatório de outro cargo ou reintegração do ocupante anterior, chama-se:",
        options: [
            "Reversão.",
            "Aproveitamento.",
            "Recondução.",
            "Remoção.",
            "Promoção."
        ],
        correct: 2,
        explanation: "A recondução é o retorno do servidor estável ao cargo de origem por inabilitação em estágio probatório em outro cargo ou por reintegração do antigo ocupante."
    },
    {
        topic: "constitucional-administrativo",
        question: "O controle exercido pelo Poder Legislativo sobre as contas da administração pública, com o auxílio do Tribunal de Contas, é classificado quanto ao momento como:",
        options: [
            "Prévio (ou a priori).",
            "Concomitante.",
            "A posteriori (ou subsequente).",
            "Preventivo autônomo.",
            "Interno corretivo."
        ],
        correct: 2,
        explanation: "A apreciação das contas anuais e verificação de atos financeiros já concluídos constitui controle exercido a posteriori."
    },
    {
        topic: "constitucional-administrativo",
        question: "No que se refere aos direitos políticos na Constituição Federal de 1988, são considerados inelegíveis os inalistáveis e os:",
        options: [
            "Estrangeiros e os conscritos durante o período do serviço militar obrigatório.",
            "Cidadãos com ensino superior incompleto.",
            "Servidores públicos estatutários com menos de 5 anos de carreira.",
            "Militares da reserva remunerada que exerçam atividade comercial.",
            "Jovens entre 18 e 21 anos de idade."
        ],
        correct: 0,
        explanation: "O art. 14, § 4º, da CF/88 estabelece que são inelegíveis os inalistáveis e os estrangeiros, bem como os conscritos durante o serviço militar obrigatório."
    },
    {
        topic: "constitucional-administrativo",
        question: "O poder administrativo que faculta à autoridade hierarquicamente superior distribuir e avocar atribuições, além de fiscalizar a conduta dos subordinados, denomina-se:",
        options: [
            "Poder Disciplinar.",
            "Poder Regulamentar.",
            "Poder Hierárquico.",
            "Poder Vinculado.",
            "Poder de Polícia."
        ],
        correct: 2,
        explanation: "O Poder Hierárquico estrutura a relação de subordinação, permitindo coordenar, controlar, avocar, delegar competências e fiscalizar atos."
    },
    {
        topic: "constitucional-administrativo",
        question: "Segundo a Constituição Federal de 1988, o mandado de segurança coletivo pode ser impetrado por partido político com representação no Congresso Nacional, organização sindical, entidade de classe ou associação legalmente constituída e em funcionamento há pelo menos:",
        options: [
            "1 ano.",
            "2 anos.",
            "5 anos.",
            "10 anos.",
            "6 meses."
        ],
        correct: 0,
        explanation: "O art. 5º, inciso LXX, alínea 'b', da CF/88 exige o requisito temporal de funcionamento por pelo menos um ano para associações impetrarem mandado de segurança coletivo."
    },
    {
        topic: "constitucional-administrativo",
        question: "O princípio administrativo que veda a utilização de cargos públicos para promoção pessoal de autoridades ou servidores, exigindo que a atuação administrativa seja voltada para o interesse coletivo, é o da:",
        options: [
            "Impessoalidade.",
            "Legalidade estrita.",
            "Tipicidade fechada.",
            "Retroatividade benigna.",
            "Autoexecutoriedade."
        ],
        correct: 0,
        explanation: "O princípio da impessoalidade impede o favorecimento pessoal e proíbe nomes ou símbolos de promoção pessoal em atos e publicidades oficiais."
    },
    {
        topic: "constitucional-administrativo",
        question: "A pena de perda da função pública e suspensão dos direitos políticos de até 14 anos é prevista na Lei de Improbidade Administrativa atualizada para os atos que importam em:",
        options: [
            "Enriquecimento ilícito.",
            "Prejuízo efetivo ao erário.",
            "Atentado contra os princípios da administração pública.",
            "Mera irregularidade formal sem dolo.",
            "Erro culposo de contabilidade pública."
        ],
        correct: 0,
        explanation: "Os atos de enriquecimento ilícito (art. 9º da LIA) acarretam as sanções mais severas, incluindo perda da função e suspensão de direitos políticos de até 14 anos."
    },
    {
        topic: "constitucional-administrativo",
        question: "A forma de provimento em cargo público que consiste no preenchimento de cargo decorrente de aproveitamento de servidor que estava em disponibilidade remunerada denomina-se:",
        options: [
            "Aproveitamento.",
            "Reversão.",
            "Recondução.",
            "Promoção horizontal.",
            "Readaptação."
        ],
        correct: 0,
        explanation: "O aproveitamento é o retorno obrigatório do servidor estável que se encontrava em disponibilidade remunerada para cargo de atribuições e vencimentos compatíveis."
    },
    {
        topic: "constitucional-administrativo",
        question: "O controle exercido pelos tribunais sobre a legalidade dos atos administrativos, impedindo abusos e ilegalidades por parte do Poder Executivo, caracteriza o controle:",
        options: [
            "Judicial.",
            "Legislativo financeiro.",
            "Interno administrativo.",
            "Parlamentar prévio.",
            "Político discricionário."
        ],
        correct: 0,
        explanation: "O controle judicial é exercido pelos órgãos do Poder Judiciário sobre os atos administrativos, cingindo-se estritamente à legalidade e legitimidade."
    },
    {
        topic: "constitucional-administrativo",
        question: "Conforme o regime constitucional dos servidores públicos, o tempo de serviço público federal, estadual ou municipal será computado integralmente para os efeitos de:",
        options: [
            "Aposentadoria e disponibilidade.",
            "Férias-prêmio e licenças especiais não remuneradas.",
            "Promoção por merecimento exclusivo na carreira.",
            "Contagem de prazos para estabilidade em cargo acumulável.",
            "Isenção total de imposto de renda retido na fonte."
        ],
        correct: 0,
        explanation: "O art. 103, § 1º, da Constituição Federal estabelece a contagem integral do tempo de serviço público para fins de aposentadoria e disponibilidade."
    },
    {
        topic: "constitucional-administrativo",
        question: "O poder administrativo que autoriza a aplicação de penalidades aos servidores públicos por infrações funcionais cometidas no exercício de suas atribuições é o:",
        options: [
            "Poder Disciplinar.",
            "Poder Normativo regulamentar.",
            "Poder de Polícia originário.",
            "Poder Vinculado estrito.",
            "Poder Hierárquico de avocação."
        ],
        correct: 0,
        explanation: "O Poder Disciplinar é a prerrogativa da administração para apurar infrações e aplicar penalidades aos agentes públicos sujeitos à disciplina funcional."
    },
    {
        topic: "constitucional-administrativo",
        question: "Segundo a Constituição Federal de 1988, a Ação Civil Pública é o instrumento processual adequado para a tutela de:",
        options: [
            "Interesses difusos, coletivos, meio ambiente, consumidor e patrimônio público.",
            "Exclusivamente litígios de natureza estritamente particular e familiar.",
            "Questões salariais individuais de servidores públicos estatutários.",
            "Habeas corpus liberatórios de presos em flagrante comum.",
            "Anulação de casamentos civis por incompatibilidade de feitios."
        ],
        correct: 0,
        explanation: "A Ação Civil Pública (regida pela Lei nº 7.347/85 e CF/88) visa proteger o meio ambiente, consumidor, bens e direitos de interesse difuso ou coletivo."
    },
    {
        topic: "constitucional-administrativo",
        question: "O atributo do ato administrativo que permite à administração pública executar suas decisões diretamente, sem necessidade de prévia autorização do Poder Judiciário, denomina-se:",
        options: [
            "Imperatividade.",
            "Autoexecutoriedade.",
            "Tipicidade restrita.",
            "Presunção de legalidade absoluta.",
            "Irretroatividade financeira."
        ],
        correct: 1,
        explanation: "A autoexecutoriedade confere ao ato administrativo força de execução direta pela própria administração em casos previstos em lei ou urgência."
    },
    {
        topic: "constitucional-administrativo",
        question: "De acordo com a Lei de Improbidade Administrativa, constitui ato de improbidade administrativa que causa lesão ao erário:",
        options: [
            "Facilitar ou concorrer para a incorporação ao patrimônio particular de verbas públicas sem observância das formalidades legais.",
            "Praticar ato visando fim estritamente lícito e aprovado em orçamento.",
            "Atrasar o expediente interno por motivo de força maior fortuita.",
            "Prestar informações verdadeiras a órgãos de controle financeiro.",
            "Cumprir ordem judicial emanada de tribunal superior."
        ],
        correct: 0,
        explanation: "O art. 10 da LIA tipifica as condutas que causam dano ou prejuízo patrimonial efetivo ao erário público."
    },
    {
        topic: "constitucional-administrativo",
        question: "A forma de provimento em cargo público que consiste na investidura em cargo de atribuições e responsabilidades compatíveis com a limitação que o servidor tenha sofrido em sua capacidade física ou mental denomina-se:",
        options: [
            "Readaptação.",
            "Reversão.",
            "Aproveitamento.",
            "Recondução.",
            "Promoção."
        ],
        correct: 0,
        explanation: "A readaptação é a forma de provimento em cargo compatível quando o servidor sofre redução de sua capacidade física ou mental verificada em junta médica."
    },
    {
        topic: "constitucional-administrativo",
        question: "O controle exercido pelo próprio Poder Executivo sobre os atos de seus órgãos e agentes, visando verificar a legalidade e conveniência, denomina-se controle:",
        options: [
            "Judicial externo.",
            "Legislativo financeiro.",
            "Administrativo (ou interno).",
            "Parlamentar a posteriori.",
            "Popular de contas."
        ],
        correct: 2,
        explanation: "O controle administrativo é exercido internamente pela própria administração sobre seus atos, abrangendo aspectos de legalidade e mérito."
    },
    {
        topic: "constitucional-administrativo",
        question: "No que se refere aos direitos de nacionalidade previstos na Constituição Federal de 1988, são privativos de brasileiro nato os cargos de:",
        options: [
            "Presidente e Vice-Presidente da República, Presidente da Câmara dos Deputados, do Senado Federal, Ministro do STF, entre outros expressos.",
            "Guarda Municipal e Agente de Trânsito local.",
            "Professor universitário de instituições federais.",
            "Médico perito do INSS.",
            "Engenheiro civil de autarquias municipais."
        ],
        correct: 0,
        explanation: "O art. 12, § 3º, da CF/88 elenca taxativamente os cargos privativos de brasileiro nato (como Chefe de Poderes e Ministros do STF)."
    },
    {
        topic: "constitucional-administrativo",
        question: "O poder administrativo que obriga a obediência estrita aos regulamentos e ordens de serviço emitidos pelas autoridades competentes dentro de uma estrutura escalonada é o:",
        options: [
            "Poder Hierárquico.",
            "Poder Disciplinar punitivo.",
            "Poder Normativo autônomo.",
            "Poder Vinculado absoluto.",
            "Poder de Polícia originário."
        ],
        correct: 0,
        explanation: "O Poder Hierárquico estrutura a subordinação administrativa, definindo dever de obediência a ordens legais de superiores."
    },
    {
        topic: "constitucional-administrativo",
        question: "Segundo a Constituição Federal de 1988, o mandado de segurança individual protege direito líquido e certo, não amparado por habeas corpus ou habeas data, quando o responsável pela ilegalidade ou abuso de poder for:",
        options: [
            "Autoridade pública ou agente de pessoa jurídica no exercício de atribuições do poder público.",
            "Exclusivamente um cidadão particular em litígio cível.",
            "Empresa privada sem concessão ou permissão estatal.",
            "Partido político em convenção interna partidária.",
            "Associação recreativa sem fins lucrativos."
        ],
        correct: 0,
        explanation: "O art. 5º, LXIX, da CF/88 define o mandado de segurança contra ato de autoridade pública ou agente de pessoa jurídica delegada."
    },
    {
        topic: "constitucional-administrativo",
        question: "O princípio da moralidade administrativa exige que a atuação do agente público paute-se não apenas pela legalidade estrita, mas também por:",
        options: [
            "Ética, boa-fé, honestidade, lealdade às instituições e probidade.",
            "Interesses partidários exclusivos da gestão vigente.",
            "Celeridade na omissão de controles financeiros.",
            "Sigilo absoluto de todos os atos remuneratórios.",
            "Desrespeito às leis orçamentárias em prol da economia."
        ],
        correct: 0,
        explanation: "A moralidade administrativa vincula a conduta pública aos preceitos éticos, probidade e boa-fé."
    },
    {
        topic: "constitucional-administrativo",
        question: "De acordo com a Lei de Improbidade Administrativa, constitui ato que atenta contra os princípios da administração pública a prática de ação ou omissão que viole os deveres de:",
        options: [
            "Honestidade, imparcialidade, legalidade e lealdade às instituições.",
            "Lucratividade empresarial privada e concorrência de mercado.",
            "Sigilo eleitoral partidário obrigatório.",
            "Participação em greves gerais sindicais.",
            "Isenção tributária pessoal de autoridades."
        ],
        correct: 0,
        explanation: "O art. 11 da LIA elenca a violação dos deveres de honestidade, imparcialidade, legalidade e lealdade como atentado aos princípios administrativos."
    },
    {
        topic: "constitucional-administrativo",
        question: "A forma de provimento originário em cargo público efetivo que depende obrigatoriamente de aprovação prévia em concurso público denomina-se:",
        options: [
            "Nomeação.",
            "Promoção.",
            "Reversão.",
            "Readaptação.",
            "Aproveitamento."
        ],
        correct: 0,
        explanation: "A nomeação é a única forma de provimento originário em cargo público efetivo precedida de concurso público."
    },
    {
        topic: "constitucional-administrativo",
        question: "O controle legislativo externo da administração pública federal, exercido com o auxílio do Tribunal de Contas da União, abrange a fiscalização:",
        options: [
            "Contábil, financeira, orçamentária, operacional e patrimonial.",
            "Exclusivamente de contratos particulares de locação civil.",
            "De crimes hediondos praticados por civis comuns.",
            "Das decisões de tribunais eclesiásticos religiosos.",
            "Do patrimônio particular de servidores inativos."
        ],
        correct: 0,
        explanation: "O art. 71 da CF/88 define o escopo da fiscalização exercida pelo Congresso Nacional com auxílio do TCU (contábil, financeira, orçamentária, operacional e patrimonial)."
    },
    {
        topic: "constitucional-administrativo",
        question: "No tocante aos direitos políticos, a perda dos direitos políticos ocorre em casos de, entre outros:",
        options: [
            "Cancelamento de naturalização por sentença transitada em julgado.",
            "Alistamento eleitoral facultativo de jovens de 16 anos.",
            "Filiação partidária a legendas de oposição.",
            "Exercício de cargo comissionado municipal.",
            "Mudança de domicílio eleitoral interestadual."
        ],
        correct: 0,
        explanation: "O art. 15 da CF/88 prevê a perda ou suspensão dos direitos políticos, incluindo o cancelamento de naturalização por sentença transitada em julgado."
    },
    {
        topic: "constitucional-administrativo",
        question: "O poder administrativo que confere à administração a prerrogativa de editar normas complementares para a fiel execução das leis denomina-se:",
        options: [
            "Poder Regulamentar (ou Normativo).",
            "Poder Disciplinar punitivo.",
            "Poder Hierárquico de avocação.",
            "Poder de Polícia originário.",
            "Poder Vinculado estrito."
        ],
        correct: 0,
        explanation: "O Poder Regulamentar é a prerrogativa conferida ao Chefe do Executivo para editar decretos e regulamentos de fiel execução das leis."
    },
    {
        topic: "constitucional-administrativo",
        question: "Conforme a Constituição Federal de 1988, a desapropriação por necessidade ou utilidade pública, ou por interesse social, em regra dará direito a:",
        options: [
            "Justa e prévia indenização em dinheiro, ressalvados os casos previstos na própria Constituição.",
            "Indenização em títulos da dívida pública com carência de 30 anos.",
            "Compensação pecuniária isenta de avaliação judicial prévia.",
            "Troca obrigatória por imóveis rurais no exterior.",
            "Nenhuma reparação por se tratar de supremacia do interesse público."
        ],
        correct: 0,
        explanation: "O art. 5º, XXIV, da CF/88 garante a justa e prévia indenização em dinheiro nas desapropriações comuns por utilidade pública ou interesse social."
    },
    {
        topic: "constitucional-administrativo",
        question: "No âmbito da Administração Pública Indireta, a entidade de direito público criada por lei específica para exercer atividades típicas do Estado é a:",
        options: [
            "Autarquia.",
            "Sociedade de Economia Mista.",
            "Empresa Pública civil.",
            "Fundação Privada concessionária.",
            "Organização Social sem fins lucrativos."
        ],
        correct: 0,
        explanation: "As autarquias são criadas por lei específica como pessoas jurídicas de direito público para desempenhar atividades típicas estatais."
    },
    {
        topic: "constitucional-administrativo",
        question: "O ato administrativo viciado por incompetência do agente que não seja de competência exclusiva pode ser objeto de:",
        options: [
            "Convalidação pela própria autoridade competente.",
            "Anulação compulsória irrevogável pelo Poder Judiciário.",
            "Cassações de direitos políticos dos servidores envolvidos.",
            "Sanção penal automática em regime fechado.",
            "Inconstitucionalidade material perante o STF."
        ],
        correct: 0,
        explanation: "Vícios de competência não exclusiva ou de forma não essencial admitem convalidação se não causarem lesão ao interesse público ou a terceiros."
    },
    {
        topic: "constitucional-administrativo",
        question: "O direito de greve dos servidores públicos civis, conforme disposição constitucional (art. 37, VII), será exercido nos termos e nos limites definidos em:",
        options: [
            "Lei específica.",
            "Decreto regulamentar isolado do prefeito.",
            "Portaria ministerial do trabalho.",
            "Acordo coletivo privado da CLT.",
            "Resolução do Tribunal de Contas."
        ],
        correct: 0,
        explanation: "O art. 37, VII, da CF/88 prevê o direito de greve dos servidores públicos civis a ser exercido nos termos de lei específica."
    },
    {
        topic: "constitucional-administrativo",
        question: "A responsabilidade civil do Estado no Brasil pelas condutas comissivas de seus agentes públicos no exercício da função é de natureza:",
        options: [
            "Objetiva, fundada na teoria do risco administrativo.",
            "Subjetiva, exigindo sempre demonstração de dolo ou culpa do Estado.",
            "Exclusivamente penal subsidiária.",
            "Isenta de qualquer obrigação de indenizar terceiros.",
            "Condicionada à prévia condenação criminal do servidor."
        ],
        correct: 0,
        explanation: "O art. 37, § 6º, da CF/88 adota a responsabilidade civil objetiva do Estado pelas condutas comissivas de seus agentes que causarem danos a terceiros."
    },

    // ==================================================================
    // 4. DIREITO PENAL & PROCESSUAL PENAL - 40 QUESTÕES
    // ==================================================================
    {
        topic: "penal-processual",
        question: "De acordo com o Código Penal Brasileiro, no que tange à teoria geral do crime e à excludente de ilicitude, o agente que pratica o fato em estado de necessidade atua quando:",
        options: [
            "Pratica a conduta sob coação moral irresistível ou obediência hierárquica.",
            "Salva de perigo atual, que não provocou por sua vontade, direito próprio ou alheio, cujo sacrifício não era razoável exigir-se.",
            "Age em defesa de direito próprio ou alheio, repelindo agressão injusta, atual ou iminente, usando moderadamente dos meios necessários.",
            "Estrito cumprimento de dever legal ou exercício regular de direito.",
            "Incorre em erro sobre a ilicitude do fato, se inevitável."
        ],
        correct: 1,
        explanation: "O art. 24 do Código Penal define o estado de necessidade, caracterizado pela salvaguarda de direito próprio ou alheio contra perigo atual não provocado pelo agente."
    },
    {
        topic: "penal-processual",
        question: "No âmbito do Código de Processo Penal, qualquer do povo poderá e as autoridades policiais e seus agentes deverão prender quem quer que seja encontrado em flagrante delito. Considera-se em flagrante delito quem:",
        options: [
            "É encontrado, logo depois, com instrumentos, armas, objetos ou papéis que façam presumir ser ele o autor da infração.",
            "É apontado pela vítima após 48 horas do fato em sede policial.",
            "Possui antecedentes criminais pela mesma prática delituosa.",
            "Confessa o crime espontaneamente perante a autoridade judiciária competente.",
            "Apresenta-se voluntariamente à delegacia após o mandado de prisão preventiva."
        ],
        correct: 0,
        explanation: "O art. 302, inciso IV, do CPP caracteriza o flagrante presumido (ou ficto) quando o indivíduo é encontrado logo depois com instrumentos ou papéis que façam presumir ser ele o autor do crime."
    },
    {
        topic: "penal-processual",
        question: "Sobre o Inquérito Policial regulado no Código de Processo Penal, assinale a alternativa correta:",
        options: [
            "É um processo judicial contraditório de competência exclusiva dos juízes de direito.",
            "É procedimento administrativo informativo, escrito, inquisitivo e dispensável para a propositura da ação penal.",
            "Exige a presença obrigatória de advogado constituído para o interrogatório do investigado.",
            "Pode ser arquivado diretamente pela autoridade policial de ofício quando concluir pela falta de provas.",
            "Tem prazo improrrogável de 5 dias para réus soltos em qualquer hipótese."
        ],
        correct: 1,
        explanation: "O inquérito policial tem natureza de procedimento administrativo informativo, inquisitorial, e serve de base para a denúncia ou queixa, sendo dispensável."
    },
    {
        topic: "penal-processual",
        question: "No tocante aos Juizados Especiais Criminais (Lei nº 9.099/1995), consideram-se infrações penais de menor potencial ofensivo:",
        options: [
            "Todos os crimes cuja pena máxima cominada não ultrapasse 2 anos, cumulada ou não com multa.",
            "Os crimes punidos com reclusão em regime fechado independentemente da pena.",
            "Apenas as contravenções penais e crimes hediondos de menor gravidade.",
            "Os crimes contra a administração pública com prejuízo inferior a um salário mínimo.",
            "Os crimes cuja pena mínima seja igual ou superior a 4 anos."
        ],
        correct: 0,
        explanation: "O art. 61 da Lei nº 9.099/1995 define as infrações penais de menor potencial ofensivo como as contravenções penais e os crimes a que a lei comine pena máxima não superior a 2 anos."
    },
    {
        topic: "penal-processual",
        question: "No que se refere ao concurso de crimes (Código Penal), quando o agente, mediante uma só ação ou omissão, pratica dois ou mais crimes, idênticos ou não, tem-se configurado o instituto do:",
        options: [
            "Concurso material.",
            "Crime continuado.",
            "Concurso formal.",
            "Crime impossível.",
            "Atenuação genérica da pena."
        ],
        correct: 2,
        explanation: "O art. 70 do Código Penal define o concurso formal quando o agente pratica dois ou mais crimes mediante uma única ação ou omissão."
    },
    {
        topic: "penal-processual",
        question: "No que diz respeito aos crimes contra o patrimônio previstos no Código Penal, o furto qualificado pelo rompimento de obstáculo à subtração da coisa diferencia-se do furto simples pela:",
        options: [
            "Exigência de violência física direta contra a pessoa da vítima.",
            "Previsão de pena mais rigorosa em razão do modo de execução do crime.",
            "Natureza infamante do delito, tornando-o inafiançável em qualquer hipótese.",
            "Competência exclusiva do Tribunal do Júri para julgamento.",
            "Impossibilidade de concessão de liberdade provisória com fiança."
        ],
        correct: 1,
        explanation: "O art. 155, § 4º, I, do Código Penal qualifica o furto quando há destruição ou rompimento de obstáculo, cominando reclusão superior à da modalidade simples."
    },
    {
        topic: "penal-processual",
        question: "A prisão em flagrante delito efetuada por qualquer do povo (flagrante facultativo) é permitida porque:",
        options: [
            "Os cidadãos possuem o dever legal indeclinável de realizar patrulhamento ostensivo armado.",
            "Qualquer do povo poderá prender quem quer que seja encontrado em flagrante delito.",
            "Substitui inteiramente a atuação das polícias civil e militar.",
            "Exige mandado judicial prévio de prisão domiciliar.",
            "Aplica-se exclusivamente a crimes de menor potencial ofensivo."
        ],
        correct: 1,
        explanation: "O art. 301 do CPP estabelece que qualquer do povo poderá prender quem seja encontrado em flagrante delito."
    },
    {
        topic: "penal-processual",
        question: "No âmbito do Código Penal, o erro sobre a ilicitude do fato (erro de proibição), se for inevitável:",
        options: [
            "Isenta o agente de pena.",
            "Atenua a pena de um terço à metade obrigatoriamente.",
            "Não exclui a culpabilidade nem a pena.",
            "Converte a pena privativa de liberdade em restritiva de direitos automaticamente.",
            "Transforma o crime doloso em culposo por equiparação legal."
        ],
        correct: 0,
        explanation: "O art. 21 do Código Penal determina que o desconhecimento da lei é inexcusável, mas o erro sobre a ilicitude do fato, se inevitável, isenta de pena."
    },
    {
        topic: "penal-processual",
        question: "De acordo com o Código de Processo Penal, a prisão preventiva pode ser decretada pelo juiz, a requerimento do Ministério Público, do assistente da acusação, ou do delegado, ou de ofício (durante a investigação), desde que presentes os requisitos cautelares, EXCETO:",
        options: [
            "Garantia da ordem pública ou econômica.",
            "Conveniência da instrução criminal ou assegurar a aplicação da lei penal.",
            "Prova da existência do crime e indícios suficientes de autoria (fumus boni iuris).",
            "Garantia de que o réu confesse o crime perante a autoridade policial em 24 horas.",
            "Existência de perigo gerado pelo estado de liberdade do imputado (periculum libertatis)."
        ],
        correct: 3,
        explanation: "Os requisitos da prisão preventiva constam no art. 312 do CPP, não figurando confissão forçada ou em prazo exíguo como pressuposto cautelar legítimo."
    },
    {
        topic: "penal-processual",
        question: "No crime continuado (art. 71 do Código Penal), quando o agente pratica dois ou mais crimes da mesma espécie e, pelas condições de tempo, lugar, maneira de execução e outras semelhantes, devem os subsequentes ser havidos como continuação do primeiro:",
        options: [
            "Aplica-se a pena de um só dos crimes, se idênticas, ou a mais grave, se diversas, aumentada, em qualquer caso, de um sexto a metade.",
            "Soma-se aritmeticamente a pena de todos os crimes praticados sem limite máximo.",
            "Aplica-se estritamente a regra do concurso material obrigatório.",
            "Extingue-se a punibilidade do agente pelo perdão judicial.",
            "Reduz-se a pena pela metade em razão da continuidade delitiva."
        ],
        correct: 0,
        explanation: "O art. 71 do Código Penal define o sistema de aumento de pena para o crime continuado, variando de 1/6 a 1/2 com base no número de infrações cometidas."
    },
    {
        topic: "penal-processual",
        question: "O inquérito policial nos crimes de ação penal pública condicionada à representação:",
        options: [
            "Pode ser iniciado pela autoridade policial de ofício sem qualquer manifestação da vítima.",
            "Depende de representação da vítima ou de quem tenha qualidade para representá-la para que possa ser instaurado e prosseguir.",
            "Depende exclusivamente de ordem expressa do Presidente da República.",
            "Apenas pode ser instaurado após condenação cível prévia.",
            "É privativo de juízes federais de primeira instância."
        ],
        correct: 1,
        explanation: "Nas ações penais públicas condicionadas, a representação da vítima constitui condição de procedibilidade indispensável para a instauração do inquérito e da ação."
    },
    {
        topic: "penal-processual",
        question: "O princípio constitutional e processual penal que garante que ninguém será considerado culpado até o trânsito em julgado de sentença penal condenatória denomina-se:",
        options: [
            "Princípio da presunção de inocência (ou não culpabilidade).",
            "Princípio da insignificância penal.",
            "Princípio da obrigatoriedade da ação penal.",
            "Princípio da demanda irrestrita.",
            "Princípio da identidade física do juiz."
        ],
        correct: 0,
        explanation: "O art. 5º, inciso LVII, da CF/88 consagra o princípio da presunção de inocência."
    },
    {
        topic: "penal-processual",
        question: "No tocante ao crime de dano qualificado (art. 163, parágrafo único, inciso III, do Código Penal), constitui qualificadora específica causar prejuízo a:",
        options: [
            "Patrimônio público, coisa de valor artístico, arqueológico ou histórico.",
            "Veículos particulares estacionados em via pública sem autorização.",
            "Bens de uso pessoal de consumo imediato de particulares.",
            "Imóveis residenciais urbanos desocupados há mais de um ano.",
            "Ferramentas de trabalho de uso exclusivo em empresas privadas."
        ],
        correct: 0,
        explanation: "O dano qualificado abrange contra o patrimônio da União, Estado, Município, empresa concessionária de serviços públicos ou sociedade de economia mista, ou contra o patrimônio histórico."
    },
    {
        topic: "penal-processual",
        question: "A transação penal prevista na Lei nº 9.099/1995 (Juizados Especiais Criminais) consiste na aplicação imediata de pena restritiva de direitos ou multa, proposta pelo Ministério Público:",
        options: [
            "Nos crimes de médio e grande potencial ofensivo com pena superior a 4 anos.",
            "Nas infrações penais de menor potencial ofensivo, antes do oferecimento da denúncia.",
            "Apenas após a condenação definitiva em segunda instância.",
            "Exclusivamente para réus reincidentes específicos em crimes dolosos.",
            "Mediante homologação do delegado de polícia no distrito policial."
        ],
        correct: 1,
        explanation: "A transação penal é proposta pelo MP antes da denúncia nas infrações de menor potencial ofensivo (pena máxima até 2 anos), evitando o processo criminal."
    },
    {
        topic: "penal-processual",
        question: "No que tange aos crimes contra a administração pública praticados por funcionário público, o crime de peculato (art. 312 do Código Penal) caracteriza-se quando o agente:",
        options: [
            "Apropria-se de dinheiro, valor ou outro bem móvel, público ou particular, de que tem a posse em razão do cargo, ou o desvia.",
            "Exige, para si ou para outrem, direta ou indiretamente, ainda que fora da função, vantagem indevida.",
            "Solicita ou recebe, para si ou para outrem, direta ou indiretamente, vantagem indevida em razão da função.",
            "Retarda ou deixa de praticar ato de ofício contra expressa disposição de lei.",
            "Invade repartição pública municipal fora do horário comercial."
        ],
        correct: 0,
        explanation: "O art. 312 do CP define o crime de peculato pela apropriação ou desvio de bens ou valores públicos em razão da facilidade do cargo."
    },
    {
        topic: "penal-processual",
        question: "De acordo com o Código de Processo Penal, a busca e apreensão domiciliar sem mandado judicial pode ocorrer durante o dia ou à noite em caso de:",
        options: [
            "Flagrante delito, desastre, prestação de socorro ou por consentimento do morador.",
            "Investigação de crimes contra a ordem tributária federal.",
            "Requerimento fundamentado de delegado de polícia civil.",
            "Suspeita genérica de tráfico de drogas em condomínios fechados.",
            "Ordem verbal expedida pelo Ministério Público."
        ],
        correct: 0,
        explanation: "A inviolabilidade domiciliar (art. 5º, XI, CF e CPP) ressalva flagrante delito, desastre, socorro ou consentimento a qualquer hora, ou ordem judicial diurna."
    },
    {
        topic: "penal-processual",
        question: "No concurso material de crimes (art. 69 do Código Penal), quando o agente pratica dois ou mais crimes, em ações desvinculadas, aplicam-se:",
        options: [
            "Cumulativamente as penas privativas de liberdade em que haja incorrido (soma aritmética).",
            "Apenas a pena do crime mais grave aumentada de um terço.",
            "A pena de um só dos crimes, se idênticas, sem qualquer acréscimo.",
            "A extinção automática da punibilidade pelo perdão judicial.",
            "A conversão de todas as penas em advertência verbal."
        ],
        correct: 0,
        explanation: "O concurso material exige a soma aritmética das penas aplicadas para cada infração cometida de forma autônoma."
    },
    {
        topic: "penal-processual",
        question: "O inquérito policial tem como característica ser inquisitivo, o que significa que:",
        options: [
            "Não se sujeita ao contraditório e à ampla defesa plenos próprios da instrução processual judicial.",
            "Exige a presença obrigatória de juiz de direito em todas as oitivas de testemunhas.",
            "As provas produzidas possuem valor absoluto inquestionável pelo magistrado.",
            "É vedado o acesso do advogado aos autos em qualquer hipótese investigativa.",
            "Sua conclusão vincula obrigatoriamente a denúncia do Ministério Público."
        ],
        correct: 0,
        explanation: "A inquisitorialidade do inquérito policial dispensa o contraditório pleno por tratar-se de procedimento informativo de coleta de elementos."
    },
    {
        topic: "penal-processual",
        question: "O princípio da insignificância (ou bagatela) no direito penal brasileiro tem como efeito jurídico principal:",
        options: [
            "Excluir a tipicidade material do fato, tornando a conduta atípica perante o ordenamento.",
            "Reduzir a pena privativa de liberdade aplicada pelo juiz no patamar mínimo.",
            "Transformar o crime doloso em crime culposo por equiparação.",
            "Conceder perdão judicial após a condenação definitiva.",
            "Suspender o processo por dois anos nos Juizados Especiais."
        ],
        correct: 0,
        explanation: "O princípio da insignificância afasta a tipicidade material do delito quando a ofensa ao bem jurídico for ínfima, tornando o fato atípico."
    },
    {
        topic: "penal-processual",
        question: "No crime de resistência (art. 329 do Código Penal), opor-se à execução de ato legal, mediante violência ou ameaça a funcionário competente para executá-lo ou a quem lhe esteja prestando auxílio:",
        options: [
            "É punido com detenção, sem prejuízo da pena correspondente à violência.",
            "É considerado contravenção penal de menor potencial ofensivo.",
            "Aplica-se exclusivamente a particulares sem vínculo com o Estado.",
            "Não constitui crime caso o ato legal seja administrativo municipal.",
            "Exige comprovação de lesão corporal grave para tipificação."
        ],
        correct: 0,
        explanation: "O art. 329 do CP tipifica o crime de resistência com pena de detenção, cumulada com a violência cometida no ato."
    },
    {
        topic: "penal-processual",
        question: "Nos Juizados Especiais Criminais (Lei nº 9.099/1995), a suspensão condicional do processo (sursis processual) pode ser proposta pelo Ministério Público quando a pena mínima cominada for igual ou inferior a:",
        options: [
            "1 ano.",
            "2 anos.",
            "4 anos.",
            "8 anos.",
            "10 anos."
        ],
        correct: 0,
        explanation: "O art. 89 da Lei nº 9.099/1995 estabelece que nos crimes em que a pena mínima cominada for igual ou inferior a 1 ano, o MP poderá propor a suspensão do processo."
    },
    {
        topic: "penal-processual",
        question: "De acordo com o Código Penal, o funcionário público que exige, para si ou para outrem, direta ou indiretamente, ainda que fora da função ou antes de assumi-la, mas em razão dela, vantagem indevida, comete o crime de:",
        options: [
            "Concussão.",
            "Corrupção passiva.",
            "Prevaricação.",
            "Peculato desvio.",
            "Facilitação de contrabando."
        ],
        correct: 0,
        explanation: "O art. 316 do Código Penal tipifica o crime de concussão, caracterizado pelo verbo 'exigir' vantagem indevida."
    },
    {
        topic: "penal-processual",
        question: "No processo penal brasileiro, a prisão preventiva poderá ser revogada pelo juiz se:",
        options: [
            "No curso do processo, verificar a falta de motivo para que subsista, bem como decretar novamente se houver novas razões.",
            "O réu solicitar liberdade por escrito sem manifestação do Ministério Público.",
            "O delegado de polícia emitir parecer desfavorável ao réu.",
            "Passarem dez dias da prisão em flagrante.",
            "O réu pagar custas judiciais antecipadas."
        ],
        correct: 0,
        explanation: "O art. 316 do CPP autoriza o juiz a revogar a prisão preventiva quando cessarem os motivos cautelares justificadores."
    },
    {
        topic: "penal-processual",
        question: "O concurso formal impróprio (ou perfeito vs. imperfeito), previsto no art. 70, segunda parte, do Código Penal, ocorre quando o agente, mediante uma única ação ou omissão, pratica crimes resultantes de desígnios autônomos, applying-se:",
        options: [
            "As penas de forma cumulativa (soma aritmética), tal como no concurso material.",
            "Apenas a pena do crime mais grave aumentada de um sexto até metade.",
            "O perdão judicial automático.",
            "A extinção da punibilidade.",
            "Redução de pena pela metade."
        ],
        correct: 0,
        explanation: "No concurso formal imperfeito (desígnios autônomos), embora a conduta seja única, os crimes decorrem de dolo autônomo, somando-se as penas aritmeticamente."
    },
    {
        topic: "penal-processual",
        question: "O inquérito policial nos crimes de ação penal pública incondicionada pode ser iniciado pela autoridade policial:",
        options: [
            "De ofício, mediante requisição da autoridade judiciária ou do Ministério Público, ou a requerimento do ofendido.",
            "Exclusivamente por ordem expressa do governador do estado.",
            "Mediante petição assinada por sindicatos patronais particulares.",
            "Apenas após trânsito em julgado na esfera cível.",
            "Por solicitação de embaixadas estrangeiras."
        ],
        correct: 0,
        explanation: "O art. 5º do CPP estabelece as formas de instauração do inquérito policial nas ações públicas incondicionadas."
    },
    {
        topic: "penal-processual",
        question: "O princípio da presunção de inocência (ou não culpabilidade), consagrado na Constituição Federal, impede que:",
        options: [
            "Alguém seja tratado como culpado antes do trânsito em julgado de sentença penal condenatória definitiva.",
            "O juiz decrete prisões cautelares em nenhuma hipótese.",
            "O Ministério Público ofereça denúncia criminal.",
            "A defesa produza provas testemunhais em juízo.",
            "O réu permaneça em silêncio durante o interrogatório."
        ],
        correct: 0,
        explanation: "A presunção de inocência veda a antecipação de culpa e de efeitos penais definitivos antes do trânsito em julgado da condenação."
    },
    {
        topic: "penal-processual",
        question: "No crime de desacato (art. 331 do Código Penal), desacatar funcionário público no exercício da função ou em razão dela:",
        options: [
            "É punido com detenção ou multa, protegendo o prestígio e a dignidade da função pública.",
            "Constitui contravenção penal sem pena privativa de liberdade.",
            "Aplica-se exclusivamente a particulares sem vínculo funcional.",
            "Exige comprovação de agressão física direta para sua configuração.",
            "Não é crime caso ocorra fora do expediente oficial."
        ],
        correct: 0,
        explanation: "O art. 331 do CP tipifica o desacato como crime formal contra a administração pública, punido com detenção ou multa."
    },
    {
        topic: "penal-processual",
        question: "Nos Juizados Especiais Criminais (Lei nº 9.099/1995), a composição dos danos civis:",
        options: [
            "Homologada pelo juiz mediante sentença irrecorrível, terá eficácia de título executivo a ser executado no próprio juízo civil.",
            "Exige homologação do Supremo Tribunal Federal.",
            "Substitui inteiramente a pena privativa de liberdade sem acordo patrimonial.",
            "Depende de aprovação prévia do Ministro da Justiça.",
            "Aplica-se apenas a crimes hediondos de menor gravidade."
        ],
        correct: 0,
        explanation: "O art. 74 da Lei 9.099/95 estabelece que a composição dos danos civis homologada gera título executivo judicial para execução civil."
    },
    {
        topic: "penal-processual",
        question: "De acordo com o Código Penal, o crime de corrupção passiva consuma-se quando o funcionário público:",
        options: [
            "Solicita ou recebe, para si ou para outrem, direta ou indiretamente, vantagem indevida, ou aceita promessa de tal vantagem.",
            "Pratica agressão física direta contra particulares em via pública.",
            "Apropriar-se de dinheiro público sob sua guarda funcional.",
            "Retarda ato de ofício sem motivação aparente.",
            "Deixa de prestar contas a conselhos municipais."
        ],
        correct: 0,
        explanation: "O art. 317 do CP tipifica a corrupção passiva pelos verbos solicitar, receber ou aceitar promessa de vantagem indevida."
    },
    {
        topic: "penal-processual",
        question: "No processo penal, a prisão em flagrante delito exige que a comunicação do ocorrido seja encaminhada ao juiz competente no prazo máximo de:",
        options: [
            "24 horas após a prisão, com entrega de nota de culpa ao preso.",
            "48 dias úteis.",
            "Cinco dias contados do término do inquérito.",
            "Dez dias úteis improrrogáveis.",
            "Trinta dias corridos."
        ],
        correct: 0,
        explanation: "O art. 306 do CPP determina que a prisão em flagrante seja comunicada ao juiz em até 24 horas, enviando cópia dos autos ao preso com nota de culpa."
    },
    {
        topic: "penal-processual",
        question: "O concurso material de crimes (art. 69 do Código Penal) diferencia-se do concurso formal (art. 70) porque no material:",
        options: [
            "Há pluralidade de condutas (ações ou omissões) gerando vários crimes, somando-se as penas aritmeticamente.",
            "Existe uma única conduta gerando múltiplos resultados típicos.",
            "Aplica-se a pena de um só crime aumentada de um sexto até metade obrigatoriamente.",
            "Extingue-se a punibilidade do réu pelo perdão judicial.",
            "As penas restritivas de direitos convertem-se em pecuniárias."
        ],
        correct: 0,
        explanation: "O concurso material decorre de várias condutas (ações/omissões) autônomas, aplicando-se a cumulação material (soma de penas)."
    },
    {
        topic: "penal-processual",
        question: "O inquérito policial é dispensável para a propositura da ação penal pelo Ministério Público porque:",
        options: [
            "Trata-se de procedimento informativo prévio cuja existência não condiciona a denúncia, caso já existam elementos suficientes de autoria e materialidade.",
            "A denúncia penal deve obrigatoriamente ser elaborada por delegados de polícia.",
            "O juiz substitui a investigação policial em todos os casos de crimes comuns.",
            "A ação penal pública depende de prévia homologação cível.",
            "É vedado ao Ministério Público oferecer denúncia sem inquérito fechado."
        ],
        correct: 0,
        explanation: "O inquérito policial tem natureza dispensável; se o MP já dispõe de justa causa (elementos informativos suficientes), pode oferecer denúncia diretamente."
    },
    {
        topic: "penal-processual",
        question: "O princípio da presunção de inocência garante que o acusado:",
        options: [
            "Não seja tratado como culpado antes do trânsito em julgado de sentença penal condenatória.",
            "Fique isento de comparecer a atos processuais obrigatórios.",
            "Seja absolvido sumariamente em qualquer crime mediante pedido verbal.",
            "Tenha assistência jurídica gratuita prestada por juízes de direito.",
            "Permaneça em liberdade provisória em crimes hediondos inafiançáveis."
        ],
        correct: 0,
        explanation: "A presunção de inocência impede antecipações de culpa e execuções definitivas de pena antes do trânsito em julgado."
    },
    {
        topic: "penal-processual",
        question: "O crime de prevaricação (art. 319 do Código Penal) consiste em:",
        options: [
            "Retardar ou deixar de praticar ato de ofício, ou praticá-lo contra disposição expressa de lei, para satisfazer interesse ou sentimento pessoal.",
            "Exigir vantagem indevida em razão da função pública.",
            "Apropriar-se de recursos financeiros sob guarda.",
            "Desacatar funcionário público em serviço.",
            "Opor-se à execução de ato legal mediante violência."
        ],
        correct: 0,
        explanation: "O art. 319 do CP tipifica a prevaricação, caracterizada pelo retardamento ou omissão indevida de ato de ofício por interesse ou sentimento pessoal."
    },
    {
        topic: "penal-processual",
        question: "Nos Juizados Especiais Criminais (Lei nº 9.099/1995), a suspensão condicional do processo (sursis processual) é cabível nos crimes em que a pena mínima cominada for:",
        options: [
            "Igual ou inferior a 1 ano, desde que o réu não seja reincidente nem esteja sendo processado.",
            "Superior a 4 anos de reclusão em regime fechado.",
            "Exclusivamente aplicável a contravenções penais sem multa.",
            "Fixada em abstrato com reclusão superior a oito anos.",
            "Determinada por tribunais de segunda instância."
        ],
        correct: 0,
        explanation: "O art. 89 da Lei 9.099/95 autoriza o sursis processual para crimes com pena mínima igual ou inferior a um ano."
    },
    {
        topic: "penal-processual",
        question: "O crime de usurpação de função pública (art. 328 do Código Penal) configura-se quando o particular:",
        options: [
            "Exerce indevidamente função pública sem ter sido legalmente investido.",
            "Atrasa o pagamento de tributos municipais em atraso.",
            "Recusa o cumprimento de ordem policial legal em blitz.",
            "Apresenta documento de identificação falso em cartório.",
            "Falta ao trabalho em empresa privada por mais de três dias."
        ],
        correct: 0,
        explanation: "O art. 328 do CP pune quem usurpa o exercício de função pública sem título legal legítimo."
    },
    {
        topic: "penal-processual",
        question: "A prisão temporária, regida pela Lei nº 7.960/1989, tem como prazo de duração ordinário nos crimes comuns o período de:",
        options: [
            "5 dias, prorrogável por igual período em caso de extrema e comprovada necessidade.",
            "30 dias improrrogáveis.",
            "15 dias sem prorrogação.",
            "24 horas com libertação automática.",
            "60 dias prorrogáveis por um ano."
        ],
        correct: 0,
        explanation: "A Lei 7.960/89 fixa o prazo da prisão temporária ordinária em 5 dias, prorrogável por mais 5 em extrema necessidade (nos hediondos é 30 + 30)."
    },

    // ==================================================================
    // 5. ESTATUTOS MUNICIPAIS (LEIS 1.416/2022 E 1.625/2026) - 40 QUESTÕES
    // ==================================================================
    {
        topic: "estatutos-municipais",
        question: "No que tange ao regime disciplinar e provimento previsto na Lei Municipal nº 1.416/2022 (Estatuto dos Servidores de São Gonçalo), o ato de investidura em cargo público ocorre com:",
        options: [
            "A publicação da nomeação no órgão oficial do Município.",
            "A aprovação e homologação do resultado final do concurso público.",
            "A posse, momento em que se criam os vínculos funcionais e de direitos e deveres.",
            "O início efetivo do exercício das atribuições do cargo após o estágio probatório.",
            "A entrega da carteira funcional pela Secretaria de Administração."
        ],
        correct: 2,
        explanation: "Conforme o estatuto e a teoria do direito administrativo aplicável aos regimes estatutários municipais, a investidura no cargo público ocorre com a posse."
    },
    {
        topic: "estatutos-municipais",
        question: "Conforme as diretrizes da Lei Municipal nº 1.625/2026, que dispõe sobre o Estatuto da Guarda Municipal de São Gonçalo, a estrutura organizacional da corporação compreende:",
        options: [
            "Subordinação hierárquica direta à Polícia Civil em investigações criminais.",
            "Hierarquia, carreira, atribuições específicas do cargo e regulamento disciplinar local.",
            "Autonomia financeira e orçamentária independente da Prefeitura Municipal.",
            "Competência exclusiva para julgar crimes militares cometidos por agentes.",
            "Vinculação operacional exclusiva ao Poder Legislativo Municipal."
        ],
        correct: 1,
        explanation: "A Lei Municipal nº 1.625/2026 estrutura a Guarda Municipal definindo sua hierarquia, regime de carreira, atribuições específicas e regulamento disciplinar local."
    },
    {
        topic: "estatutos-municipais",
        question: "Segundo o Estatuto dos Servidores de São Gonçalo (Lei Municipal nº 1.416/2022), a vacância do cargo público decorrerá das seguintes hipóteses, EXCETO:",
        options: [
            "Exoneração.",
            "Demissão.",
            "Promoção por antiguidade ou merecimento.",
            "Aposentadoria.",
            "Posse em outro cargo inacumulável."
        ],
        correct: 2,
        explanation: "A promoção altera a classe/padrão da carreira, não configurando hipótese típica de vacância do cargo em si."
    },
    {
        topic: "estatutos-municipais",
        question: "Em relação ao estágio probatório previsto no Estatuto dos Servidores de São Gonçalo (Lei nº 1.416/2022), qual é o período de avaliação de aptidão e capacidade para o desempenho do cargo?",
        options: [
            "12 meses de efetivo exercício.",
            "24 meses de efetivo exercício.",
            "36 meses de efetivo exercício.",
            "48 meses de efetivo exercício.",
            "60 meses de efetivo exercício."
        ],
        correct: 2,
        explanation: "Conforme a legislação municipal alinhada à CF/88 (art. 41), o período do estágio probatório é de 3 anos (36 meses) de efetivo exercício."
    },
    {
        topic: "estatutos-municipais",
        question: "De acordo com a Lei Municipal nº 1.625/2026 (Estatuto da Guarda Municipal de São Gonçalo), a aplicação das sanções disciplinares aos servidores da corporação deve observar os princípios do contraditório e da ampla defesa, sendo a pena de demissão aplicável nos casos de:",
        options: [
            "Atraso injustificado ao serviço por até dois dias consecutivos.",
            "Insubordinação grave em serviço ou improbidade administrativa.",
            "Falta de uso do uniforme completo em patrulhamento ordinário.",
            "Divergência de opinião técnica com superior hierárquico em reunião de instrução.",
            "Uso de telefone celular pessoal durante o horário de refeição."
        ],
        correct: 1,
        explanation: "A demissão é a penalidade mais severa do regime disciplinar público, reservada a faltas graves como insubordinação grave, improbidade, crime contra a administração pública ou incontinência pública."
    },
    {
        topic: "estatutos-municipais",
        question: "De acordo com o Estatuto dos Servidores de São Gonçalo, a investidura em cargo público municipal concretiza-se com o ato de:",
        options: [
            "Inscrição homologada no concurso público.",
            "Aprovação nas provas teóricas e testes físicos.",
            "Posse.",
            "Aposentadoria voluntária.",
            "Conclusão do estágio probatório de 3 anos."
        ],
        correct: 2,
        explanation: "A investidura no cargo público municipal ocorre estritamente com a posse."
    },
    {
        topic: "estatutos-municipais",
        question: "Segundo o Estatuto dos Servidores de São Gonçalo (Lei nº 1.416/2022), a remoção de servidor público municipal poderá ocorrer:",
        options: [
            "Apenas a pedido do servidor, sendo vedada de ofício.",
            "A pedido ou de ofício, no interesse da administração pública, observados os requisitos legais.",
            "Exclusivamente mediante autorização do sindicato da categoria.",
            "Por sorteio público anual entre os servidores da mesma classe.",
            "Por punição disciplinar sumária aplicada sem direito de defesa."
        ],
        correct: 1,
        explanation: "O instituto da remoção estatutária pode dar-se a pedido ou de ofício, atendendo estritamente às necessidades e ao interesse da administração pública."
    },
    {
        topic: "estatutos-municipais",
        question: "De acordo com a Lei Municipal nº 1.625/2026 (Estatuto da Guarda Municipal de São Gonçalo), o regime de trabalho dos integrantes da corporação e suas escalas de serviço:",
        options: [
            "Devem observar as peculiaridades da atividade de segurança ostensiva ininterrupta, garantidos os direitos remuneratórios e adicionais legais.",
            "Seguem estritamente o expediente comercial de segunda a sexta-feira, das 8h às 17h.",
            "São regidos pelas normas da CLT, sem qualquer subordinação a estatuto público.",
            "Impedem a realização de plantões noturnos em feriados prolongados.",
            "São definidos de forma livre e autônoma por cada guarda em sua lotação."
        ],
        correct: 0,
        explanation: "A Guarda Municipal atua em regime de plantão e revezamento contínuo (24x7), respeitando as garantias da legislação estatutária específica."
    },
    {
        topic: "estatutos-municipais",
        question: "Conforme o Estatuto dos Servidores Públicos de São Gonçalo, a licença para tratamento de saúde concedida ao servidor público municipal depende de:",
        options: [
            "Aprovação em assembleia geral dos demais servidores da prefeitura.",
            "Inspeção por junta médica oficial do município ou órgão competente.",
            "Apresentação de declaração de próprio punho sem comprovação clínica.",
            "Autorização da câmara de vereadores por maioria absoluta.",
            "Pagamento de taxa de emissão de laudo pericial."
        ],
        correct: 1,
        explanation: "A concessão de licença médica estatutária exige formalmente inspeção e laudo emitido por junta médica oficial."
    },
    {
        topic: "estatutos-municipais",
        question: "Constitui falta disciplinar de natureza grave punível com demissão nos termos das leis estatutárias de São Gonçalo:",
        options: [
            "A improbidade administrativa, a incontinência pública e a insubordinação grave em serviço.",
            "O esquecimento de assinatura em livro de ponto por um único dia.",
            "A recusa em participar de confraternizações recreativas da prefeitura.",
            "O uso de vestimentas civis em dias autorizados de folga.",
            "O atraso inferior a cinco minutos no registro de entrada."
        ],
        correct: 0,
        explanation: "As faltas graves que justificam a penalidade máxima de demissão estatutária incluem improbidade, insubordinação grave, abandono de cargo e corrupção."
    },
    {
        topic: "estatutos-municipais",
        question: "O estágio probatório dos servidores aprovados em concurso público para provimento de cargos na Prefeitura de São Gonçalo tem como finalidade primordial apurar:",
        options: [
            "A aptidão e a capacidade do servidor para o exercício do cargo durante o período legal.",
            "O volume de bens particulares acumulados pelo candidato antes da posse.",
            "A filiação partidária e preferências ideológicas do servidor empossado.",
            "A capacidade financeira de contribuição fiscal para associações de bairro.",
            "O histórico familiar de servidores públicos nascidos no município."
        ],
        correct: 0,
        explanation: "O estágio probatório visa avaliar requisitos essenciais como assiduidade, disciplina, capacidade de iniciativa, produtividade e responsabilidade no cargo."
    },
    {
        topic: "estatutos-municipais",
        question: "A estabilidade no serviço público municipal, assegurada após o decurso do prazo do estágio probatório e aprovação na avaliação especial de desempenho, confere ao servidor o direito de:",
        options: [
            "Não perder o cargo senão em virtude de sentença judicial transitada em julgado ou mediante processo administrativo disciplinar assegurada ampla defesa.",
            "Ser promovido automaticamente a cargos de direção superior a cada dois anos.",
            "Faltar ao serviço de forma injustificada por até 60 dias anuais.",
            "Acumular ilimitadamente quaisquer cargos públicos acumuláveis ou não.",
            "Recusar o cumprimento de ordens legais emanadas de superiores hierárquicos."
        ],
        correct: 0,
        explanation: "A estabilidade constitutional e estatutária protege o servidor efetivo contra demissões arbitrárias, condicionando a perda do cargo às hipóteses legais expressas."
    },
    {
        topic: "estatutos-municipais",
        question: "Nos termos da legislação municipal de São Gonçalo, a vacância de cargo público decorrente de pedido expresso e formal do próprio servidor é denominada:",
        options: [
            "Demissão.",
            "Exoneração a pedido.",
            "Cassação de aposentadoria.",
            "Readaptação voluntária.",
            "Destituição de cargo em comissão."
        ],
        correct: 1,
        explanation: "A exoneração a pedido ocorre quando o próprio servidor manifesta o desejo de desligar-se do cargo público efetivo, diferindo da demissão que possui caráter punitivo/disciplinar."
    },
    {
        topic: "estatutos-municipais",
        question: "De acordo com o Estatuto dos Servidores de São Gonçalo (Lei nº 1.416/2022), a jornada de trabalho dos servidores municipais será estabelecida em lei ou regulamento, não podendo exceder a:",
        options: [
            "40 horas semanais, respeitados os regimes especiais previstos em lei.",
            "30 horas semanais em qualquer hipótese funcional.",
            "44 horas semanais sem exceção para guardas municipais.",
            "50 horas semanais com plantões obrigatórios remunerados.",
            "20 horas semanais para cargos de provimento efetivo."
        ],
        correct: 0,
        explanation: "Os estatutos públicos municipais e federais fixam o limite ordinário padrão em 40 horas semanais, ressalvadas jornadas especiais como plantões 24x7 da guarda."
    },
    {
        topic: "estatutos-municipais",
        question: "Conforme o Estatuto da Guarda Municipal de São Gonçalo (Lei nº 1.625/2026), o uso do uniforme e insígnias da corporação fora do serviço:",
        options: [
            "É expressamente proibido, salvo em autorizações especiais regulamentadas pela instituição.",
            "É livre e permitido em qualquer evento recreativo particular.",
            "Obrigatoriamente exigido em dias de folga para patrulhamento voluntário.",
            "Permitido apenas para oficiais comandantes de patrulha.",
            "Condicionado ao pagamento de taxa anual de conservação."
        ],
        correct: 0,
        explanation: "O uso de uniforme fora de serviço é regulado estritamente pelas normas disciplinares, sendo em regra vedado para evitar desvios e uso indevido da função."
    },
    {
        topic: "estatutos-municipais",
        question: "Segundo o Estatuto dos Servidores Públicos de São Gonçalo, a penalidade de suspensão aplicada ao servidor não poderá exceder o prazo máximo de:",
        options: [
            "90 dias.",
            "30 dias.",
            "180 dias.",
            "360 dias.",
            "1 ano."
        ],
        correct: 0,
        explanation: "As leis estatutárias públicas em geral estipulam o limite máximo de 90 dias de suspensão disciplinar aplicável a faltas graves de natureza interna."
    },
    {
        topic: "estatutos-municipais",
        question: "Em caso de abandono de cargo público, configurado pela ausência intencional do servidor ao serviço por mais de:",
        options: [
            "30 dias consecutivos.",
            "10 dias consecutivos.",
            "60 dias alternados no ano.",
            "90 dias alternados no ano.",
            "15 dias consecutivos."
        ],
        correct: 0,
        explanation: "O abandono de cargo caracteriza-se tipicamente pelo afastamento injustificado e intencional por mais de 30 dias consecutivos, apurado em processo administrativo."
    },
    {
        topic: "estatutos-municipais",
        question: "O direito de petição dos servidores públicos municipais perante a administração de São Gonçalo assegura a faculdade de requerer aos poderes públicos em defesa de:",
        options: [
            "Direito ou interesse legítimo de natureza funcional.",
            "Interesses político-partidários em campanhas locais.",
            "Causas judiciais particulares de terceiros estranhos ao serviço.",
            "Isenção de tributos estaduais e federais.",
            "Modificações nas leis federais pelo prefeito municipal."
        ],
        correct: 0,
        explanation: "O direito de petição administrativo garante ao servidor requerer e reclamar contra atos que afetem seus direitos ou interesses funcionais legítimos."
    },
    {
        topic: "estatutos-municipais",
        question: "Conforme as normas aplicáveis à Guarda Municipal de São Gonçalo, a progressão funcional na carreira dar-se-á com base em critérios de:",
        options: [
            "Antiguidade e merecimento, observados os requisitos de capacitação e avaliação.",
            "Sorteio anual entre os guardas com mais de cinco anos de efetivo exercício.",
            "Indicação direta de associações de moradores de bairros.",
            "Tempo de serviço militar anterior prestado às Forças Armadas.",
            "Vontade exclusiva do Chefe do Poder Legislativo."
        ],
        correct: 0,
        explanation: "As carreiras públicas estruturadas adotam critérios objetivos como antiguidade e merecimento para as progressões horizontais e verticais."
    },
    {
        topic: "estatutos-municipais",
        question: "A responsabilidade civil, penal e administrativa do servidor público municipal de São Gonçalo:",
        options: [
            "Acumulam-se e podem ser apuradas independentemente umas das outras.",
            "Excliui-se reciprocamente, anulando a penalidade administrativa se houver absolvição cível.",
            "Apenas podem ser processadas perante o Supremo Tribunal Federal.",
            "Prescrevem obrigatoriamente no prazo de 30 dias do fato.",
            "Aplicam-se exclusivamente após a aposentadoria voluntária do agente."
        ],
        correct: 0,
        explanation: "As instâncias civil, penal e administrativa são independentes, podendo as sanções acumular-se conforme a gravidade da conduta funcional."
    },
    {
        topic: "estatutos-municipais",
        question: "Segundo o Estatuto dos Servidores de São Gonçalo (Lei nº 1.416/2022), a posse em cargo público municipal deverá ocorrer no prazo legal contado da data de publicação da nomeação:",
        options: [
            "De até 30 dias.",
            "De até 10 dias.",
            "De até 60 dias prorrogáveis por igual período.",
            "Imediatamente no mesmo dia útil.",
            "De até 90 dias úteis."
        ],
        correct: 0,
        explanation: "O prazo padrão estatutário para a posse após a nomeação é de 30 dias, sob pena de tornar sem efeito o ato."
    },
    {
        topic: "estatutos-municipais",
        question: "Conforme o Estatuto da Guarda Municipal de São Gonçalo (Lei nº 1.625/2026), o servidor da corporação responde civil, penal e administrativamente pelo exercício irregular de suas atribuições:",
        options: [
            "Sendo as instâncias de apuração independentes entre si.",
            "Excluindo-se a responsabilidade administrativa se houver absolvição cível.",
            "Apenas na esfera penal perante tribunais federais.",
            "Exclusivamente após a aposentadoria remunerada.",
            "Mediante pagamento de fiança prévia na corregedoria."
        ],
        correct: 0,
        explanation: "A independência das instâncias é regra basilareira nos estatutos públicos municipais e federais."
    },
    {
        topic: "estatutos-municipais",
        question: "Segundo o Estatuto dos Servidores Públicos de São Gonçalo, constitui penalidade disciplinar aplicável aos servidores estatutários:",
        options: [
            "Advertência, suspensão, demissão, cassação de aposentadoria ou disponibilidade, e destituição de cargo em comissão.",
            "Prisão preventiva administrativa em cela da prefeitura.",
            "Exílio temporário de comarca municipal.",
            "Multa descontada integralmente em bens particulares.",
            "Trabalho forçado em obras públicas urbanas."
        ],
        correct: 0,
        explanation: "As penalidades disciplinares estatutárias legais constam expressamente no regime disciplinar dos servidores municipais."
    },
    {
        topic: "estatutos-municipais",
        question: "A apuração de infração disciplinar grave atribuída a guarda municipal estável em São Gonçalo exige obrigatoriamente a instauração de:",
        options: [
            "Processo Administrativo Disciplinar (PAD) assegurados o contraditório e a ampla defesa.",
            "Inquérito civil público promovido por promotores de justiça estaduais.",
            "Julgamento sumário e irrecorrível pelo prefeito em decreto matinal.",
            "Votação popular em assembleia de bairro.",
            "Arbitragem internacional de conflitos."
        ],
        correct: 0,
        explanation: "O princípio constitucional e estatutário exige Processo Administrativo Disciplinar (PAD) com ampla defesa para aplicação de penalidades severas como demissão."
    },
    {
        topic: "estatutos-municipais",
        question: "O direito de associação profissional e sindical é garantido ao servidor público municipal de São Gonçalo, compreendendo:",
        options: [
            "A livre associação para defesa de direitos e interesses da classe, vedada a greve para os integrantes das carreiras de segurança pública (Guarda Municipal).",
            "A liberdade irrestrita de paralisação total armada dos serviços de patrulhamento ostensivo.",
            "A obrigatoriedade de filiação a sindicatos patronais privados.",
            "A gestão direta do orçamento municipal pelo sindicato.",
            "O direito de eleger o Secretário de Segurança Pública."
        ],
        correct: 0,
        explanation: "Embora haja direito de associação sindical, o STF e as leis aplicam restrições ao direito de greve para servidores de segurança pública essenciais, como guardas municipais."
    },
    {
        topic: "estatutos-municipais",
        question: "Conforme a legislação municipal de São Gonçalo, a vacância de cargo público decorrente de falecimento do servidor denomina-se:",
        options: [
            "Exoneração.",
            "Demissão por abandono.",
            "Falecimento (ou morte do servidor).",
            "Readaptação definitiva.",
            "Cassação de disponibilidade."
        ],
        correct: 2,
        explanation: "O falecimento é causa natural de vacância do cargo público, extinguindo o vínculo funcional e gerando pensão estatutária aos dependentes."
    },
    {
        topic: "estatutos-municipais",
        question: "A avaliação especial de desempenho durante o estágio probatório na Prefeitura de São Gonçalo deve ocorrer:",
        options: [
            "De forma periódica e sistemática antes de completar o período exigido para aquisição da estabilidade.",
            "Apenas no último dia útil antes da aposentadoria voluntária.",
            "Por sorteio eletrônico sem acompanhamento de chefia.",
            "Mediante prova escrita de múltipla escolha applied pelo Ministério da Educação.",
            "Exclusivamente após dez anos de efetivo exercício."
        ],
        correct: 0,
        explanation: "O estágio probatório exige acompanhamento e avaliações periódicas de desempenho antes da consolidação da estabilidade funcional."
    },
    {
        topic: "estatutos-municipais",
        question: "Segundo o Estatuto dos Servidores de São Gonçalo (Lei nº 1.416/2022), a vacância de cargo público decorre de várias hipóteses legais, EXCETO:",
        options: [
            "Promoção por antiguidade ou merecimento dentro da mesma carreira.",
            "Exoneração a pedido ou de ofício.",
            "Demissão.",
            "Aposentadoria.",
            "Falecimento."
        ],
        correct: 0,
        explanation: "A promoção movimenta o servidor na carreira, não configurando hipótese de vacância do cargo em si."
    },
    {
        topic: "estatutos-municipais",
        question: "Conforme o Estatuto da Guarda Municipal de São Gonçalo (Lei nº 1.625/2026), o regime disciplinar da corporação estabelece que a apuração de faltas graves com proposta de demissão exige:",
        options: [
            "Processo Administrativo Disciplinar (PAD) com garantia plena de ampla defesa e contraditório.",
            "Decisão sumária e verbal proferida pelo comandante de plantão.",
            "Inquérito civil público em comarcas cíveis estaduais.",
            "Votação secreta em assembleia geral de moradores.",
            "Julgamento por júri popular municipal."
        ],
        correct: 0,
        explanation: "O PAD é o instrumento legal obrigatório para apuração de faltas graves passíveis de demissão, assegurando contraditório e ampla defesa."
    },
    {
        topic: "estatutos-municipais",
        question: "Segundo o Estatuto dos Servidores Públicos de São Gonçalo, o servidor público municipal perderá o cargo em virtude de:",
        options: [
            "Sentença judicial transitada em julgado ou processo administrativo disciplinar com ampla defesa.",
            "Simples decreto verbal do prefeito em dias úteis.",
            "Requerimento assinado por sindicatos patronais privados.",
            "Mudança de partido político da administração municipal.",
            "Ausência em comícios eleitorais partidários."
        ],
        correct: 0,
        explanation: "A perda de cargo de servidor efetivo estável exige sentença transitada em julgado ou PAD com ampla defesa."
    },
    {
        topic: "estatutos-municipais",
        question: "O estágio probatório dos servidores públicos municipais de São Gonçalo tem duração de:",
        options: [
            "3 anos (36 meses) de efetivo exercício no cargo.",
            "12 meses ininterruptos de serviços gerais.",
            "24 meses contados da homologação do concurso.",
            "5 anos de efetivo exercício obrigatório.",
            "6 meses prorrogáveis por igual período."
        ],
        correct: 0,
        explanation: "O estágio probatório possui o prazo constitutional e estatutário de 3 anos (36 meses) de efetivo exercício."
    },
    {
        topic: "estatutos-municipais",
        question: "Em relação ao direito de petição garantido aos servidores estatutários de São Gonçalo, é correto afirmar que:",
        options: [
            "É assegurado o direito de requerer e representar aos poderes públicos em defesa de direito ou interesse legítimo funcional.",
            "Apenas pode ser exercido após dez anos de efetivo exercício.",
            "Veda qualquer reclamação contra atos de superiores hierárquicos.",
            "Exige pagamento de taxas processuais prévias na tesouraria.",
            "Substitui inteiramente as ações judiciais ordinárias perante tribunais."
        ],
        correct: 0,
        explanation: "O direito de petição assegura ao servidor reclamar e requerer em defesa de direitos ou interesses funcionais legítimos."
    },
    {
        topic: "estatutos-municipais",
        question: "Conforme a legislação municipal de São Gonçalo, a licença para tratamento de saúde do servidor público municipal será concedida com base em:",
        options: [
            "Inspeção médica oficial realizada por junta médica do município ou órgão competente.",
            "Declaração particular firmada por familiares sem laudo clínico.",
            "Aprovação em assembleia de classe sindical.",
            "Requerimento verbal protocolado na secretaria de governo.",
            "Autorização da câmara de vereadores por maioria simples."
        ],
        correct: 0,
        explanation: "A licença médica estatutária exige formalmente inspeção e laudo pericial emitido por junta médica oficial."
    },
    {
        topic: "estatutos-municipais",
        question: "A estabilidade no serviço público municipal de São Gonçalo é adquirida pelo servidor após:",
        options: [
            "O decurso do estágio probatório e a aprovação na avaliação especial de desempenho.",
            "A posse imediata no primeiro dia útil de exercício.",
            "A publicação da nomeação em órgão de imprensa oficial.",
            "O preenchimento de requisitos de idade mínima de 40 anos.",
            "A filiação a associações desportivas da prefeitura."
        ],
        correct: 0,
        explanation: "A estabilidade funcional exige o cumprimento do estágio probatório e a aprovação na respectiva avaliação especial de desempenho."
    },
    {
        topic: "penal-processual",
        question: "De acordo com o Código Penal, o crime de corrupção passiva ocorre quando o funcionário público:",
        options: [
            "Solicita ou recebe, para si ou para outrem, vantagem indevida, em razão da função.",
            "Exige vantagem indevida para terceiros sem relação funcional.",
            "Negocia bens públicos em nome do Estado.",
            "Aplica sanções administrativas sem competência legal.",
            "Deixa de cumprir ordem judicial por negligência."
        ],
        correct: 0,
        explanation: "O art. 317 do Código Penal define corrupção passiva como solicitar ou receber vantagem indevida em razão da função."
    },
    {
        topic: "penal-processual",
        question: "Segundo o Código de Processo Penal, o flagrante próprio ocorre quando:",
        options: [
            "O agente é surpreendido logo após cometer o crime.",
            "Há indícios de autoria sem testemunhas presenciais.",
            "O crime é descoberto dias depois por investigação.",
            "A vítima reconhece o autor em juízo.",
            "O agente é denunciado por terceiros sem provas."
        ],
        correct: 0,
        explanation: "O flagrante próprio ocorre quando o agente é surpreendido no momento da prática do delito ou logo após."
    },
    {
        topic: "penal-processual",
        question: "Nos termos da Lei nº 9.099/95, os Juizados Especiais Criminais têm competência para:",
        options: [
            "Julgar infrações de menor potencial ofensivo.",
            "Processar crimes hediondos e dolosos contra a vida.",
            "Executar penas privativas de liberdade superiores a 4 anos.",
            "Revisar sentenças de tribunais superiores.",
            "Julgar crimes militares cometidos por civis."
        ],
        correct: 0,
        explanation: "Os Juizados Especiais Criminais tratam de infrações de menor potencial ofensivo, conforme art. 61 da Lei nº 9.099/95."
    },
    {
        topic: "estatutos-municipais",
        question: "Conforme o Estatuto dos Servidores de São Gonçalo, o servidor público municipal deve observar como dever fundamental:",
        options: [
            "Lealdade às instituições e cumprimento das normas legais.",
            "Participação obrigatória em campanhas eleitorais.",
            "Submissão exclusiva a ordens políticas.",
            "Negociação direta de contratos públicos.",
            "Isenção de responsabilidade por atos administrativos."
        ],
        correct: 0,
        explanation: "O dever de lealdade e observância das normas legais é princípio básico da conduta funcional do servidor público."
    },
    {
        topic: "estatutos-municipais",
        question: "A licença para desempenho de mandato classista é concedida ao servidor municipal:",
        options: [
            "Para exercer cargo de direção em entidade sindical representativa da categoria.",
            "Para atuar em campanhas eleitorais partidárias.",
            "Para exercer funções em empresas privadas conveniadas.",
            "Para realizar cursos de aperfeiçoamento fora do país.",
            "Para representar o município em eventos esportivos."
        ],
        correct: 0,
        explanation: "A licença para mandato classista é prevista para exercício de funções em entidades sindicais da categoria."
    },
    {
        topic: "estatutos-municipais",
        question: "O servidor público municipal poderá ser demitido por:",
        options: [
            "Inassiduidade habitual e abandono de cargo.",
            "Participação em associações culturais.",
            "Solicitação de férias antecipadas.",
            "Mudança de residência sem aviso.",
            "Requerimento de licença médica."
        ],
        correct: 0,
        explanation: "A demissão é aplicada em casos de inassiduidade habitual ou abandono de cargo, conforme o estatuto municipal."
    },
    {
        topic: "estatutos-municipais",
        question: "A aposentadoria voluntária do servidor público municipal depende de:",
        options: [
            "Tempo mínimo de contribuição e idade conforme legislação previdenciária.",
            "Autorização do prefeito e da câmara municipal.",
            "Indicação por comissão de avaliação funcional.",
            "Cumprimento de estágio probatório de 2 anos.",
            "Requerimento de licença médica definitiva."
        ],
        correct: 0,
        explanation: "A aposentadoria voluntária exige tempo mínimo de contribuição e idade conforme regras previdenciárias."
    },
    {
        topic: "estatutos-municipais",
        question: "O servidor público municipal está sujeito à responsabilidade civil, penal e administrativa quando:",
        options: [
            "Comete ato ilegal, doloso ou culposo no exercício da função.",
            "Recusa participar de eventos sociais da prefeitura.",
            "Solicita férias dentro do prazo legal.",
            "Cumpre ordens superiores de forma regular.",
            "Apresenta atestado médico válido."
        ],
        correct: 0,
        explanation: "A responsabilidade múltipla decorre de atos ilegais ou lesivos praticados no exercício da função pública."
    },
    {
        topic: "estatutos-municipais",
        question: "O estágio probatório do servidor público municipal tem duração de:",
        options: [
            "Três anos de efetivo exercício.",
            "Um ano de exercício inicial.",
            "Seis meses de avaliação funcional.",
            "Cinco anos de serviço contínuo.",
            "Dois anos de exercício provisório."
        ],
        correct: 0,
        explanation: "O estágio probatório tem duração de três anos, conforme o regime jurídico dos servidores públicos."
    }

];
