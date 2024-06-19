let num1=344;
let num2=58;
document.getElementById("num1").textContent=num1;
document.getElementById("num2").textContent=num2;


let resultEl=document.getElementById("result");

function add(){
    let result = num1 + num2;
    resultEl.textContent = "sum:" + result;
}
function subtract(){
    let result = num1 - num2;
    resultEl.textContent = "subtract:" + result;
}
function multiply(){
    let result = num1 * num2;
    resultEl.textContent = "multiply:" + result;
}
function division(){
    let result = num1 / num2;
    resultEl.textContent = "division:" + result;
}