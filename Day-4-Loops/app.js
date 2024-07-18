//Activity-1:-(For Loop)
//Program to print numbers from 1 to 10 using a 'for loop'
  for(let i=1;i<=10;i++){
    console.log(i)
  }

//2. Program to print the multiplication table of 5 using a 'for loop'
let num = 5;
for(let j=1;j<=10;j++){

  
  console.log(`${num} * ${j} = ${num * j}`)
}

//Activity-2:(While loop)
//3.Program to calculate the sum of numbers from 1 to 10 using a while loop
let starting_num = 1
let sum = 0;
while(starting_num<=10){
  sum += starting_num
  starting_num++;

}
console.log('Sum of numbers from 1 to 10 is:',sum);

//4.Program to print numbers 10 to 1 using a while loop

let initial_num = 10;
console.log('Numbers from 10 to 1: ');
while(initial_num > 0){
  console.log(initial_num);
 
  initial_num--;
}



//Activity-3:-(Do...While Loop)
//5.Program to print numbers 1 to 5 using a do...while loop
let number = 1;
do{
  console.log(number);
  number++;
  
}
while(number <= 5){
  
}
//6.Program to calculate the factorial of a number using a do...while loop

let fact_number = 5;
let result = 1;
let i = fact_number;

do {
  result *= i;
  i--;
} while (i > 0);

console.log(`The factorial of ${fact_number} is ${result}`);


//Activity-4:-(Nested Loops)
//7.Program to print a pattern using nested for loops:
/*

*
* *
* * *
* * * *
* * * * * 


*/
let m = 5;
for(let k=1;k<=m;k++){
  let row = '';
  for(let n=1;n<=k;n++){
    row += '* '
  }
  console.log(row)
}
//Activity-5:-/*Activity 5: Loop Control Statements
//Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.


for(let i=1;i<= 10;i++){
  if(i == 5){
    continue
  }
 
    console.log(i)
  
}
//	Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.

for(let i=1;i<= 10;i++){
  if(i == 7){
    break
  }
 
    console.log(i)
  
}
// Print numbers from 1 to 10, skipping 5


// Print numbers from 1 to 10, stopping at 7