// Create the toggle button
const toggleButton = document.createElement('button');
toggleButton.className = 'dark-mode-toggle';
toggleButton.textContent = 'Toggle Dark Mode';
document.body.appendChild(toggleButton);

// Toggle dark mode function
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');

  // Update button text based on the current mode
  if (document.body.classList.contains('light-mode')) {
    toggleButton.textContent = 'Toggle Dark Mode';
  } else {
    toggleButton.textContent = 'Toggle Light Mode';
  }
});
