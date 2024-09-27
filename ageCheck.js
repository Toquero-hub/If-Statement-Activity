// Prompt the user to enter their age
const age = prompt("Enter your age:");

// Convert the input to a number
const ageNumber = Number(age);

// Check if the input is a valid number
if (isNaN(ageNumber) || ageNumber < 0) {
console.log("Please enter a valid age.");
} else {
// Determine if the user is a teenager or an adult
if (ageNumber >= 1 && ageNumber <= 19) {
console.log("You are a teenager.");
} else if (ageNumber >= 20) {
console.log("You are an adult.");
} else {
console.log("You are not in the specified age range.");
}
}