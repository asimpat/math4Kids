"use strict";

let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let number1 = document.querySelector("#num1");
let number2 = document.querySelector("#num2");
let body = document.querySelector("#body");
let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");
let close = document.querySelector(".close-modal");
let answer = 0;

function generateQquation() {
    let num1 = Math.floor(Math.random() * 13);
    let num2 = Math.floor(Math.random() * 13);
    let dumpAnswer1 = Math.floor(Math.random() * 13);
    let dumpAnswer2 = Math.floor(Math.random() * 13);
    let allAnswer = [];
    let switchAnswer = [];

    answer = num1 * num2;
    // console.log(answer);
    number1.textContent = num1;
    number2.textContent = num2;

    allAnswer = [answer, dumpAnswer1, dumpAnswer2];
    // console.log(allAnswer);
    for (let i = allAnswer.length; i--;) {
        switchAnswer.push(
            allAnswer.splice(Math.floor(Math.random() * (i + 1)), 1)[0]
        );
        // console.log(switchAnswer);
    }

    option1.textContent = switchAnswer[0];
    option2.textContent = switchAnswer[1];
    option3.textContent = switchAnswer[2];

    body.style.backgroundColor = "rgba(128, 128, 128, 0.274)";
}

function closeModel() {
    body.style.backgroundColor = "red";
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    close.addEventListener("click", function(e) {
        modal.classList.add("hidden");
        overlay.classList.add("hidden");
        generateQquation();
    });
}
option1.addEventListener("click", function(e) {
    if (option1.textContent == answer) {
        generateQquation();
    } else {
        closeModel();
    }
});
option2.addEventListener("click", function(e) {
    if (option2.textContent == answer) {
        generateQquation();
    } else {
        closeModel();
    }
});
option3.addEventListener("click", function(e) {
    if (option3.textContent == answer) {
        generateQquation();
    } else {
        closeModel();
    }
});
generateQquation();