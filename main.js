let buttons = document.querySelectorAll('button')

buttons.forEach(btn=>{
  btn.addEventListener('click', (e)=>{
    const {target} = e
    const {value}  = target
    calculator.populateDisplay(value)
  })
})


const calculator = {

  screen: document.querySelector('input'),
  display: '0',
  operatorSelected: null,
  firstNumber: null,
  output: null,
  
  add(n1,n2){
    return n1 + n2
  },

  subtract(n1,n2){
    return n1 - n2
  },

  multiply(n1,n2){
    return n1 * n2
  },

  divide(n1,n2){
    return n1 / n2
  },
  
  populateDisplay(value){
    if(!isNaN(Number(value))){
    if(this.display == '0'){

      this.display = ''
      this.display += value
      this.screen.value = this.display

    } else{

      this.display += value
      this.screen.value = this.display
    }
  }
    else{
      switch (value){
        
        case '=':
        this.operate(this.operatorSelected, +this.firstNumber, +this.display)
        this.display = this.output
        this.screen.value = this.display
        break;
       
        case 'AC':
          this.display = '0'
          this.firstNumber = null
          this.output = null
          this.screen.value = 0
          break;

      default:

      this.selectOperator(value)
      this.screen.value = value
      this.display = ''
    }
    
    
  }
},

  selectOperator(operator){
    this.firstNumber = this.display
    this.operatorSelected  = operator
  },

  operate(operator, n1, n2){
    switch(operator){

        case '+':
          this.output = this.add(n1,n2)
          break;

        case '-':
          this.output = this.subtract(n1,n2)
          break;
        
        case '/':
          this.output = this.divide(n1,n2)
          break;

        case '*':
          this.output = this.multiply(n1,n2)
          break;
    }
  }
}




// //Create function to add two numbers

// function add(n1,n2){
//   return n1 + n2
// }

// //Create function to subtract two numbers
// function subtract(n1, n2){
//   return n1 - n2
// }

// //Create function to multiply two numbers
// function multiply(n1,n2){
//   return n1 * n2
// }

// // //Create function to divide two numbers
// // function divide(n1,n2){
// //   return n1 / n2
// // }


// /*Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.*/

// function operate(operator, n1, n2){
//   if(operator == '+'){
//     return add(n1,n2)
//   }
//     else if(operator == '-'){
//       return subtract(n1,n2)
//     }
//       else if(operator == '/'){
//         return divide(n1,n2)
//       } 
//         else if(operator == '*'){
//           return multiply(n1,n2)
//         }
 
// }

// /*Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use in the next step.*/

// //Set a variable display with a global scope, this variable will hold the current number o numbers selection

// let display = document.querySelector('#display')
// let displayValue = ''

// //holds the buttons which have a number in a variable, node type

// let Numberbuttons = document.querySelectorAll('.number')
// console.log(Numberbuttons);

// //add an event listener for Each buttons 

// Numberbuttons.forEach(button=>{
// button.addEventListener('click', (e)=>{
//   display.textContent += e.target.textContent
//   displayValue = display.textContent
  
// })
// })




// //You’ll need to store the first number that is input into the calculator when a user presses an operator

// //and also save which operation has been chosen and then operate() on them when the user presses the “=” key.

// let firstNumber
// let operatorSelected


// let operators = document.querySelectorAll('.operator')


// operators.forEach(operator=>{
//   operator.addEventListener('click', (e)=>{
    
//     firstNumber = Number(displayValue)
//     operatorSelected = e.target.textContent
//     console.log(firstNumber, operatorSelected)
//     display.textContent = '';
//   })
// })

// //save which operation has been chosen and then operate() on them when the user presses the “=” key.

// let equalOperator = document.querySelector('.equal')



// equalOperator.addEventListener('click', ()=>{
//   const result = operate(operatorSelected, firstNumber, Number(display.textContent))

//   populateDisplay(`${firstNumber} ${operatorSelected} ${display.textContent} = ${result}`)
  
// })


// /*Create the functions that populate the display when you click the number buttons*/

// function populateDisplay(num){
//   display.textContent = num

// }


// document.querySelector('.clear').addEventListener('click', ()=>{
//   document.querySelector('.message').classList.toggle('toogle')
//   firstNumber = 0
//   display.textContent = ''
  
// })