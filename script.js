//Project-Calculator

let displaySmall = document.querySelector(".displaySmall");
let displayBig = document.querySelector(".displayBig");



let firstOperand = 0;
let secondOperand = 0;
let operatorBtn = "";

let currentNumber = "";


let allDigits = document.querySelectorAll(".digit");
displayBig.textContent = "";
//when digit(1 to 9 plus .) click do following
for (let digit of allDigits) {
    digit.addEventListener("click", (event) => {


        currentNumber += event.target.textContent;
        displayBig.textContent = currentNumber;


    });
}


//editing previousNumber into firstOperand


//when operator button pressed
let allOperators = document.querySelectorAll(".operator");
for (let operator of allOperators) {
    operator.addEventListener("click", (event) => {
        firstOperand = currentNumber;

        operatorBtn = event.target.textContent;


        displaySmall.textContent = `${firstOperand} ${operatorBtn} `;

        displayBig.textContent = "";
        currentNumber = "";

    })
    // console.log(operatorBtn.textContent);

}

//when "Equal To" button pressed 
let equalsBtn = document.querySelector("#equals");
let soln;
equalsBtn.addEventListener("click", (event) => {
    secondOperand = currentNumber;

    soln = operate(firstOperand, operatorBtn, secondOperand);

    //chek if soln is is decimal or not if yes then take no more than 3 after deciaml
    if (Number.isInteger(soln)) {
        displayBig.textContent = soln;
    } else {
        displayBig.textContent = parseFloat(soln.toFixed(3));
    }


    //delete this
    currentNumber = soln;


});
// //just to check float num.. and make it looks good with important digit showing only
// let show = operate(6, "÷", 9);
// // let show = 1001.5
// if (Number.isInteger(show)) {
//     displayBig.textContent = show;
// } else {
//     displayBig.textContent = parseFloat(show.toFixed(3));
// }



//When "CLEAR" button pressed
let clearBtn = document.querySelector("#clear");
function whenClearClick() {
    location.reload();
    // console.log("Hello, there!");

}
clearBtn.addEventListener("click", whenClearClick);


//When "DELETE" button pressed
let deleteBtn = document.querySelector("#delete");
function whenDeleteClick() {
    location.reload();
    // console.log("Hi, there!");
}
deleteBtn.addEventListener("click", whenDeleteClick);






































//function to operate one by one 
function operate(firstOperand, operator, secondOperand) {

    if (operator === "+") {
        return add(firstOperand, secondOperand);
    } else if (operator === "-") {
        return subtract(firstOperand, secondOperand);
    } else if (operator === "*") {
        return multiply(firstOperand, secondOperand);
    } else if (operator === "÷") {
        return divide(firstOperand, secondOperand);
    }
}



//funct to add two numbers
function add(a, b) {
    //changing to number because + on string behave different
    return parseFloat(a) + parseFloat(b);
}

//function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

//function to multiply two numberts
function multiply(a, b) {
    return a * b;
}

//function to divide two numbers
function divide(a, b) {
    return (a / b);
}


