//Project-Calculator

let displaySmall = document.querySelector(".displaySmall");
let displayBig = document.querySelector(".displayBig");



let firstOperand = "";
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

        if (currentNumber === "") {
            operatorBtn = event.target.textContent;
            displaySmall.textContent = `${firstOperand} ${operatorBtn} `;
        } else {
            firstOperand = currentNumber;

            operatorBtn = event.target.textContent;


            displaySmall.textContent = `${firstOperand} ${operatorBtn} `;

            displayBig.textContent = "";
            currentNumber = "";
        }


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


    // changing soln to string because slice only works on sting which i am using...
    currentNumber = String(soln);


});


//When "CLEAR" button pressed
let clearBtn = document.querySelector("#clear");
function whenClearClick() {
    location.reload();
    // console.log("Hello, there!");

}
clearBtn.addEventListener("click", whenClearClick);


//When "DELETE" button pressed
let deleteBtn = document.querySelector("#delete");

deleteBtn.addEventListener("click", event => {

    //Dont execute delete click when pressed without any content
    if (currentNumber === "" && firstOperand === "") {
        return;
    } else if (currentNumber === "") {
        operatorBtn = "";
        displaySmall.textContent = "";
        //restoring earlier number which is stored in firstOperand
        currentNumber = firstOperand;

        //changing 1 below line to experiment
        // displaySmall.textContent = currentNumber;
        displayBig.textContent = currentNumber;
        firstOperand = "";

    } else {
        currentNumber = currentNumber.slice(0, -1);

        displayBig.textContent = currentNumber;
    }

});






































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


