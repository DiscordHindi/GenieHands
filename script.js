document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Dark Mode Toggle
  const toggleDark = document.getElementById("toggleDark");
  toggleDark.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  // Testimonial Slider
  let testimonials = document.querySelectorAll(".testimonial");
  let currentIndex = 0;

  function changeTestimonial() {
    testimonials[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % testimonials.length;
    testimonials[currentIndex].classList.add("active");
  }

  setInterval(changeTestimonial, 3000); // Change testimonial every 3 seconds
  testimonials[currentIndex].classList.add("active"); // Initial active testimonial
});
