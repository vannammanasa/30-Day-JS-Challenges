// Function Declaration
// Task 1: Check if a number is even or odd

function is_even_number(num){
  return (num%2 == 0 ? 'Even' : 'Odd');
}
console.log(is_even_number(24));

// Task 2: Calculate the square of a number

function square_of_a_number(number){
  return number**2;
}
console.log(square_of_a_number(7));

// Function Expression
// Task 3: Find the maximum of two numbers
function maxNum(a,b){
  return (a>b ? a : b);
}
console.log(maxNum(70,50));

// Task 4: Concatenate two strings
function concat_of_strings(word1,word2){
  return word1 + word2;
}
console.log(concat_of_strings('Manasa','Royal'));

// Arrow Functions
// Task 5: Calculate the sum of two numbers

const sumOfNum = (num1,num2) => num1+num2;
console.log(sumOfNum(45,6)) //51

// Task 6: Check if a string contains a specific character & return a boolean value
// Function Parameters and Default Values
const containsChar = (word,str) =>word.includes(str);
console.log(containsChar('Manasa Royal','M')); //true



// Task 7: Function to Calculate product by taking 2 parameters with default value of one of the parameter

function productOFNum(a,b=7){
  return a*b
}
console.log(productOFNum(9)); //63

// Task 8:Function that takes a person's name & age & return a greeting message.Provide a default value for the age

function greetingMessage(name,greeting = 'Great day'){
  return (`Hello,${name}! Have a ${greeting}`);
}
console.log(greetingMessage('Manasa'));



// Higher-Order Functions
// Task 9: Write a higher order function that takes a function & a number,& calls the function that many times.
  //HO functions are the functions that can do below:
    //--Accept other functions as args
    //-- Return a function as a result

    function repeatedFunction(fn, times) {
      return function() {
        for (let i = 0; i < times; i++) {
          fn();
        }
      }
    }
    
    // Example usage:
    const sayingHello = () => console.log("Hello!");
    
    const sayHelloFiveTimes = repeatedFunction(sayingHello, 5);
    
    sayHelloFiveTimes(); // Output: "Hello!" printed 5 times
    

// Task 10: Write a higher order function that takes 2 functions and a value,applies the first function to the value,and then applies the second function to the result
function repeatFunction(fn, times) {
  for (let i = 0; i < times; i++) {
    fn();
  }
}

// Example usage:
const sayHello = () => console.log("Hello!");

repeatFunction(sayHello, 5); // Output: "Hello!" printed 5 times
