'use strict';

const btn = document.querySelector(".check")
const input = document.querySelector(".guess")
const message = document.querySelector(".message")
const body = document.querySelector("body")
const againbtn = document.querySelector(".again")



let score = 20
let highscore = 0
let randomNumber = Math.floor(Math.random() * 20)+ 1



btn.addEventListener("click", function(){

    if(input.value < randomNumber && input.value && input.value <= 20 && input.value >= 1){
        message.textContent = "Try a higher number."
        score--;
       document.querySelector(".score").textContent = score
                if(score < 1){
                    message.textContent = "You lost the game."
                    document.querySelector(".score").textContent = "0"
                    body.style.backgroundColor = "darkred"
                }
    }if(input.value > randomNumber  && input.value && input.value < 20 && input.value >= 1){
        message.textContent = "Try a lower number."
        score--;
        document.querySelector(".score").textContent = score
                if(score < 1){
                    body.style.backgroundColor = "darkred"
                    message.textContent = "You lost the game."
                    document.querySelector(".score").textContent = "0"
                }
    }if(!input.value || input.value > 20 || input.value < 1){
        message.textContent = "Please enter a valid number."
     } 
    else if(input.value == randomNumber){
        message.textContent = "Congrats! You won."
        body.style.backgroundColor = "#60b347"
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
          }
    }
})



againbtn.addEventListener("click" ,againFunction);

function againFunction(){
    body.style.backgroundColor = "#222"
    message.textContent = "Start guessing..."
    randomNumber = Math.floor(Math.random() * 20)+ 1
    score= 20
    document.querySelector(".score").textContent = score
}