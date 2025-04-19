const quoteDiv = document.getElementById('quote');
const author = document.getElementById("author");
const loadBtn = document.getElementById('loadQuote');


function loadQuote() {
    quoteDiv.innerText = "Loading...";
  
    fetch("https://api.quotable.io/random")
      .then(res => res.json())
      .then(data => {
        quoteDiv.innerText = `"${data.content}"`;  
        author.innerText = `– ${data.author}`;
      })
      .catch(() => {
        quoteDiv.innerText = "Failed to load quote. Try again.";
        author.innerText = "";
      });
  }

// Add event listener to the button
loadBtn.addEventListener('click', loadQuote);

// Load a quote when the page loads
loadQuote();


  
