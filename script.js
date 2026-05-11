//Project-Calculator

let displaySmall = document.querySelector(".displaySmall");
let displayBig = document.querySelector(".displayBig");



let firstOperand = 0;
let secondOperand = 0;
let operator = "";








// //just to check float num.. and make it looks good with important digit showing only
// let show = operate(6, "÷", 9);
// // let show = 1001.5
// if (Number.isInteger(show)) {
//     displayBig.textContent = show;
// } else {
//     displayBig.textContent = parseFloat(show.toFixed(3));
// }


let allDigits = document.querySelectorAll(".digit");

// console.log(allDigits);

let currentNumber = 0;
let previousNumber = 0;

let currentClick = 0;
let previousClick = 0;
let beforeExpression = '';


//when digit(1 to 9 plus .) click do following
for (let digit of allDigits) {
    digit.addEventListener("click", (event) => {
        previousClick = currentClick;
        currentClick = event.target.textContent;

   
        beforeExpression = operatorPlusBefore;


        displayBig.textContent += event.target.textContent;


        previousNumber = currentNumber;
        currentNumber = displayBig.textContent;

        console.log("currentNumber operand is ", currentNumber);
        console.log("previousNumber operand is ", previousNumber);
    });
}


//editing previousNumber into firstOperand


//when operator button pressed
let allOperators = document.querySelectorAll(".operator");
let currentOperator = '';
let operatorPlusBefore = ``;
for (let operator of allOperators) {
    operator.addEventListener("click", (event) => {
        previousNumber = displayBig.textContent;
        displayBig.textContent = "";
        previousClick = currentClick;
        currentClick = event.target.textContent;  //Store which btn is just clicked
        currentOperator = event.target.textContent;
        operatorPlusBefore += `${currentNumber} ${currentOperator} `;
        displaySmall.textContent = operatorPlusBefore;

    })
    console.log(operator.textContent)

}

//when "Equal To" button pressed 
let equalsBtn = document.querySelector("#equals");
let soln;
equalsBtn.addEventListener("click", (event) => {
    previousClick = currentClick;
    currentClick = event.target.textContent;  //Store which btn is just clicked

    soln = operate(currentNumber, currentOperator, previousNumber);
    displayBig.textContent = soln;

    // change current number to calculated ans 
    previousNumber = currentNumber;
    currentNumber = soln;
    console.log(currentNumber);
    console.log(previousNumber);
    
    
})



//When "CLEAR" button pressed
let clearBtn = document.querySelector("#clear");
function whenClearClick(){
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
    return (a  / b);
}