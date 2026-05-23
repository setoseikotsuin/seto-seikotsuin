// Shared navigation JS for Seto Seikotsuin
(function(){
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  if(hamburger && mobileNav){
    hamburger.addEventListener('click', function(){
      this.classList.toggle('open');
      mobileNav.classList.toggle('open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }
  // Scroll-triggered fade
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
  // FAQ accordion
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', function(){
      const answer = this.nextElementSibling;
      const isOpen = this.classList.contains('open');
      document.querySelectorAll('.faq-question').forEach(b => {
        b.classList.remove('open');
        if(b.nextElementSibling) b.nextElementSibling.classList.remove('open');
      });
      if(!isOpen){ this.classList.add('open'); if(answer) answer.classList.add('open'); }
    });
  });
})();
