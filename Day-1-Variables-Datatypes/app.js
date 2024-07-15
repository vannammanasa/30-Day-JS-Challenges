//Task-1:- Variable declaration

var number = 7;
console.log(number);


let name = 'Manasa';
console.log(name);

//Task-2:-Constant Declaration

const is_feeling_good = true;
console.log(is_feeling_good);


//Task-3:- Data Types
let age = 24;
console.log(typeof(age));

let place = 'india';
console.log(typeof(place));

let is_age_greater_than_18 = false;
console.log(typeof(is_age_greater_than_18));

const my_arr = ['vannam','royal','mythili'];
//const cars = ["Saab", "Volvo", "BMW"];
console.log(typeof(my_arr));

let movies = {
  name:'Harry Potter',
  genre : 'Fiction',
  released_year:2000,

}
console.log(typeof(movies));

//Task-4:-(Reassigning Variables)

let amount = 200;
amount = 1000;
console.log(amount);

//Task-5:Understanding  const
const price = 50;
price = 100;
console.log(price);

//Feature Request

/*Variable Types Console Log:-
Write a script that declares variables of diff. data types & logs both the value and types of each variable to the console.
*/
let data_type_1 = 'string';
console.log(`value ${data_type_1} and Datatype is: ${typeof(data_type_1)}}`)

let data_type_2 = true;
console.log(`value ${data_type_2} and Datatype is: ${typeof(data_type_2)}}`)

let data_type_3 = 4578;
console.log(`value ${data_type_3} and Datatype is: ${typeof(data_type_3)}}`)


/*Reassignment Demo:-
  --Create a script that demonstrates the difference in behaviour b/w 'let' and 'const' when it comes to reassignment.
  */

  let data_type_4 = [
    'name','age','price','place'
  ]
  
  console.log(data_type_4[2]); //price
  
  data_type_4[2] = 'gender';
  console.log(data_type_4[2]); //gender


  const object_1 ={
    mobile:'tecno',
    place:'Nandyal',
    price: 10000
  }
  console.log(object_1)

  
  object_1.mobile = 'Redmi';
  console.log(object_1)
