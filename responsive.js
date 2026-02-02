// Responsive Scaling Script
// This script scales the page content to fit any screen size while preserving the original design

(function() {
  'use strict';
  
  const DESIGN_WIDTH = 1536;
  
  function applyResponsiveScaling() {
    // Find the main container (different class names for different pages)
    const container = document.querySelector('.main-page, .progja-asopa, .progja-fenty, .progja-menyuk, .progja-vania');
    
    if (!container) return;
    
    const viewportWidth = window.innerWidth;
    const html = document.documentElement;
    const body = document.body;
    
    if (viewportWidth < DESIGN_WIDTH) {
      const scale = viewportWidth / DESIGN_WIDTH;
      
      // Apply transform scale
      container.style.transformOrigin = 'top left';
      container.style.transform = `scale(${scale})`;
      container.style.width = `${DESIGN_WIDTH}px`;
      
      // Calculate scaled height
      const originalHeight = container.scrollHeight;
      const scaledHeight = originalHeight * scale;
      
      // Set minimum height on html to allow proper scrolling
      html.style.minHeight = `${scaledHeight}px`;
      html.style.height = 'auto';
      html.style.overflowY = 'auto';
      html.style.overflowX = 'hidden';
      
      // Body should not have its own scrollbar
      body.style.height = 'auto';
      body.style.minHeight = `${scaledHeight}px`;
      body.style.overflow = 'visible';
      body.style.overflowX = 'hidden';
      
    } else {
      // Reset styles for desktop
      container.style.transform = 'none';
      container.style.transformOrigin = 'initial';
      html.style.minHeight = '';
      html.style.height = '';
      html.style.overflowY = '';
      body.style.height = '';
      body.style.minHeight = '';
      body.style.overflow = '';
    }
  }
  
  // Apply on load
  window.addEventListener('load', applyResponsiveScaling);
  
  // Apply on resize with debounce
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(applyResponsiveScaling, 100);
  });
  
  // Apply immediately when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyResponsiveScaling);
  } else {
    applyResponsiveScaling();
  }
})();
