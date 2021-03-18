// console.dir(document);-----outputs everything inside a window document
console.log(document.URL);
console.log(document.title);
document.title = "DOM";//we can also effect changes from here
console.log(document.title);
// console.log(document.head);//outputs everything in the head element
// console.log(document.all);//displays everything in the DOM
console.log(document.all[6]);

//DOM selectors:There are few methods by which we can query the DOM
// GETELEMENTBYID//
console.log(document.getElementById("show"));
let showCase = document.getElementById("show");
showCase.innerText = "Learning can be tiring too"


//There are two methods to changing text which are: textContent and innerText.
//The textContent method does not pay attention to the styling of an element while the innerText method does.
//work.textContent = "hello";
//console.log(work.textContent);

// Styles can also be changed using the dot notation .style and .the style to be changed
showCase.style.borderBottom ='solid 3px black';

// GETELEMENTSBYCLASSNAME
let items = document.getElementsByClassName('list-group-item');
// console.log(items)
items[0].innerText = 'Please';
items[1].innerText = 'Excuse Me';
items[2].innerText = 'Sorry';
items[3].innerText = 'Thank You';
items[4].innerText = 'Pardon Me';


//QUERYSELECTOR//
//Grabs just the first item of whatever you are trying to get
let headerText = document.querySelector('#show');
headerText.style.color = "green";
 

//QUERYSELECTORALL//
console.log (document.querySelectorAll('li'))


//TRAVERSING THE DOM//
let itemList = document.querySelectorAll('li')[2];

//ParentNode
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = "black";
console.log(itemList.parentNode.parentNode)
itemList.parentNode.parentNode.style.backgroundColor = "yellow";

// ParentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = "black";

//ChildNodes and Children
const form = document.querySelector('form');
//console.log(itemList.childNodes);
console.log(form.children);

// firstChild
console.log(form.firstChild);
//firstElementChild
console.log(form.firstElementChild);

// lastChild
console.log(form.lastChild);
//lastElementChild
console.log(form.lastElementChild);

//nextSibling
console.log(form.nextSibling);
//nextSibling
console.log(form.nextElementSibling);

//previousSibling
console.log(form.previousSibling);


//previousElementSibling
console.log(form.previousElementSibling);
//nextElementSibling
console.log(form.nextElementSibling);

//createElement

//Create a div
let createDiv = document.createElement('div');
//adiing a class name to the Div
createDiv.className = "Welcome";
//Add id
createDiv.id = "You are Welcome";
//Add Attribute
createDiv.setAttribute('title','Welcome Message');
//Create text node
let divText =  document.createTextNode('Congratulations');
//Add text to div
createDiv.appendChild(divText);

//Insert New div into DOM
let insert = document.querySelector('header .navbar');
//let h2 = document.querySelector('header .navbar h1');

//console.log(createDiv);

//insert.insertBefore(createDiv, h2); //....Error Message:caanot read property 'insertBefore' of null