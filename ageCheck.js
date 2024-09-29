"use strict";

const ps = require("prompt-sync");
const prompt = ps();

// Prompt the user to enter their age
let age = prompt("Enter your age:");

// Convert the input to a number
age = Number(age);
console.log("Age input:", age); // Debug log

// Check if the input is a valid number
if (isNaN(age)) {
    console.log("Please enter a valid number for your age.");
} else {
    // Determine the age category
    if (age < 13) {
        console.log("You are a child.");
    } else if (age >= 13 && age <= 19) {
        console.log("You are a teenager.");
    } else {
        console.log("You are an adult.");
    }
}
