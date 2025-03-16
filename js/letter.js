document.addEventListener('DOMContentLoaded', () => {
  // Add click event listener to elements with class 'frame'
  document.querySelectorAll('.frame').forEach((frame) => {
    frame.addEventListener('click', () => {
      document.querySelectorAll('.top').forEach((top) => top.classList.add('open'));
      document.querySelectorAll('.message').forEach((message) => message.classList.add('pull'));
      document.querySelectorAll('.button').forEach((btn) => btn.classList.add('show'));;
    });
  });

  // Get the modal, button, and close elements
  const modal = document.getElementById('myModal');
  const btn = document.getElementById('myBtn');
  const span = document.querySelector('.close');

  // Open the modal when the button is clicked
  if (btn) {
    btn.addEventListener('click', () => {
      if (modal) modal.style.display = 'block';
    });
  }

  // Close the modal when the close button is clicked
  if (span) {
    span.addEventListener('click', () => {
      if (modal) modal.style.display = 'none';
    });
  }

  // Close the modal when clicking outside of it
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});
