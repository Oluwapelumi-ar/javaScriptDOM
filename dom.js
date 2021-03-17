// console.dir(document);-----outputs everything inside a window document
// console.log(document.URL);
// console.log(document.title);
// document.title = "DOM";//we can also effect changes from here
// console.log(document.title);
// console.log(document.head);//outputs everything in the head element
// console.log(document.all);//displays everything in the DOM
// console.log(document.all[6]);

//DOM selectors:There are few methods by which we can query the DOM
// GETELEMENTBYID//
// console.log(document.getElementById("show"));
// let showCase = document.getElementById("show");
// console.log(showCase);//mine appears to show null in the broswer console.
// let work = document.getElementsByTagName("h2");
// console.log(work)

//There are two methods to changing text which are: textContent and innerText.
//The textContent method does not pay attention to th e styling of an element while the innerText method does.
// work.textContent = "hello";
// console.log(work.textContent);

// Styles can also be changed using the dot notation .style and .the style to be changed
// work.style.borderBottom = 'solid 3px black';

// GETELEMENTSBYCLASSNAME
// let items = document.getElementsByClassName('list-group-item');
// console.log(items)
// items[1].textContent = 'welcome';


//QUERYSELECTOR//
//Grabs just the first item of whatever you are trying to get
//var headerText = document.querySelector('#show');
// headerText.style.borderBottom = "2px solid black";
 //ErrorMessage:cannot read property style of null

//QUERYSELECTORALL//
//Selects all 


//TRAVERSING THE DOM//
let itemList = document.querySelector('#items');

//ParentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "black";
// console.log(itemList.parentNode.parentNode)//This gives us the parent to the parent of itemList

// ParentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "black";
// console.log(itemList.parentElement.parentElement)//This gives us the parent to the parent of itemList
//ParentNode and ParentElement can be used interchangeably

//ChildNodes and Children
// console.log(itemList.childNodes);
// console.log(itemlist.children);

// firstChild
//console.log(itemList.firstChild);
//firstElementChild
//console.log(itemList.firstElementChild);

// lastChild
//console.log(itemList.lastChild);
//lastElementChild
//console.log(itemList.lastElementChild);

//nextSibling
//console.log(itemList.nextSibling);
//nextSibling
//console.log(itemList.nextSibling);

//previousSibling
//console.log(itemList.previousSibling);
//previousSibling
//console.log(itemList.previousSibling);

//previousElementSibling
//console.log(itemList.previousElementSibling);
//previousElementSibling
//console.log(itemList.previousElementSibling);

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
let h2 = document.querySelector('header .navbar h1');

console.log(createDiv);

insert.insertBefore(createDiv, h2); //....Error Message:caanot read property 'insertBefore' of null