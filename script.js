'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = ' Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

document.querySelector('.check').addEventListener('click', function (){
    const guess = Number(document.querySelector('.guess').value);

    if(!guess){
        document.querySelector('.message').textContent = ' 🚩 Please input a Number';


    }
});
