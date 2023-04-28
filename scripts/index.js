'use strict'

const addBtnEl = document.getElementById('addBtn');
addBtnEl.onclick = onAddBtnClicked;

const subtractBtnEl = document.getElementById('subtractBtn');
subtractBtnEl.onclick = onSubtractBtnClicked;

const multipleBtnEl = document.getElementById('multipleBtn');
multipleBtnEl.onclick = onMultipleBtnClicked;

const divideBtnEl = document.getElementById('divideBtn');
divideBtnEl.onclick = onDivideBtnClicked;

const num1El = document.getElementById('number1Field');
const num2El = document.getElementById('number2Field');
const answerEl = document.getElementById('answerField');

function onAddBtnClicked() {
    const answer = Number(num1El.value) + Number(num2El.value)
    answerEl.value = answer;
}
function onSubtractBtnClicked() {
    const answer = Number(num1El.value) - Number(num2El.value)
    answerEl.value = answer;
}
function onMultipleBtnClicked() {
    const answer = Number(num1El.value) * Number(num2El.value)
    answerEl.value = answer;
}
function onDivideBtnClicked() {
    const answer = Number(num1El.value) / Number(num2El.value)
    answerEl.value = answer;
}

