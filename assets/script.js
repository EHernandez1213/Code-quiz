var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts",
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses",
    },
    {
        title: "Arrays in JavaScript can be used to store ____.",
        choices: [
            "numbers and strings",
            "other arrays",
            "booleans",
            "all of the above",
        ],
        answer: "all of the above",
    },
    {
        title:
            "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes",
    },
    {
        title:
            "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
        answer: "console.log",
    },
];

var i =0;
var time = 60;

document.getElementById('startBtn').onclick = function(){

    document.getElementById('startBtn').style.display ='none';
    document.getElementById('intro').style.display ='none';

showQuestion();

setInterval(()=>{
if(time >0 && i< questions.length);
    {time --
    document.getElementById('time').innerHTML = time}
}, 1000);
   


}

function showQuestion(){
if(i< questions.length){

    document.getElementById('question').innerHTML=
    `
    <p>${questions[i].title}</p>
    `
    document.getElementById('answers').innerHTML=
    `
    <button>${questions[i].choices[0]}</button>
    <button>${questions[i].choices[1]}</button>
    <button>${questions[i].choices[2]}</button>
    <button>${questions[i].choices[3]}</button>
    `
} else{
    displayScore();
}
}


document.getElementById('answers').onclick= function(e){
    if(e.target.innerText ==questions[i].answer ){
        document.getElementById('check').innerHTML = 'correct';
    }else{
        document.getElementById('check').innerHTML = 'wrong';
        time -+ 10;
    }
i++
showQuestion();
}

function displayScore(){
    document.getElementById('final').style.display='block';
    document.getElementById('question').style.display='none';
    document.getElementById('answers').style.display='none';
    document.getElementById('check').style.display='none';
    document.getElementById('scores').innerHTML = time;
}

document.getElementById('submitBtn').onclick= function (){
    var name = document.getElementById('name').value;
    localStorage.setItem('name', JSON.stringify(name));
    localStorage.setItem('score', JSON.stringify(time));

}

document.getElementById('highscoreBtn').onclick= function (){
    var highscores = JSON.parse(localStorage.getItem('name'))
}