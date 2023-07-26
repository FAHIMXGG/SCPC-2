// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

function reverseString(input) {
    return input.split("").reverse().join("");
  }
  
  const input = "hello world";
  const output = reverseString(input);
  console.log(output);