// Particle Background Configuration
function loadParticles(isLightTheme) {
  tsParticles.load("particles-bg", {
    background: {
      color: { value: "transparent" },
    },
    particles: {
      number: { value: 90 },
      color: { value: "#ff0000" },
      links: {
        enable: true,
        color: "#ff0000",
        distance: 120,
        opacity: isLightTheme ? 0.9 : 0.5,
      },
      move: { enable: true, speed: 1.2 },
      size: { value: 2.5 },
      opacity: {
        value: isLightTheme ? 0.85 : 0.6,
        anim: { enable: false },
      },
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
      },
      modes: {
        repulse: { distance: 100 },
        push: { quantity: 4 },
      },
    },
    detectRetina: true,
  });
}

// Theme Management
function toggleTheme() {
  const isLight = document.body.classList.toggle("light-theme");
  
  // Update all theme icons
  document.querySelectorAll(".theme-icon").forEach(icon => {
    icon.classList.toggle("fa-sun", isLight);
    icon.classList.toggle("fa-moon", !isLight);
  });

  localStorage.setItem("theme", isLight ? "light" : "dark");
  updateThemeDependentElements(isLight);
}

function updateThemeDependentElements(isLight) {
  // Update particles
  const existingParticles = tsParticles.domItem(0);
  if (existingParticles) existingParticles.destroy();
  loadParticles(isLight);
  
  // Update contact title
  updateContactTitleColor(isLight ? "light" : "dark");
}

function updateContactTitleColor(theme) {
  const title = document.querySelector(".contact-title");
  if (title) {
    title.style.color = theme === "light" ? "red" : "white";
  }
}

// Mobile Menu
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
  
  if (mobileMenuBtn && mobileMenuOverlay) {
    mobileMenuBtn.addEventListener('click', function() {
      this.classList.toggle('active');
      mobileMenuOverlay.classList.toggle('show');
      document.body.classList.toggle('menu-open');
    });
    
    mobileMenuOverlay.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        mobileMenuOverlay.classList.remove('show');
        document.body.classList.remove('menu-open');
      });
    });
  }
}

// Skill Filters
function initSkillFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const skillBoxes = document.querySelectorAll(".skill-box");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.dataset.filter;

      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      skillBoxes.forEach((box) => {
        box.style.display = (category === "all" || box.classList.contains(category)) 
          ? "flex" 
          : "none";
      });
    });
  });
}

// Contact Form
function initContactForm() {
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Your message has been sent successfully!");
      this.reset();
    });
  }
}

// Smooth Scrolling
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// Custom Cursor
function initCursor() {
  const cursor = document.getElementById("customCursor");
  if (!cursor) return;

  cursor.style.display = 'flex';

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });
  
  document.body.style.cursor = 'none';

  document.addEventListener('mouseenter', () => {
    cursor.style.display = 'flex';
  });

  document.addEventListener('mouseleave', () => {
    cursor.style.display = 'none';
  });
}

// Rating Stars
function initRatingStars() {
  const stars = document.querySelectorAll(".star");
  if (!stars.length) return;

  stars.forEach((star, index) => {
    star.addEventListener("click", () => {
      const rating = index + 1;

      // Highlight selected stars
      stars.forEach((s, i) => {
        s.classList.toggle("selected", i < rating);
      });

      // Floating animation
      const floatContainer = document.createElement("div");
      floatContainer.classList.add("floating-stars");

      for (let i = 0; i < rating; i++) {
        const floatStar = document.createElement("span");
        floatStar.innerHTML = "&#9733;";
        floatStar.style.color = "gold";
        floatContainer.appendChild(floatStar);
      }

      document.body.appendChild(floatContainer);

      setTimeout(() => {
        floatContainer.classList.add("animate");
      }, 10);

      setTimeout(() => {
        floatContainer.remove();
      }, 1200);
    });
  });
}

// Initialize Everything
document.addEventListener('DOMContentLoaded', function() {
  // Set initial theme
  const savedTheme = localStorage.getItem("theme");
  const isLight = savedTheme === "light";
  
  if (isLight) {
    document.body.classList.add("light-theme");
  }

  // Mark theme icons
  document.getElementById("themeIcon")?.classList.add("theme-icon");
  document.getElementById("mobileThemeIcon")?.classList.add("theme-icon");

  // Set initial icon states
  document.querySelectorAll(".theme-icon").forEach(icon => {
    icon.classList.toggle("fa-sun", isLight);
    icon.classList.toggle("fa-moon", !isLight);
  });

  // Initialize components
  loadParticles(isLight);
  updateContactTitleColor(isLight ? "light" : "dark");
  initMobileMenu();
  initSkillFilters();
  initContactForm();
  initSmoothScrolling();
  initCursor();
  initRatingStars();

  // Set up event listeners
  document.getElementById("themeToggle")?.addEventListener('click', toggleTheme);
  document.getElementById("mobileThemeToggle")?.addEventListener('click', toggleTheme);
});