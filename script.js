const translations = {
  pt: {
    meta: {
      title: 'Carlos Augusto | Especialista em Dados & IA',
      description: 'Portfólio de Carlos Augusto: Engenharia de Dados, Analytics & BI, Ciência de Dados e Engenharia de IA conectadas em soluções de negócio.',
    },
    a11y: {
      skip: 'Pular para o conteúdo', home: 'Carlos Augusto, início', menu: 'Abrir menu', nav: 'Navegação principal',
      language: 'Idioma', areas: 'Áreas de atuação', outcomes: 'Resultados em números', systemMap: 'Fluxo integrado de dados e inteligência',
      technologies: 'Tecnologias', close: 'Fechar',
    },
    nav: { home: 'Home', vision: 'Visão', expertise: 'Especialidades', projects: 'Projetos', career: 'Trajetória', about: 'Sobre', resume: 'Currículo' },
    hero: {
      available: 'Aberto a oportunidades e projetos', eyebrow: 'Data & AI Specialist · Belo Horizonte, Brasil',
      title: 'Da fonte ao modelo.<br />Da <em>inteligência</em> à decisão.',
      lead: 'Projeto ecossistemas de dados e IA que conectam pipelines, analytics, machine learning e LLMs para transformar complexidade técnica em decisões confiáveis.',
      ctaProjects: 'Explorar projetos', ctaTalk: 'Vamos conversar', focusLabel: 'Foco', focus: 'Sistemas de decisão inteligentes',
      context: 'contexto, avaliação, ação', pipeline: 'Pipeline ativo',
    },
    outcomes: {
      years: 'anos construindo soluções com dados', manual: 'menos tempo de atualização manual',
      analysis: 'redução no tempo de análise', efficiency: 'ganho de eficiência operacional',
    },
    system: {
      index: '01 — A visão que conecta tudo', title: 'Não são quatro carreiras.<br /><em>É um único sistema.</em>',
      intro: 'Minha especialidade é construir o caminho completo entre uma fonte de dados e uma decisão. Cada disciplina resolve uma parte; o valor aparece quando elas trabalham juntas.',
      note: 'Amplitude com contexto. Profundidade onde importa. ↗', raw: 'DADOS BRUTOS',
      data: 'Ingestão, ETL/ELT, modelagem, qualidade, APIs e cloud.', bi: 'Modelo semântico, KPIs, DAX, visualização e storytelling.',
      science: 'Estatística, diagnóstico, previsão, experimentos e ML.', ai: 'LLMs, RAG, agentes, ferramentas, avaliação e guardrails.',
      outputLabel: 'RESULTADO', output1: 'Decisões mais rápidas', output2: 'Operações automatizadas',
      output3: 'Inteligência com contexto', output4: 'Produtos que evoluem',
    },
    expertise: {
      index: '02 — Especialidades complementares', title: 'Um problema de negócio.<br /><em>Quatro lentes técnicas.</em>',
      intro: 'Eu escolho a abordagem pelo problema — não a ferramenta pelo hype. Às vezes a resposta é um dashboard; às vezes, um pipeline, um modelo preditivo ou um agente.',
      dataDesc: 'Construo a base confiável que analytics e IA precisam para funcionar em produção.', data1: 'Pipelines ETL/ELT e integrações via APIs',
      data2: 'Modelagem relacional e não relacional', data3: 'Cloud, performance, qualidade e rastreabilidade',
      biDesc: 'Traduzo operações complexas em indicadores claros, governados e acionáveis.', bi1: 'Power BI, DAX e modelos semânticos',
      bi2: 'KPIs financeiros, comerciais e operacionais', bi3: 'Storytelling executivo e self-service analytics',
      scienceDesc: 'Uso estatística e machine learning quando a decisão exige previsão, segmentação ou detecção de padrões.',
      science1: 'Análises descritivas, diagnósticas e preditivas', science2: 'Aprendizado supervisionado e não supervisionado',
      science3: 'Validação, métricas e comunicação do modelo',
      aiDesc: 'Transformo modelos generativos em sistemas úteis, avaliáveis e conectados aos dados reais.',
      ai1: 'LLMs, RAG, embeddings e busca vetorial', ai2: 'Agentes, tool use e orquestração', ai3: 'Evals, guardrails, observabilidade e custos',
    },
    ai: {
      index: '03 — IA aplicada sem buzzword', title: 'LLM é uma peça.<br /><em>O produto é o sistema.</em>',
      intro: 'Uma solução de IA confiável depende tanto da qualidade dos dados, da recuperação de contexto e das avaliações quanto do modelo escolhido.',
      diagramLabel: 'ARQUITETURA DE REFERÊNCIA', rag1Title: 'Fontes', rag1: 'Documentos, APIs, bancos',
      rag2Title: 'Preparação', rag2: 'Limpeza, chunking, metadata', rag3: 'Vetores e indexação', rag4: 'Busca híbrida e reranking',
      rag5: 'Contexto, prompt, tools', rag6: 'Qualidade, segurança, custo',
      ragFoot1: '↳ Observabilidade ponta a ponta', ragFoot2: '↳ Feedback humano e melhoria contínua', ragFoot3: '↳ Acesso por perfil e proteção de dados',
      approach1Title: 'Conhecimento atualizado', approach1: 'Quando a resposta precisa usar documentos, métricas e regras que mudam com o negócio.',
      approach2Title: 'Ação com limites', approach2: 'Quando o modelo precisa consultar sistemas, calcular, registrar ou executar uma tarefa auditável.',
      approach3Title: 'Comportamento especializado', approach3: 'Quando exemplos consistentes justificam adaptar estilo, formato ou uma tarefa específica.',
      approach4Title: 'Previsão antes de geração', approach4: 'Quando regressão, classificação ou detecção oferecem mais precisão e explicabilidade.',
    },
    projects: {
      index: '04 — Projetos e resultados', title: 'Complexidade por dentro.<br /><em>Clareza por fora.</em>',
      intro: 'Uma seleção de iniciativas que atravessam finanças, operações, analytics, engenharia e modelos preditivos.', openCase: 'Ver detalhes',
      p1Category: 'BI FINANCEIRO · ANALYTICS', p1Title: 'Inteligência financeira para decisões executivas',
      p1Desc: 'Transformação de dados financeiros complexos em análises de orçamento, fluxo de caixa, rentabilidade e previsões com Power BI, DAX, estatística e machine learning.',
      p2Category: 'AUTOMAÇÃO · BI', p2Title: 'Dashboard financeiro automatizado', p2Desc: 'Power BI integrado a APIs para substituir atualizações manuais e acelerar a disponibilidade dos indicadores.', p2Impact: 'menos tempo de atualização manual',
      p3Category: 'DATA ENGINEERING · BI', p3Title: 'Pipeline de dados para análise executiva', p3Desc: 'Construção de pipelines com Power BI e SQL, padronizando o fluxo de dados para monitoramento contínuo de KPIs.', p3Impact: 'de redução no tempo de análise',
      p4Category: 'DATA SCIENCE · FORECASTING', p4Title: 'Modelo preditivo de vendas', p4Desc: 'Modelo em Python para melhorar previsões e apoiar planejamento comercial com evidência quantitativa.', p4Impact: 'de assertividade nas previsões',
    },
    career: {
      index: '05 — Trajetória profissional', title: 'Da infraestrutura à estratégia.<br /><em>Uma evolução consistente.</em>',
      intro: 'Minha carreira avançou de sistemas e automação para analytics, engenharia e inteligência aplicada — sempre mantendo proximidade com a operação.',
      current: 'FEV 2025 — ATUAL', neooh: 'BI financeiro, modelagem estatística, machine learning, dashboards de KPIs, orçamento, fluxo de caixa e rentabilidade em parceria com times financeiros e executivos.',
      alvoradaDate: 'SET 2023 — FEV 2025', alvorada: 'Análises preditivas e diagnósticas, dashboards conectados a APIs, soluções em Google Cloud e AWS e otimização de consultas para alta performance.',
      rapidonetDate: 'JAN 2023 — SET 2023', softwareRole: 'Analista de Software', rapidonet: 'Automação de dados com SQL Server, integração analítica com sistemas operacionais, algoritmos estatísticos e relatórios personalizados.',
      '123Date': 'MAR 2021 — DEZ 2022', '123Role': 'Técnico de TI → Data Analyst Jr', '123': 'Progressão de sistemas para dados: automações em JavaScript, relatórios com DAX e Power BI, pipelines em SQL e monitoramento executivo de KPIs.',
      premiumDate: 'MAI 2019 — MAR 2021', internRole: 'Estagiário de TI', premium: 'Scripts em Node.js, relatórios avançados em SQL Server e colaboração multidisciplinar para aumentar a eficiência dos processos internos.',
    },
    credentials: {
      index: '06 — Base técnica', title: 'Ferramentas mudam.<br /><em>Fundamentos permanecem.</em>',
      intro: 'Formação em Sistemas de Informação, MBA concluído e aprendizado contínuo em analytics, programação, cloud, machine learning e IA.',
      education: 'FORMAÇÃO', degree: 'Bacharelado em Sistemas de Informação', mba: 'Pós-graduação Lato Sensu — MBA (concluído)',
      languages: 'IDIOMAS', portuguese: 'Português · Nativo', english: 'Inglês · Avançado', spanish: 'Espanhol · Avançado',
      certifications: 'CERTIFICAÇÕES SELECIONADAS', more: 'Também: SQL, R, Estatística, JavaScript, Java, Lógica de Programação e CSS3.',
    },
    about: {
      index: '07 — Sobre mim', title: 'Generalista no alcance.<br /><em>Especialista na entrega.</em>',
      lead: 'Sou Carlos Augusto, especialista em Dados e IA. Minha força não está em acumular títulos, mas em enxergar o sistema inteiro e aprofundar a técnica necessária para cada etapa.',
      p1: 'Comecei próximo da infraestrutura e da operação. Evoluí para automação, análise, engenharia, BI e modelos preditivos. Esse caminho me ensinou que uma solução só é boa quando funciona no mundo real, com dados imperfeitos, regras de negócio e pessoas tomando decisões.',
      p2: 'Hoje conecto essa experiência ao desenvolvimento de soluções com IA generativa, LLMs, RAG e agentes. A tecnologia muda; meu compromisso continua o mesmo: clareza, confiabilidade e impacto mensurável.',
      quote: '“Meu trabalho é reduzir a distância entre o dado disponível e a decisão possível.”', photoAlt: 'Carlos Augusto em ambiente corporativo',
    },
    contact: {
      index: '08 — Próxima conversa', kicker: 'Procurando alguém que conecte dados, IA e negócio?',
      title: 'Vamos construir o<br /><em>próximo sistema.</em>',
      text: 'Estou aberto a oportunidades em Dados e IA, projetos desafiadores e conversas com pessoas que valorizam profundidade técnica e visão de negócio.', email: 'Enviar e-mail',
    },
    footer: {
      statement: 'Engenharia de Dados, Analytics, Ciência de Dados e Engenharia de IA conectadas para criar sistemas de decisão.', top: 'Voltar ao topo ↑',
    },
    modal: { challenge: 'O desafio', approach: 'A abordagem', impact: 'Impacto' },
  },

  en: {
    meta: {
      title: 'Carlos Augusto | Data & AI Specialist',
      description: 'Carlos Augusto portfolio: Data Engineering, Analytics & BI, Data Science and AI Engineering connected into business solutions.',
    },
    a11y: {
      skip: 'Skip to content', home: 'Carlos Augusto, home', menu: 'Open menu', nav: 'Main navigation',
      language: 'Language', areas: 'Areas of expertise', outcomes: 'Results in numbers', systemMap: 'Integrated data and intelligence flow',
      technologies: 'Technologies', close: 'Close',
    },
    nav: { home: 'Home', vision: 'Vision', expertise: 'Expertise', projects: 'Projects', career: 'Career', about: 'About', resume: 'Resume' },
    hero: {
      available: 'Open to opportunities and projects', eyebrow: 'Data & AI Specialist · Belo Horizonte, Brazil',
      title: 'From source to model.<br />From <em>intelligence</em> to decision.',
      lead: 'I design data and AI ecosystems that connect pipelines, analytics, machine learning and LLMs to turn technical complexity into reliable decisions.',
      ctaProjects: 'Explore projects', ctaTalk: 'Let’s talk', focusLabel: 'Focus', focus: 'Intelligent decision systems',
      context: 'context, evaluation, action', pipeline: 'Pipeline live',
    },
    outcomes: {
      years: 'years building data solutions', manual: 'less manual update time', analysis: 'reduction in analysis time', efficiency: 'increase in operational efficiency',
    },
    system: {
      index: '01 — The vision connecting everything', title: 'Not four separate careers.<br /><em>One integrated system.</em>',
      intro: 'My specialty is building the complete path between a data source and a decision. Each discipline solves one part; value emerges when they work together.',
      note: 'Breadth with context. Depth where it matters. ↗', raw: 'RAW DATA',
      data: 'Ingestion, ETL/ELT, modeling, quality, APIs and cloud.', bi: 'Semantic models, KPIs, DAX, visualization and storytelling.',
      science: 'Statistics, diagnostics, forecasting, experiments and ML.', ai: 'LLMs, RAG, agents, tools, evaluation and guardrails.',
      outputLabel: 'OUTCOME', output1: 'Faster decisions', output2: 'Automated operations', output3: 'Context-aware intelligence', output4: 'Products that evolve',
    },
    expertise: {
      index: '02 — Complementary expertise', title: 'One business problem.<br /><em>Four technical lenses.</em>',
      intro: 'I choose the approach based on the problem — not the tool based on hype. Sometimes the answer is a dashboard; sometimes it is a pipeline, a predictive model or an agent.',
      dataDesc: 'I build the reliable foundation analytics and AI need to work in production.', data1: 'ETL/ELT pipelines and API integrations',
      data2: 'Relational and non-relational modeling', data3: 'Cloud, performance, quality and traceability',
      biDesc: 'I translate complex operations into clear, governed and actionable indicators.', bi1: 'Power BI, DAX and semantic models',
      bi2: 'Financial, commercial and operational KPIs', bi3: 'Executive storytelling and self-service analytics',
      scienceDesc: 'I use statistics and machine learning when a decision requires forecasting, segmentation or pattern detection.',
      science1: 'Descriptive, diagnostic and predictive analysis', science2: 'Supervised and unsupervised learning', science3: 'Validation, metrics and model communication',
      aiDesc: 'I turn generative models into useful, measurable systems connected to real-world data.',
      ai1: 'LLMs, RAG, embeddings and vector search', ai2: 'Agents, tool use and orchestration', ai3: 'Evals, guardrails, observability and cost control',
    },
    ai: {
      index: '03 — Applied AI without the buzzwords', title: 'An LLM is one component.<br /><em>The product is the system.</em>',
      intro: 'A reliable AI solution depends as much on data quality, context retrieval and evaluation as it does on the selected model.',
      diagramLabel: 'REFERENCE ARCHITECTURE', rag1Title: 'Sources', rag1: 'Documents, APIs, databases',
      rag2Title: 'Preparation', rag2: 'Cleaning, chunking, metadata', rag3: 'Vectors and indexing', rag4: 'Hybrid search and reranking',
      rag5: 'Context, prompt, tools', rag6: 'Quality, safety, cost',
      ragFoot1: '↳ End-to-end observability', ragFoot2: '↳ Human feedback and continuous improvement', ragFoot3: '↳ Role-based access and data protection',
      approach1Title: 'Up-to-date knowledge', approach1: 'When the answer must use documents, metrics and rules that change with the business.',
      approach2Title: 'Action with boundaries', approach2: 'When the model needs to query systems, calculate, record or execute an auditable task.',
      approach3Title: 'Specialized behavior', approach3: 'When consistent examples justify adapting style, format or a specific task.',
      approach4Title: 'Prediction before generation', approach4: 'When regression, classification or detection provide greater accuracy and explainability.',
    },
    projects: {
      index: '04 — Projects and outcomes', title: 'Complexity inside.<br /><em>Clarity outside.</em>',
      intro: 'A selection of initiatives spanning finance, operations, analytics, engineering and predictive models.', openCase: 'View details',
      p1Category: 'FINANCIAL BI · ANALYTICS', p1Title: 'Financial intelligence for executive decisions',
      p1Desc: 'Transforming complex financial data into budget, cash flow, profitability and forecasting analysis with Power BI, DAX, statistics and machine learning.',
      p2Category: 'AUTOMATION · BI', p2Title: 'Automated financial dashboard', p2Desc: 'Power BI integrated with APIs to replace manual updates and accelerate indicator availability.', p2Impact: 'less manual update time',
      p3Category: 'DATA ENGINEERING · BI', p3Title: 'Data pipeline for executive analysis', p3Desc: 'Building pipelines with Power BI and SQL, standardizing data flow for continuous KPI monitoring.', p3Impact: 'reduction in analysis time',
      p4Category: 'DATA SCIENCE · FORECASTING', p4Title: 'Predictive sales model', p4Desc: 'Python model designed to improve forecasts and support commercial planning with quantitative evidence.', p4Impact: 'improvement in forecast accuracy',
    },
    career: {
      index: '05 — Professional journey', title: 'From infrastructure to strategy.<br /><em>A consistent evolution.</em>',
      intro: 'My career evolved from systems and automation into analytics, engineering and applied intelligence — always remaining close to operations.',
      current: 'FEB 2025 — PRESENT', neooh: 'Financial BI, statistical modeling, machine learning, KPI dashboards, budgeting, cash flow and profitability in partnership with financial and executive teams.',
      alvoradaDate: 'SEP 2023 — FEB 2025', alvorada: 'Predictive and diagnostic analysis, API-connected dashboards, Google Cloud and AWS solutions, and high-performance query optimization.',
      rapidonetDate: 'JAN 2023 — SEP 2023', softwareRole: 'Software Analyst', rapidonet: 'Data automation with SQL Server, analytical integration with operational systems, statistical algorithms and custom reports.',
      '123Date': 'MAR 2021 — DEC 2022', '123Role': 'IT Technician → Junior Data Analyst', '123': 'Progression from systems into data: JavaScript automation, DAX and Power BI reports, SQL pipelines and executive KPI monitoring.',
      premiumDate: 'MAY 2019 — MAR 2021', internRole: 'IT Intern', premium: 'Node.js scripts, advanced SQL Server reports and cross-functional collaboration to improve internal process efficiency.',
    },
    credentials: {
      index: '06 — Technical foundation', title: 'Tools change.<br /><em>Fundamentals remain.</em>',
      intro: 'A degree in Information Systems, a completed MBA and continuous learning in analytics, programming, cloud, machine learning and AI.',
      education: 'EDUCATION', degree: "Bachelor's Degree in Information Systems", mba: 'Postgraduate Specialization — MBA (completed)',
      languages: 'LANGUAGES', portuguese: 'Portuguese · Native', english: 'English · Advanced', spanish: 'Spanish · Advanced',
      certifications: 'SELECTED CERTIFICATIONS', more: 'Also: SQL, R, Statistics, JavaScript, Java, Programming Logic and CSS3.',
    },
    about: {
      index: '07 — About me', title: 'Generalist in scope.<br /><em>Specialist in delivery.</em>',
      lead: 'I’m Carlos Augusto, a Data & AI Specialist. My strength is not collecting titles, but seeing the complete system and going deep into the technique each stage requires.',
      p1: 'I started close to infrastructure and operations. I evolved into automation, analysis, engineering, BI and predictive models. That path taught me that a solution is only good when it works in the real world, with imperfect data, business rules and people making decisions.',
      p2: 'Today I connect that experience to solutions using generative AI, LLMs, RAG and agents. Technology changes; my commitment remains the same: clarity, reliability and measurable impact.',
      quote: '“My job is to shorten the distance between available data and possible decisions.”', photoAlt: 'Carlos Augusto in a corporate environment',
    },
    contact: {
      index: '08 — The next conversation', kicker: 'Looking for someone who connects data, AI and business?',
      title: 'Let’s build the<br /><em>next system.</em>',
      text: 'I’m open to Data & AI opportunities, challenging projects and conversations with people who value technical depth and business vision.', email: 'Send an email',
    },
    footer: {
      statement: 'Data Engineering, Analytics, Data Science and AI Engineering connected to build decision systems.', top: 'Back to top ↑',
    },
    modal: { challenge: 'The challenge', approach: 'The approach', impact: 'Impact' },
  },
};

const cases = {
  finance: {
    pt: {
      index: 'CASE 01 — BI FINANCEIRO · ANALYTICS', title: 'Inteligência financeira conectada à decisão.',
      summary: 'Uma camada analítica para transformar informações financeiras complexas em visibilidade executiva e planejamento.',
      challenge: 'Orçamento, fluxo de caixa, rentabilidade e previsões exigem consistência entre fontes, regras financeiras e necessidades executivas.',
      approach: 'Modelagem de indicadores em Power BI e DAX, análise estatística, machine learning e colaboração próxima com equipes financeiras e executivas.',
      impact: 'Indicadores financeiros mais claros, previsões mais informadas e decisões executivas com contexto.',
      tags: ['Power BI', 'DAX', 'Financial Analytics', 'Statistics', 'Machine Learning'],
    },
    en: {
      index: 'CASE 01 — FINANCIAL BI · ANALYTICS', title: 'Financial intelligence connected to decision-making.',
      summary: 'An analytical layer designed to turn complex financial information into executive visibility and planning.',
      challenge: 'Budget, cash flow, profitability and forecasts require consistency across sources, financial rules and executive needs.',
      approach: 'Indicator modeling with Power BI and DAX, statistical analysis, machine learning and close collaboration with financial and executive teams.',
      impact: 'Clearer financial indicators, better-informed forecasts and context-rich executive decisions.',
      tags: ['Power BI', 'DAX', 'Financial Analytics', 'Statistics', 'Machine Learning'],
    },
  },
  automation: {
    pt: {
      index: 'CASE 02 — AUTOMAÇÃO · BI', title: 'Menos atualização manual, mais tempo para análise.',
      summary: 'Um dashboard financeiro automatizado que integra APIs e Power BI para disponibilizar indicadores com mais rapidez.',
      challenge: 'A atualização manual consumia tempo operacional e atrasava o acesso aos indicadores financeiros.',
      approach: 'Integração de APIs, organização das fontes, automação da atualização e camada visual orientada a KPIs.',
      impact: '40% menos tempo de atualização manual.', tags: ['Power BI', 'APIs', 'Automation', 'Financial Data'],
    },
    en: {
      index: 'CASE 02 — AUTOMATION · BI', title: 'Less manual updating, more time for analysis.',
      summary: 'An automated financial dashboard integrating APIs and Power BI to make indicators available faster.',
      challenge: 'Manual updates consumed operational time and delayed access to financial indicators.',
      approach: 'API integration, source organization, refresh automation and a KPI-oriented visual layer.',
      impact: '40% less manual update time.', tags: ['Power BI', 'APIs', 'Automation', 'Financial Data'],
    },
  },
  pipeline: {
    pt: {
      index: 'CASE 03 — DATA ENGINEERING · BI', title: 'Um pipeline para acelerar a análise.',
      summary: 'Estrutura de dados e monitoramento de KPIs desenvolvida para reduzir atrito entre fonte, relatório e decisão.',
      challenge: 'O fluxo analítico exigia consolidação complexa e tornava lenta a leitura contínua dos indicadores.',
      approach: 'Pipelines com SQL e Power BI, padronização dos dados e construção de dashboards de alto impacto para gestão.',
      impact: '30% de redução no tempo de análise.', tags: ['SQL', 'ETL', 'Power BI', 'KPIs', 'Data Modeling'],
    },
    en: {
      index: 'CASE 03 — DATA ENGINEERING · BI', title: 'A pipeline designed to accelerate analysis.',
      summary: 'A data and KPI monitoring structure built to reduce friction between source, report and decision.',
      challenge: 'The analytical flow required complex consolidation and slowed continuous indicator monitoring.',
      approach: 'SQL and Power BI pipelines, data standardization and high-impact management dashboards.',
      impact: '30% reduction in analysis time.', tags: ['SQL', 'ETL', 'Power BI', 'KPIs', 'Data Modeling'],
    },
  },
  forecast: {
    pt: {
      index: 'CASE 04 — DATA SCIENCE · FORECASTING', title: 'Previsões comerciais mais assertivas.',
      summary: 'Um modelo preditivo em Python para apoiar planejamento de vendas com sinais quantitativos.',
      challenge: 'A projeção comercial precisava capturar padrões históricos e reduzir a incerteza do planejamento.',
      approach: 'Preparação dos dados, modelagem preditiva, avaliação de desempenho e tradução dos resultados para o contexto comercial.',
      impact: '20% de aumento na assertividade das previsões.', tags: ['Python', 'Machine Learning', 'Forecasting', 'Model Evaluation'],
    },
    en: {
      index: 'CASE 04 — DATA SCIENCE · FORECASTING', title: 'More accurate commercial forecasts.',
      summary: 'A predictive Python model supporting sales planning with quantitative signals.',
      challenge: 'Commercial projections needed to capture historical patterns and reduce planning uncertainty.',
      approach: 'Data preparation, predictive modeling, performance evaluation and translation of results into commercial context.',
      impact: '20% increase in forecast accuracy.', tags: ['Python', 'Machine Learning', 'Forecasting', 'Model Evaluation'],
    },
  },
};

let currentLanguage = 'pt';

function getTranslation(object, path) {
  return path.split('.').reduce((value, part) => value?.[part], object);
}

function translatePage(language) {
  const dictionary = translations[language];
  if (!dictionary) return;
  currentLanguage = language;
  document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
  const suffix = language === 'pt' ? 'Pt' : 'En';
  const pageTitle = document.body.dataset[`title${suffix}`] || dictionary.meta.title;
  const pageDescription = document.body.dataset[`description${suffix}`] || dictionary.meta.description;
  document.title = pageTitle;
  document.querySelector('meta[name="description"]')?.setAttribute('content', pageDescription);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', pageDescription);

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = getTranslation(dictionary, element.dataset.i18n);
    if (value !== undefined) element.textContent = value;
  });
  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    const value = getTranslation(dictionary, element.dataset.i18nHtml);
    if (value !== undefined) element.innerHTML = value;
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
    const value = getTranslation(dictionary, element.dataset.i18nAria);
    if (value !== undefined) element.setAttribute('aria-label', value);
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
    const value = getTranslation(dictionary, element.dataset.i18nAlt);
    if (value !== undefined) element.setAttribute('alt', value);
  });

  document.querySelectorAll('[data-copy-pt][data-copy-en]').forEach((element) => {
    element.textContent = language === 'pt' ? element.dataset.copyPt : element.dataset.copyEn;
  });
  document.querySelectorAll('[data-copy-html-pt][data-copy-html-en]').forEach((element) => {
    element.innerHTML = language === 'pt' ? element.dataset.copyHtmlPt : element.dataset.copyHtmlEn;
  });

  document.querySelectorAll('[data-lang]').forEach((button) => {
    const active = button.dataset.lang === language;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  const base = document.body.dataset.base || '';
  document.querySelectorAll('[data-resume-link]').forEach((resume) => {
    resume.href = language === 'pt'
      ? `${base}assets/docs/curriculo-carlos-augusto-pt.pdf`
      : `${base}assets/docs/carlos-augusto-resume-en.pdf`;
  });
  document.querySelector('.float-contact')?.setAttribute(
    'aria-label',
    language === 'pt' ? 'Falar com Carlos no WhatsApp' : 'Chat with Carlos on WhatsApp',
  );

  try { localStorage.setItem('portfolio-language', language); } catch (_) {}
}

document.querySelectorAll('[data-lang]').forEach((button) => {
  button.addEventListener('click', () => translatePage(button.dataset.lang));
});

let initialLanguage = 'pt';
try {
  const savedLanguage = localStorage.getItem('portfolio-language');
  if (savedLanguage === 'pt' || savedLanguage === 'en') initialLanguage = savedLanguage;
  else if (navigator.language?.toLowerCase().startsWith('en')) initialLanguage = 'en';
} catch (_) {}

const floatingContact = document.createElement('a');
floatingContact.className = 'float-contact';
floatingContact.href = 'https://wa.me/5531999862641?text=Ol%C3%A1%20Carlos%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.';
floatingContact.target = '_blank';
floatingContact.rel = 'noopener noreferrer';
floatingContact.setAttribute('aria-label', 'Falar com Carlos no WhatsApp');
floatingContact.innerHTML = '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg><span data-copy-pt="Falar no WhatsApp" data-copy-en="Chat on WhatsApp">Falar no WhatsApp</span>';
document.body.append(floatingContact);
translatePage(initialLanguage);

const header = document.querySelector('[data-header]');
const progress = document.querySelector('[data-scroll-progress]');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function updateScrollUI() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
  header?.classList.toggle('scrolled', window.scrollY > 24);
  if (progress) progress.style.width = `${Math.min(ratio * 100, 100)}%`;
}
updateScrollUI();
window.addEventListener('scroll', updateScrollUI, { passive: true });

menuToggle?.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!open));
  nav?.classList.toggle('open', !open);
  document.body.classList.toggle('menu-open', !open);
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle?.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
    document.body.classList.remove('menu-open');
  });
});

const revealItems = document.querySelectorAll('.reveal');
if (prefersReducedMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach((item) => item.classList.add('visible'));
} else {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -28px' });
  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index % 4, 3) * 65}ms`;
    revealObserver.observe(item);
  });
}

const counters = document.querySelectorAll('[data-count]');
const counterObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const element = entry.target;
    const target = Number(element.dataset.count);
    const suffix = element.dataset.suffix || '';
    if (prefersReducedMotion) {
      element.textContent = `${target}${suffix}`;
    } else {
      const started = performance.now();
      const tick = (now) => {
        const progressValue = Math.min((now - started) / 1050, 1);
        const eased = 1 - Math.pow(1 - progressValue, 3);
        element.textContent = `${Math.round(target * eased)}${suffix}`;
        if (progressValue < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }
    observer.unobserve(element);
  });
}, { threshold: 0.65 });
counters.forEach((counter) => counterObserver.observe(counter));

const glow = document.querySelector('.cursor-glow');
if (!prefersReducedMotion && glow && window.matchMedia('(pointer: fine)').matches) {
  window.addEventListener('pointermove', (event) => {
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
  }, { passive: true });
}

const modal = document.querySelector('[data-modal]');
function closeModal() { if (modal?.open) modal.close(); }

document.querySelectorAll('[data-case]').forEach((button) => {
  button.addEventListener('click', () => {
    const item = cases[button.dataset.case]?.[currentLanguage];
    if (!item || !modal) return;
    modal.querySelector('[data-modal-index]').textContent = item.index;
    modal.querySelector('[data-modal-title]').textContent = item.title;
    modal.querySelector('[data-modal-summary]').textContent = item.summary;
    modal.querySelector('[data-modal-challenge]').textContent = item.challenge;
    modal.querySelector('[data-modal-approach]').textContent = item.approach;
    modal.querySelector('[data-modal-impact]').textContent = item.impact;
    modal.querySelector('[data-modal-tags]').innerHTML = item.tags.map((tag) => `<span>${tag}</span>`).join('');
    modal.showModal();
  });
});
document.querySelector('[data-modal-close]')?.addEventListener('click', closeModal);
modal?.addEventListener('click', (event) => { if (event.target === modal) closeModal(); });

document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});
