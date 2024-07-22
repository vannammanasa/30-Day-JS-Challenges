//Activity-1:- Basic Event Handling
//Task-1:- Add a click event listener to a button that changes the text content of a paragraph.
const buttonEl = document.getElementById('my-button');
buttonEl.addEventListener('click',()=>{
  buttonEl.textContent = 'The text has been changed';
})

//Task-2:- Add a double-click event listener to an image that toggles its visibilty
const myImageEl = document.getElementById('my-image');
myImageEl.addEventListener('dblclick',()=>{
  if(myImageEl.style.display === 'none'){
    
    myImageEl.style.display ='block';
    myImageEl.src="https://tse3.mm.bing.net/th?id=OIP.qr10PrWXiZac5y61zo-vgAHaKc&pid=Api&P=0&h=220";
  }
  else{
    myImageEl.style.display = 'none';
  }
})


//Activity-2:- Mouse Events:-
//Task3:- Add a mouseover event listener to an element that changes its background color
const h1El = document.getElementById('my-heading');
h1El.addEventListener('mouseover',()=>{
  h1El.style.backgroundColor = 'red'
});

//Task4:- Add a mouseout event listener to an element that resets its bg-color
h1El.addEventListener('mouseout',()=>{
  h1El.style.backgroundColor = 'gray'
});

//Activity-3:-Keyboard Events:-
//Task5:Add a keydown event listener to an input field that logs the key pressed to the console.
const inputEl = document.getElementById('input');
inputEl.addEventListener('keydown',(event)=>{
  console.log('key pressed',event.key)
}) //manasa

//Task6:Add a keyup event listener to an input field that displays current value in a paragraph.
const inputParaEl = document.getElementById('input-para');
inputEl.addEventListener('keyup',()=>{
  const currentInputParaEl = inputEl.value;
  inputParaEl.textContent = `Current Value:${currentInputParaEl}`;

})
//Activity-4:- Form Events:-
//Task7:- Add a submit event listener to a form that prevent the default submission & log the form data to the console.
const myFormEl = document.getElementById('my-form');
myFormEl.addEventListener('submit',(event)=>{
  event.preventDefault(); //preventing the default form

  const newFormData = new FormData(myFormEl); //creating formdata from the formelement


  //& logging it to the console
  newFormData.forEach((value,key)=>{
    console.log(`${key}:${value}`);
  })
})


//Task8:- Add a change event listener to a select drop-down that displays the selected value in a pragrapk



const selectEl = document.getElementById('my-select');
const pEl = document.getElementById('para');
selectEl.addEventListener('change',()=>{
  const slectedValue = selectEl.value;
  para.textContent = `select value is ${slectedValue}`;
})
//Activity-5:- Event Delegation

//Task9:- Add a click event listener to a list that logs the text content pf the clicked list item using event delegation.

const newItemEl = document.getElementById('my-list');
/*newItemEl.addEventListener('click',(event)=>{
  if(event.target && event.target.nodeName === 'LI'){
    console.log('Entered list item:',event.target.textContent); //loggng the text of the clicked list item
  }
  })
  */

  //or
  newItemEl.addEventListener('click',(event)=>{
    const listItem = event.target.closest('li');
    if( listItem &&newItemEl.contains(listItem)){
      console.log('Entered list item:',listItem.textContent); //loggng the text of the clicked list item
    }
  })
//Task10:- Add an event listener to a parent element that listens for events from dynamically added child elements

const addListItemsButton = document.getElementById('add-item');
const myListEl = document.getElementById('my-list');

myListEl.addEventListener('click',(event)=>{
if(event.target && event.target.nodeName === 'li'){
  console.log('Clicked item',event.target.textContent);
}
});


addListItemsButton.addEventListener('click',(event)=>{
  const newLiItem = document.createElement('li');
  newLiItem.textContent = `Item ${myListEl.children.length + 1}`;
  myListEl.appendChild(newLiItem)
})