console.log(document.URL);
console.log(document.title);
document.title = "DOM";
console.log(document.title);
console.log(document.head);
console.log(document.all);
console.log(document.all[6]);


// GETELEMENTBYID//
console.log(document.getElementById("show"));
let showCase = document.getElementById("show");
showCase.innerText = "There are five magic words"

// Implementing styles from the DOM
showCase.style.borderBottom ='solid 3px black';

// GETELEMENTSBYCLASSNAME
let items = document.getElementsByClassName('list-group-item');
items[0].innerText = 'Please';
items[1].innerText = 'Excuse Me';
items[2].innerText = 'Sorry';
items[3].innerText = 'Thank You';
items[4].innerText = 'Pardon Me';

//QUERYSELECTOR//
let headerText = document.querySelector('#show');
headerText.style.color = "black";

//QUERYSELECTORALL//
console.log (document.querySelectorAll('li'));
let itemList = document.querySelectorAll('li')[2];

//ParentNode
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = "black";
console.log(itemList.parentNode.parentNode)
itemList.parentNode.parentNode.style.backgroundColor = 'green';

// ParentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = 'black';

//Children
const form = document.querySelector('form');
console.log(form.children);

// firstChild
console.log(form.firstChild);
//firstElementChild
console.log(form.firstElementChild);

// lastChild
console.log(form.lastChild);
//lastElementChild
console.log(form.lastElementChild);
form.lastElementChild.style.backgroundColor = "black";
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