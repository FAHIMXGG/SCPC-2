const inputString = "1. apple, 2. banana, 3. mango, 4. apple, 5.banana, 6. ru, 7.tt";

// Use a regular expression to match and remove the numbers and dots
const resultArray = inputString.split(/\d+\.\s*/).filter(Boolean);

console.log(resultArray);