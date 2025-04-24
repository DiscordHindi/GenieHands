// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Booking Form Submission
const bookingForm = document.getElementById('serviceBookingForm');
bookingForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const service = document.getElementById('service').value;
  const date = document.getElementById('date').value;
  alert(`You have booked a ${service} for ${date}`);
  bookingForm.reset(); // Reset form
});
