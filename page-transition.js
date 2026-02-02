// Smooth Page Transition Handler
(function() {
  'use strict';

  // Add fade-in animation when page loads
  window.addEventListener('load', function() {
    document.body.classList.add('fade-in');
  });

  // Handle all internal link clicks
  document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href]');
    
    links.forEach(function(link) {
      const href = link.getAttribute('href');
      
      // Handle anchor/hash links with smooth scroll
      if (href && href.startsWith('#')) {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      }
      // Only handle internal HTML links (not external, not hash links, not mailto, etc)
      else if (href && 
          !href.startsWith('http://') && 
          !href.startsWith('https://') && 
          !href.startsWith('mailto:') && 
          !href.startsWith('tel:') &&
          href.endsWith('.html') &&
          !link.hasAttribute('target')) {
        
        link.addEventListener('click', function(e) {
          e.preventDefault();
          const destination = this.getAttribute('href');
          
          // Add fade-out class
          document.body.classList.add('fade-out');
          
          // Navigate after animation completes
          setTimeout(function() {
            window.location.href = destination;
          }, 300); // Match this with CSS transition duration
        });
      }
    });
  });
})();
