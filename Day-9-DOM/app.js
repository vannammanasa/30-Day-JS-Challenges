

        // Day 9: DOM Manipulation

//Tasks/Activities

// Activity 1: Selecting and Manipulating Elements:- 

//Task 1:** Select an HTML element by its ID and change its text content.

const h1El = document.getElementById('heading');
h1El.innerText = 'Day-9-DOM Manipulation';

//Task 2:** Select an HTML element by its class and change its background color.
const h2El = document.getElementsByClassName('title');
h2El[0].style.backgroundColor = 'green';

// Activity 2: Creating and Appending Elements
//Task 3:** Create a new `div` with text and append it to the body.

const div = document.createElement('div');
div.innerText = 'This is a new div element';
document.body.appendChild(div);

//Task 4:** Create a new `li` element and add it to an existing `ul`.
const ulEl = document.querySelector('ul');
const newLi = document.createElement('li');
newLi.innerText = 'Creating new List element';
ulEl.appendChild(newLi);


// Activity 3: Removing Elements
//Task 5:** Remove an HTML element from the DOM.
const itemToRemoveEl = document.getElementById('item1');
ulEl.removeChild(itemToRemoveEl);

//Task 6:** Remove the last child of a specific HTML element.
if(ulEl.lastElementChild){
ulEl.lastElementChild.remove(); //removing last child element
//console.log(ulEl.lastElementChild)

}
// Activity 4: Modifying Attributes and Classes
//Task 7:** Change an attribute (e.g., `src` of an `img`).
const imgEl = document.getElementById('birds');
imgEl.src="http://webneel.com/daily/sites/default/files/images/daily/08-2013/5-beautiful-bird-photography-by-hennie.jpg";

//Task 8:** Add and remove a CSS class to/from an element.
const pEl = document.querySelector('.my-para');
pEl.classList.add('new-class');
pEl.style.backgroundColor='red';

//pEl.classList.remove('my-para');
//pEl.classList.toggle('my-para');

//Activity 5: Event Handling
// Task 9:** Add a click event listener to a button to change paragraph text.
const buttonEl = document.getElementById('button');
buttonEl.addEventListener('click',function(){
        buttonEl.textContent='Text has been changed';
});


//Task 10:** Add a mouseover event listener to change an element's border color.
buttonEl.addEventListener('mouseover',()=>{
        buttonEl.style.border='10px solid green';
});




/* Feature Request
1. **Text Content Manipulation Script:** Change text content by ID.
2. **Element Creation Script:** Create and append a `div`.
3. **Element Removal Script:** Remove an element from the DOM.
4. **Attribute Modification Script:** Change HTML element attributes.
5. **Event Handling Script:** Add event listeners to change content or style.



*/