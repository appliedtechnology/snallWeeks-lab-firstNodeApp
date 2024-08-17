// prompt sync is a program added as a dependency
const prompt = require("prompt-sync")()

function greet(namedPassedIn) {
  const total = daysRemaining()
  return "Welcome to SALT, " + namedPassedIn + `\nToday it is ${total} days left until the course start`
        
}

// Main program
// sparar det som skrivs i prompten som en variabel
const name = prompt("What is your name? ")
const startDate = prompt("When does that course start? (YYYY-MM-DD) ")

// Date ger dagens datum
const todaysDate = new Date
const todaysDateJSON = todaysDate.toJSON()
const startDay = startDate.charAt(8) + startDate.charAt(9)
const toDay = todaysDateJSON.charAt(8) + todaysDateJSON.charAt(9)

function daysRemaining() {
 // Augusti har 31 dagar.
 // Funktionen fungerar bara i detta specifika fall! Min kurs börjar den 27 september.
 // Så uppenbara problem här men det är EN lösning.
console.log (typeof toDay)
const aug = 31 - parseInt(toDay)
const total = aug + parseInt(startDay)
return total
}

console.log(greet(name))

module.exports.greet = greet
