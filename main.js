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
  if(operator == '+'){
    return add(n1,n2)
  }
    else if(operator == '-'){
      return subtract(n1,n2)
    }
      else if(operator == '/'){
        return divide(n1,n2)
      } 
        else if(operator == '*'){
          return multiply(n1,n2)
        }
 
}

/*Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use in the next step.*/

//Set a variable display with a global scope, this variable will hold the current number o numbers selection

let display = document.querySelector('#display')
let displayValue = ''

//holds the buttons which have a number in a variable, node type

let Numberbuttons = document.querySelectorAll('.number')
console.log(Numberbuttons);

//add an event listener for Each buttons 

Numberbuttons.forEach(button=>{
button.addEventListener('click', (e)=>{
  display.textContent += e.target.textContent
  displayValue = display.textContent
  
})
})




//You’ll need to store the first number that is input into the calculator when a user presses an operator

//and also save which operation has been chosen and then operate() on them when the user presses the “=” key.

let firstNumber
let operatorSelected


let operators = document.querySelectorAll('.operator')


operators.forEach(operator=>{
  operator.addEventListener('click', (e)=>{
    
    firstNumber = Number(displayValue)
    operatorSelected = e.target.textContent
    console.log(firstNumber, operatorSelected)
    display.textContent = '';
  })
})

//save which operation has been chosen and then operate() on them when the user presses the “=” key.

let equalOperator = document.querySelector('.equal')



equalOperator.addEventListener('click', ()=>{
  const result = operate(operatorSelected, firstNumber, Number(display.textContent))

  populateDisplay(`${firstNumber} ${operatorSelected} ${display.textContent} = ${result}`)
  
})


/*Create the functions that populate the display when you click the number buttons*/

function populateDisplay(num){
  display.textContent = num

}


document.querySelector('.clear').addEventListener('click', ()=>{
  document.querySelector('.message').classList.toggle('toogle')
  firstNumber = 0
  display.textContent = ''
  
})