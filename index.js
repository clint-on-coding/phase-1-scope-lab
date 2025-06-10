// Write your solution in this file!
// 1. Declare a global variable called customerName using var
var customerName = 'bob';

// 2. Function to uppercase the global customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3. Function to set a global bestCustomer variable
function setBestCustomer() {
  bestCustomer = 'not bob'; // becomes global since no var/let/const is used
}

// 4. Function to overwrite the bestCustomer variable
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// 5. Declare a constant in global scope
const leastFavoriteCustomer = 'Karen';

// 6. Function that tries to change the constant
function changeLeastFavoriteCustomer() {
  // This will throw an error because you can't reassign a const
  leastFavoriteCustomer = 'someone else';
}

