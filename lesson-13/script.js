// Select the counter div and the button

const counterDiv = document.getElementById('counter');
const incrementButton = document.getElementById('increment-btn')

// start the count at 0

let count = 0;

// add a click event to the button

incrementButton.addEventListener('click', function(){

    count++; // Increase count by 1
    counterDiv.innerText = count; //uptade the text in the counter

})