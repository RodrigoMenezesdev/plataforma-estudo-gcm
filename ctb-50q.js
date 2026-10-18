const simuladoCTB = [
    {
        id: 1,
        pergunta: "De acordo com o CTB e a consolidação do STF sobre as Guardas Municipais, é correto afirmar que os Guardas Municipais:",
        opcoes: [
            "A) Não possuem competência para aplicar multas de trânsito em vias urbanas.",
            "B) Exercem competência de trânsito restrita apenas a orientar os pedestres nas faixas.",
            "C) Possuem competência para fiscalização e aplicação de sanções administrativas de trânsito no âmbito municipal.",
            "D) Só podem autuar infrações se estiverem acompanhados da Polícia Militar."
        ],
        correta: 2,
        explicacao: "O STF e o art. 24 do CTB reconhecem a competência plenamente válida das Guardas Municipais para fiscalização e autuação de trânsito nas vias municipais."
    },
    {
        id: 2,
        pergunta: "Qual órgão é responsável pela coordenação máxima do Sistema Nacional de Trânsito (SNT)?",
        opcoes: [
            "A) CONTRAN",
            "B) DENATRAN / SENATRAN",
            "C) Ministério da Justiça",
            "D) JARI"
        ],
        correta: 1,
        explicacao: "A Secretaria Nacional de Trânsito (SENATRAN) é o órgão máximo executivo de trânsito da União."
    },
    {
        id: 3,
        pergunta: "Os sinais de trânsito classificam-se em:",
        opcoes: [
            "A) Verticais, horizontais, dispositivos de sinalização auxiliar, luminosos, sonoros e gestos.",
            "B) Apenas placas, marcas viárias e semáforos.",
            "C) Sonoros e gestuais exclusivamente.",
            "D) Fixos, móveis e digitais."
        ],
        correta: 0,
        explicacao: "Art. 87 do CTB: Os sinais de trânsito classificam-se em verticais, horizontais, dispositivos de sinalização auxiliar, luminosos, sonoros e gestos do agente e do condutor."
    },
    {
        id: 4,
        pergunta: "As ordens do agente de trânsito prevalecem sobre:",
        opcoes: [
            "A) Apenas os sinais luminosos.",
            "B) As regras de circulação e as indicações dos demais sinais.",
            "C) Apenas a sinalização vertical de regulamentação.",
            "D) Nenhuma das alternativas, a sinalização sempre sobressai ao agente."
        ],
        correta: 1,
        explicacao: "Art. 89, I, do CTB: As ordens do agente de trânsito prevalecem sobre as indicações dos sinais e as demais normas de trânsito."
    },
    {
        id: 5,
        pergunta: "A JARI (Junta Administrativa de Recursos de Infrações) é um órgão:",
        opcoes: [
            "A) Normativo do SNT.",
            "B) Colegiado responsável pelo julgamento dos recursos interpostos pelos infratores.",
            "C) Executivo de trânsito estadual.",
            "D) Fiscalizador de velocidade."
        ],
        correta: 1,
        explicacao: "Art. 16 do CTB: Junto a cada órgão ou entidade executiva de trânsito funcionará a JARI, órgão colegiado encarregado do julgamento dos recursos interpostos pelos infratores."
    },
    {
        id: 6,
        pergunta: "Em cruzamentos não sinalizados, a preferência de passagem é do veículo que:",
        opcoes: [
            "A) Estiver transitando em maior velocidade.",
            "B) Vier pela esquerda do condutor.",
            "C) Vier pela direita do condutor.",
            "D) For de maior porte (caminhão ou ônibus)."
        ],
        correta: 2,
        explicacao: "Art. 29, III, 'a', do CTB: No caso de utilitários/veículos se cruzarem em local não sinalizado, terá preferência de passagem o que vier pela direita do condutor."
    },
    {
        id: 7,
        pergunta: "Qual é a velocidade máxima permitida em vias urbanas de trânsito rápido, quando não houver sinalização regulamentadora?",
        opcoes: [
            "A) 60 km/h",
            "B) 80 km/h",
            "C) 40 km/h",
            "D) 110 km/h"
        ],
        correta: 1,
        explicacao: "Art. 61, § 1º, I, 'a', do CTB: Nas vias urbanas de trânsito rápido, onde não houver sinalização, a velocidade máxima é de 80 km/h."
    },
    {
        id: 8,
        pergunta: "Em uma via urbana coletora não sinalizada, a velocidade máxima é de:",
        opcoes: [
            "A) 30 km/h",
            "B) 40 km/h",
            "C) 60 km/h",
            "D) 80 km/h"
        ],
        correta: 1,
        explicacao: "Art. 61, § 1º, I, 'c', do CTB: Nas vias coletoras não sinalizadas, a velocidade máxima é de 40 km/h."
    },
    {
        id: 9,
        pergunta: "O uso do cinto de segurança é obrigatório para:",
        opcoes: [
            "A) Apenas o condutor do veículo.",
            "B) Condutor e passageiro do banco da frente apenas.",
            "C) Condutor e passageiros em todas as vias do território nacional.",
            "D) Somente em rodovias e vias expressas."
        ],
        correta: 2,
        explicacao: "Art. 65 do CTB: É obrigatório o uso do cinto de segurança para condutor e passageiros em todas as vias do território nacional."
    },
    {
        id: 10,
        pergunta: "Crianças menores de qual idade devem ser transportadas nos bancos traseiros com os dispositivos de retenção adequados (cadeirinha/assento)?",
        opcoes: [
            "A) 7 anos",
            "B) 10 anos (e que não tenham atingido 1,45m de altura)",
            "C) 12 anos",
            "D) 5 anos"
        ],
        correta: 1,
        explicacao: "Art. 64 do CTB (Lei 14.071/20): Crianças menores de 10 anos que não tenham atingido 1,45 m de altura devem ser transportadas nos bancos traseiros."
    },
    {
        id: 11,
        pergunta: "Qual é a pontuação atribuída na CNH para uma infração GRAVÍSSIMA?",
        opcoes: [
            "A) 3 pontos",
            "B) 4 pontos",
            "C) 5 pontos",
            "D) 7 pontos"
        ],
        correta: 3,
        explicacao: "Art. 259 do CTB: Gravíssima - 7 pontos; Grave - 5 pontos; Média - 4 pontos; Leve - 3 pontos."
    },
    {
        id: 12,
        pergunta: "Dirigir veículo manuseando ou segurando telefone celular é considerado infração de natureza:",
        opcoes: [
            "A) Média (4 pontos)",
            "B) Grave (5 pontos)",
            "C) Gravíssima (7 pontos)",
            "D) Leve (3 pontos)"
        ],
        correta: 2,
        explicacao: "Art. 252, parágrafo único, do CTB: Segurar ou manusear telefone celular enquanto dirige é infração Gravíssima (7 pontos)."
    },
    {
        id: 13,
        pergunta: "Dirigir sob a influência de álcool (Lei Seca) é uma infração gravíssima sujeita a:",
        opcoes: [
            "A) Multa multiplicada por 5 e suspensão por 6 meses.",
            "B) Multa multiplicada por 10 e suspensão do direito de dirigir por 12 meses.",
            "C) Apenas retenção do veículo sem aplicação de pontos.",
            "D) Advertência por escrito na primeira ocorrência."
        ],
        correta: 1,
        explicacao: "Art. 165 do CTB: Infração gravíssima, penalidade de multa (10 vezes) e suspensão do direito de dirigir por 12 meses."
    },
    {
        id: 14,
        pergunta: "Avançar o sinal vermelho do semáforo ou o de parada obrigatória configura infração:",
        opcoes: [
            "A) Grave",
            "B) Gravíssima",
            "C) Média",
            "D) Leve"
        ],
        correta: 1,
        explicacao: "Art. 208 do CTB: Avançar sinal vermelho ou parada obrigatória é infração Gravíssima (7 pontos)."
    },
    {
        id: 15,
        pergunta: "Estacionar o veículo sobre a faixa de pedestres é infração de natureza:",
        opcoes: [
            "A) Leve",
            "B) Média",
            "C) Grave",
            "D) Gravíssima"
        ],
        correta: 2,
        explicacao: "Art. 181, VIII, do CTB: Estacionar no passeio ou sobre faixa destinada a pedestre é infração Grave (5 pontos) e sujeita a remoção do veículo."
    },
    {
        id: 16,
        pergunta: "São exemplos de MEDIDAS ADMINISTRATIVAS previstas no CTB:",
        opcoes: [
            "A) Multa e Cassação da CNH.",
            "B) Retenção do veículo, Remoção do veículo e Recolhimento da CNH.",
            "C) Advertência por escrito e frequência em curso de reciclagem.",
            "D) Prisão preventiva e apreensão do bem."
        ],
        correta: 1,
        explicacao: "Art. 269 do CTB: Medidas administrativas são ações imediatas do agente de trânsito (Retenção, Remoção, Recolhimento de documentos, etc.)."
    },
    {
        id: 17,
        pergunta: "Praticar homicídio culposo na direção de veículo automotor tem como pena básica:",
        opcoes: [
            "A) Reclusão de 4 a 8 anos.",
            "B) Detenção, de 2 a 4 anos, e suspensão ou proibição de se obter a permissão ou a habilitação.",
            "C) Apenas prestação de serviços à comunidade.",
            "D) Multa administrativa de 10 vezes o valor base."
        ],
        correta: 1,
        explicacao: "Art. 302 do CTB: Homicídio culposo no trânsito prevê pena de detenção de 2 a 4 anos e suspensão/proibição da CNH."
    },
    {
        id: 18,
        pergunta: "Deixar o condutor do veículo, na ocasião do acidente, de prestar socorro à vítima, quando possível fazê-lo sem risco pessoal:",
        opcoes: [
            "A) É infração administrativa, mas não configura crime de trânsito.",
            "B) Configura CRIME de trânsito (art. 304 do CTB).",
            "C) É atitude isenta de penalidades se o resgate médico for acionado por terceiros.",
            "D) Gera apenas multa leve."
        ],
        correta: 1,
        explicacao: "Art. 304 do CTB: Deixar de prestar socorro à vítima de acidente é crime de trânsito com pena de detenção de 6 meses a 1 ano ou multa."
    },
    {
        id: 19,
        pergunta: "Transitar em velocidade superior à máxima permitida em mais de 50% (cinquenta por cento) é infração:",
        opcoes: [
            "A) Grave com 5 pontos.",
            "B) Gravíssima com suspensão imediata do direito de dirigir e fator multiplicador por 3.",
            "C) Média.",
            "D) Gravíssima sem efeito de suspensão."
        ],
        correta: 1,
        explicacao: "Art. 218, III, do CTB: Velocidade superior à máxima em mais de 50% é infração Gravíssima, multa (3x) e suspensão direta do direito de dirigir."
    },
    {
        id: 20,
        pergunta: "O teste de etilômetro (bafômetro) recusado pelo condutor gera:",
        opcoes: [
            "A) Liberação do veículo sem nenhuma penalidade.",
            "B) As mesmas sanções administrativas da infração de dirigir embriagado (multa 10x e suspensão por 12 meses).",
            "C) Apenas uma advertência verbal do agente de trânsito.",
            "D) Apresentação obrigatória na delegacia em até 24 horas."
        ],
        correta: 1,
        explicacao: "Art. 165-A do CTB: Recusar-se a ser submetido a teste de alcoolemia gera as mesmas penalidades do art. 165 (Multa 10x e suspensão de 12 meses)."
    },
    {
        id: 21,
        pergunta: "Deixar o condutor de usar o cinto de segurança, conforme previsto no art. 167 do CTB, configura infração de natureza:",
        opcoes: [
            "A) Leve",
            "B) Média",
            "C) Grave",
            "D) Gravíssima"
        ],
        correta: 2,
        explicacao: "Art. 167 do CTB: Deixar o condutor ou passageiro de usar o cinto de segurança é infração Grave (5 pontos) e retenção do veículo até a colocação do cinto."
    },
    {
        id: 22,
        pergunta: "Ultrapassar outro veículo pelo acostamento é uma infração de natureza:",
        opcoes: [
            "A) Média",
            "B) Grave",
            "C) Gravíssima (com fator multiplicador por 5)",
            "D) Gravíssima sem fator multiplicador"
        ],
        correta: 2,
        explicacao: "Art. 202, I, do CTB: Ultrapassar pelo acostamento é infração Gravíssima com multa multiplicada por 5."
    },
    {
        id: 23,
        pergunta: "Onde não houver sinalização regulamentadora, a velocidade máxima nas estradas (vias rurais não pavimentadas) será de:",
        opcoes: [
            "A) 80 km/h",
            "B) 60 km/h",
            "C) 100 km/h",
            "D) 40 km/h"
        ],
        correta: 1,
        explicacao: "Art. 61, § 1º, II, 'b', do CTB: Nas estradas (não pavimentadas), a velocidade máxima é de 60 km/h."
    },
    {
        id: 24,
        pergunta: "O condutor que transitar com o veículo sem licenciar (sem o CRLV atualizado) comete infração de natureza:",
        opcoes: [
            "A) Grave",
            "B) Gravíssima",
            "C) Média",
            "D) Leve"
        ],
        correta: 1,
        explicacao: "Art. 230, V, do CTB: Conduzir veículo que não esteja registrado e devidamente licenciado é infração Gravíssima, multa e remoção do veículo."
    },
    {
        id: 25,
        pergunta: "Qual a validade máxima da CNH para condutores com idade inferior a 50 anos, segundo as regras do CTB?",
        opcoes: [
            "A) 3 anos",
            "B) 5 anos",
            "C) 10 anos",
            "D) 15 anos"
        ],
        correta: 2,
        explicacao: "Art. 147, § 2º, I, do CTB: O exame de aptidão física e mental terá validade de 10 anos para condutores com idade inferior a 50 anos."
    },
    {
        id: 26,
        pergunta: "Qual a validade máxima da CNH para condutores com idade igual ou superior a 50 anos e inferior a 70 anos?",
        opcoes: [
            "A) 10 anos",
            "B) 5 anos",
            "C) 3 anos",
            "D) 2 anos"
        ],
        correta: 1,
        explicacao: "Art. 147, § 2º, II, do CTB: Validade de 5 anos para condutores entre 50 e 69 anos de idade."
    },
    {
        id: 27,
        pergunta: "Estacionar o veículo em desacordo com as condições regulamentadas pela sinalização (ex: Estacionamento Rotativo / Zona Azul) configura infração:",
        opcoes: [
            "A) Leve",
            "B) Média",
            "C) Grave",
            "D) Gravíssima"
        ],
        correta: 1,
        explicacao: "Art. 181, XVII, do CTB: Estacionar em desacordo com a regulamentação é infração Média (4 pontos) e remoção do veículo."
    },
    {
        id: 28,
        pergunta: "Qual das alternativas indica uma PENALIDADE (e não uma medida administrativa)?",
        opcoes: [
            "A) Retenção do veículo.",
            "B) Remoção do veículo.",
            "C) Cassação da Carteira Nacional de Habilitação.",
            "D) Recolhimento do Certificado de Licenciamento."
        ],
        correta: 2,
        explicacao: "Art. 256 do CTB: A Cassação da CNH é uma PENALIDADE aplicada pela autoridade de trânsito após processo administrativo."
    },
    {
        id: 29,
        pergunta: "A luz amarela do semáforo indica que o condutor deve:",
        opcoes: [
            "A) Acelerar rapidamente para cruzar a via antes do vermelho.",
            "B) Parar o veículo, salvo se já se encontrar sobre a zona de cruzamento ou se a parada for perigosa.",
            "C) Ter preferência absoluta sobre os pedestres.",
            "D) Fazer conversão obrigatoriamente à direita."
        ],
        correta: 1,
        explicacao: "A luz amarela indica atenção e parada obrigatória, a menos que o veículo já esteja no cruzamento ou que a parada repentina cause perigo de colisão."
    },
    {
        id: 30,
        pergunta: "Conduzir motocicleta sem usar capacete de segurança com viseira ou óculos de proteção é infração:",
        opcoes: [
            "A) Grave",
            "B) Média",
            "C) Gravíssima, com suspensão do direito de dirigir",
            "D) Leve"
        ],
        correta: 2,
        explicacao: "Art. 244, I, do CTB: Pilotar moto sem capacete é infração Gravíssima, gera multa e suspensão direta do direito de dirigir."
    },
    {
        id: 31,
        pergunta: "Participar na direção de veículo automotor, em via pública, de 'pega' ou competição não autorizada (Racha) é considerado:",
        opcoes: [
            "A) Apenas infração administrativa leve.",
            "B) Crime de trânsito (art. 308 do CTB), além de infração gravíssima.",
            "C) Contravenção penal não sujeita a prisão.",
            "D) Infração grave sem retenção da CNH."
        ],
        correta: 1,
        explicacao: "Art. 308 do CTB: Participar de racha em via pública é crime de trânsito com pena de detenção de 6 meses a 3 anos, além de multa e suspensão da CNH."
    },
    {
        id: 32,
        pergunta: "A regra de trânsito para ultrapassagem determina que ela deve ser feita em regra pela:",
        opcoes: [
            "A) Direita, acionando a buzina.",
            "B) Esquerda, obedecendo à sinalização e às normas de segurança.",
            "C) Direita, caso a via tenha duas faixas no mesmo sentido.",
            "D) Qualquer um dos lados, desde que dê sinal de luz."
        ],
        correta: 1,
        explicacao: "Art. 29, IX, do CTB: A ultrapassagem de outro veículo em movimento deverá ser feita pela esquerda, obedecida a sinalização."
    },
    {
        id: 33,
        pergunta: "O pedestre tem prioridade de passagem na faixa a ele destinada, EXCETO quando houver:",
        opcoes: [
            "A) Veículo de emergência com sirene e luzes ligadas.",
            "B) Sinalização semafórica para pedestres (foco vermelho para o pedestre).",
            "C) Chuva forte.",
            "D) Agente de trânsito na via pública."
        ],
        correta: 1,
        explicacao: "Art. 70 do CTB: Os pedestres têm prioridade nas faixas, exceto nos locais com sinalização semafórica onde devam respeitar o foco."
    },
    {
        id: 34,
        pergunta: "A conversão à esquerda em vias de sentido duplo de circulação, sem local apropriado para retorno, deve ser feita:",
        opcoes: [
            "A) Pelo acostamento da direita.",
            "B) O mais próximo possível do eixo central ou da linha divisória da pista.",
            "C) O mais próximo possível da calçada direita.",
            "D) Em qualquer ponto da via desde que pare o veículo."
        ],
        correta: 1,
        explicacao: "Art. 38, II, do CTB: Ao converter à esquerda em pista dupla, o condutor deve se aproximar do eixo central da via."
    },
    {
        id: 35,
        pergunta: "Usar a buzina em situação que não seja de advertência prolongada e sucessiva entre as 22h e as 6h é infração:",
        opcoes: [
            "A) Média",
            "B) Leve",
            "C) Grave",
            "D) Gravíssima"
        ],
        correta: 1,
        explicacao: "Art. 227, III, do CTB: Usar buzina entre as 22h e 6h é infração Leve (3 pontos)."
    },
    {
        id: 36,
        pergunta: "Para socorrer uma vítima de acidente de trânsito, a primeira atitude do agente ou cidadão no local deve ser:",
        opcoes: [
            "A) Mover a vítima imediatamente para o passeio público.",
            "B) Sinalizar o local para evitar novos acidentes e chamar o socorro especializado.",
            "C) Dar água ou alimentos líquidos para a vítima.",
            "D) Retirar o capacete do motociclista ferido."
        ],
        correta: 1,
        explicacao: "Primeiros socorros e segurança no trânsito: A sinalização do local e acionamento do resgate (SAMU/Bombeiros) previnem novos acidentes."
    },
    {
        id: 37,
        pergunta: "As placas de Regulamentação (de cor vermelha e branca) servem para:",
        opcoes: [
            "A) Alertar sobre condições potencialmente perigosas na via.",
            "B) Informar obrigações, limitações, proibições ou restrições no uso da via.",
            "C) Indicar pontos turísticos e serviços auxiliares.",
            "D) Orientar a direção de destinos estaduais."
        ],
        correta: 1,
        explicacao: "Placas de Regulamentação possuem caráter impositivo/obrigatório. Suas desobediências constituem infração de trânsito."
    },
    {
        id: 38,
        pergunta: "As placas de Advertência (de cor amarela e preta) têm a finalidade de:",
        opcoes: [
            "A) Punir os condutores com multas.",
            "B) Alertar os usuários sobre condições potencialmente perigosas na via.",
            "C) Indicar os limites de velocidade obrigatórios.",
            "D) Regulamentar o estacionamento de veículos."
        ],
        correta: 1,
        explicacao: "As placas de Advertência (amarelas) alertam os condutores sobre perigos à frente (curvas, aclives, obras, etc.)."
    },
    {
        id: 39,
        pergunta: "Quando um veículo for recolhido ao depósito por medida administrativa de Remoção, as despesas de estada e guincho são de responsabilidade:",
        opcoes: [
            "A) Do Estado ou Município.",
            "B) Do proprietário do veículo.",
            "C) Do agente que efetuou a remoção.",
            "D) Da seguradora do veículo."
        ],
        correta: 1,
        explicacao: "Art. 271, § 1º, do CTB: A restituição dos veículos removidos só ocorrerá mediante prévio pagamento das multas, taxas e despesas com remoção e estada."
    },
    {
        id: 40,
        pergunta: "O condutor habilitado na CNH da categoria 'B' pode dirigir:",
        opcoes: [
            "A) Motocicletas e triciclos.",
            "B) Veículos automotores cujo peso bruto total não exceda a 3.500 kg e lotação não exceda a 8 lugares (excluído o do motorista).",
            "C) Ônibus e micro-ônibus de passageiros.",
            "D) Caminhões pesados e carretas."
        ],
        correta: 1,
        explicacao: "Art. 143, II, do CTB: Categoria B habilita condutores para veículos de passeio/comerciais leves até 3.500 kg e 8 passageiros."
    },
    {
        id: 41,
        pergunta: "A categoria 'D' da CNH permite ao condutor dirigir veículos para transporte de passageiros cuja lotação exceda a:",
        opcoes: [
            "A) 5 lugares.",
            "B) 8 lugares (excluído o do condutor).",
            "C) 15 lugares.",
            "D) 20 lugares."
        ],
        correta: 1,
        explicacao: "Art. 143, IV, do CTB: Categoria D é destinada a condutores de veículos para transporte de passageiros com mais de 8 lugares."
    },
    {
        id: 42,
        pergunta: "Transitar com o veículo em marca de canalização (zebrado pintado no asfalto) é infração:",
        opcoes: [
            "A) Média",
            "B) Grave",
            "C) Gravíssima (com multa multiplicada por 3)",
            "D) Leve"
        ],
        correta: 2,
        explicacao: "Art. 193 do CTB: Transitar com o veículo em marcas de canalização é infração Gravíssima (3x)."
    },
    {
        id: 43,
        pergunta: "Atirar do veículo ou abandonar na via objetos ou substâncias é considerado pelo CTB uma infração:",
        opcoes: [
            "A) Leve",
            "B) Média",
            "C) Grave",
            "D) Gravíssima"
        ],
        correta: 1,
        explicacao: "Art. 172 do CTB: Atirar ou abandonar na via objetos ou substâncias é infração Média (4 pontos)."
    },
    {
        id: 44,
        pergunta: "O veículo que estiver transportando carga de dimensões excedentes sem autorização especial de trânsito (AET) estará sujeito à medida administrativa de:",
        opcoes: [
            "A) Cassação da CNH.",
            "B) Retenção do veículo para regularização.",
            "C) Suspensão imediata do direito de dirigir.",
            "D) Apreensão de documentos pessoais."
        ],
        correta: 1,
        explicacao: "Art. 231, IV, do CTB: Medida administrativa de retenção do veículo para regularização da carga."
    },
    {
        id: 45,
        pergunta: "Fazer conversão à esquerda ou à direita em local proibido pela sinalização é infração:",
        opcoes: [
            "A) Leve",
            "B) Média",
            "C) Grave",
            "D) Gravíssima"
        ],
        correta: 2,
        explicacao: "Art. 207 do CTB: Executar operação de conversão à esquerda ou à direita em local proibido é infração Grave (5 pontos)."
    },
    {
        id: 46,
        pergunta: "Ao transitar sob neblina ou cerração, o condutor deve acender:",
        opcoes: [
            "A) O farol alto.",
            "B) Apenas o pisca-alerta em movimento.",
            "C) A luz baixa dos faróis (ou luzes de posição/faróis de neblina).",
            "D) Luzes de ré."
        ],
        correta: 2,
        explicacao: "Art. 40, IV, do CTB: Sob neblina ou cerração, o condutor deve manter acesas, pelo menos, as luzes de posição ou luz baixa."
    },
    {
        id: 47,
        pergunta: "Parar o veículo sobre a faixa de pedestres na mudança de sinal luminoso configura infração de natureza:",
        opcoes: [
            "A) Leve",
            "B) Média",
            "C) Grave",
            "D) Gravíssima"
        ],
        correta: 1,
        explicacao: "Art. 183 do CTB: Parar o veículo sobre a faixa de pedestres na mudança de sinal é infração Média (4 pontos)."
    },
    {
        id: 48,
        pergunta: "Qual órgão executivo de trânsito dos Estados e do DF é responsável pela emissão da CNH e pelo licenciamento anual dos veículos?",
        opcoes: [
            "A) PRF",
            "B) DETRAN",
            "C) CETRAN",
            "D) DNIT"
        ],
        correta: 1,
        explicacao: "Art. 22 do CTB: Compete aos DETRANs (órgãos executivos estaduais) vistoriar, licenciar veículos e expedir a CNH."
    },
    {
        id: 49,
        pergunta: "É dever de todo condutor de veículo:",
        opcoes: [
            "A) Dar passagem pela esquerda quando solicitado por sinal de luz ou buzina.",
            "B) Ultrapassar veículos parados em fila nas faixas de pedestre.",
            "C) Buzinar sempre que se aproximar de um cruzamento.",
            "D) Parar o veículo no meio do cruzamento em trânsito lento."
        ],
        correta: 0,
        explicacao: "Art. 198 do CTB: É dever do condutor dar passagem pela esquerda quando solicitado de forma regulamentar."
    },
    {
        id: 50,
        pergunta: "A quem pertence a responsabilidade pelo pagamento das multas decorrentes de infrações relativas a atos praticados na direção do veículo?",
        opcoes: [
            "A) Exclusivamente ao proprietário, em qualquer situação.",
            "B) Ao condutor habilitado que cometeu a infração (e ao proprietário solidariamente quanto ao valor financeiro se não identificado).",
            "C) Ao fabricante do veículo.",
            "D) Ao órgão autuador."
        ],
        correta: 1,
        explicacao: "Art. 257 do CTB: Ao condutor caberá a responsabilidade pelas infrações decorrentes de atos praticados na direção do veículo."
    }
];
