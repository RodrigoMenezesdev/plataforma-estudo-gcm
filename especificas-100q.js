// =========================================================================
// SUPER SIMULADO POR MATÉRIA (100 QUESTÕES DE CONHECIMENTOS ESPECÍFICOS)
// =========================================================================
const superBancoQuestoes = [
    // DIREITO CONSTITUCIONAL (1 a 20)
    {
        materia: "Constitucional",
        subject: "Direito Constitucional",
        text: "01. Conforme o Art. 5º, LXVIII da CF/88, conceder-se-á Habeas Corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por:",
        options: ["A) Apenas abuso de autoridade de agentes federais.", "B) Ilegalidade ou abuso de poder.", "C) Exclusivamente por ordem administrativa municipal.", "D) Decisão do Ministério Público."],
        answer: 1,
        explanation: "O Habeas Corpus protege o direito ir e vir (liberdade de locomoção) sempre que houver violência ou ameaça decorrente de ilegalidade ou abuso de poder (Art. 5º, LXVIII da CF/88)."
    },
    {
        materia: "Constitucional",
        subject: "Direito Constitucional",
        text: "02. De acordo com a CF/88, o remédio constitucional adequado para assegurar o conhecimento de informações relativas à pessoa do impetrante, constantes de bancos de dados governamentais, é o:",
        options: ["A) Mandado de Segurança.", "B) Habeas Corpus.", "C) Habeas Data.", "D) Mandado de Injunção."],
        answer: 2,
        explanation: "O Habeas Data serve para assegurar o conhecimento/retificação de informações relativas à pessoa do impetrante em registros públicos ou governamentais (Art. 5º, LXXII da CF/88)."
    },
    {
        materia: "Constitucional",
        subject: "Direito Constitucional",
        text: "03. São gratuitas as ações constitucionais de:",
        options: ["A) Mandado de Segurança e Mandado de Injunção.", "B) Habeas Corpus e Habeas Data.", "C) Ação Popular e Mandado de Segurança.", "D) Todas as ações judiciais no âmbito municipal."],
        answer: 1,
        explanation: "O Art. 5º, LXXVII da CF/88 estabelece a gratuidade expressa para o Habeas Corpus e para o Habeas Data."
    },
    {
        materia: "Constitucional",
        subject: "Direito Constitucional",
        text: "04. Conforme o Art. 144, § 8º da CF/88, os Municípios poderão constituir guardas municipais destinadas à:",
        options: ["A) Segurança ostensiva das rodovias estaduais.", "B) Investigação de crimes contra o patrimônio privado.", "C) Proteção de seus bens, serviços e instalações.", "D) Execução primária de prisão preventiva."],
        answer: 2,
        explanation: "A destinação constitucional das Guardas Municipais é a proteção dos bens, serviços e instalações do Município (Art. 144, § 8º da CF/88)."
    },
    {
        materia: "Constitucional",
        subject: "Direito Constitucional",
        text: "05. É competência privativa da União legislar sobre:",
        options: ["A) Assuntos de interesse estritamente local.", "B) Proteção ao patrimônio histórico municipal.", "C) Direito Penal e Processual Penal.", "D) Criação de guardas municipais."],
        answer: 2,
        explanation: "Compete privativamente à União legislar sobre Direito Civil, Comercial, Penal, Processual, Eleitoral, do Trabalho, etc. (Art. 22, I da CF/88)."
    },
    {
        materia: "Constitucional",
        subject: "Direito Constitucional",
        text: "06. Nos termos da CF/88, a inviolabilidade do domicílio é regra, SALVO em caso de:",
        options: ["A) Determinação do Prefeito a qualquer hora.", "B) Flagrante delito, desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial.", "C) Apenas com consentimento do síndico.", "D) Qualquer horário mediante suspeita fundada."],
        answer: 1,
        explanation: "A casa é asilo inviolável, podendo entrar sem consentimento em flagrante delito, desastre, socorro (a qualquer hora) ou por mandado judicial (somente de dia) - Art. 5º, XI."
    },
    {
        materia: "Constitucional",
        subject: "Direito Constitucional",
        text: "07. O direito de petição aos órgãos públicos em defesa de direitos ou contra ilegalidade ou abuso de poder é assegurado a todos:",
        options: ["A) Mediante taxa estipulada em lei municipal.", "B) Independentemente do pagamento de taxas.", "C) Apenas se representado por advogado.", "D) Exclusivamente para cidadãos natos."],
        answer: 1,
        explanation: "O direito de petição e a obtenção de certidões são assegurados a todos independentemente do pagamento de taxas (Art. 5º, XXXIV da CF/88)."
    },
    {
        materia: "Constitucional",
        subject: "Direito Constitucional",
        text: "08. É garantido o direito de propriedade, devendo a propriedade atender à sua:",
        options: ["A) Função comercial e lucrativa.", "B) Função social.", "C) Isenção tributária anual.", "D) Destinação exclusivamente pública."],
        answer: 1,
        explanation: "A CF/88 garante o direito de propriedade (Art. 5º, XXII) e impõe que ela cumpra sua função social (Art. 5º, XXIII)."
    },
    {
        materia: "Constitucional",
        subject: "Direito Constitucional",
        text: "09. Ninguém será privado de direitos por motivo de crença religiosa ou convicção política, salvo se as invocar para eximir-se de:",
        options: ["A) Prestação alternativa fixada em lei.", "B) Obrigação legal a todos imposta e recusar-se a cumprir prestação alternativa.", "C) Qualquer dever civil sem exceção.", "D) Pagamento de impostos diretos."],
        answer: 1,
        explanation: "Trata-se da escusa de consciência (Art. 5º, VIII da CF/88). A privação só ocorre se a pessoa se recusar a cumprir a obrigação geral E a prestação alternativa."
    },
    {
        materia: "Constitucional",
        subject: "Direito Constitucional",
        text: "10. É livre a expressão da atividade intelectual, artística, científica e de comunicação, independentemente de:",
        options: ["A) Autorização judicial prévia.", "B) Censura ou licença.", "C) Registro em cartório público.", "D) Comprovação de diploma."],
        answer: 1,
        explanation: "O Art. 5º, IX da CF/88 proíbe qualquer tipo de censura ou licença prévia para manifestações intelectuais, artísticas ou de comunicação."
    },
    {
        materia: "Constitucional",
        subject: "Direito Constitucional",
        text: "11. A criação de Municípios faz-se por lei estadual, dentro do período determinado por Lei Complementar Federal, e dependerá de consulta prévia, mediante:",
        options: ["A) Plebiscito, às populações dos Municípios envolvidos.", "B) Referendo do Congresso Nacional.", "C) Decreto do Governador.", "D) Resolução das Câmaras."],
        answer: 0,
        explanation: "A criação de Municípios depende de consulta prévia, mediante plebiscito, às populações dos municípios envolvidos (Art. 18, § 4º da CF/88)."
    },
    {
        materia: "Constitucional",
        subject: "Direito Constitucional",
        text: "12. Compete aos Municípios promover, no que couber, adequado ordenamento territorial, mediante planejamento e controle do uso e ocupação do:",
        options: ["A) Solo urbano.", "B) Mar territorial.", "C) Espaço aéreo nacional.", "D) Leito das rodovias."],
        answer: 0,
        explanation: "O planejamento e controle do uso, parcelamento e ocupação do solo urbano é matéria de interesse local e competência municipal (Art. 30, VIII da CF/88)."
    },
    {
        materia: "Constitucional",
        subject: "Direito Constitucional",
        text: "13. O rol de direitos fundamentais previsto no Art. 5º da CF/88 é:",
        options: ["A) Exaustivo e taxativo.", "B) Exemplificativo (não excludente de outros decorrentes do regime).", "C) Aplicável exclusivamente aos natos.", "D) Revogável por medida provisória."],
        answer: 1,
        explanation: "O rol do Art. 5º é exemplificativo (§ 2º do Art. 5º), não excluindo outros direitos decorrentes do regime e dos tratados internacionais."
    },
    {
        materia: "Constitucional",
        subject: "Direito Constitucional",
        text: "14. A lei penal não retroagirá, SALVO para:",
        options: ["A) Beneficiar o réu.", "B) Agravar a pena em crimes hediondos.", "C) Ajustar prazos processuais.", "D) Atender interesse da vítima."],
        answer: 0,
        explanation: "Princípio da Irretroatividade da Lei Penal maléfica (Art. 5º, XL da CF/88): a lei penal nunca retroage para prejudicar, apenas para beneficiar o réu (*lex mitior*)."
    },
    {
        materia: "Constitucional",
        subject: "Direito Constitucional",
        text: "15. Não haverá penas de morte (salvo guerra declarada), de caráter perpétuo, de trabalhos forçados, de banimento e:",
        options: ["A) Multa pecuniária.", "B) Cruéis.", "C) Privativas de liberdade.", "D) Restritivas de direitos."],
        answer: 1,
        explanation: "O Art. 5º, XLVII da CF/88 veda expressamente as penas de morte, caráter perpétuo, trabalhos forçados, banimento e penas cruéis."
    },
    {
        materia: "Constitucional",
        subject: "Direito Constitucional",
        text: "16. A prisão de qualquer pessoa e o local onde se encontre serão comunicados imediatamente ao juiz competente e:",
        options: ["A) À família do preso ou à pessoa por ele indicada.", "B) Ao Prefeito do Município.", "C) Ao Comando da Polícia Militar.", "D) Exclusivamente à Defensoria Pública."],
        answer: 0,
        explanation: "Art. 5º, LXII da CF/88: a prisão e o local de custódia devem ser imediatamente comunicados ao juiz e à família ou pessoa indicada pelo preso."
    },
    {
        materia: "Constitucional",
        subject: "Direito Constitucional",
        text: "17. O preso tem direito à identificação dos responsáveis por sua prisão ou por seu:",
        options: ["A) Transporte comunitário.", "B) Interrogatório policial.", "C) Julgamento administrativo.", "D) Acompanhamento familiar."],
        answer: 1,
        explanation: "Garantia fundamental inscrita no Art. 5º, LXIV da CF/88: identificação dos policiais responsáveis pela prisão e interrogatório."
    },
    {
        materia: "Constitucional",
        subject: "Direito Constitucional",
        text: "18. Conforme a CF/88, a segurança pública é exercida para a preservação da ordem pública e da incolumidade das pessoas e do:",
        options: ["A) Lucro comercial.", "B) Patrimônio.", "C) Sistema partidário.", "D) Orçamento estadual."],
        answer: 1,
        explanation: "Art. 144, *caput* da CF/88: A segurança pública visa a preservação da ordem pública e da incolumidade das pessoas e do patrimônio."
    },
    {
        materia: "Constitucional",
        subject: "Direito Constitucional",
        text: "19. A Ação Popular permite a qualquer cidadão pleitear a anulação de ato lesivo ao patrimônio público, à moralidade, ao meio ambiente e ao:",
        options: ["A) Patrimônio histórico e cultural.", "B) Mercado imobiliário privado.", "C) Sistema bancário.", "D) Plano de cargos interno."],
        answer: 0,
        explanation: "A Ação Popular (Art. 5º, LXXIII) protege o patrimônio público, a moralidade administrativa, o meio ambiente e o patrimônio histórico e cultural."
    },
    {
        materia: "Constitucional",
        subject: "Direito Constitucional",
        text: "20. O alistamento eleitoral e o voto são facultativos para os analfabetos, maiores de 70 anos e para os jovens entre:",
        options: ["A) 12 e 16 anos.", "B) 14 e 18 anos.", "C) 16 e 18 anos.", "D) 15 e 17 anos."],
        answer: 2,
        explanation: "O voto é facultativo para os analfabetos, para os maiores de 70 anos e para os jovens com idade entre 16 e 18 anos (Art. 14, § 1º, II da CF/88)."
    },

    // DIREITO ADMINISTRATIVO (21 a 40)
    {
        materia: "Administrativo",
        subject: "Direito Administrativo",
        text: "21. O acrônimo LIMPE sintetiza os princípios expressos no Art. 37 da CF. A letra 'M' refere-se ao princípio da:",
        options: ["A) Moderação.", "B) Moralidade.", "C) Motivação.", "D) Manutenção."],
        answer: 1,
        explanation: "L-I-M-P-E representa: Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência (Art. 37, *caput* da CF/88)."
    },
    {
        materia: "Administrativo",
        subject: "Direito Administrativo",
        text: "22. O princípio pelo qual a Administração deve agir visando o interesse público sem favorecer pessoas específicas é o da:",
        options: ["A) Legalidade.", "B) Impessoalidade.", "C) Eficiência.", "D) Publicidade."],
        answer: 1,
        explanation: "A Impessoalidade veda favoritismos ou perseguições, exigindo atuação neutra e focada estritamente no interesse público."
    },
    {
        materia: "Administrativo",
        subject: "Direito Administrativo",
        text: "23. O ato administrativo que pode ser revogado por razões de conveniência e oportunidade é o:",
        options: ["A) Vinculado.", "B) Discricionário.", "C) Inexistente.", "D) Nulo."],
        answer: 1,
        explanation: "Atos discricionários possuem margem de escolha (mérito administrativo), podendo ser revogados por conveniência e oportunidade."
    },
    {
        materia: "Administrativo",
        subject: "Direito Administrativo",
        text: "24. A anulação de um ato administrativo ocorre quando ele apresenta vício de:",
        options: ["A) Conveniência.", "B) Ilegalidade.", "C) Oportunidade.", "D) Mérito puro."],
        answer: 1,
        explanation: "Atos ilegais ou ilegítimos devem ser ANULADOS (pela Administração ou pelo Judiciário). A revogação aplica-se a atos legais por razões de mérito."
    },
    {
        materia: "Administrativo",
        subject: "Direito Administrativo",
        text: "25. Os bens públicos destinados à execução de serviços e sedes administrativas (ex.: sede da Guarda) são bens:",
        options: ["A) De uso comum do povo.", "B) De uso especial.", "C) Dominicais.", "D) Privados comunitários."],
        answer: 1,
        explanation: "Bens de uso especial são aqueles afetados e destinados a serviços da Administração ou sedes de órgãos públicos (Art. 99, II do CC)."
    },
    {
        materia: "Administrativo",
        subject: "Direito Administrativo",
        text: "26. As praças, ruas, mares e rios públicos são bens classificados como:",
        options: ["A) Bens de uso comum do povo.", "B) Bens dominicais.", "C) Bens de uso especial.", "D) Bens empresariais."],
        answer: 0,
        explanation: "Bens de uso comum do povo podem ser utilizados por qualquer cidadão em igualdade de condições (ruas, praças, praias, mares)."
    },
    {
        materia: "Administrativo",
        subject: "Direito Administrativo",
        text: "27. Os bens públicos dominicais constituem o patrimônio disponível do Estado. Sobre eles é correto afirmar que:",
        options: ["A) Podem ser alienados nos termos da lei.", "B) Podem ser adquiridos por usucapião.", "C) São insuscetíveis de valor econômico.", "D) Têm uso irrestrito sem controle."],
        answer: 0,
        explanation: "Bens dominicais não possuem destinação pública específica (desafetados) e formam o patrimônio alienável do Estado conforme os requisitos legais."
    },
    {
        materia: "Administrativo",
        subject: "Direito Administrativo",
        text: "28. Os bens públicos são imprescritíveis, o que significa que:",
        options: ["A) Não podem ser penhorados.", "B) Não estão sujeitos a usucapião.", "C) Não podem ser destruídos.", "D) Não exigem manutenção."],
        answer: 1,
        explanation: "A imprescritibilidade dos bens públicos impede que particulares os adquiram por meio de usucapião (Súmula 340 do STF e Art. 183, § 3º da CF/88)."
    },
    {
        materia: "Administrativo",
        subject: "Direito Administrativo",
        text: "29. A prerrogativa do Poder Público de rever seus próprios atos, anulando os ilegais, fundamenta-se no princípio da:",
        options: ["A) Autotutela.", "B) Razoabilidade.", "C) Continuidade do serviço.", "D) Hierarquia estrita."],
        answer: 0,
        explanation: "Súmula 473 do STF: Pela autotutela, a Administração anula seus atos ilegais e revoga os inconvenientes sem precisar recorrer ao Judiciário."
    },
    {
        materia: "Administrativo",
        subject: "Direito Administrativo",
        text: "30. Na Lei de Licitações (Lei 8.666/93), a modalidade para alienação de bens móveis inservíveis ou apreendidos é o:",
        options: ["A) Convite.", "B) Leilão.", "C) Concurso.", "D) Pregão."],
        answer: 1,
        explanation: "O Leilão é a modalidade própria para alienação de bens móveis inservíveis para a administração ou produtos apreendidos."
    },
    {
        materia: "Administrativo",
        subject: "Direito Administrativo",
        text: "31. A modalidade de licitação para escolha de trabalho técnico, científico ou artístico mediante prêmio é o:",
        options: ["A) Concurso.", "B) Leilão.", "C) Convite.", "D) Tomada de Preços."],
        answer: 0,
        explanation: "O Concurso (licitação) destina-se à seleção de trabalhos técnicos, científicos ou artísticos, concedendo prêmios ou remuneração aos vencedores."
    },
    {
        materia: "Administrativo",
        subject: "Direito Administrativo",
        text: "32. São atributos do ato administrativo:",
        options: ["A) Presunção de legitimidade, imperatividade e autoexecutoriedade.", "B) Oportunidade, lucratividade e conveniência.", "C) Irrevogabilidade, gratuidade e sigilo.", "D) Informalidade e discricionariedade absoluta."],
        answer: 0,
        explanation: "Atributos dos atos administrativos (P-A-T-I): Presunção de legitimidade/veracidade, Autoexecutoriedade, Tipicidade e Imperatividade."
    },
    {
        materia: "Administrativo",
        subject: "Direito Administrativo",
        text: "33. A autoexecutoriedade do ato administrativo permite que a Administração:",
        options: ["A) Crie leis sem o Legislativo.", "B) Execute diretamente suas decisões sem prévia autorização judicial.", "C) Cobre impostos sem lei.", "D) Anule contratos vigentes sem motivo."],
        answer: 1,
        explanation: "A autoexecutoriedade autoriza a Administração a executar de forma direta suas decisões, usando a força pública se necessário, sem ordem do juiz."
    },
    {
        materia: "Administrativo",
        subject: "Direito Administrativo",
        text: "34. O ato administrativo eivado de vício insanável de legalidade deve ser:",
        options: ["A) Revogado com efeito retroativo.", "B) Anulado, produzindo efeitos ex tunc.", "C) Mantido por conveniência.", "D) Suspenso em período eleitoral."],
        answer: 1,
        explanation: "Atos ilegais são ANULADOS e produzem efeitos *ex tunc* (retroagem desde a origem para apagar os efeitos do ato nulo)."
    },
    {
        materia: "Administrativo",
        subject: "Direito Administrativo",
        text: "35. O princípio da Publicidade admite exceção em casos de:",
        options: ["A) Interesses comerciais do prefeito.", "B) Segurança da sociedade e do Estado e sigilo protegido por lei.", "C) Atos de rotina de patrulhamento.", "D) Processos licitatórios concluídos."],
        answer: 1,
        explanation: "Art. 5º, LX da CF/88: A lei só poderá restringir a publicidade dos atos quando a defesa da intimidade ou o interesse social e a segurança assim o exigirem."
    },
    {
        materia: "Administrativo",
        subject: "Direito Administrativo",
        text: "36. O poder de polícia administrativa caracteriza-se pela faculdade de limitar direitos individuais em razão do:",
        options: ["A) Lucro das autarquias.", "B) Interesse público geral.", "C) Desejo privado da autoridade.", "D) Valor de taxas arrecadadas."],
        answer: 1,
        explanation: "O Poder de Polícia condiciona e limita o exercício de direitos e atividades individuais em prol do bem-estar e interesse coletivo."
    },
    {
        materia: "Administrativo",
        subject: "Direito Administrativo",
        text: "37. São elementos ou requisitos do ato administrativo:",
        options: ["A) Competência, finalidade, forma, motivo e objeto.", "B) Lucro, oportunidade, conveniência, agente e foro.", "C) Prazo, sigilo, multa, contrato e atestado.", "D) Vontade privada, custo, taxa e protocolo."], answer: 0,
        explanation: "Elementos essenciais do ato (CO-FI-FO-MO-OB): Competência, Finalidade, Forma, Motivo e Objeto."
    },
    {
        materia: "Administrativo",
        subject: "Direito Administrativo",
        text: "38. A delegação de competência administrativa é VEDADA na edição de:",
        options: ["A) Atos normativos, decisão de recursos e matérias de competência exclusiva.", "B) Ações de patrulhamento de rua.", "C) Atendimento de público em balcão.", "D) Relatórios diários de rotina."],
        answer: 0,
        explanation: "Regra da Lei 9.784/99 (CENORA): Não podem ser delegados: Competência exclusiva, edição de atos NORMAS e decisão de RECURSOS administrativos."
    },
    {
        materia: "Administrativo",
        subject: "Direito Administrativo",
        text: "39. O abuso de poder pode ocorrer sob a forma de excesso de poder ou de:",
        options: ["A) Desvio de finalidade (atuar visando fim diverso do interesse público).", "B) Erro material de digitação.", "C) Atraso no horário de serviço.", "D) Falta de viatura operacional."],
        answer: 0,
        explanation: "Abuso de poder desdobra-se em: Excesso de Poder (vício na competência) ou Desvio de Finalidade/Poder (vício na finalidade pública)."
    },
    {
        materia: "Administrativo",
        subject: "Direito Administrativo",
        text: "40. A responsabilidade civil do Estado para atos comissivos de seus agentes é objetiva, baseada no:",
        options: ["A) Risco Administrativo (independe de dolo ou culpa do agente).", "B) Dolo exclusivo da vítima.", "C) Risco Integral sem excludentes.", "D) Culpa subjetiva comprovada."],
        answer: 0,
        explanation: "Art. 37, § 6º da CF/88 adota a Teoria do Risco Administrativo: o Estado responde objetivamente pelos danos que seus agentes causarem a terceiros."
    },

    // LEGISLAÇÃO DA GUARDA MUNICIPAL - LEI 13.022/2014 (41 a 60)
    {
        materia: "LegislacaoGCM",
        subject: "Legislação da Guarda",
        text: "41. Segundo a Lei nº 13.022/2014, a Guarda Municipal é uma instituição de caráter predominantemente:",
        options: ["A) Militar e ostensivo.", "B) Civil, uniformizada e armada.", "C) Auxiliar e reservista das Forças Armadas.", "D) Privado sob regência trabalhista."],
        answer: 1,
        explanation: "Art. 2º da Lei 13.022/2014: As Guardas Municipais são instituições de caráter civil, uniformizadas e armadas conforme previsto em lei."
    },
    {
        materia: "LegislacaoGCM",
        subject: "Legislação da Guarda",
        text: "42. Constitui princípio mínimo de atuação da Guarda Municipal, nos termos do Art. 3º da Lei nº 13.022/2014:",
        options: ["A) Patrulhamento repressivo permanente.", "B) Uso progressivo da força.", "C) Investigação criminal de homicídios.", "D) Cumprimento de ordens militares."],
        answer: 1,
        explanation: "São princípios mínimos (Art. 3º): proteção de direitos humanos, preservação da vida, patrulhamento preventivo, compromisso com a evolução social e uso progressivo da força."
    },
    {
        materia: "LegislacaoGCM",
        subject: "Legislação da Guarda",
        text: "43. É competência geral das Guardas Municipais a proteção de bens, serviços, logradouros públicos municipais e:",
        options: ["A) Instalações do Município.", "B) Presídios estaduais.", "C) Rodovias federais e estaduais.", "D) Fronteiras nacionais marítimas."],
        answer: 0,
        explanation: "Art. 4º da Lei 13.022/14: Competência geral é a proteção de bens, serviços, logradouros públicos municipais e instalações do Município."
    },
    {
        materia: "LegislacaoGCM",
        subject: "Legislação da Guarda",
        text: "44. O controle INTERNO do funcionamento da Guarda Municipal deve ser exercido por órgão próprio denominado:",
        options: ["A) Ouvidoria.", "B) Corregedoria.", "C) Conselho Tutelar.", "D) Tribunal de Contas."],
        answer: 1,
        explanation: "Art. 13, I da Lei 13.022/14: O controle interno é realizado pela CORREGEDORIA (para apurar infrações disciplinares da corporação)."
    },
    {
        materia: "LegislacaoGCM",
        subject: "Legislação da Guarda",
        text: "45. O controle EXTERNO para receber denúncias, reclamações e elogios é exercido por:",
        options: ["A) Corregedoria.", "B) Ouvidoria.", "C) Comando Militar de Área.", "D) Polícia Civil."],
        answer: 1,
        explanation: "Art. 13, II da Lei 13.022/14: O controle externo é feito pela OUVIDORIA, independente para receber denúncias, elogios e sugestões da população."
    },
    {
        materia: "LegislacaoGCM",
        subject: "Legislação da Guarda",
        text: "46. É VEDADO às Guardas Municipais a utilização de denominação idêntica à das:",
        options: ["A) Forças Armadas.", "B) Secretarias de obras públicas.", "C) Autarquias municipais.", "D) Defesas civis locais."],
        answer: 0,
        explanation: "Art. 19, parágrafo único da Lei 13.022/14: É vedada aos Guardas a utilização de denominação idêntica à das Forças Armadas."
    },
    {
        materia: "LegislacaoGCM",
        subject: "Legislação da Guarda",
        text: "47. A estrutura hierárquica da Guarda Municipal NÃO pode, em hipótese alguma, ter subordinação a:",
        options: ["A) Prefeitos Municipais.", "B) Comandos militares.", "C) Secretários Municipais de Segurança.", "D) Inspetores da própria carreira."],
        answer: 1,
        explanation: "Art. 14 da Lei 13.022/14: A estrutura hierárquica da Guarda Municipal não pode ter sujeição ou subordinação a comando militar."
    },
    {
        materia: "LegislacaoGCM",
        subject: "Legislação da Guarda",
        text: "48. Requisito básico para investidura em cargo na Guarda Municipal, conforme a Lei nº 13.022/2014:",
        options: ["A) Idade mínima de 21 anos.", "B) Nível médio completo de escolaridade.", "C) Ter servido às Forças Armadas.", "D) CNH categoria E."],
        answer: 1,
        explanation: "Art. 10 da Lei 13.022/14 exige escolaridade de ensino médio completo entre os requisitos básicos de concurso público."
    },
    {
        materia: "LegislacaoGCM",
        subject: "Legislação da Guarda",
        text: "49. As Guardas Municipais utilizarão uniforme e equipamentos padronizados, preferencialmente na cor:",
        options: ["A) Azul-marinho.", "B) Verde-oliva.", "C) Preta fosca.", "D) Cinza-camuflada."],
        answer: 0,
        explanation: "Art. 19 da Lei 13.022/14: As Guardas Municipais utilizarão uniforme padronizado, preferencialmente na cor azul-marinho."
    },
    {
        materia: "LegislacaoGCM",
        subject: "Legislação da Guarda",
        text: "50. O documento de porte de arma de fogo dos integrantes das Guardas Municipais é expedido pela:",
        options: ["A) Ministério da Defesa.", "B) Polícia Federal.", "C) Câmara de Vereadores.", "D) Polícia Militar Estadual."],
        answer: 1,
        explanation: "Art. 16 da Lei 13.022/14: O porte de arma aos guardas municipais é concedido mediante autorização da Polícia Federal (SINARM)."
    },
    {
        materia: "LegislacaoGCM",
        subject: "Legislação da Guarda",
        text: "51. Em Municípios com mais de 50.000 e menos de 500.000 habitantes, o limite do efetivo da Guarda é de até:",
        options: ["A) 0,4% da população.", "B) 0,3% da população.", "C) 0,2% da população.", "D) 1,0% da população."],
        answer: 1,
        explanation: "Art. 7º, II da Lei 13.022/14: Limite de 0,3% da população em municípios com mais de 50.000 e menos de 500.000 habitantes (como Maricá)."
    },
    {
        materia: "LegislacaoGCM",
        subject: "Legislação da Guarda",
        text: "52. Em relação aos cargos de comando da Guarda Municipal, o Estatuto exige que sejam providos por:",
        options: ["A) Oficiais da Polícia Militar.", "B) Servidores de carreira do quadro efetivo da corporação.", "C) Indicação política externa sem concurso.", "D) Agentes da Polícia Civil requisitados."],
        answer: 1,
        explanation: "Art. 15 da Lei 13.022/14: Os cargos em comissão de comando da Guarda Municipal devem ser providos por membros da própria carreira do quadro efetivo."
    },
    {
        materia: "LegislacaoGCM",
        subject: "Legislação da Guarda",
        text: "53. Dentre as competências específicas das Guardas Municipais inclui-se atuar preventivamente para a proteção da população e para o desenvolvimento de:",
        options: ["A) Patrulhamento de divisas de Estados.", "B) Ações preventivas de segurança escolar e comunitária.", "C) Inquéritos de polícia judiciária militar.", "D) Julgamentos de infrações penais."],
        answer: 1,
        explanation: "Art. 5º da Lei 13.022/14 estabelece a atuação comunitária, preventiva e a proteção do ambiente escolar como competência específica."
    },
    {
        materia: "LegislacaoGCM",
        subject: "Legislação da Guarda",
        text: "54. É competência específica da Guarda colaborar com órgãos de trânsito estaduais ou municipais para exercer atribuições de trânsito mediante:",
        options: ["A) Ordem verbal do Prefeito.", "B) Conveniamento celebrado na forma da lei.", "C) Mandado judicial específico.", "D) Autorização do Exército."],
        answer: 1,
        explanation: "Art. 5º, VI da Lei 13.022/14: A fiscalização e fiscalização de trânsito dependem de convênio celebrado com o órgão competente de trânsito."
    },
    {
        materia: "LegislacaoGCM",
        subject: "Legislação da Guarda",
        text: "55. As Guardas Municipais podem encaminhar ao delegado de polícia, diante de flagrante delito, o autor da infração, preservando o local do crime quando:",
        options: ["A) For solicitado pela família.", "B) Possível e necessário.", "C) Exclusivamente em horário noturno.", "D) Autorizado pela Câmara."],
        answer: 1,
        explanation: "Art. 5º, XIV da Lei 13.022/14: Encaminhar ao delegado de polícia, em flagrante delito, o autor do crime, preservando o local sempre que possível e necessário."
    },
    {
        materia: "LegislacaoGCM",
        subject: "Legislação da Guarda",
        text: "56. A agência reguladora autorizará código de rádio próprio para comunicação das Guardas com frequência destinada à:",
        options: ["A) Segurança pública.", "B) Rádio comunitária comercial.", "C) Redes privadas de uso commercial.", "D) Defesa aérea nacional."],
        answer: 0,
        explanation: "Art. 17 da Lei 13.022/14: É garantida às Guardas a utilização de canal de rádio próprio com frequência destinada à segurança pública (ANATEL)."
    },
    {
        materia: "LegislacaoGCM",
        subject: "Legislação da Guarda",
        text: "57. No exercício de suas atribuições, o guarda municipal pode utilizar recursos tecnológicos de monitoramento para:",
        options: ["A) Proteção do patrimônio e da incolumidade das pessoas.", "B) Divulgação pública de imagens sem autorização.", "C) Monitoramento partidário.", "D) Cobrança de impostos."],
        answer: 0,
        explanation: "Art. 5º, XVI da Lei 13.022/14: Uso de sistemas de videomonitoramento voltado à proteção do patrimônio e segurança da população."
    },
    {
        materia: "LegislacaoGCM",
        subject: "Legislação da Guarda",
        text: "58. No Regulamento Disciplinar da Guarda Municipal é VEDADA a fixação de sanções de natureza:",
        options: ["A) Advertência verbal escrita.", "B) Prisão disciplinar ou punição privativa de liberdade administrativa.", "C) Suspensão temporária.", "D) Demissão por falta grave."],
        answer: 1,
        explanation: "Art. 18 da Lei 13.022/14: É proibida qualquer sanção disciplinar de natureza militar/privativa de liberdade no regulamento disciplinar da Guarda."
    },
    {
        materia: "LegislacaoGCM",
        subject: "Legislação da Guarda",
        text: "59. O curso de formação do Guarda Municipal deve seguir matriz curricular compatível com as diretrizes do:",
        options: ["A) Ministério da Justiça e Segurança Pública.", "B) Ministério da Educação unicamente.", "C) Comando da Marinha.", "D) Conselho de Arquitetura."],
        answer: 0,
        explanation: "Art. 12 da Lei 13.022/14: A matriz curricular do curso de formação deve ser alinhada à Matriz Curricular Nacional do Ministério da Justiça (SENASP)."
    },
    {
        materia: "LegislacaoGCM",
        subject: "Legislação da Guarda",
        text: "60. Diante de calamidade pública ou grande evento no Município, a Guarda Municipal atua de forma integrada com a:",
        options: ["A) Defesa Civil e demais órgãos de segurança.", "B) Apenas empresas privadas de vigilância.", "C) Junta Comercial Estadual.", "D) Receita Federal."],
        answer: 0,
        explanation: "Art. 5º, VII e XII da Lei 13.022/14: Integração com a Defesa Civil em desastres e atuação conjunta com outros órgãos de segurança em eventos."
    },

    // DIREITO PENAL, PROCESSUAL PENAL E LEGISLAÇÃO ESPECIAL (61 a 80)
    {
        materia: "PenalEspecial",
        subject: "Direito Penal & Especial",
        text: "61. Nos termos do Código Penal (Art. 147), o crime de Ameaça é de Ação Penal Pública:",
        options: ["A) Incondicionada.", "B) Condicionada à representação do ofendido.", "C) Privada exclusivamente.", "D) Condicionada à requisição do Prefeito."],
        answer: 1,
        explanation: "Art. 147, parágrafo único do CP: O crime de ameaça somente se procede mediante representação da vítima."
    },
    {
        materia: "PenalEspecial",
        subject: "Direito Penal & Especial",
        text: "62. O prazo decadencial para que o ofendido exerça o direito de representação na Ação Penal Pública Condicionada é de:",
        options: ["A) 30 dias do fato.", "B) 6 meses contados do dia em que vier a saber quem é o autor do crime.", "C) 1 ano da abertura do inquérito.", "D) 3 meses do registro."],
        answer: 1,
        explanation: "Art. 38 do CPP e Art. 103 do CP: O prazo decadencial para representação é de 6 meses a contar do conhecimento da autoria do fato."
    },
    {
        materia: "PenalEspecial",
        subject: "Direito Penal & Especial",
        text: "63. No CTB (Lei 9.503/97), deixar o condutor de prestar socorro à vítima de acidente quando possível fazê-lo é:",
        options: ["A) Infração administrativa leve apenas.", "B) Crime de trânsito (Art. 304 do CTB).", "C) Contravenção penal de perturbação.", "D) Mero ilícito civil sem sanção penal."],
        answer: 1,
        explanation: "Deixar de prestar socorro no acidente com vítima, podendo fazê-lo sem risco pessoal, é crime de trânsito previsto no Art. 304 do CTB."
    },
    {
        materia: "PenalEspecial",
        subject: "Direito Penal & Especial",
        text: "64. Segundo a Lei de Crimes Ambientais (Lei nº 9.605/1998), as penas aplicáveis às pessoas jurídicas incluem:",
        options: ["A) Prisão do conselho fiscal.", "B) Multa, penas restritivas de direitos e prestação de serviços à comunidade.", "C) Cassação de direitos políticos de sócios.", "D) Prisão disciplinar obrigatória."],
        answer: 1,
        explanation: "Art. 21 da Lei 9.605/98: Às pessoas jurídicas aplicam-se isolada ou cumulativamente as penas de multa, restritivas de direitos e prestação de serviços."
    },
    {
        materia: "PenalEspecial",
        subject: "Direito Penal & Especial",
        text: "65. Na apreensão de produtos ou fauna de infração ambiental, a lei prevê que os produtos perecíveis serão:",
        options: ["A) Vendidos sem laudo imediatamente.", "B) Avaliados e doados a instituições científicas, hospitalares ou assistenciais.", "C) Sempre devolvidos ao infrator.", "D) Incinerados sem qualquer registro."],
        answer: 1,
        explanation: "Art. 25, § 1º da Lei 9.605/98: Produtos perecíveis ou animais apreendidos serão doados a instituições de caridade ou de pesquisa."
    },
    {
        materia: "PenalEspecial",
        subject: "Direito Penal & Especial",
        text: "66. Exigir, para si ou para outrem, em razão da função pública, vantagem indevida configura o crime de:",
        options: ["A) Concussão (Art. 316 do CP).", "B) Corrupção passiva.", "C) Prevaricação.", "D) Peculato culposo."],
        answer: 0,
        explanation: "O verbo EXIGIR caracterizar categoricamente o crime de Concussão (Art. 316 do CP)."
    },
    {
        materia: "PenalEspecial",
        subject: "Direito Penal & Especial",
        text: "67. Solicitar ou receber, para si ou para outrem, em razão da função, vantagem indevida é o crime de:",
        options: ["A) Concussão.", "B) Corrupção passiva (Art. 317 do CP).", "C) Prevaricação.", "D) Advocacia administrativa."],
        answer: 1,
        explanation: "Os verbos SOLICITAR, RECEBER ou ACEITAR PROMESSA caracterizam o crime de Corrupção Passiva (Art. 317 do CP)."
    },
    {
        materia: "PenalEspecial",
        subject: "Direito Penal & Especial",
        text: "68. Retardar ou deixar de praticar ato de ofício para satisfazer interesse ou sentimento pessoal é crime de:",
        options: ["A) Concussão.", "B) Corrupção ativa.", "C) Prevaricação (Art. 319 do CP).", "D) Condescendência criminosa."],
        answer: 2,
        explanation: "Retardar ou deixar de praticar ato de ofício motivado por interesse ou sentimento PESSOAL é Prevaricação (Art. 319 do CP)."
    },
    {
        materia: "PenalEspecial",
        subject: "Direito Penal & Especial",
        text: "69. Qualquer do povo PODERÁ e as autoridades policiais DEVERÃO prender quem quer que seja encontrado em:",
        options: ["A) Atitude suspeita noturna.", "B) Flagrante delito.", "C) Débito fiscal municipal.", "D) Desobediência administrativa."],
        answer: 1,
        explanation: "Art. 301 do CPP: Flagrante facultativo para qualquer do povo (poderá) e flagrante obrigatório para autoridades e seus agentes (deverão)."
    },
    {
        materia: "PenalEspecial",
        subject: "Direito Penal & Especial",
        text: "70. Considera-se em flagrante delito quem:",
        options: ["A) Está cometendo a infração penal ou acaba de cometê-la.", "B) É apenas citado em redes sociais.", "C) Possui antecedentes criminais antigos.", "D) É parente de investigado."],
        answer: 0,
        explanation: "Art. 302, I e II do CPP: Hipóteses de flagrante próprio (está cometendo a infração ou acaba de cometê-la)."
    },
    {
        materia: "PenalEspecial",
        subject: "Direito Penal & Especial",
        text: "71. O crime de desobediência (Art. 330 do CP) consiste em desobedecer a ordem legal de:",
        options: ["A) Funcionário público.", "B) Empregado de empresa privada.", "C) Síndico de prédio residencial.", "D) Qualquer cidadão eleitor."],
        answer: 0,
        explanation: "Art. 330 do CP: Desobedecer a ordem legal emitida por funcionário público no exercício regular da sua função."
    },
    {
        materia: "PenalEspecial",
        subject: "Direito Penal & Especial",
        text: "72. O crime de desacato (Art. 331 do CP) configura-se quando o agente desacata funcionário público no exercício da função ou:",
        options: ["A) Em razão dela.", "B) Apenas fora do expediente comercial.", "C) Exclusivamente se houver agressão física.", "D) Mediante uso de arma."],
        answer: 0,
        explanation: "Art. 331 do CP: Desacatar funcionário público no exercício da função ou em razão dela para ofender a dignidade da função pública."
    },
    {
        materia: "PenalEspecial",
        subject: "Direito Penal & Especial",
        text: "73. Dirigir veículo automotor sem habilitação gerando perigo de dano é previsto no Art. 309 do CTB como:",
        options: ["A) Mero ilícito administrativo.", "B) Crime de trânsito.", "C) Contravenção penal extinguível.", "D) Falta grave disciplinar."],
        answer: 1,
        explanation: "Art. 309 do CTB: Dirigir sem CNH/PPD ou cassado, gerando PERIGO DE DANO concreto, constitui crime de trânsito."
    },
    {
        materia: "PenalEspecial",
        subject: "Direito Penal & Especial",
        text: "74. O crime de peculato-apropriação (Art. 312 do CP) ocorre quando o funcionário apropria-se de bem móvel que tem a posse em razão do:",
        options: ["A) Seu cargo ou função pública.", "B) Seu contrato bancário privado.", "C) Seu histórico eleitoral.", "D) Seu grau de parentesco com a vítima."],
        answer: 0,
        explanation: "Art. 312, *caput* do CP: Apropriar-se o funcionário público de dinheiro ou bem móvel de que tem a posse em razão do cargo."
    },
    {
        materia: "PenalEspecial",
        subject: "Direito Penal & Especial",
        text: "75. Submeter o preso a constrangimento não autorizado em lei configura crime de abuso de autoridade conforme a:",
        options: ["A) Lei Federal nº 13.869/2019.", "B) Lei de Contravenções Penais.", "C) Consolidação das Leis do Trabalho.", "D) Lei de Licitações Pública."],
        answer: 0,
        explanation: "A Nova Lei de Abuso de Autoridade (Lei 13.869/2019) pune condutas abusivas praticadas por agentes públicos no exercício de suas funções."
    },
    {
        materia: "PenalEspecial",
        subject: "Direito Penal & Especial",
        text: "76. A lesão corporal culposa na direção de veículo automotor (Art. 303 do CTB) exige, via de regra, para ação penal:",
        options: ["A) Representação da vítima.", "B) Prisão preventiva imediata sem fiança.", "C) Julgamento por júri popular.", "D) Queixa-crime privada."],
        answer: 0,
        explanation: "Ação Penal Pública Condicionada à Representação da vítima (Art. 88 da Lei 9.099/95 c/c CTB), salvo exceções de embriaguez ou rachas."
    },
    {
        materia: "PenalEspecial",
        subject: "Direito Penal & Especial",
        text: "77. Inovar artificiosamente o estado de lugar, de coisa ou de pessoa para induzir o perito a erro configura:",
        options: ["A) Fraude processual (Art. 347 do CP).", "B) Falso testemunho.", "C) Prevaricação.", "D) Usurpação de função."],
        answer: 0,
        explanation: "Art. 347 do CP: Inovar o local de um crime ou vestígios para enganar o perito ou o juiz caracteriza o crime de Fraude Processual."
    },
    {
        materia: "PenalEspecial",
        subject: "Direito Penal & Especial",
        text: "78. Fazer afirmação falsa ou calar a verdade como testemunha ou perito em inquérito ou processo é crime de:",
        options: ["A) Falso testemunho ou falsa perícia (Art. 342 do CP).", "B) Denunciação caluniosa.", "C) Coação no curso do processo.", "D) Desobediência simples."],
        answer: 0,
        explanation: "Art. 342 do CP: Fazer afirmação falsa, negar ou calar a verdade como testemunha, perito, tradutor ou intérprete em inquérito ou processo."
    },
    {
        materia: "PenalEspecial",
        subject: "Direito Penal & Especial",
        text: "79. Usar de violência ou grave ameaça para favorecer interesse próprio contra pessoa que funciona em processo é:",
        options: ["A) Coação no curso do processo (Art. 344 do CP).", "B) Resistência passiva.", "C) Ameaça comum.", "D) Concussão."],
        answer: 0,
        explanation: "Art. 344 do CP: Coação no curso do processo é usar violência ou grave ameaça para favorecer interesse próprio contra testemunha, perito ou parte."
    },
    {
        materia: "PenalEspecial",
        subject: "Direito Penal & Especial",
        text: "80. Opor-se à execução de ato legal mediante violência ou ameaça a funcionário competente configura o crime de:",
        options: ["A) Resistência (Art. 329 do CP).", "B) Desobediência.", "C) Desacato.", "D) Lesão corporal leve."],
        answer: 0,
        explanation: "Art. 329 do CP: Opor-se à execução de ato legal, mediante VIOLÊNCIA ou AMEAÇA a funcionário ou quem lhe preste auxílio, configura Resistência."
    },

    // DIREITOS HUMANOS E LEGISLAÇÃO SOCIAL (81 a 100)
    {
        materia: "DireitosHumanos",
        subject: "Direitos Humanos",
        text: "81. A Declaração Universal dos Direitos Humanos (DUDH) estabelece que todos os seres humanos nascem livres e iguais em:",
        options: ["A) Dignidade e direitos.", "B) Renda e patrimônio.", "C) Cargo público e escolaridade.", "D) Nacionalidade e religião."],
        answer: 0,
        explanation: "Artigo 1º da DUDH: Todos os seres humanos nascem livres e iguais em dignidade e direitos."
    },
    {
        materia: "DireitosHumanos",
        subject: "Direitos Humanos",
        text: "82. Segundo a DUDH, a escravidão e o tráfico de escravos serão proibidos em:",
        options: ["A) Todas as suas formas.", "B) Apenas durante tempos de paz.", "C) Salvo se houver sentença penal.", "D) Apenas para menores."],
        answer: 0,
        explanation: "Artigo 4º da DUDH: Ninguém será mantido em escravidão ou servidão; a escravidão e o tráfico de escravos serão proibidos em todas as suas formas."
    },
    {
        materia: "DireitosHumanos",
        subject: "Direitos Humanos",
        text: "83. Conforme o Artigo 5º da DUDH, ninguém será submetido a tortura nem a tratamento ou castigo:",
        options: ["A) Cruel, desumano ou degradante.", "B) Exclusivamente pecuniário.", "C) Fixado por autoridade judicial.", "D) De prestação comunitária."],
        answer: 0,
        explanation: "Artigo 5º da DUDH: Ninguém será submetido à tortura nem a tratamento ou castigo cruel, desumano ou degradante."
    },
    {
        materia: "DireitosHumanos",
        subject: "Direitos Humanos",
        text: "84. O Estatuto da Criança e do Adolescente (ECA - Lei 8.069/90) considera criança a pessoa até:",
        options: ["A) 12 anos de idade incompletos.", "B) 14 anos completos.", "C) 10 anos incompletos.", "D) 18 anos de idade."],
        answer: 0,
        explanation: "Art. 2º do ECA: Considera-se criança a pessoa até doze anos de idade incompletos."
    },
    {
        materia: "DireitosHumanos",
        subject: "Direitos Humanos",
        text: "85. Nos termos do ECA, considera-se adolescente a pessoa entre:",
        options: ["A) 12 e 18 anos de idade.", "B) 10 e 16 anos de idade.", "C) 14 e 21 anos de idade.", "D) 16 e 18 anos completos."],
        answer: 0,
        explanation: "Art. 2º do ECA: Considera-se adolescente aquela pessoa entre doze e dezoito anos de idade."
    },
    {
        materia: "DireitosHumanos",
        subject: "Direitos Humanos",
        text: "86. É dever de todos assegurar, com absoluta prioridade, os direitos da criança e do adolescente, expressando o princípio da:",
        options: ["A) Proteção Integral e Absoluta Prioridade.", "B) Responsabilidade exclusiva do Estado.", "C) Subsidiariedade penal.", "D) Prevenção especial restrita."],
        answer: 0,
        explanation: "Doutrina da Proteção Integral expressa no Art. 227 da CF/88 e Art. 4º do ECA, atribuindo absoluta prioridade à família, comunidade e Estado."
    },
    {
        materia: "DireitosHumanos",
        subject: "Direitos Humanos",
        text: "87. As medidas socioeducativas aplicáveis ao adolescente pelo ECA incluem prestação de serviços, semiliberdade e:",
        options: ["A) Internação em estabelecimento educacional.", "B) Prisão disciplinar militar.", "C) Multa com penhora de bens.", "D) Prestação de trabalho forçado."],
        answer: 0,
        explanation: "Art. 112, VI do ECA: A internação em estabelecimento educacional é a medida socioeducativa mais severa aplicável a adolescentes."
    },
    {
        materia: "DireitosHumanos",
        subject: "Direitos Humanos",
        text: "88. A internação provisória do adolescente em ato infracional pode ser determinada pelo juiz pelo prazo máximo de:",
        options: ["A) 45 dias.", "B) 30 dias.", "C) 90 dias.", "D) 180 dias."],
        answer: 0,
        explanation: "Art. 108 do ECA: O prazo máximo e improrrogável para internação provisória antes da sentença é de 45 dias."
    },
    {
        materia: "DireitosHumanos",
        subject: "Direitos Humanos",
        text: "89. Nenhum menor de 18 anos poderá ser apreendido senão em flagrante de ato infracional ou por:",
        options: ["A) Ordem escrita e fundamentada da autoridade judiciária competente.", "B) Solicitação verbal de qualquer policial.", "C) Requerimento de vizinhos.", "D) Decisão do Conselho Tutelar."],
        answer: 0,
        explanation: "Art. 106 do ECA: A apreensão só ocorre em flagrante de ato infracional ou por ordem judicial escrita e fundamentada."
    },
    {
        materia: "DireitosHumanos",
        subject: "Direitos Humanos",
        text: "90. A Lei Brasileira de Inclusão da Pessoa com Deficiência (Lei nº 13.146/2015) destina-se a promover a sua:",
        options: ["A) Inclusão social e cidadania.", "B) Segregação em instituições fechadas.", "C) Tutela permanente obrigatória.", "D) Isenção irrestrita de penalidades."],
        answer: 0,
        explanation: "Art. 1º da Lei 13.146/2015 (Estatuto da Pessoa com Deficiência): Garantir e promover o exercício dos direitos em condições de igualdade, inclusão e cidadania."
    },
    {
        materia: "DireitosHumanos",
        subject: "Direitos Humanos",
        text: "91. Considera-se pessoa com deficiência aquela que tem impedimento de longo prazo em interação com barreiras em:",
        options: ["A) Igualdade de condições com as demais pessoas.", "B) Caráter secundário apenas.", "C) Dependência exclusiva de terceiros.", "D) Regime de curatela obrigatória."],
        answer: 0,
        explanation: "Art. 2º da Lei 13.146/2015 adota o modelo biopsicossocial de deficiência baseado na igualdade de oportunidades com as demais pessoas."
    },
    {
        materia: "DireitosHumanos",
        subject: "Direitos Humanos",
        text: "92. É dever de todos comunicar à autoridade competente qualquer forma de violação aos direitos da pessoa com deficiência, via:",
        options: ["A) Proteção e denúncia comunitária.", "B) Sigilo obrigatório público.", "C) Assistência privada remunerada.", "D) Notificação fiscal."],
        answer: 0,
        explanation: "Art. 7º da Lei 13.146/2015 (LBI): É dever de todos comunicar à autoridade competente qualquer forma de ameaça ou violação aos direitos da pessoa com deficiência."
    },
    {
        materia: "DireitosHumanos",
        subject: "Direitos Humanos",
        text: "93. Todo ser humano tem direito a um padrão de vida capaz de assegurar saúde e bem-estar. Esse trecho integra o Artigo 25 da:",
        options: ["A) Declaração Universal dos Direitos Humanos.", "B) Consolidação das Leis do Trabalho.", "C) Lei de Licitações.", "D) Lei de Improbidade."],
        answer: 0,
        explanation: "Artigo 25 da DUDH: Todo ser humano tem direito a um padrão de vida capaz de assegurar-lhe, e a sua família, saúde e bem-estar, vestuário, habitação e cuidados médicos."
    },
    {
        materia: "DireitosHumanos",
        subject: "Direitos Humanos",
        text: "94. Segundo a DUDH, todo ser humano tem direito de deixar qualquer país, inclusive o próprio, e a este:",
        options: ["A) Regressar.", "B) Renunciar sem taxas.", "C) Pedir restituição fiscal.", "D) Doar seu patrimônio."],
        answer: 0,
        explanation: "Artigo 13, item 2 da DUDH: Todo ser humano tem o direito de deixar qualquer país, inclusive o próprio, e a este regressar."
    },
    {
        materia: "DireitosHumanos",
        subject: "Direitos Humanos",
        text: "95. O Conselho Tutelar é composto em cada Município por:",
        options: ["A) 5 membros, escolhidos pela população local para mandato de 4 anos.", "B) 3 membros, nomeados pelo Prefeito por tempo indeterminado.", "C) 10 membros, indicados pela Câmara de Vereadores.", "D) Agentes concursados da Guarda."],
        answer: 0,
        explanation: "Art. 132 do ECA: Em cada Município haverá, no mínimo, 1 Conselho Tutelar composto por 5 membros, escolhidos pela população local para mandato de 4 anos."
    },
    {
        materia: "DireitosHumanos",
        subject: "Direitos Humanos",
        text: "96. Entende-se por ato infracional, para os efeitos do Estatuto da Criança e do Adolescente (ECA), a conduta descrita como:",
        options: ["A) Crime ou contravenção penal.", "B) Apenas falta disciplinar escolar.", "C) Violação exclusiva de regras de trânsito.", "D) Ilícito civil sem reponsabilidade."],
        answer: 0,
        explanation: "Art. 103 do ECA: Considera-se ato infracional a conduta descrita como crime ou contravenção penal praticada por criança ou adolescente."
    },
    {
        materia: "DireitosHumanos",
        subject: "Direitos Humanos",
        text: "97. A DUDH prevê que todo ser humano tem o direito de procurar asilo, SALVO em caso de perseguição motivada por:",
        options: ["A) Crimes de direito comum ou atos contrários aos princípios da ONU.", "B) Divergência de opinião política pacífica.", "C) Exercício da liberdade de imprensa.", "D) Origem étnica."],
        answer: 0,
        explanation: "Artigo 14, item 2 da DUDH: O direito de asilo não pode ser invocado em caso de perseguição legitimamente motivada por crimes de direito comum ou por atos contrários aos objetivos e princípios das Nações Unidas."
    },
    {
        materia: "DireitosHumanos",
        subject: "Direitos Humanos",
        text: "98. Segundo a DUDH, a instrução elemental e fundamental será gratuita e:",
        options: ["A) Obrigatória.", "B) Facultativa.", "C) Paga pelo aluno.", "D) Exclusivamente militar."],
        answer: 0,
        explanation: "Artigo 26, item 1 da DUDH: Todo ser humano tem direito à instrução. A instrução será gratuita, pelo menos nos graus elementares e fundamentais. A instrução elemental será obrigatória."
    },
    {
        materia: "DireitosHumanos",
        subject: "Direitos Humanos",
        text: "99. Nos termos da Lei Brasileira de Inclusão, edifícios e transportes coletivos devem garantir acessibilidade para:",
        options: ["A) Pessoas com deficiência ou com mobilidade reduzida.", "B) Apenas idosos acima de 80 anos.", "C) Exclusivamente cadeirantes.", "D) Somente residentes locais."],
        answer: 0,
        explanation: "Art. 53 da Lei 13.146/2015 (LBI): A acessibilidade é um direito que garante à pessoa com deficiência ou com mobilidade reduzida o uso com segurança e autonomia de espaços, edifícios e transportes."
    },
    {
        materia: "DireitosHumanos",
        subject: "Direitos Humanos",
        text: "100. A Lei do Castigo Físico (Lei nº 13.010/2014) assegura o direito da criança e do adolescente de serem educados sem o uso de:",
        options: ["A) Castigos físicos ou tratamento cruel ou degradante.", "B) Tarefas domésticas educativas.", "C) Limites e horários de estudo.", "D) Diálogo familiar disciplinar."],
        answer: 0,
        explanation: "Art. 18-A do ECA (incluído pela Lei nº 13.010/2014 - Lei Menino Bernardo): A criança e o adolescente têm o direito de ser educados e cuidados sem o uso de castigo físico ou de tratamento cruel ou degradante."
    }
];
