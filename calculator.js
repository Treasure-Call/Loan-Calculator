document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(evt) {
      evt.preventDefault();
      update();
    });
  }
});

function getUserValues() {
  return {
    // The value of amount, years, and rate  will be a num
    amount: (document.getElementById("loan-amount").value),
    years: (document.getElementById("loan-years").value),
    rate: (document.getElementById("loan-rate").value),
  };
}

function setupIntialValues() {
  // Put some default values in the inputs
  const userValues = {
    amount: 500000,
    years: 10,
    rate: 2.5
  };
  
  // Get the inputs from the DOM.
  const userAmount = document.getElementById("loan-amount"); 
    userAmount.value = userValues.amount;
  const userYears = document.getElementById("loan-years");
    userYears.value = userValues.years;
  const userRate = document.getElementById("loan-rate");
    userRate.value = userValues.rate;
    // Call a function to calculate the current monthly payment
    update();
}

function update() {
  // Get the current values from the UI
  const currentUserVals = getUserValues();
  // Update the monthly payment
  newMonthly(calcMonthlyPayment(currentUserVals));
}

function calcMonthlyPayment(userValues) {
  // Given an object of values (a value has amount, years, and rate)
  const monthlyRate = (userValues.rate / 100) / 12;
  const n = Math.floor(userValues.years * 12);
  return (
    // Calculate the monthly payment 
    (monthlyRate * userValues.amount) /
    (1 - Math.pow((1 + monthlyRate), -n))
    // The output should be a string that always has 2 decimal places
  ).toFixed(2);
}

function newMonthly(monthly) {
  const monthlyPayment = document.getElementById("monthly-payment");
  // Update the UI to show the value
  // Given a string representing the monthly payment value
  monthlyPayment.innerText = "$" + monthly;
}

/*

html:
  id="calc-form"
  id="loan-amount"
  id="loan-years"
  id="loan-rate"
  id="calc-submit"
  id="monthly-payment"


variables:
  form 
    - from ID: calc-form
  userValues
    - numbers the user inputs
  userAmount
    - the user input value of "userAmount" that we get from our html, will equal userValues.amount
  userYears
    - the user input value of "userYears" that we get from our html, will equal userValues.years
  userRates
    - the user input value of "userRate" that we get from our html, will equal userValues.rate
  monthlyRate
    - the user input for rate /100 then multiplied by 12.
  n 
    - n is the numbers of years the user inputs divided by 12.
  monthlyPayment
    - is the monthly payment for the user based upon inputs, from id="monthy=payment"


functions:

  getUserValues()
    -gives amount, year, and rate numerical values that the user inputs
  setupIntialValues()
    - where we get out user inputs from the DOM and assign them variable to be used later
  newMonthly()
    - returns the monthly payment to the user
  calcMonthlyPayment() 
    - within this function our monthly rate is calculated
  update()
    - this will take the userValues and calculate the monthly payment which will give us the new monthly payment
  toFixed()
    - fixed-point notation to 2 decimal points (2)

Adapted from Springboard "Loan Calculator" solution. 2/3/2022.

*/