/*Your calculator is going to contain functions for all of the basic math operators you typically find on simple calculators, so start by creating functions for the following items and testing them in your browser’s console.
add
subtract
multiply
divide*/


//Create function to add two numbers

function add(n1,n2){
  return n1 + n2
}


//Create function to subtract two numbers
function subtract(n1, n2){
  return n1 - n2
}

//Create function to multiply two numbers
function multiply(n1,n2){
  return n1 * n2
}

//Create function to divide two numbers
function divide(n1,n2){
  return n1 / n2
}



/*Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.*/

function operate(operator, n1, n2){
 return operator(n1,n2)
}

/*Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use in the next step.*/

//holds the buttons which have a number in a variable, node type

let buttons = document.querySelectorAll('.button')
console.log(buttons);

//add an event listener for Each buttons 

buttons.forEach(button=>{
button.addEventListener('click', populateDisplay)
})


function callCalculator(e){
  let operatorValue = e.target.textContent
  console.log(operatorValue)
}



//Set a variable display with a global scope, this variable will hold the current number o numbers selection

let display = ''

let operator

/*Create the functions that populate the display when you click the number buttons*/

function populateDisplay(e){
 display += e.target.textContent  
}

/*Make the calculator work! You’ll need to store the first number that is input into the calculator when a user presses an operator, and also save which operation has been chosen and then operate() on them when the user presses the “=” key.*/


let operators = document.querySelectorAll('.operator')
console.log(operators);

operators.forEach(operator=>{
  operator.addEventListener('click', storeFirstNum)
})

// store the first number that is input into the calculator when a user presses an operator,

let firstNumber
let operatorValue
let result 

let h2 = document.querySelector('h2')

function storeFirstNum(e){
  firstNumber = Number(display)
  operatorValue = e.target.textContent
  display = ''
}

let equalSign = document.querySelector('.equal')

equalSign.addEventListener('click', operate)

function operate(){
  
  if(operatorValue === '+'){
    result = add(firstNumber, Number(display))
  } 
    else if(operatorValue === '-'){
      result = subtract(firstNumber, Number(display))
    } 
      else if(operatorValue === '/'){
        result = display(firstNumber, Number(display))
      } else if(operatorValue === '*'){
        result =  multiply(firstNumber, Number(display))
      } else if(operator === 'clear'){
        display = ''
        firstNumber = 0
      }

      h2.textContent = result
      display = ''
      firstNumber = 0
}




/*You should already have the code that can populate the display, so once operate() has been called, update the display with the ‘solution’ to the operation.
This is the hardest part of the project. You need to figure out how to store all the values and call the operate function with them. Don’t feel bad if it takes you a while to figure out the logic.
*/
