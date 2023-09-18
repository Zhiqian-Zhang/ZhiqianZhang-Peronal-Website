document.addEventListener("DOMContentLoaded", () => {
  // Sections to be shown
  const sections = document.querySelectorAll(".section");

  // Initially hide all sections
  sections.forEach((section) => {
    section.style.opacity = 0;
  });

  // Show the first section
  sections[0].style.opacity = 1;

  // Event listener for scrolling
  window.addEventListener("scroll", () => {
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        // Display the current section
        section.style.opacity = 1;
      }
    });
  });
});
