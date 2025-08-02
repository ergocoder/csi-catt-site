// Smooth scroll for navbar links
const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Make logos scroll to top
const logos = document.querySelectorAll('.clickable');
logos.forEach(logo => {
  logo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Form submission to Formspree
const form = document.querySelector('form');
form.setAttribute('action', 'https://formspree.io/f/xnnzbpkr'); // Replace with your real Formspree endpoint
form.setAttribute('method', 'POST');

form.addEventListener('submit', function (e) {
  alert("Form submitted! Thank you.");
});
