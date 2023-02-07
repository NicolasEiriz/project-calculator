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

//holds the buttons in a variable, node type

let buttons = document.querySelectorAll('button')
console.log(buttons);

//add an event listener for Each buttons

buttons.forEach(button=>{
button.addEventListener('click', populateDisplay)
})



//Set a variable display with a global scope

let display


/*Create the functions that populate the display when you click the number buttons*/

function populateDisplay(e){
  display = e.target.textContent;
}