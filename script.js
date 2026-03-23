const sections = document.querySelectorAll(".section, .hero-content");
const navLinks = document.querySelectorAll(".nav-links a");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

sections.forEach((section) => {
  section.classList.add("reveal");
  revealObserver.observe(section);
});

const sectionIds = ["home", "projects", "about", "contact"];

window.addEventListener("scroll", () => {
  let currentSection = "home";

  sectionIds.forEach((id) => {
    const element = document.getElementById(id);
    if (!element) {
      return;
    }

    const top = element.offsetTop - 120;
    if (window.scrollY >= top) {
      currentSection = id;
    }
  });

  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${currentSection}`;
    link.classList.toggle("active", isActive);
  });
});
