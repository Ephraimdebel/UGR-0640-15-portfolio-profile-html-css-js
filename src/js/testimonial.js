// JavaScript to slide testimonials one by one with dots

// Select all testimonial boxes and the container
const testimonials = document.querySelectorAll('.testimonial-box');
const dotsContainer = document.createElement('div');
dotsContainer.className = 'dots-container';
let currentIndex = 0; // Start with the first testimonial

// Add dots to the container based on the number of testimonials
testimonials.forEach((_, index) => {
  const dot = document.createElement('span');
  dot.className = 'dot';
  if (index === 0) dot.classList.add('active'); // Highlight the first dot initially
  dot.setAttribute('data-index', index);
  dotsContainer.appendChild(dot);
});
document.querySelector('.testimonials .main-container').appendChild(dotsContainer);

// Hide all testimonials initially
function hideAllTestimonials() {
  testimonials.forEach((testimonial) => {
    testimonial.style.display = 'none';
  });
}

// Show a specific testimonial by index
function showTestimonial(index) {
  testimonials[index].style.display = 'block';
  updateDots(index);
}

// Update the active dot
function updateDots(index) {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot) => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

// Initialize the testimonials by showing the first one
function initializeTestimonials() {
  hideAllTestimonials();
  showTestimonial(currentIndex);
}

// Function to move to the next testimonial
function slideTestimonials() {
  hideAllTestimonials(); // Hide the current testimonial
  currentIndex = (currentIndex + 1) % testimonials.length; // Move to the next one, loop back to the start
  showTestimonial(currentIndex); // Show the next testimonial
}

// Add event listener to dots for manual navigation
dotsContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('dot')) {
    currentIndex = parseInt(e.target.getAttribute('data-index'));
    hideAllTestimonials();
    showTestimonial(currentIndex);
  }
});

// Start the sliding functionality
initializeTestimonials();
setInterval(slideTestimonials, 3000); // Change testimonial every 3 seconds
