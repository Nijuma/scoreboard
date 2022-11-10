const plus1 = document.querySelectorAll(".plus1");
const plus2 = document.querySelectorAll(".plus2");
const plus3 = document.querySelectorAll(".plus3");
const score1 = document.querySelector(".score1");
const score2 = document.querySelector(".score2");
const reset = document.querySelector(".reset");
const scoreb = document.querySelector('.score-back1')
const scoreb2 = document.querySelector('.score-back2')

let totalHome = 0;
let totalGuest = 0;

function add1() {
  totalHome++;

  score1.textContent = totalHome;
}

function add2() {
  totalHome += 2;
  score1.textContent = totalHome;
}

function add3() {
  totalHome += 3;
  score1.textContent = totalHome;
}

function add1guest() {
  totalGuest++;

  score2.textContent = totalGuest;
}

function add2guest() {
  totalGuest += 2;
  score2.textContent = totalGuest;
}

function add3guest() {
  totalGuest += 3;
  score2.textContent = totalGuest;
}

function reseter() {
  totalGuest = 0;
  totalHome = 0;
  score1.textContent = 0;
  score2.textContent = 0;
}
if(score1 > score2){
  document.getElementById("scoreb").style.backgroundColor = 'green';
}
else if(totalGuest > totalHome){
 document.getElementById("scoreb2").style.backgroundColor = 'green';
}
else{
  totalGuest === totalHome
 document.getElementById("scoreb").style.backgroundColor ='black'
document.getElementById("scoreb2").style.backgroundColor = 'black'
}

