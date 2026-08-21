// Guardiã — interações do site
document.addEventListener('DOMContentLoaded', () => {
  // Menu mobile
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
    links.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        links.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Sombra no cabeçalho ao rolar a página
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Revelação suave de cartões, canais, passos, FAQ e formulário ao rolar
  const revealTargets = document.querySelectorAll(
    '.card, .channel, .stat, .steps li, .faq-item, .form-card, .hero-content'
  );
  revealTargets.forEach((el) => el.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealTargets.forEach((el) => observer.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add('is-visible'));
  }

  // Botão "voltar ao topo" — aparece após rolar a página
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    const toggleBackToTop = () => {
      backToTop.classList.toggle('is-visible', window.scrollY > 500);
    };
    toggleBackToTop();
    window.addEventListener('scroll', toggleBackToTop, { passive: true });
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Contadores animados das estatísticas da home
  const statNums = document.querySelectorAll('.stat .num[data-count-to]');
  if (statNums.length && 'IntersectionObserver' in window) {
    const animateCount = (el) => {
      const target = parseFloat(el.dataset.countTo);
      const suffix = el.dataset.countSuffix || '';
      const duration = 900;
      const start = performance.now();
      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const statObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            statObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    statNums.forEach((el) => statObserver.observe(el));
  }

  // Formulário de contato (front-end apenas — sem backend neste protótipo)
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const feedback = document.querySelector('#form-feedback');
      if (feedback) {
        feedback.hidden = false;
        feedback.textContent = 'Mensagem registrada. Em uma versão com back-end, ela seria enviada à equipe responsável.';
        feedback.focus();
      }
      form.reset();
    });
  }
});
