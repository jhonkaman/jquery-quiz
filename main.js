// main.js

let max = 3;
let currentQuestion = 0;

let score = 0;
localStorage.setItem("Score", score);

// CLICK NEXT BUTTON
$('button').on('click', function() {
  let checkedRadio = $('input[type="radio"]:checked');

  if (checkedRadio.length > 0 && checkedRadio.data('answer')) {
    score++;
    localStorage.setItem("Score", score);
  }

  currentQuestion++;

  if (currentQuestion == max) {
    $('#container').load('questions/final.html');
    $('button').prop('disabled', true);
  } else {
    $('#container').load('questions/question-' + currentQuestion + '.html');
  }

});
