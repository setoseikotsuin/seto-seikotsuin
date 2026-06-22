/* 瀬戸整骨院 - 共通ナビゲーション・インタラクションJS */
(function () {
  'use strict';

  // ───────────────────────────────────────────────
  // モバイルナビ（ハンバーガー）
  // ───────────────────────────────────────────────
  var hamburger = document.querySelector('.hamburger');
  var mobileNav = document.querySelector('.mobile-nav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      var willOpen = !mobileNav.classList.contains('open');
      hamburger.classList.toggle('open', willOpen);
      mobileNav.classList.toggle('open', willOpen);
      document.body.style.overflow = willOpen ? 'hidden' : '';
      hamburger.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
    });

    // ナビリンクタップ時に閉じる
    mobileNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // ESCで閉じる
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
        hamburger.click();
      }
    });
  }

  // ───────────────────────────────────────────────
  // スクロールトリガーのフェードイン
  // ───────────────────────────────────────────────
  var fadeEls = document.querySelectorAll('.fade-up');
  if (fadeEls.length) {
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
      fadeEls.forEach(function (el) { observer.observe(el); });
    } else {
      // フォールバック：旧ブラウザでは即時表示
      fadeEls.forEach(function (el) { el.classList.add('visible'); });
    }
  }

  // ───────────────────────────────────────────────
  // FAQアコーディオン
  // ───────────────────────────────────────────────
  document.querySelectorAll('.faq-question').forEach(function (btn) {
    btn.setAttribute('aria-expanded', 'false');
    btn.addEventListener('click', function () {
      var answer = this.nextElementSibling;
      var isOpen = this.classList.contains('open');
      // 同カテゴリ内の他のFAQを閉じる(全体閉じより自然)
      var scope = this.closest('.faq-category-body') || this.closest('section') || document;
      scope.querySelectorAll('.faq-question').forEach(function (b) {
        b.classList.remove('open');
        b.setAttribute('aria-expanded', 'false');
        if (b.nextElementSibling) b.nextElementSibling.classList.remove('open');
      });
      if (!isOpen) {
        this.classList.add('open');
        this.setAttribute('aria-expanded', 'true');
        if (answer) answer.classList.add('open');
      }
    });
  });

  // ───────────────────────────────────────────────
  // スクロール時のヘッダー追従透過度調整
  // ───────────────────────────────────────────────
  var header = document.querySelector('.site-header');
  if (header) {
    var setScrolled = function () {
      if (window.scrollY > 20) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    };
    window.addEventListener('scroll', setScrolled, { passive: true });
    setScrolled();
  }
})();
