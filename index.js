// prompt sync is a program added as a dependency
const prompt = require('prompt-sync')();

function greet(namePassedIn) {
  return `Welcome to SALT, ${name}`;
}

// Main program
// sparar det som skrivs i prompten som en variabel
const name = prompt('What is your name? ');
const greeting = greet(name);
console.log(greeting);

module.exports.greet = greet;