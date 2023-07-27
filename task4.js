// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

//  Example Input: ([1, 3, 6, 8, 11, 15], 9) Example Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)

function find(sortedArray, target) {
    let leftPointer = 0;
    let rightPointer = sortedArray.length - 1;
  
    while (leftPointer < rightPointer) {
      const currentSum = sortedArray[leftPointer] + sortedArray[rightPointer];
      if (currentSum === target) {
        return [leftPointer, rightPointer];
      } else if (currentSum < target) {
        leftPointer++;
      } else {
        rightPointer--;
      }
    }
    return [];
  }
  
  const inputArray = [0, 3, 6, 8, 11, 15];
  const value = 9;
  const result = find(inputArray, value);
  console.log(result);

  
  