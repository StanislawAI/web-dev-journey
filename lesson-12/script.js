const helloBtn = document.getElementById("hello-btn")
const goodbyeBtn = document.getElementById("goodbye-btn")
const surpriseBtn = document.getElementById('surprise-btn')


helloBtn.addEventListener('click', function() {
    alert('Hello!')
});

goodbyeBtn.addEventListener('click', function() {
    alert('Goodbye!')
});


surpriseBtn.addEventListener('click', function() {
    alert('Surprise!')
});

