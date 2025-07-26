function loadParticles(isLightTheme) {
  tsParticles.load("particles-bg", {
    background: {
      color: { value: "transparent" }
    },
    particles: {
      number: { value: 90 },
      color: { value: "#ff0000" },
      links: {
        enable: true,
        color: "#ff0000",
        distance: 120,
        opacity: isLightTheme ? 0.9 : 0.5
      },
      move: { enable: true, speed: 1.2 },
      size: { value: 2.5 },
      opacity: {
        value: isLightTheme ? 0.85 : 0.6,
        anim: { enable: false }
      }
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" }
      },
      modes: {
        repulse: { distance: 100 },
        push: { quantity: 4 }
      }
    },
    detectRetina: true
  });
}

const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  const isLight = savedTheme === 'light';
  if (isLight) {
    document.body.classList.add('light-theme');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  }
  loadParticles(isLight);
});

themeToggle.addEventListener('click', () => {
  const isLight = document.body.classList.toggle('light-theme');
  themeIcon.classList.toggle('fa-sun');
  themeIcon.classList.toggle('fa-moon');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  
  const existingParticles = tsParticles.domItem(0);
  if (existingParticles) existingParticles.destroy();
  
  loadParticles(isLight);
});

// Assuming you already have light/dark mode logic, just update the root variables
const filterButtons = document.querySelectorAll('.filter-btn');
const skillBoxes = document.querySelectorAll('.skill-box');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.filter;

    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    skillBoxes.forEach(box => {
      if (category === 'all' || box.classList.contains(category)) {
        box.style.display = 'flex';
      } else {
        box.style.display = 'none';
      }
    });
  });
});

// Contact form popup
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Your message has been sent successfully!");
  this.reset();
});

// Smooth scroll for "Let's Connect" button (on home section)
document.querySelectorAll('a[href="#contact"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
  });
});

// Theme-based title color toggle for contact title
function updateContactTitleColor(theme) {
  const title = document.querySelector(".contact-title");
  if (theme === "light") {
    title.style.color = "red";
  } else {
    title.style.color = "white";
  }
}

// OPTIONAL: Call this function when toggling theme
// updateContactTitleColor("light") or updateContactTitleColor("dark")
document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.getElementById("customCursor");

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX - 20}px`;
    cursor.style.top = `${e.clientY - 20}px`;
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const stars = document.querySelectorAll(".star");
  let totalRatings = parseInt(localStorage.getItem("totalRatings")) || 0;
  let totalScore = parseInt(localStorage.getItem("totalScore")) || 0;

  // We won’t show this info on page, so no need to updateDisplay
  function updateDisplay() {
    // If needed for debug: console.log(`Avg: ${(totalScore / totalRatings).toFixed(1)} from ${totalRatings}`);
  }

  updateDisplay();

  stars.forEach((star, index) => {
    star.addEventListener("click", () => {
      const rating = index + 1;

      // Save rating
      totalRatings += 1;
      totalScore += rating;
      localStorage.setItem("totalRatings", totalRatings);
      localStorage.setItem("totalScore", totalScore);
      updateDisplay();

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
});
// Mobile Menu Toggle
// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navRight = document.querySelector('.nav-right');

hamburger.addEventListener('click', () => {
  navRight.classList.toggle('show');
  hamburger.classList.toggle('active');
});

// Close menu when clicking on nav items
document.querySelectorAll('.nav-right a').forEach(item => {
  item.addEventListener('click', () => {
    navRight.classList.remove('show');
    hamburger.classList.remove('active');
  });
});
