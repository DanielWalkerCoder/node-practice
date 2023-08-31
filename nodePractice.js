// Check the get-input.js code as well as the README for the lowdown on the beefing up we've done!
const getInput = require("./get-input.js");
const firstName = getInput(1);
const lastName = getInput(2);
const firstCap = getInput(1).toUpperCase();
const lastCap = getInput(2).toUpperCase();
console.log("Hello, " + firstName + " " + lastName + ".")
console.log(firstCap + " " + lastCap + " is your name capitalized.")
console.log(firstCap[0] + "." + lastCap[0] + ". are your initials.")
console.log(firstName[0].toLowerCase() + lastName.toLowerCase() + ".prsvr@gmail.com is your email address.")