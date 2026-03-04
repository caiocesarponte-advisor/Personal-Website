const form = document.getElementById('leadForm');
const status = document.getElementById('formStatus');
const year = document.getElementById('year');
const langButtons = document.querySelectorAll('.lang-btn');

const i18n = {
  pt: {
    pageTitle: 'Caio César Ponte | Assessoria Estratégica de Investimentos',
    pageDescription:
      'Assessoria de investimentos para profissionais que buscam clareza financeira, planejamento de longo prazo e suporte personalizado. Agende seu diagnóstico financeiro.',
    'nav.cta': 'Agendar Diagnóstico Financeiro',
    'hero.eyebrow': 'Assessoria Profissional de Investimentos',
    'hero.title': 'Organize suas decisões financeiras com estratégia',
    'hero.subtitle':
      'Assessoria de investimentos com foco em clareza financeira, planejamento de longo prazo e suporte personalizado.',
    'hero.primaryCta': 'Agendar Diagnóstico Financeiro',
    'hero.secondaryCta': 'Conheça seu Assessor',
    'about.title': 'Sobre o Assessor',
    'about.description':
      'Caio César Ponte oferece assessoria personalizada com visão disciplinada e foco no longo prazo. Sua abordagem combina comunicação clara, organização estratégica de carteira e planejamento prático para apoiar decisões financeiras com confiança.',
    'about.item1': 'Organização estratégica dos investimentos',
    'about.item2': 'Planejamento de patrimônio e aposentadoria',
    'about.item3': 'Orientação aderente à sua realidade e objetivos',
    'contact.title': 'Contato',
    'contact.nameLabel': 'Nome:',
    'contact.emailLabel': 'Email:',
    'contact.linkedinLink': 'Perfil',
    'problems.title': 'Desafios Comuns do Investidor',
    'problems.card1Title': 'Falta de Estrutura Financeira',
    'problems.card1Text':
      'A renda cresce, mas as decisões de investimento continuam fragmentadas e sem consistência.',
    'problems.card2Title': 'Aposentadoria sem Direção',
    'problems.card2Text':
      'Muitos profissionais querem segurança no futuro, mas ainda sem um plano concreto.',
    'problems.card3Title': 'Excesso de Informação',
    'problems.card3Text':
      'Muito ruído de mercado dificulta priorizar o que realmente importa.',
    'method.title': 'Metodologia',
    'method.step1Title': '1. Diagnóstico',
    'method.step1Text':
      'Entendimento da sua estrutura financeira atual, objetivos e perfil de risco.',
    'method.step2Title': '2. Estratégia',
    'method.step2Text': 'Definição de um plano de investimentos realista e personalizado.',
    'method.step3Title': '3. Implementação',
    'method.step3Text': 'Organização da carteira e execução com disciplina e clareza.',
    'method.step4Title': '4. Monitoramento',
    'method.step4Text': 'Acompanhamento contínuo e ajustes conforme sua vida e metas evoluem.',
    'audience.title': 'Para Quem é Esta Assessoria',
    'audience.intro':
      'Profissionais com renda entre <strong>$1.500 e $5.000 mensais</strong> que buscam decisões de investimento estruturadas, planejamento de aposentadoria e construção de patrimônio sustentável.',
    'audience.item1': 'Profissionais em fase de crescimento na carreira',
    'audience.item2': 'Famílias com planejamento de médio e longo prazo',
    'audience.item3':
      'Investidores que valorizam orientação profissional com transparência',
    'form.title': 'Ferramenta de Diagnóstico Financeiro',
    'form.description':
      'Preencha este formulário rápido e entraremos em contato para agendar sua reunião de diagnóstico.',
    'form.microcopy':
      'A conversa inicial é educativa e focada em entender seu cenário. Não há promessa de rentabilidade.',
    'form.nameLabel': 'Nome completo',
    'form.emailLabel': 'Email',
    'form.incomeLabel': 'Faixa de renda mensal',
    'form.incomePlaceholder': 'Selecione uma opção',
    'form.income1': '$1.500 - $2.500',
    'form.income2': '$2.500 - $3.500',
    'form.income3': '$3.500 - $5.000',
    'form.goalLabel': 'Objetivo principal',
    'form.goalPlaceholder':
      'Ex: organizar investimentos e iniciar planejamento de aposentadoria',
    'form.submit': 'Agendar Diagnóstico Financeiro',
    'form.emailDelivery': 'Ao enviar, sua proposta é encaminhada diretamente para o e-mail do assessor.',
    'trust.title': 'Confiança e Transparência',
    'trust.card1Title': 'Conduta Profissional',
    'trust.card1Text': 'Atendimento pautado em ética, clareza e respeito aos seus objetivos.',
    'trust.card2Title': 'Orientação Transparente',
    'trust.card2Text':
      'Recomendações explicadas de forma simples para decisões conscientes.',
    'trust.card3Title': 'Visão de Compliance',
    'trust.card3Text':
      'Suporte orientado por processo, documentação e perspectiva de longo prazo.',
    'faq.title': 'Perguntas Frequentes',
    'faq.q1': 'Este serviço é apenas para investidores experientes?',
    'faq.a1':
      'Não. O processo foi desenhado para profissionais que desejam estrutura, inclusive iniciantes.',
    'faq.q2': 'Quanto tempo dura a reunião de diagnóstico?',
    'faq.a2': 'Em geral, 30 a 45 minutos, focados no seu momento atual e prioridades.',
    'faq.q3': 'Receberei projeções com retorno garantido?',
    'faq.a3':
      'Não. A assessoria é educativa e estratégica, sem garantia ou promessa de retorno.',
    'faq.q4': 'Como acontece a comunicação após o diagnóstico?',
    'faq.a4':
      'Os canais são definidos no onboarding, com acompanhamento periódico conforme necessidade.',
    'final.title': 'Construa clareza financeira com um plano estruturado',
    'final.text':
      'Comece com um diagnóstico profissional e tome as próximas decisões com confiança.',
    'final.cta': 'Agendar Reunião de Diagnóstico',
    'footer.rights': 'Todos os direitos reservados.',
    validationMessage: 'Por favor, preencha todos os campos obrigatórios antes de enviar.',
    successMessage:
      'Obrigado, {name}. Seu pedido foi recebido. Entraremos em contato para agendar seu diagnóstico financeiro.',
    sendingMessage: 'Enviando proposta...',
    sendErrorMessage: 'Não foi possível enviar automaticamente agora. Seu aplicativo de e-mail será aberto para concluir o envio.',
  },
  en: {
    pageTitle: 'Caio César Ponte | Strategic Investment Advisory',
    pageDescription:
      'Strategic investment advisory for professionals seeking financial clarity, long-term planning, and personalized support. Schedule your financial diagnosis meeting.',
    'nav.cta': 'Schedule Financial Diagnosis',
    'hero.eyebrow': 'Professional Investment Advisory',
    'hero.title': 'Organize your financial decisions with strategy',
    'hero.subtitle':
      'Investment advisory focused on financial clarity, long-term planning, and personalized support.',
    'hero.primaryCta': 'Schedule Financial Diagnosis',
    'hero.secondaryCta': 'Meet Your Advisor',
    'about.title': 'About the Advisor',
    'about.description':
      'Caio César Ponte provides personalized investment advisory with a disciplined, long-term perspective. His approach combines clear communication, strategic portfolio organization, and practical planning to help professionals make confident financial decisions.',
    'about.item1': 'Strategic investment organization',
    'about.item2': 'Long-term wealth and retirement planning',
    'about.item3': 'Guidance tailored to your financial reality and goals',
    'contact.title': 'Contact',
    'contact.nameLabel': 'Name:',
    'contact.emailLabel': 'Email:',
    'contact.linkedinLink': 'Profile',
    'problems.title': 'Common Investor Challenges',
    'problems.card1Title': 'Lack of Financial Structure',
    'problems.card1Text':
      'Income grows, but investment decisions remain fragmented and inconsistent.',
    'problems.card2Title': 'Unclear Retirement Direction',
    'problems.card2Text':
      'Many professionals want security in the future but do not have a concrete plan.',
    'problems.card3Title': 'Information Overload',
    'problems.card3Text':
      'Too much market noise makes it difficult to prioritize what actually matters.',
    'method.title': 'Methodology',
    'method.step1Title': '1. Diagnosis',
    'method.step1Text':
      'Understand your current financial structure, goals, and risk profile.',
    'method.step2Title': '2. Strategy',
    'method.step2Text': 'Define a realistic and personalized investment roadmap.',
    'method.step3Title': '3. Implementation',
    'method.step3Text': 'Organize the portfolio and execute decisions with discipline and clarity.',
    'method.step4Title': '4. Monitoring',
    'method.step4Text': 'Review progress and adjust strategy as your life and goals evolve.',
    'audience.title': 'Who This Is For',
    'audience.intro':
      'Professionals earning between <strong>$1,500 and $5,000 monthly</strong> who want structured investment decisions, retirement planning, and sustainable wealth growth.',
    'audience.item1': 'Career professionals in growth phase',
    'audience.item2': 'Families planning medium and long-term financial stability',
    'audience.item3': 'Investors seeking professional guidance with transparency',
    'form.title': 'Financial Diagnosis Tool',
    'form.description':
      'Complete this short form and receive contact to schedule your diagnostic meeting.',
    'form.microcopy':
      'This initial diagnostic conversation is educational and focused on understanding your scenario. No investment return promises are made.',
    'form.nameLabel': 'Full name',
    'form.emailLabel': 'Email',
    'form.incomeLabel': 'Monthly income range',
    'form.incomePlaceholder': 'Select one option',
    'form.income1': '$1,500 - $2,500',
    'form.income2': '$2,500 - $3,500',
    'form.income3': '$3,500 - $5,000',
    'form.goalLabel': 'Main objective',
    'form.goalPlaceholder':
      'Example: organize investments and start retirement planning',
    'form.submit': 'Schedule Financial Diagnosis',
    'form.emailDelivery': 'When submitted, your proposal is sent directly to the advisor email.',
    'trust.title': 'Trust & Transparency',
    'trust.card1Title': 'Professional Conduct',
    'trust.card1Text':
      'Advisory interactions are grounded in ethics, clarity, and respect for your goals.',
    'trust.card2Title': 'Transparent Guidance',
    'trust.card2Text':
      'Recommendations are explained in plain language so you can make informed decisions.',
    'trust.card3Title': 'Compliance Mindset',
    'trust.card3Text':
      'Process-oriented support with documentation and a long-term advisory perspective.',
    'faq.title': 'Frequently Asked Questions',
    'faq.q1': 'Is this service only for experienced investors?',
    'faq.a1':
      'No. The process is designed for professionals who want structure, even if they are just getting started.',
    'faq.q2': 'How long does the diagnostic meeting take?',
    'faq.a2':
      'Usually 30 to 45 minutes, focused on your current situation and planning priorities.',
    'faq.q3': 'Will I receive guaranteed return projections?',
    'faq.a3':
      'No. Advisory is educational and strategic, with no guarantee or promise of investment returns.',
    'faq.q4': 'How do we communicate after the diagnosis?',
    'faq.a4':
      'Communication channels are defined during onboarding, with regular follow-up as needed.',
    'final.title': 'Build financial clarity with a structured plan',
    'final.text':
      'Start with a professional diagnosis and take your next investment decisions with confidence.',
    'final.cta': 'Schedule Diagnostic Meeting',
    'footer.rights': 'All rights reserved.',
    validationMessage: 'Please complete all required fields before submitting.',
    successMessage:
      'Thank you, {name}. Your request was received. We will contact you soon to schedule your financial diagnosis.',
    sendingMessage: 'Sending your proposal...',
    sendErrorMessage: 'Automatic sending is unavailable right now. Your email app will open so you can finish sending it.',
  },
};

let currentLang = 'pt';

function applyLanguage(lang) {
  currentLang = lang;
  const dict = i18n[lang];

  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  document.title = dict.pageTitle;

  const descMeta = document.querySelector('meta[name="description"]');
  if (descMeta) {
    descMeta.setAttribute('content', dict.pageDescription);
  }

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (dict[key]) {
      element.innerHTML = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (dict[key]) {
      element.setAttribute('placeholder', dict[key]);
    }
  });

  langButtons.forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  status.textContent = '';
}

function setupAnimations() {
  const animatedElements = document.querySelectorAll('[data-animate]');
  if (!animatedElements.length) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  animatedElements.forEach((element) => observer.observe(element));
}

function fallbackToMailClient(formData) {
  const recipient = form.dataset.emailRecipient;
  if (!recipient) {
    return;
  }

  const dict = i18n[currentLang];
  const subject = currentLang === 'pt' ? 'Nova proposta recebida pelo site' : 'New proposal received from website';
  const body = [
    `Nome: ${formData.get('name')}`,
    `Email: ${formData.get('email')}`,
    `Faixa de renda: ${formData.get('income')}`,
    '',
    `Objetivo: ${formData.get('goal')}`,
  ].join('\n');

  const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  status.textContent = dict.sendErrorMessage;
  window.location.href = mailto;
}

year.textContent = new Date().getFullYear();
applyLanguage('pt');
setupAnimations();

langButtons.forEach((button) => {
  button.addEventListener('click', () => applyLanguage(button.dataset.lang));
});

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const dict = i18n[currentLang];

  if (!form.checkValidity()) {
    status.textContent = dict.validationMessage;
    return;
  }

  const formData = new FormData(form);

  if (formData.get('_honey')) {
    return;
  }

  const name = formData.get('name');
  status.textContent = dict.sendingMessage;

  if (window.gtag) {
    window.gtag('event', 'lead_form_submit', {
      event_category: 'engagement',
      event_label: 'financial_diagnosis',
      language: currentLang,
    });
  }

  if (window.hj) {
    window.hj('event', 'lead_form_submit');
  }

  if (window.clarity) {
    window.clarity('set', 'lead_status', 'submitted');
    window.clarity('set', 'lang_selected', currentLang);
  }

  try {
    const response = await fetch('https://formspree.io/f/xeokzqnk', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Submit failed');
    }

    status.textContent = dict.successMessage.replace('{name}', name);
    form.reset();
  } catch (error) {
    fallbackToMailClient(formData);
  }
});
