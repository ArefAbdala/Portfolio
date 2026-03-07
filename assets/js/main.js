/* ========================
   main.js — Aref Abdala Portfolio
   Vanilla JS — No jQuery dependency
   ======================== */

(function () {
  'use strict';

  /* ========================
     1. Page Load — Remove preload class
     ======================== */
  window.addEventListener('load', function () {
    requestAnimationFrame(function () {
      document.body.classList.remove('is-preload');
    });
  });

  /* ========================
     2. IntersectionObserver — Scroll Reveal
     ======================== */
  var revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(function (el) {
    revealObserver.observe(el);
  });

  /* ========================
     3. Nav Active State — Scroll Spy
     ======================== */
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  if (sections.length && navLinks.length) {
    var sectionObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var id = entry.target.getAttribute('id');
            navLinks.forEach(function (link) {
              link.classList.remove('active');
              if (link.getAttribute('href') === '#' + id) {
                link.classList.add('active');
              }
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach(function (section) {
      sectionObserver.observe(section);
    });
  }

  /* ========================
     4. Mobile Hamburger Menu
     ======================== */
  var hamburger = document.querySelector('.nav-hamburger');
  var nav = document.querySelector('#nav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', function () {
      nav.classList.toggle('nav-open');
    });

    document.querySelectorAll('.nav-links a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('nav-open');
      });
    });
  }

  /* ========================
     5. Smooth Scroll — Same-page anchors
     ======================== */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var navHeight = 64;
        var top = target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

})();
