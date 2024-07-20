//Tasks/Activites:
//Activity 1: Template Literals
//Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

let name = 'Manasa';
let age = 25;
let result = `Hello,I'm ${name},I'm ${age}.How are you?`;

console.log(result);

//Task 2: Create a multi-line string using template literals and log it to the console.
let city = 'Nandyal';
let year = 1998;
console.log(`Hello,everyone!This is ${name},my birth year is
   ${year} and I'm from ${city}`);

//Activity 2: Destructuring
//Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
const myArr = [1,2,3,4,5,6,7,8,9,10];
let [first,second] = myArr;
console.log(first);
console.log(second);

//Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

let book = {

  title:'HarryPotter',
  author:'JK.Rowling',
  year:2000
};

let {title,author} = book;
console.log(`Title:${title}`);
console.log(`Author:${author}`);


//Activity 3: Spread and Rest Operators
//Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
const newArr = [11,12,13,14,15];
const  output = [...myArr,...newArr];
console.log(output);


//Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sum(...numbers){
  return numbers.reduce((acc,currValue)=>acc+currValue,0);
}

console.log(sum(1,2,2,5,8,9,10));



//Activity 4: Default Parameters
//Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

function productOFNum(a,b=5){
  return a*b;

}
console.log(productOFNum(4)); //20
console.log(productOFNum(7,9)); //63

//Activity 5: Enhanced Object Literals
//Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.

/*
Use Cases: Object literals are ideal for creating small to moderately complex objects with a fixed structure. They are particularly useful for defining configuration objects, data models, or objects with a straightforward set of properties and methods.
Advantages: Object literals are concise, easy to read, and allow for the quick creation of objects without the need for additional functions or classes.
*/

let place= 'India';
let food = 'Pizza';
let person={
  place,
  food,
  greet(){
    return `Hello,my fav.place is ${this.place} and my fav.food is ${this.food}`;

  }
}
console.log(person.greet())



//Task 9: Create an object with computed property names based on variables and log the object to the console.

//Computed property names allow us to define property names in an object using expressions.

let key1 = 'firstName';
let key2 = 'lastName';

let person1 = {
    [key1]: 'John', //[key1],[key2]holding property names
    [key2]: 'Doe',  //[key1],[key2]holding property names
    age: 30
};

console.log(person1); // Output: { firstName: 'John', lastName: 'Doe', age: 30 }
