// scripts here:

    function submitQuiz() {
        console.log('submitted');

    // function which takes note of the answers by their names
        function answerScore (ques) {
            var options = document.getElementsByName(ques);
       //loops over the answer options
            for (var i = 0, length = options.length; i < length; i++) {
                  if (options[i].checked) {
            // saves the correct answer given its value
                    var ans = Number(options[i].value);
                }
            }
            // converts the saved answer to a number
            if (isNaN(ans)) {
             ans = 0;
            }
            return ans;
        }

    // computes the total score given their name and ans values
        var scoreCompute = (answerScore('q1') + answerScore('q2') + answerScore('q3') + answerScore('q4') + answerScore('q5')+ answerScore('q6'));

        console.log("CalcScore: " + scoreCompute); // it works!

// displays the correct answers if any submitted is wrong
        function correctAns (correctNo, quesNumber) {
            console.log("quesNumber: " + quesNumber);  // logs 1,2,3,4 after called below
            return ("The correct answer for question #" + quesNumber + ": &nbsp;<b>" +
                (document.getElementById(correctNo).innerHTML) + "</b>");
            }


        if (answerScore('q1') === 0) {
            document.getElementById('correctAnswer1').innerHTML = correctAns('correctString1', 1);
        }
        if (answerScore('q2') === 0) {
            document.getElementById('correctAnswer2').innerHTML = correctAns('correctString2', 2);
        }
        if (answerScore('q3') === 0) {
            document.getElementById('correctAnswer3').innerHTML = correctAns('correctString3', 3);
        }
        if (answerScore('q4') === 0) {
            document.getElementById('correctAnswer4').innerHTML = correctAns('correctString4', 4);
        }
        if (answerScore('q5') === 0) {
            document.getElementById('correctAnswer5').innerHTML = correctAns('correctString5', 5);
        }
        if (answerScore('q6') === 0) {
            document.getElementById('correctAnswer6').innerHTML = correctAns('correctString6', 6);
        }

        var queCountArr = document.getElementsByClassName('question');

        var queCounter = 0;
        for (var i = 0, length = queCountArr.length; i < length; i++) {
            queCounter++;
        }

    // show score
        var showScore = "Your Score is: " + scoreCompute +"/" + queCounter;
        if (scoreCompute === queCounter) {
            showScore = showScore + "&nbsp; <b>Perfect Score! </b>"
        };
        document.getElementById('totalScore').innerHTML = showScore;
    }

$(document).ready(function() {

    $('#submitButton').click(function() {
        $(this).addClass('hide');
    });

});
