
var questions =[
    {
        question: "What is the capital of India",
        options:["Mumbai","Delhi","Kolkata","Surat"],
        correctAnswer:"Delhi"
    },
    {
        question: "What is 10 + 59?",
        options: ["49", "59", "69", "79"],
        correctAnswer: "69"
    },
    
]


var index = 0;

function startnow() {
    // Specify the index of the question you want to display
    var question = questions[index];
    document.getElementById("question").innerHTML = question.question;
    document.getElementById("options").innerHTML = question.options.map(function(option) {
        return "<input type='radio' name='answer' value='" + option + "'>" + option;
    }).join("<br>");
}

var count=0;

function checkAnswer() {
    var selectedAnswer = document.querySelector('input[name="answer"]:checked').value;
    var correctAnswer = questions[index].correctAnswer;
    text="Please visit again..!"
    if (selectedAnswer === correctAnswer) {
        alert("Correct answer!");
        count++;
    } else {
        alert("Incorrect answer. The correct answer is " + correctAnswer + ".");
    }
    index++;
    if (index < questions.length) {
        startnow();
        } else {
            alert("You have completed the quiz!");
            
        document.getElementById("final").innerHTML = "Total correct answers are " + count;
        document.getElementById("visit").innerHTML =text;
    }
}
