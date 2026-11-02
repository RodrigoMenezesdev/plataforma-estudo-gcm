const questoesSimulado = [
    // --- LÍNGUA PORTUGUESA (Questões 1 a 15) ---
    {
        id: 1,
        subject: "Língua Portuguesa",
        text: "A temática central do texto 'Brasil cria roupa contra a covid' aborda o seguinte eixo:",
        options: [
            "A) criação de novos empregos",
            "B) promoção de indústria pesada",
            "C) iniciativas de prevenção à doença",
            "D) investimento em pesquisa científica"
        ],
        answer: 2, // Índice 2 corresponde à letra C
        explicacao: "Gabarito: C. O texto trata da criação de um tecido inativador de vírus como medida de prevenção a doenças."
    },
    {
        id: 2,
        subject: "Língua Portuguesa",
        text: "No primeiro parágrafo, a última frase ressalta que a descoberta é:",
        options: [
            "A) versátil",
            "B) restritiva",
            "C) inadequada",
            "D) dispendiosa"
        ],
        answer: 0,
        explicacao: "Gabarito: A. A descoberta é versátil pois poderá ser usada não só em vestuário, mas em cortinas, estofados, etc."
    },
    {
        id: 3,
        subject: "Língua Portuguesa",
        text: "A principal função do tecido apresentada no texto consiste em:",
        options: [
            "A) impedir a passagem de ar",
            "B) desativar a ação de um vírus",
            "C) bloquear a circulação de água",
            "D) fornecer oxigênio ao indivíduo"
        ],
        answer: 1,
        explicacao: "Gabarito: B. O produto têxtil consegue inativar/neutralizar mais de 99,9% das partículas virais."
    },
    {
        id: 4,
        subject: "Língua Portuguesa",
        text: "Uma característica do discurso jornalístico observada no texto é:",
        options: [
            "A) exposição de perspectivas contrárias",
            "B) uso de expressões exageradas",
            "C) citação de fonte autorizada",
            "D) relato em tom pessoal"
        ],
        answer: 2,
        explicacao: "Gabarito: C. O texto cita diretamente especialistas e pesquisadores do laboratório como fontes autorizadas."
    },
    {
        id: 5,
        subject: "Língua Portuguesa",
        text: "No terceiro parágrafo, o longo trecho entre aspas representa, em relação à primeira frase, uma:",
        options: [
            "A) contestação",
            "B) ponderação",
            "C) explicação",
            "D) concessão"
        ],
        answer: 2,
        explicacao: "Gabarito: C. O trecho entre aspas explica detalhadamente como ocorrerá a mudança de cenário na indústria."
    },
    {
        id: 6,
        subject: "Língua Portuguesa",
        text: "'Por ter essa inativação tão rápida do vírus, as chances de contaminação da doença caem muito'. O trecho em destaque está corretamente reformulado em:",
        options: [
            "A) ainda que tenha essa inativação tão rápida do vírus",
            "B) visto que tem essa inativação tão rápida do vírus",
            "C) antes de ter essa inativação tão rápida do vírus",
            "D) se tiver essa inativação tão rápida do vírus"
        ],
        answer: 1,
        explicacao: "Gabarito: B. A preposição 'Por' exprime causa, sendo corretamente substituída pela conjunção causal 'visto que'."
    },
    {
        id: 7,
        subject: "Língua Portuguesa",
        text: "O trecho 'Por ter essa inativação tão rápida do vírus' assume, na frase, o valor de:",
        options: [
            "A) causa",
            "B) condição",
            "C) finalidade",
            "D) adversidade"
        ],
        answer: 0,
        explicacao: "Gabarito: A. Indica a causa pela qual as chances de contaminação caem."
    },
    {
        id: 8,
        subject: "Língua Portuguesa",
        text: "No texto, o segundo parágrafo assume, em relação ao primeiro parágrafo, o objetivo de:",
        options: [
            "A) apresentar ponto de vista contrário",
            "B) reforçar as vantagens da descoberta",
            "C) contradizer circunstâncias específicas",
            "D) comparar situações negativas e positivas"
        ],
        answer: 1,
        explicacao: "Gabarito: B. O segundo parágrafo detalha os benefícios práticos do tecido em situações reais de exposição."
    },
    {
        id: 9,
        subject: "Língua Portuguesa",
        text: "'Além disso, foi comprovada a eficácia no combate a outras doenças virais...'. No período, a palavra 'eficácia' tem função de:",
        options: [
            "A) aposto",
            "B) sujeito",
            "C) objeto indireto",
            "D) complemento nominal"
        ],
        answer: 1,
        explicacao: "Gabarito: B. Na voz passiva 'foi comprovada a eficácia', a palavra 'eficácia' é o sujeito paciente."
    },
    {
        id: 10,
        subject: "Língua Portuguesa",
        text: "A palavra 'como' na expressão 'como sarampo e caxumba' introduz expressão com valor de:",
        options: [
            "A) exemplificação",
            "B) conformidade",
            "C) causalidade",
            "D) comparação"
        ],
        answer: 0,
        explicacao: "Gabarito: A. A palavra introduz exemplos de 'outras doenças virais'."
    },
    {
        id: 11,
        subject: "Língua Portuguesa",
        text: "Reescrevendo a expressão 'combate a outras doenças virais', o acento indicativo de crase está corretamente empregado em:",
        options: [
            "A) combate à várias medidas",
            "B) combate à rápida propagação",
            "C) combate à seus efeitos negativos",
            "D) combate à determinado processo"
        ],
        answer: 1,
        explicacao: "Gabarito: B. Ocorre crase antes de palavra feminina ('rápida propagação') regida pelo nome combate."
    },
    {
        id: 12,
        subject: "Língua Portuguesa",
        text: "'Pesquisadores brasileiros produziram um tecido capaz de inativar o novo coronavirus'. Substituindo o termo destacado, o pronome está corretamente empregado em:",
        options: [
            "A) Pesquisadores brasileiros o produziram",
            "B) Pesquisadores brasileiros produziram-lhe",
            "C) Pesquisadores brasileiros produziram-nos",
            "D) Pesquisadores brasileiros lhes produziram"
        ],
        answer: 0,
        explicacao: "Gabarito: A. O objeto direto 'o novo coronavírus' é substituído pelo pronome 'o'."
    },
    {
        id: 13,
        subject: "Língua Portuguesa",
        text: "No segundo parágrafo, a partir do exemplo fornecido, pode-se inferir que o tecido tem a propriedade de:",
        options: [
            "A) promover a cura de pacientes infectados",
            "B) disseminar uma versão leve do vírus",
            "C) diminuir o contágio pelo toque",
            "D) evitar o diálogo entre pessoas"
        ],
        answer: 2,
        explicacao: "Gabarito: C. Evita contaminação pelo manuseio de máscaras e contato físico/superfícies."
    },
    {
        id: 14,
        subject: "Língua Portuguesa",
        text: "Uma vantagem do tecido apresentada no quarto parágrafo se refere a:",
        options: [
            "A) custo baixo do material",
            "B) simplicidade da composição",
            "C) uso de elementos recicláveis",
            "D) escassez de insumos utilizados"
        ],
        answer: 0,
        explicacao: "Gabarito: A. O texto cita que o preço é acessível e com bom custo-benefício."
    },
    {
        id: 15,
        subject: "Língua Portuguesa",
        text: "A palavra 'máscaras' é acentuada pelo mesmo motivo de:",
        options: [
            "A) vírus",
            "B) têxtil",
            "C) saúde",
            "D) último"
        ],
        answer: 3,
        explicacao: "Gabarito: D. 'Máscaras' e 'último' são palavras proparoxítonas (todas são acentuadas)."
    },
    {
        id: 16,
        subject: "Noções de Direito",
        text: "Segundo críticas feitas à perspectiva da Constituição dirigente, esta gera o:",
        options: [
            "A) movimento de mudanças políticas ilimitadas",
            "B) engessamento da ação política do Estado",
            "C) distanciamento da ação política popular",
            "D) colapso das instituições políticas"
        ],
        answer: 1,
        explicacao: "Gabarito: B. A crítica aponta que metas constitucionais rígidas podem engessar a atuação política estatal."
    },
    {
        id: 17,
        subject: "Noções de Direito",
        text: "De acordo com a Constituição Federal, poderá o Tribunal de Justiça propor a criação de varas especializadas com competência exclusiva para questões:",
        options: [
            "A) desportivas",
            "B) populares",
            "C) familiares",
            "D) agrárias"
        ],
        answer: 3,
        explicacao: "Gabarito: D. Conforme a CF, compete aos TJs propor a criação de varas especializadas em questões agrárias."
    },
    {
        id: 18,
        subject: "Noções de Direito",
        text: "Observada a responsabilidade objetiva do Estado, uma das causas excludentes consiste na:",
        options: [
            "A) ausência de dano material",
            "B) omissão do agente estatal",
            "C) discutibilidade do dano moral",
            "D) culpa exclusiva da vítima"
        ],
        answer: 3,
        explicacao: "Gabarito: D. A culpa exclusiva da vítima exclui a responsabilidade civil objetiva do Estado."
    },
    {
        id: 19,
        subject: "Noções de Direito",
        text: "Nos termos do Código de Processo Penal, a inadmissibilidade das provas ilícitas decorrentes de provas originais contaminadas pode decorrer da teoria dos:",
        options: [
            "A) fatos decorrentes de fonte",
            "B) frutos da árvore venenosa",
            "C) atos decorrentes de prova emprestada",
            "D) meios legitimados por interesse público"
        ],
        answer: 1,
        explicacao: "Gabarito: B. Teoria dos frutos da árvore venenosa (fruits of the poisonous tree)."
    },
    {
        id: 20,
        subject: "Noções de Direito",
        text: "Em 1983, o fato considerado como criminoso praticado em 1981 deixou de existir, favorecendo o réu. Caracteriza-se a:",
        options: [
            "A) ultra-atividade do crime",
            "B) modificação do crime",
            "C) abolição do crime",
            "D) desconsideração do crime"
        ],
        answer: 2,
        explicacao: "Gabarito: C. A lei posterior que cessa a criminalidade do fato opera a abolitio criminis (abolição do crime)."
    },
    {
        id: 21,
        subject: "Noções de Direito",
        text: "A Lei Z estabelece que, no período iniciado em janeiro de 2014 e terminado em dezembro de 2014, serão considerados crimes determinados fatos para regular situações decorrentes de evento relevante. Nos termos do Código Penal e da doutrina, essa lei deve ser considerada:",
        options: [
            "A) parcial",
            "B) temporária",
            "C) previsível",
            "D) variável"
        ],
        answer: 1,
        explicacao: "Gabarito: B. Lei temporária é aquela que fixa previamente o seu período de vigência."
    },
    {
        id: 22,
        subject: "Noções de Direito",
        text: "Quando a execução do crime é indelegável, intransferível, sendo considerado personalíssimo, a doutrina indica ser o mesmo crime:",
        options: [
            "A) de mão própria",
            "B) próprio",
            "C) especial",
            "D) iminente"
        ],
        answer: 0,
        explicacao: "Gabarito: A. Crimes de mão própria exigem atuação pessoal do agente (ex: falso testemunho)."
    },
    {
        id: 23,
        subject: "Noções de Direito",
        text: "A omissão pode ser geradora de responsabilidade criminal quando o agente omisso estiver, nos termos do Código Penal, na posição de:",
        options: [
            "A) espectador",
            "B) garantidor",
            "C) torcedor",
            "D) ativador"
        ],
        answer: 1,
        explicacao: "Gabarito: B. O garante (ou garantidor) tem o dever legal de cuidado, proteção ou vigilância."
    },
    {
        id: 24,
        subject: "Noções de Direito",
        text: "Escavar túnel em direção ao cofre de instituição financeira, atingindo o objetivo final e apenas aguardando o ingresso para a consumação. Nos termos do Código Penal, esses atos são considerados de:",
        options: [
            "A) preparação",
            "B) execução",
            "C) cogitação",
            "D) pensamento"
        ],
        answer: 1,
        explicacao: "Gabarito: B. Já se iniciaram os atos executórios (tentativa de furto qualificado)."
    },
    {
        id: 25,
        subject: "Noções de Direito",
        text: "D.T. apropria-se de bicicleta e, 24 horas após, devolve-la voluntariamente à proprietária. Nos termos do Código Penal, é caso de:",
        options: [
            "A) desistência voluntária",
            "B) ato de vontade descriminalizador",
            "C) arrependimento posterior",
            "D) restituição eficaz"
        ],
        answer: 2,
        explicacao: "Gabarito: C. A restituição da coisa até o recebimento da denúncia, sem violência, caracteriza arrependimento posterior."
    },
    {
        id: 26,
        subject: "Noções de Direito",
        text: "Constranger trabalhador, mediante grave ameaça, a não ter intervalo para descanso com a finalidade de cumprir metas. Caracteriza o crime de:",
        options: [
            "A) coação ilegal laboral",
            "B) participação em boicotagem",
            "C) atentado contra a liberdade do trabalho",
            "D) aliciamento extraterritorial de trabalhadores"
        ],
        answer: 2,
        explicacao: "Gabarito: C. Tipo previsto no artigo 197 do Código Penal (atentado contra a liberdade do trabalho)."
    },
    {
        id: 27,
        subject: "Noções de Direito",
        text: "Militar que cumpre ordem de superior hierárquico sobre local de guarda, vindo a ser envolvido em ilícito do superior, atuou amparado por:",
        options: [
            "A) participação mínima",
            "B) imprudente evento",
            "C) estrita obediência à ordem",
            "D) estado de necessidade"
        ],
        answer: 2,
        explicacao: "Gabarito: C. Excludente de culpabilidade por estrita obediência à ordem não manifestamente ilegal."
    },
    {
        id: 28,
        subject: "Noções de Direito",
        text: "Godo repele agressão de Theodora e, após a agressora estar incapacitada no chão, desfere terceiro tiro que causa seu falecimento. Nos termos do Código Penal, houve:",
        options: [
            "A) legítima defesa pura",
            "B) excesso de legítima defesa",
            "C) homicídio qualificado",
            "D) exercício regular de direito"
        ],
        answer: 1,
        explicacao: "Gabarito: B. Ocorre o excesso (neste caso, intensivo/excedente após cessada a agressão)."
    },
    {
        id: 29,
        subject: "Noções de Direito",
        text: "A.S. treinou animal de estimação para invadir residências e retirar objetos de valor. O crime de furto com tais características é classificado como:",
        options: [
            "A) especial",
            "B) próprio",
            "C) impossível",
            "D) comum"
        ],
        answer: 3,
        explicacao: "Gabarito: D. Crime comum pode ser praticado por qualquer pessoa (mesmo utilizando o animal como meio)."
    },
    {
        id: 30,
        subject: "Noções de Direito",
        text: "Dênis obtém CNH falsa sem saber da falsidade e alega desconhecimento ao ser fiscalizado. Nos termos do Código Penal, o caso é de:",
        options: [
            "A) erro putativo",
            "B) erro de proibição",
            "C) erro sobre pessoa",
            "D) erro sobre elementos do tipo"
        ],
        answer: 3,
        explicacao: "Gabarito: D. Erro sobre elementos constitutivos do tipo legal (descrimina putativa ou erro de tipo)."
    },
    {
        id: 31,
        subject: "Noções de Direito",
        text: "Autoridade policial que toma ciência de fato delituoso deve dirigir-se ao local preservando o estado das coisas até a chegada dos:",
        options: [
            "A) agentes de investigação",
            "B) peritos criminais",
            "C) advogados das partes",
            "D) membros do Ministério Público"
        ],
        answer: 1,
        explicacao: "Gabarito: B. Conforme o CPP, deve preservar o local para a atuação dos peritos criminais."
    },
    {
        id: 32,
        subject: "Noções de Direito",
        text: "Após receber o auto de prisão em flagrante no prazo de até 24 horas, o juiz deverá promover a audiência de:",
        options: [
            "A) liberação",
            "B) fiança",
            "C) custódia",
            "D) acareação"
        ],
        answer: 2,
        explicacao: "Gabarito: C. Audiência de custódia, obrigatória nos termos do CPP."
    },
    {
        id: 33,
        subject: "Noções de Direito",
        text: "Tabelionato exercendo atividade de colaboração com o Estado realiza tal função através de:",
        options: [
            "A) concessão",
            "B) permissão",
            "C) requisição",
            "D) delegação"
        ],
        answer: 3,
        explicacao: "Gabarito: D. Serviços notariais e de registro são exercidos em caráter privado por delegação do Poder Público."
    },
    {
        id: 34,
        subject: "Noções de Direito",
        text: "No reconhecimento de pessoa em inquérito policial, o investigado será colocado junto a outras que com ele tiverem semelhança, lavrando-se do ato:",
        options: [
            "A) auto",
            "B) ata",
            "C) certidão",
            "D) termo"
        ],
        answer: 0,
        explicacao: "Gabarito: A. Lavrar-se-á auto pormenorizado do reconhecimento."
    },
    {
        id: 35,
        subject: "Noções de Direito",
        text: "A prova incumbirá a quem a fizer, sendo facultado ao juiz de ofício determinar diligências para dirimir dúvida sobre:",
        options: [
            "A) questão prejudicial",
            "B) fato incontroverso",
            "C) ponto relevante",
            "D) questão de estado"
        ],
        answer: 2,
        explicacao: "Gabarito: C. O juiz pode ordenar diligências para dirimir dúvida sobre ponto relevante (art. 156, II, do CPP)."
    },
    {
        id: 36,
        subject: "Legislação Extravagante",
        text: "Nos termos da Lei de Crimes Hediondos (Lei nº 8.072/90), o homicídio será hediondo quando praticado em atividade típica de:",
        options: [
            "A) grupo miliciano",
            "B) grupo organizado",
            "C) grupo de cidadãos",
            "D) grupo de extermínio"
        ],
        answer: 3,
        explicacao: "Gabarito: D. Homicídio praticado por grupo de extermínio é hediondo (art. 1º, I)."
    },
    {
        id: 37,
        subject: "Legislação Extravagante",
        text: "Nos termos da Lei de Crimes Hediondos, os crimes hediondos e equiparados são insuscetíveis de:",
        options: [
            "A) indulto",
            "B) condicional",
            "C) permissão de saída",
            "D) licença-estudo"
        ],
        answer: 0,
        explicacao: "Gabarito: A. São insuscetíveis de anistia, graça e indulto."
    },
    {
        id: 38,
        subject: "Legislação Extravagante",
        text: "Nos termos da Lei de Abuso de Autoridade (Lei nº 13.869/2019), caso o Ministério Público deixe de oferecer denúncia no prazo legal, caberá ação penal privada subsidiária, devendo o MP oferecer denúncia:",
        options: [
            "A) complementar",
            "B) adicional",
            "C) substitutiva",
            "D) impugnativa"
        ],
        answer: 2,
        explicacao: "Gabarito: C. O MP poderá aditar a denúncia, repudiá-la e oferecer denúncia substitutiva, intervir em todos os termos, etc."
    },
    {
        id: 39,
        subject: "Legislação Extravagante",
        text: "Nos termos da Lei nº 13.869/2019, a sanção de inabilitação para o exercício de cargo pelo período de 1 a 5 anos é condicionada à ocorrência de reincidência em crime de:",
        options: [
            "A) abuso de autoridade",
            "B) perigo concreto",
            "C) doloso geral",
            "D) risco integral"
        ],
        answer: 0,
        explicacao: "Gabarito: A. A inabilitação é efeito condicionado à reincidência em crime de abuso de autoridade."
    },
    {
        id: 40,
        subject: "Legislação Extravagante",
        text: "Nos termos da Lei nº 13.869/2019, faz coisa julgada em âmbito cível a sentença penal absolutória que reconhecer ter sido o ato praticado em:",
        options: [
            "A) exercício regular de direito",
            "B) extrema necessidade",
            "C) estado de defesa",
            "D) estrito perigo iminente"
        ],
        answer: 0,
        explicacao: "Gabarito: A. A sentença que reconhecer excludentes como o exercício regular de direito faz coisa julgada no cível."
    },
    {
        id: 41,
        subject: "Legislação Extravagante",
        text: "Constranger alguém com emprego de grave ameaça, causando-lhe sofrimento físico com o fim de obter confissão da vítima, caracteriza o crime de:",
        options: [
            "A) sequestro",
            "B) tortura",
            "C) comissão",
            "D) assédio"
        ],
        answer: 1,
        explicacao: "Gabarito: B. Tortura-confissão, nos termos da Lei nº 9.455/1997."
    },
    {
        id: 42,
        subject: "Legislação Extravagante",
        text: "Nos termos do Estatuto da Criança e do Adolescente (Lei nº 8.069/1990), para não configurar crime, o ato de apreensão de adolescente deve ocorrer em:",
        options: [
            "A) caso de situação suspeita",
            "B) função de aglomeração próximo à escola",
            "C) flagrante de ato infracional",
            "D) decorrência de reconhecimento facial"
        ],
        answer: 2,
        explicacao: "Gabarito: C. A apreensão depende de ordem escrita da autoridade judiciária ou flagrante de ato infracional."
    },
    {
        id: 43,
        subject: "Legislação Extravagante",
        text: "Nos termos do Estatuto da Criança e do Adolescente (Lei nº 8.069/1990), configura crime descumprir, culposamente, os deveres inerentes ao:",
        options: [
            "A) estamento legal",
            "B) encaminhamento positivo",
            "C) interesse público",
            "D) poder familiar"
        ],
        answer: 3,
        explicacao: "Gabarito: D. Incorre em crime o detentor do poder familiar que descumpre culposamente os deveres."
    },
    {
        id: 44,
        subject: "Legislação Extravagante",
        text: "Nos termos do Estatuto da Criança e do Adolescente (Lei nº 8.069/1990), configura crime submeter criança sob sua guarda a:",
        options: [
            "A) simulação",
            "B) fuga",
            "C) constrangimento",
            "D) tutela"
        ],
        answer: 2,
        explicacao: "Gabarito: C. Submeter criança ou adolescente sob sua guarda, autoridade ou vigilância a vexame ou a constrangimento."
    },
    {
        id: 45,
        subject: "Legislação Extravagante",
        text: "Adquirir ou alugar, no exercício de atividade comercial ou industrial, arma de fogo, acessório ou munição sem autorização legal caracteriza o crime de:",
        options: [
            "A) tráfico ilegal de arma de fogo",
            "B) uso ilegal de arma de fogo",
            "C) efetivação ilegal de arma de fogo",
            "D) comércio ilegal de arma de fogo"
        ],
        answer: 3,
        explicacao: "Gabarito: D. Tipo penal do art. 17 da Lei nº 10.826/2003 (Estatuto do Desarmamento)."
    },
    {
        id: 46,
        subject: "Legislação Extravagante",
        text: "Nos termos da Lei nº 9.605/1998, destruir floresta considerada de preservação permanente constitui crime contra a:",
        options: [
            "A) terra",
            "B) lavra",
            "C) flora",
            "D) regeneração"
        ],
        answer: 2,
        explicacao: "Gabarito: C. Crimes contra a flora (art. 38 da Lei de Crimes Ambientais)."
    },
    {
        id: 47,
        subject: "Legislação Extravagante",
        text: "Nos termos da Lei nº 11.340/2006, a conduta que configure difamação praticada contra a mulher no âmbito doméstico caracteriza violência:",
        options: [
            "A) psíquica",
            "B) moral",
            "C) física",
            "D) humilhante"
        ],
        answer: 1,
        explicacao: "Gabarito: B. A calúnia, a difamação e a injúria configuram violência moral."
    },
    {
        id: 48,
        subject: "Legislação Extravagante",
        text: "Nos termos da Lei nº 11.343/2006, quem adquirir, guardar ou trouxer consigo drogas para consumo pessoal sem autorização será submetido à pena de:",
        options: [
            "A) advertência sobre os efeitos das drogas",
            "B) interdição pessoal",
            "C) prisão temporária",
            "D) detenção definitiva"
        ],
        answer: 0,
        explicacao: "Gabarito: A. Penas alternativas de advertência, prestação de serviços e comparecimento a programa."
    },
    {
        id: 49,
        subject: "Legislação Extravagante",
        text: "Oferecer droga, eventualmente e sem objetivo de lucro, a pessoa de seu relacionamento para juntos a consumirem tem pena de:",
        options: [
            "A) detenção",
            "B) admoestação",
            "C) intervenção",
            "D) conversão"
        ],
        answer: 0,
        explicacao: "Gabarito: A. Art. 33, parágrafo 3º, da Lei de Drogas (detenção de 6 meses a 1 ano)."
    },
    {
        id: 50,
        subject: "Legislação Extravagante",
        text: "O retardo da intervenção policial para o momento mais eficaz à formação de provas em organização criminosa, mantendo-a sob observação, configura a:",
        options: [
            "A) ação controlada",
            "B) ação planejada",
            "C) ação cooperada",
            "D) ação prevista"
        ],
        answer: 0,
        explicacao: "Gabarito: A. Conceito legal de ação controlada (Lei nº 12.850/2013)."
    },
    {
        id: 51,
        subject: "Conhecimentos Específicos",
        text: "Nos termos da Lei nº 13.675/2018, estabelecer a Política Nacional de Segurança Pública e Defesa Social (PNSPDS) compete:",
        options: [
            "A) aos Estados",
            "B) à União",
            "C) aos Municípios",
            "D) ao Distrito Federal"
        ],
        answer: 1,
        explicacao: "Gabarito: B. Compete à União estabelecer a Política Nacional."
    },
    {
        id: 52,
        subject: "Conhecimentos Específicos",
        text: "Constitui diretriz da PNSPDS o fortalecimento de ações de prevenção priorizando políticas de redução da letalidade violenta com ênfase nos grupos:",
        options: [
            "A) escolhidos",
            "B) interessados",
            "C) especiais",
            "D) vulneráveis"
        ],
        answer: 3,
        explicacao: "Gabarito: D. Ênfase nos grupos vulneráveis."
    },
    {
        id: 53,
        subject: "Conhecimentos Específicos",
        text: "Nos termos da Lei nº 13.675/2018, o órgão competente para acompanhar as avaliações do respectivo ente federado cabe ao:",
        options: [
            "A) Ministério Público",
            "B) Poder Legislativo",
            "C) Defensor Público",
            "D) Governador do Estado"
        ],
        answer: 1,
        explicacao: "Gabarito: B. Acompanhamento das avaliações cabe ao Poder Legislativo."
    },
    {
        id: 54,
        subject: "Conhecimentos Específicos",
        text: "O gerenciamento e a realização dos processos e procedimentos de apuração de responsabilidade funcional por meio de correição cabem aos órgãos de:",
        options: [
            "A) ouvidoria",
            "B) persecução",
            "C) correição",
            "D) defesa"
        ],
        answer: 2,
        explicacao: "Gabarito: C. Atribuição dos órgãos de correição."
    },
    {
        id: 55,
        subject: "Conhecimentos Específicos",
        text: "Nos termos da Lei nº 13.675/2018, a matriz curricular nacional é pautada nos direitos humanos e nos princípios da:",
        options: [
            "A) Andragogia",
            "B) Qualificação",
            "C) Metodologia",
            "D) Técnica"
        ],
        answer: 0,
        explicacao: "Gabarito: A. Pautada na andragogia e teorias de construção do conhecimento."
    },
    {
        id: 56,
        subject: "Conhecimentos Específicos",
        text: "A instituição do Sinesp, com finalidade de armazenar e tratar dados para auxiliar nas políticas de segurança, realiza a denominada:",
        options: [
            "A) urgência",
            "B) transparência",
            "C) prevalência",
            "D) iminência"
        ],
        answer: 1,
        explicacao: "Gabarito: B. Realiza a transparência e integração de dados."
    },
    {
        id: 57,
        subject: "Conhecimentos Específicos",
        text: "Os agentes públicos devem observar diretrizes para desenvolver programas articulados com a sociedade para prevenção da criminalidade e de:",
        options: [
            "A) situações",
            "B) ataques",
            "C) riscos",
            "D) desastres"
        ],
        answer: 3,
        explicacao: "Gabarito: D. Prevenção da criminalidade e de desastres."
    },
    {
        id: 58,
        subject: "Conhecimentos Específicos",
        text: "Nos termos da Lei Federal nº 13.022/2014, as guardas municipais são instituições uniformizadas e armadas com função de proteção municipal preventiva de caráter:",
        options: [
            "A) especial",
            "B) próprio",
            "C) civil",
            "D) militar"
        ],
        answer: 2,
        explicacao: "Gabarito: C. Guardas municipais possuem caráter civil."
    },
    {
        id: 59,
        subject: "Conhecimentos Específicos",
        text: "São princípios mínimos de atuação das guardas municipais a proteção dos direitos humanos, cidadania, preservação da vida e redução de:",
        options: [
            "A) perdas",
            "B) tristezas",
            "C) necessidades",
            "D) calamidades"
        ],
        answer: 0,
        explicacao: "Gabarito: A. Redução do sofrimento e diminuição das perdas."
    },
    {
        id: 60,
        subject: "Conhecimentos Específicos",
        text: "Nos termos da Lei Federal nº 13.022/2014, é competência geral das guardas municipais a proteção de:",
        options: [
            "A) bens de natureza ecológica",
            "B) bens de conteúdo arquitetônico",
            "C) bens de uso especial",
            "D) bens de uso cultural"
        ],
        answer: 2,
        explicacao: "Gabarito: C. Proteção de bens, serviços, instalações e bens de uso especial."
    },
    {
        id: 61,
        subject: "Conhecimentos Específicos",
        text: "Nos termos da Lei nº 050 de 1991 (Estatuto dos Servidores de São Gonçalo-RJ), são considerados de efetivo exercício os afastamentos, exceto para promoção por merecimento:",
        options: [
            "A) exercício de cargo em comissão",
            "B) gozo de férias regulares",
            "C) participação em júri",
            "D) desempenho de mandato eletivo"
        ],
        answer: 3,
        explicacao: "Gabarito: D. O desempenho de mandato eletivo não conta para efeito de promoção por merecimento."
    },
    {
        id: 62,
        subject: "Conhecimentos Específicos",
        text: "Nos termos do Estatuto dos Servidores de São Gonçalo-RJ, é vedada, para todos os efeitos de direito, a soma de tempo de serviço prestado:",
        options: [
            "A) seguidamente",
            "B) simultaneamente",
            "C) temporalmente",
            "D) parceladamente"
        ],
        answer: 1,
        explicacao: "Gabarito: B. É vedada a soma de tempo de serviço prestado simultaneamente."
    },
    {
        id: 63,
        subject: "Conhecimentos Específicos",
        text: "A exoneração do cargo público municipal de professora por assumir outro cargo inacumulável acarretará:",
        options: [
            "A) reposição",
            "B) vacância",
            "C) disponibilidade",
            "D) aproveitamento"
        ],
        answer: 1,
        explicacao: "Gabarito: B. A exoneração gera a vacância do cargo público."
    },
    {
        id: 64,
        subject: "Conhecimentos Específicos",
        text: "Nos termos do Estatuto dos Servidores de São Gonçalo-RJ, a substituição de chefia pelo período de dez dias será:",
        options: [
            "A) proporcional ao tempo substituído",
            "B) compensada como dias-prêmio",
            "C) remunerada quando igual a 30 dias",
            "D) sempre gratuita"
        ],
        answer: 2,
        explicacao: "Gabarito: C. A substituição será remunerada quando igual ou superior a 30 dias."
    },
    {
        id: 65,
        subject: "Conhecimentos Específicos",
        text: "É assegurada isonomia de vencimentos para cargos de atribuições iguais ou assemelhadas, ressalvadas as vantagens de caráter:",
        options: [
            "A) coletivo",
            "B) classista",
            "C) sindical",
            "D) individual"
        ],
        answer: 3,
        explicacao: "Gabarito: D. Ressalvadas as vantagens de caráter individual e as relativas à condição de trabalho."
    },
    {
        id: 66,
        subject: "Conhecimentos Específicos",
        text: "Para efeito de aposentadoria, servidores que exerceram cargo ou função gratificada incorporarão o valor se o exercício ocorreu por mais de:",
        options: [
            "A) dois anos consecutivos ou quatro intercalados",
            "B) três anos consecutivos ou seis intercalados",
            "C) quatro anos consecutivos ou oito intercalados",
            "D) cinco anos consecutivos ou dez intercalados"
        ],
        answer: 3,
        explicacao: "Gabarito: D. Exigência de cinco anos consecutivos ou dez intercalados."
    },
    {
        id: 67,
        subject: "Conhecimentos Específicos",
        text: "Além do vencimento, poderá ser paga aos servidores municipais de São Gonçalo a seguinte vantagem:",
        options: [
            "A) vale-doença",
            "B) vale-plantonista",
            "C) vale-transporte",
            "D) vale-diarista"
        ],
        answer: 2,
        explicacao: "Gabarito: C. O vale-transporte consta entre as vantagens previstas."
    },
    {
        id: 68,
        subject: "Conhecimentos Específicos",
        text: "O adicional por tempo de serviço por triênio de efetivo exercício no Município concede no primeiro triênio a razão de:",
        options: [
            "A) dois por cento",
            "B) quatro por cento",
            "C) oito por cento",
            "D) dez por cento"
        ],
        answer: 1,
        explicacao: "Gabarito: B. Adicional de quatro por cento no primeiro triênio."
    },
    {
        id: 69,
        subject: "Conhecimentos Específicos",
        text: "O servidor municipal que requerer licença para tratamento de interesses particulares não poderá permanecer em licença por período superior a:",
        options: [
            "A) doze meses",
            "B) dezesseis meses",
            "C) vinte meses",
            "D) vinte e quatro meses"
        ],
        answer: 3,
        explicacao: "Gabarito: D. O limite máximo é de vinte e quatro meses."
    },
    {
        id: 70,
        subject: "Conhecimentos Específicos",
        text: "O servidor que recusar comparecer à inspeção médica municipal terá o pagamento suspenso até que:",
        options: [
            "A) realize a inspeção médica",
            "B) requeira junta especial médica em casa",
            "C) apresente documento comprobatório da doença",
            "D) indique médicos particulares para constatar o mal"
        ],
        answer: 0,
        explicacao: "Gabarito: A. A suspensão perdura até que o servidor efetivamente realize a inspeção médica."
    },
    {
        id: 71,
        subject: "Informática",
        text: "A sigla utilizada para referenciar a tecnologia dos discos rígidos atuais e a taxa nominal de transferência do USB v3.0 são, respectivamente:",
        options: [
            "A) PCI-E e 4.8 Gbps",
            "B) SATA e 4.8 Gbps",
            "C) PCI-E e 480 Mbps",
            "D) SATA e 480 Mbps"
        ],
        answer: 1,
        explicacao: "Gabarito: B. Discos rígidos utilizam tecnologia SATA e o USB 3.0 atinge taxa nominal de 4.8 Gbps (SuperSpeed)."
    },
    {
        id: 72,
        subject: "Informática",
        text: "O atalho de teclado no Windows 10 para multitarefa (alternar programas abertos) e a pasta do Linux que armazena configurações são, respectivamente:",
        options: [
            "A) Alt+F9 e /sys",
            "B) Alt+F9 e /etc",
            "C) Alt+Tab e /sys",
            "D) Alt+Tab e /etc"
        ],
        answer: 3,
        explicacao: "Gabarito: D. Alt+Tab alterna janelas ativas e o diretório /etc armazena arquivos de configuração no Linux."
    },
    {
        id: 73,
        subject: "Informática",
        text: "No Word 2016 BR, os ícones para alinhamento centralizado e à esquerda e os atalhos para negrito e itálico são, respectivamente:",
        options: [
            "A) Ctrl+N e Ctrl+I",
            "B) Ctrl+N e Ctrl+I",
            "C) Alt+N e Alt+I",
            "D) Alt+N e Alt+I"
        ],
        answer: 0,
        explicacao: "Gabarito: A. Ctrl+N aplica Negrito e Ctrl+I aplica Itálico."
    },
    {
        id: 74,
        subject: "Informática",
        text: "Exemplos de formatos de arquivos para Padrão aberto em PDF, formato matricial de imagem e formato de vídeo flexível são, respectivamente:",
        options: [
            "A) PDF, WMF e MP3",
            "B) PSD, WMF e MP3",
            "C) PDF, JPG e MP4",
            "D) PSD, JPG e MP4"
        ],
        answer: 2,
        explicacao: "Gabarito: C. PDF (documentos), JPG (imagem matricial) e MP4 (vídeo/mídia)."
    },
    {
        id: 75,
        subject: "Informática",
        text: "Na planilha do Excel 2016, para determinar o total de horas com referência absoluta e exibir o conteúdo de outra célula, a fórmula correta em F7 é:",
        options: [
            "A) =SOMASE(#B#4:#B#15;E7;#C#4:#C#15)",
            "B) =SOMASE($B$4:$B$15;E7;$C$4:$C$15)",
            "C) =SOMASE(\\$B\\$4:\\$B\\$15;E7;\\$C\\$4:\\$C\\$15)",
            "D) =SOMASE(\\$B\\$4:\\$B\\$15;E7;\\$C\\$4:\\$C\\$15)"
        ],
        answer: 1,
        explicacao: "Gabarito: B. A sintaxe correta da função SOMASE com referências absolutas usa cifrões ($B$4:$B$15)."
    },
    {
        id: 76,
        subject: "Informática",
        text: "No PowerPoint 2016, o atalho para salvar e a tecla de função para verificação ortográfica no LibreOffice Impress 6.3 são, respectivamente:",
        options: [
            "A) Ctrl+B e F7",
            "B) Ctrl+S e F7",
            "C) Ctrl+B e F11",
            "D) Ctrl+S e F11"
        ],
        answer: 1,
        explicacao: "Gabarito: B. Ctrl+S salva o arquivo (Save) e F7 aciona o corretor ortográfico."
    },
    {
        id: 77,
        subject: "Informática",
        text: "O conector de redes largamente empregado em topologia estrela e o padrão sem fio com suporte a MU-MIMO e Beamforming são, respectivamente:",
        options: [
            "A) RJ-45 e IEEE 802.11g",
            "B) RJ-45 e IEEE 802.11ac",
            "C) RJ-45 e IEEE 802.11g",
            "D) RJ-45 e IEEE 802.11ac"
        ],
        answer: 1,
        explicacao: "Gabarito: B. Cabo RJ-45 e padrão Wi-Fi IEEE 802.11ac."
    },
    {
        id: 78,
        subject: "Informática",
        text: "Critério recomendado pela Microsoft para a criação de senhas fortes em ambientes de informática e internet:",
        options: [
            "A) letras maiúsculas, minúsculas e algarismos",
            "B) o próprio nome, data ou ano de nascimento",
            "C) siglas, termos ou palavras em idiomas estrangeiros",
            "D) nomes de pai, filhos ou palavras de fácil memorização"
        ],
        answer: 0,
        explicacao: "Gabarito: A. Combinação de letras maiúsculas, minúsculas, números e caracteres especiais."
    },
    {
        id: 79,
        subject: "Informática",
        text: "No navegador Firefox, as convenções de segurança na Barra de Endereços para conexão insegura (ALFA), parcialmente criptografada (BETA) e criptografada (GAMA) são, respectivamente:",
        options: [
            "A) I, III e II",
            "B) II, I e III",
            "C) II, III e I",
            "D) III, I e II"
        ],
        answer: 3,
        explicacao: "Gabarito: D. III (cadeado cortado), I (cadeado cinza) e II (cadeado cinza com triângulo de alerta/HTTPS seguro)."
    },
    {
        id: 80,
        subject: "Informática",
        text: "Dois exemplos de tecnologias de computação em nuvem que fornecem armazenamento e serviços pela internet são:",
        options: [
            "A) AutoCad e Google Drive",
            "B) OneDrive e Google Drive",
            "C) AutoCad e Thunderbird Mozilla",
            "D) OneDrive e Thunderbird Mozilla"
        ],
        answer: 1,
        explicacao: "Gabarito: B. OneDrive (Microsoft) e Google Drive (Google) são exemplos clássicos de serviços em nuvem."
    }
];

