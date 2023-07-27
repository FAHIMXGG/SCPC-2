// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3

function findFrequent(arr) {
    const elementCount = {};
  
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      elementCount[element] = (elementCount[element] || 0) + 1;
    }
  
    let frequentElement;
    let maxCount = 0;
  
    for (const element in elementCount) {
      if (elementCount[element] > maxCount) {
        maxCount = elementCount[element];
        frequentElement = element;
      }
    }
  
    return frequentElement;
  }
  
  const inputArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];
  const output = findFrequent(inputArray);
  console.log(output);
  