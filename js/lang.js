function loadLanguage(lang) {
    fetch(`locales/${lang}.json`)
      .then(response => response.json())
      .then(translations => {
        document.querySelectorAll('[data-i18n]').forEach(el => {
          const key = el.getAttribute('data-i18n');
          if (translations[key]) {
            el.textContent = translations[key];
          }
        });
  
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
  
        // Close Bootstrap navbar (if open)
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
          new bootstrap.Collapse(navbarCollapse, {
            toggle: true
          });
        }
      })
      .catch(error => console.error('Error loading language file:', error));
  }
  

 
 
  


  document.querySelectorAll('.navbar-collapse .nav-link').forEach(function (link) {
  link.addEventListener('click', function () {
    const navbar = document.getElementById('navbarCollapse');
    if (navbar.classList.contains('show')) {
      new bootstrap.Collapse(navbar).hide();
    }
  });
});


  // Auto-close when clicking outside navbar (mobile)
  document.addEventListener('click', function(event) {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const isClickInside = navbarCollapse.contains(event.target) || event.target.closest('.navbar-toggler');

    if (!isClickInside && navbarCollapse.classList.contains('show') && window.innerWidth < 992) {
      new bootstrap.Collapse(navbarCollapse).hide();
    }
  });



  document.querySelectorAll('.nav-link[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      const yOffset = -70; // adjust for fixed navbar
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
  
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });

  $(document).ready(function() {
    // Scroll to the top when the page loads or is refreshed
    $('html, body').animate({ scrollTop: 0 }, 0);
});

  
