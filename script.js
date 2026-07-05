const questions=[
{
question:"Which rule governs Joining Time?",
options:[
"CCS Leave Rules",
"FR & SR",
"GFR",
"Conduct Rules"
],
answer:1
},
{
question:"Which is a major penalty?",
options:[
"Censure",
"Dismissal",
"Warning",
"Advice"
],
answer:1
}
];

let current=0;

function loadQuestion(){

document.getElementById("qNo").innerHTML=
"Question "+(current+1)+" of "+questions.length;

document.getElementById("question").innerHTML=
questions[current].question;

document.getElementById("o1").innerHTML=
questions[current].options[0];

document.getElementById("o2").innerHTML=
questions[current].options[1];

document.getElementById("o3").innerHTML=
questions[current].options[2];

document.getElementById("o4").innerHTML=
questions[current].options[3];

}

if(document.getElementById("question")){

loadQuestion();

}

let time=5400;

setInterval(function(){

let m=Math.floor(time/60);

let s=time%60;

document.getElementById("timer").innerHTML=
String(m).padStart(2,"0")+":"+
String(s).padStart(2,"0");

time--;

},1000);

let p = document.getElementById("palette");

if (p) {

    p.innerHTML = "";

    for (let i = 0; i < questions.length; i++) {

        let btn = document.createElement("button");

        btn.innerHTML = i + 1;

        btn.onclick = function () {

            current = i;

            loadQuestion();

        };

        p.appendChild(btn);

    }

}
