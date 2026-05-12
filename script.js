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
        if(event.target.textContent === "." && currentNumber.includes(".")) return;


        currentNumber += event.target.textContent;
        displayBig.textContent = currentNumber;


    });
}


//editing previousNumber into firstOperand


//when operator button pressed
let allOperators = document.querySelectorAll(".operator");
let chain = "";
for (let operator of allOperators) {
    operator.addEventListener("click", (event) => {

        //check whether if idiot clicked operaor without operand firstOperand
        if(currentNumber === "" && firstOperand === "") return;

        //deletable code if statement only
        if (firstOperand != "" && currentNumber != "") {
            secondOperand = currentNumber;

            chain = operate(firstOperand, operatorBtn, secondOperand);
            if(chain === undefined) return;  //so that it just skip when it got undefined

            //chek if chain is is decimal or not if yes then take no more than 3 after deciaml
            if (Number.isInteger(chain)) {
                displayBig.textContent = chain;
            } else {
                displayBig.textContent = parseFloat(chain.toFixed(3));
            }


            // changing chain to string because slice only works on sting which i am using...
            currentNumber = String(chain);

        }


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
    //checking if idiot is pressiong "=" non-stop
    if (operatorBtn === "" || currentNumber === "") return;  
    secondOperand = currentNumber;

    soln = operate(firstOperand, operatorBtn, secondOperand);
    if(soln === undefined) return;

    //chek if soln is is decimal or not if yes then take no more than 3 after deciaml
    if (Number.isInteger(soln)) {
        displayBig.textContent = soln;
    } else {
        displayBig.textContent = parseFloat(soln.toFixed(3));
    }


    // changing soln to string because slice only works on sting which i am using...
    currentNumber = String(soln);

    //i think deletable code
    firstOperand = "";
    operatorBtn = "";


});


//When "CLEAR" button pressed
let clearBtn = document.querySelector("#clear");
function whenClearClick() {

    firstOperand = "";
    secondOperand = 0;
    operatorBtn = "";
    currentNumber = "";
    displayBig.textContent = "";
    displaySmall.textContent = "";

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
    let result;
    
    if (operator === "+") {
        result = add(firstOperand, secondOperand);
    } else if (operator === "-") {
        result = subtract(firstOperand, secondOperand);
    } else if (operator === "*") {
        result = multiply(firstOperand, secondOperand);
    } else if (operator === "÷") {
        result = divide(firstOperand, secondOperand);
    }

    return result;
}



//funct to add two numbers
function add(a, b) {
    //changing to number because + on string behave different
    return parseFloat(a) + parseFloat(b);
}

//function to subtract two numbers
function subtract(a, b) {
    return parseFloat(a) - parseFloat(b);
}

//function to multiply two numberts
function multiply(a, b) {
    return parseFloat(a) * parseFloat(b);
}



//function to divide two numbers
function divide(a, b) {
    if (parseFloat(b)===0) {
        displayBig.textContent = "ARE YOU IDIOT?";
        return;
    } else return parseFloat(a) / parseFloat(b);
}
