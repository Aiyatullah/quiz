//this is for the questions
//you can change any question

var questions =[
    {
        question: "What is the capital of India",
        options:["Mumbai","Delhi","Kolkata","Surat"],
        //note this is array
        correctAnswer:"Delhi"
    },
    {
        question: "What is 10 + 59?",
        options: ["49", "59", "69", "79"],

        correctAnswer: "69"
    },
    {
        question:"Who is the creator of this website",
        options:["Aiyatullah","you","please dont tell me its you","no way"],

        correctAnswer:"Aiyatullah",
    },
    {
        question: "What never comes in admin life",
        options:["A new job","Happiness","A new house","A new girl"],

        correctAnswer:"Happiness",
    },
    {
        question: "why are you stil here",
        options:["just to see what lies","aise hi","bakchodi"],

        correctAnswer: "just to see what lies"
    },
    {
        question:"Which of the following country comes under asia",
        options:["russia","usa","Saudi Arabia","Afghanistan"],

        correctAnswer:"Afghanistan",        
    },
    {
        question: "Is this the last question",
        options:["yes","no","lets see"],

        correctAnswer:"lets see",
    },
    {
        question:"yup this is the last just click ok",
        options:["ok","I fooled you","or i didnt?"],

        correctAnswer:"I fooled you",
    }
// add more question
// // {
//     question:"",
//     option:["",""],
//     correctAnswer:"",
// },
// ....
// 

]

//to traverse the array index set to zero
var index = 0;



function startnow() {
    //
    //No need to specify i taken care of it
    var question = questions[index];
    document.getElementById("question").innerHTML = question.question;
    document.getElementById("options").innerHTML = question.options.map(function(option) {
        return "<input type='radio' name='answer' value='" + option + "'>" + option;
    }).join("<br>");
    // Dont change the input type to checkbox for obvious reason
    //TOld u..!
}


var count=0;
// to check the correct answer count



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

    //you can remove alert and send it into msg
    index++;

    if (index < questions.length) {
        startnow();
        } else {
            alert("You have completed the quiz!");
            
        document.getElementById("final").innerHTML = "Total correct answers are " + count + " " +"/"+ index;
        document.getElementById("visit").innerHTML =text;
        //you can change the answer likewise
    }
}
//Final Answer
