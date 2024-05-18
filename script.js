// Toggle menu for mobile view
function toggleMenu() {
  const menu = document.querySelector('.nav-menu ul');
  menu.classList.toggle('hidden');
}

// Add event listener for the hamburger menu
document.querySelector('.hamburger').addEventListener('click', toggleMenu);

// Smooth scrolling for navigation links and scroll-down arrow
document.querySelectorAll('nav a, .scroll-down a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Slideshow functionality
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.querySelectorAll(".mySlides");
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex - 1].style.display = "block";  
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}

// Additional JS for any new features or enhancements
// Example: Animated hero section content
window.addEventListener('scroll', function() {
  const heroContent = document.querySelector('.hero-content');
  const scrollPosition = window.scrollY;
  if (scrollPosition > 50) {
      heroContent.classList.add('scrolled');
  } else {
      heroContent.classList.remove('scrolled');
  }
});

// Smooth scrolling for additional buttons
document.querySelectorAll('.cta-button').forEach(button => {
  button.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
