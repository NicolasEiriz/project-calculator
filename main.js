// Create a basic HTML calculator with buttons for each digit, each of the above functions and an “Equals” key.
// Do not worry about wiring up the JS just yet.
// There should also be a display for the calculator. Go ahead and fill it with some dummy numbers so it looks correct.
// Add a “clear” button.

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

/*Your calculator is going to contain functions for all of the basic math operators you typically find on simple calculators, so start by creating functions for the following items and testing them in your browser’s console.
add, subtract, multiply, divide*/

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
  
  // Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
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
    },

  // Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use in the next step.
 
 
  // Make the calculator work! You’ll need to store the first number that is input into the calculator when a user presses an operator, and also save which operation has been chosen and then operate() on them when the user presses the “=” key.
  // You should already have the code that can populate the display, so once operate() has been called, update the display with the ‘solution’ to the operation.
  // This is the hardest part of the project. You need to figure out how to store all the values and call the operate function with them. Don’t feel bad if it takes you a while to figure out the logic.
 
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
      if(this.firstNumber !== null && this.display !== null){

        this.operate(this.operatorSelected, +this.firstNumber, +this.display)
        this.display = this.output
        this.screen.value = this.display
        this.firstNumber = null
        
      } else{
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

        case '.':
        this.display += '.'
        this.screen.value = this.display
        break;

      default:

      this.selectOperator(value)
      this.screen.value = value
      this.display = ''
    }
  }
    
  }
},

  selectOperator(operator){
    this.firstNumber = this.display
    this.operatorSelected  = operator
  },
}
