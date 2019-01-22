// cash machine withdrawal code
// js

let pinCorrect = false;
let attempts = 0;
let balance = 1000;

// define withdraw function
const withdraw = (pin, amount) => {
  
  // pin check
  if(pin === 1111) {
    pinCorrect = true
  }
  else(pinCorrect = false);
  
  // lock out of the account if attempts > 3
  if (attempts >= 3) {
    console.log(`This account has been locked due to security reasons`)
  } 
  
  // both correct - withdraw
  else if(pinCorrect === true && balance >= amount) {
    console.log(`You have successfully withdrawn £${amount}. \n Your balance is now £${balance - amount}`)
    balance = balance - amount
  }
  
  // both incorrect
  else if (pinCorrect === false && balance < amount) {
    attempts++
    console.log(`Your PIN number is incorrect and you have less cash in your account than you are attempting to withdraw. Looks like a bad day. Withdrawal unsuccessful. \nAttempts made: ${attempts} `)
    console.log(`Three unsuccessful PIN attempts will lock you out of this account for security reasons`)
  } 
  
  // pin false, enough balance available
  else if (pinCorrect === false && balance >= amount) {
    attempts ++
    console.log(`PIN incorrect. Withdrawal unsuccessful. \nAttempts made: ${attempts}`)
    console.log(`Three unsuccessful PIN attempts will lock you out of this account for security reasons`)
  } 
  
  // pin true, not enough balance available
  else if (pinCorrect === true && balance < amount) {
    console.log(`Your PIN was correct, but you have insufficient funds for this withdrawal. Withdrawal unsuccessful.`)
  } 
  
  // any other option
  else {
    console.log(`Something went wrong. Withdrawal unsuccessful.`)
  }
  
}

// use withdraw(pin, amount) to try and withdraw some cash
