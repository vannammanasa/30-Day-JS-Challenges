// Activity 1: if-else statements 

//1. Program to check if number is positive , negative or zero and log result 
let num1 = 80;

if(num1 > 0){
  console.log(num1,'is Positive');
}
if(num1<0){
  console.log(num1,'is Negative');
}
if(num1 ==0){
  console.log(num1,'is zero');
}


// 2. Program to check if a person is eligible to vote (age >= 18) and log the result.
let age = 25;
if(age >= 18){
  console.log('Eligible to vote');
}
else{
  console.log('Not eligible')
}


// Activity 2: Nested if-else statements 

//3. Program to find greatest of three numbers using nested if else 
 let a = 57;
 let b = 19;
 let c = 34;
 if(a>b && a >c){
    console.log('A is greater than b and c')
 }
 else if(b>c){
  console.log('B is greater than C and A')
 }
 else{
  console.log('C is greater than A and B')
 }

// Activity 3: switch case 
//4.Program that uses switch case to determine the day of the week based on Number (1-7)and log the day name to console .
let day = 6;
switch(day){
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday');
    break; 
  case 3:
    console.log('Wednesday');
    break; 
  case 4:
    console.log('Thursday');
    break; 
  case 5:
    console.log('Friday');
    break;
  case 6:
    console.log('Saturday');
    break;
  case 7:
    console.log('Sunday');
    break;
  default:
    console.log('Enter a valid day')
}

    


//5. program that uses a switch case to assign a grade ('A','B','C','D','F') based on a score and log the grade to the console.

let score = 70;
switch(true){ //switch(true) means the switch statement will compare true with the value of each case's condition.

  case(score >= 90 && score <= 100):
    console.log('Grade A');
    break;
  case(score >=80 && score < 90):
    console.log('Grade B');
    break; 
  case(score >=70 && score <80):
    console.log('Grade C');
    break; 
  case(score >= 60 && score < 70):
    console.log('Grade D');
    break; 
  case(score < 60):
    console.log('Grade F');
    break;
  default:
    console.log('Please enter a valid input')
}


//Activity 4: Conditional (Ternary Operator)
// Task 6:Program that uses the ternary operator to check if a number is even or odd & log the output

let num = 2;
console.log(num%2 === 0 ?'Even':'Odd');

// Activity 5: Combining Conditions 
// Task 7:Program to check if year is leap year or not using multiple conditions 

// (divisible by 4 , but not 100 unless also divisible by 400)


let year=2020;//leap year
if((year%4 === 0 && year % 100 !==0)||(year%400 ===0)){
  console.log('Leap year')
}
else{
  console.log('Not a leap year')
}