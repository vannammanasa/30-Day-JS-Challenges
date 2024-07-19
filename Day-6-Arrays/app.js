//  Day 6: Arrays 

//  Task 1: Create an array of numbers from 1 to 5 and log the array to the console.

  const myArray = [1,2,3,4,5];
  console.log(myArray)

//  Task 2: Access the first and last elements of the array and log them to the console.


console.log(myArray[0])
console.log(myArray[-1])

// Activity 2: Array Methods (Basic)  
//  Task 3: Use the push method to add a new number to the end of the array and log the updated array. 

myArray.push(7);
console.log('Updated Array',myArray);


// Task 4: Use the pop method to remove the last element from the array and log the updated array. 

myArray.pop();
console.log(myArray) 


//  Task 5: Use the shift method to remove the first element from the array and log the updated array. 

myArray.shift();
console.log(myArray)


// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array. 


myArray.unshift(24);
console.log(myArray)

//  Activity 3: Array Methods (Intermediate)

//  Task 7: Use the map method to create a new array where each number is doubled and log the new array. 
let array = [1,2,3,4,5];
const newArray = array.map((n)=>n*2);
console.log(newArray) //[2,4,6,8,10]
  

    

// Task 8: Use the filter method to create a new array with only even numbers and log the new array. 

const evenArray = array.filter((n)=>(n%2==0));
console.log(evenArray)


//   Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result. 

const sumArray = array.reduce((acc,curr) =>acc+curr,0)

console.log(sumArray) //15

//Activity 4: Array Iteration 
//  Task 10: Use a for loop to iterate over the array and log each element to the console. 
for(let i=0;i<array.length;i++){
  console.log(array[i])
}


// -Task 11: Use the forEach method to iterate over the array and log each element to the console.

array.forEach(ele =>console.log(ele));


//- Activity 5: Multi-dimensional Arrays
//  Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(matrix);
matrix.forEach(row=>console.log(row)); //separate row 

// Task 13: Access and log a specific element from the two-dimensional array.

const matrix_B = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];


function logElement(matrix_B, rowIndex, columnIndex) {
  return (matrix_B[rowIndex][columnIndex]);
}


console.log(logElement(matrix_B, 1, 2)); //6
