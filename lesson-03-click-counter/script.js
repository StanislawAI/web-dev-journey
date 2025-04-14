// Initialize count from localStorage or default to 0
let count = parseInt(localStorage.getItem('count')) || 0;

// Get elements
const btn = document.getElementById('btn');
const display = document.getElementById('count');
const resetBtn = document.getElementById("reset-btn"); // Get reset button here

// Set initial display
display.innerText = count;

// Add click listener for the main button
btn.addEventListener('click', function() {
  count += 1;
  display.innerText = count;
  localStorage.setItem('count', count); // Update localStorage here
});

// Add click listener for the reset button
resetBtn.addEventListener('click', function() {
  count = 0;
  display.innerText = count;
  localStorage.setItem('count', count); // Update localStorage here
});








