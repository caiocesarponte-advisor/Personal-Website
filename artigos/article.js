(function () {
  const progress = document.getElementById('readingProgress');
  const article = document.querySelector('article');

  function updateProgress() {
    if (!progress || !article) return;
    const articleTop = article.offsetTop;
    const articleHeight = article.offsetHeight - window.innerHeight;
    const scrolled = Math.min(Math.max(window.scrollY - articleTop, 0), Math.max(articleHeight, 1));
    const percentage = (scrolled / Math.max(articleHeight, 1)) * 100;
    progress.style.width = `${percentage}%`;
  }

  const animatedElements = document.querySelectorAll('[data-animate]');
  if (animatedElements.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    animatedElements.forEach((el) => observer.observe(el));
  }

  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);
  updateProgress();
})();
