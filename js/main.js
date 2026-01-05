/* ============================================
   TEMPERO CREATIVE - Main JavaScript
   ============================================ */

// ============================================
// HEADER & FOOTER INJECTION
// ============================================

// Determine base path (for GitHub Pages subdirectory support)
const getBasePath = () => {
  const path = window.location.pathname;
  // If in a subdirectory like /tempero-creative/, detect it
  if (path.includes('/tempero-creative/')) {
    return '/tempero-creative';
  }
  return '';
};

const basePath = getBasePath();

// Header HTML
const headerHTML = `
<header class="header" id="header">
  <div class="container">
    <a href="${basePath}/index.html" class="logo">Tempero <span>Creative</span></a>
    
    <nav class="nav">
      <ul class="nav-links" id="navLinks">
        <li><a href="${basePath}/index.html">Home</a></li>
        <li><a href="${basePath}/pages/about.html">About</a></li>
        <li><a href="${basePath}/pages/services.html">Services</a></li>
        <li><a href="${basePath}/pages/team.html">Team</a></li>
        <li><a href="${basePath}/pages/news.html">News</a></li>
        <li><a href="${basePath}/pages/contact.html">Contact</a></li>
      </ul>
      <a href="${basePath}/pages/portal.html" class="btn btn-primary hide-mobile">Client Portal</a>
      <button class="menu-toggle" id="menuToggle" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  </div>
</header>
`;

// Footer HTML
const footerHTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="${basePath}/index.html" class="logo">Tempero <span>Creative</span></a>
        <p>Your one-stop shop for all things Creative.</p>
        <div class="footer-contact">
          <p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            hello@tempero.nz
          </p>
          <p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            +64 21 XXX XXXX
          </p>
          <p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            Auckland, New Zealand
          </p>
        </div>
        <div class="social-links">
          <a href="https://www.instagram.com/tempero.creative/" target="_blank" rel="noopener" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="https://www.facebook.com/temperocreative" target="_blank" rel="noopener" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
          <a href="https://www.youtube.com/@temperocreative" target="_blank" rel="noopener" aria-label="YouTube">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
          </a>
        </div>
      </div>
      
      <div class="footer-column">
        <h4>Services</h4>
        <ul>
          <li><a href="${basePath}/services/videography.html">Videography</a></li>
          <li><a href="${basePath}/services/photography.html">Photography</a></li>
          <li><a href="${basePath}/services/animation.html">Animation & VFX</a></li>
          <li><a href="${basePath}/services/design.html">Graphic Design</a></li>
          <li><a href="${basePath}/services/music.html">Music Production</a></li>
          <li><a href="${basePath}/services/education.html">Education</a></li>
        </ul>
      </div>
      
      <div class="footer-column">
        <h4>Company</h4>
        <ul>
          <li><a href="${basePath}/pages/about.html">About Us</a></li>
          <li><a href="${basePath}/pages/team.html">Our Team</a></li>
          <li><a href="${basePath}/pages/news.html">News</a></li>
          <li><a href="${basePath}/pages/contact.html">Contact</a></li>
        </ul>
      </div>
      
      <div class="footer-column">
        <h4>Connect</h4>
        <ul>
          <li><a href="https://www.instagram.com/tempero.creative/" target="_blank">Instagram</a></li>
          <li><a href="https://www.facebook.com/temperocreative" target="_blank">Facebook</a></li>
          <li><a href="https://www.youtube.com/@temperocreative" target="_blank">YouTube</a></li>
          <li><a href="${basePath}/pages/portal.html">Client Portal</a></li>
        </ul>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>&copy; ${new Date().getFullYear()} Tempero Creative. All rights reserved.</p>
      <div class="footer-bottom-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>
`;

// Inject header and footer when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  // Inject header at start of body
  document.body.insertAdjacentHTML('afterbegin', headerHTML);
  
  // Inject footer at end of body (before scripts)
  document.body.insertAdjacentHTML('beforeend', footerHTML);
  
  // Initialize all interactive features
  initHeader();
  initMobileMenu();
  initFAQ();
  initNewsFilters();
  setActiveNavLink();
});

// ============================================
// HEADER SCROLL EFFECT
// ============================================
function initHeader() {
  const header = document.getElementById('header');
  if (!header) return;
  
  const scrollThreshold = 50;
  
  function updateHeader() {
    if (window.scrollY > scrollThreshold) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  
  window.addEventListener('scroll', updateHeader);
  updateHeader(); // Check on load
}

// ============================================
// MOBILE MENU
// ============================================
function initMobileMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  
  if (!menuToggle || !navLinks) return;
  
  menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });
  
  // Close menu when clicking a link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuToggle.classList.remove('active');
    });
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('active');
      menuToggle.classList.remove('active');
    }
  });
}

// ============================================
// SET ACTIVE NAV LINK
// ============================================
function setActiveNavLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (currentPath.endsWith(href) || 
        (href.includes('index.html') && (currentPath.endsWith('/') || currentPath.endsWith('/index.html')))) {
      link.classList.add('active');
    }
  });
}

// ============================================
// FAQ ACCORDION
// ============================================
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;
    
    question.addEventListener('click', () => {
      // Close other items
      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
        }
      });
      
      // Toggle current item
      item.classList.toggle('active');
    });
  });
}

// ============================================
// NEWS FILTERS
// ============================================
function initNewsFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const newsCards = document.querySelectorAll('.news-card');
  
  if (filterBtns.length === 0) return;
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Filter cards
      const filter = btn.dataset.filter;
      
      newsCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// ============================================
// CONTACT FORM (basic validation)
// ============================================
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Basic validation
    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const message = form.querySelector('#message').value.trim();
    
    if (!name || !email || !message) {
      alert('Please fill in all required fields.');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    
    // For now, just show success message
    // In production, you'd send this to a server or Firebase
    alert('Thanks for your message! We\'ll get back to you soon.');
    form.reset();
  });
}

// Initialize contact form if on contact page
document.addEventListener('DOMContentLoaded', initContactForm);
