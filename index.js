// prompt sync is a program added as a dependency
const prompt = require("prompt-sync")()

function greet(namedPassedIn) {
  return "Welcome to SALT, " + namedPassedIn
}

// Main program
// sparar det som skrivs i prompten som en variabel
const name = prompt("What is your name? ")
console.log(greet(name))

module.exports.greet = greet
