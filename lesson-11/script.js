// Grab button element
const greetBtn = document.getElementById('greet-btn');

// Add click event listener
greetBtn.addEventListener('click', function() {
  // Prompt the user to enter their name
  const userName = prompt('What is your name?');

  // Display personalized greeting
  if (userName) {
    alert('Hello, ' + userName + '! Nice to meet you.');
  } else {
    alert('Hello! Nice to meet you.');
  }
});