console.log(document.URL);
console.log(document.title);
document.title = "DOM";
console.log(document.title);
console.log(document.head);
console.log(document.all);
console.log(document.all[6]);


// GETELEMENTBYID//
console.log(document.getElementById("fiveMagicWords"));
let showCase = document.getElementById("fiveMagicWords");
showCase.innerText = "There are five magic words";
showCase.previousElementSibling.style.color = 'black';


// Implementing styles from the DOM
showCase.style.borderBottom ='solid 2px black';
let jumbotron = document.querySelector('.jumbotron');
console.log(jumbotron);
jumbotron.style.backgroundColor = 'green'
console.log(jumbotron.lastElementChild);  
jumbotron.lastElementChild.style.backgroundColor = 'black';


// GETELEMENTSBYCLASSNAME
let items = document.getElementsByClassName('list-group-item');
items[0].innerText = 'Please';
items[1].innerText = 'Excuse Me';
items[2].innerText = 'Sorry';
items[3].innerText = 'Thank You';
items[4].innerText = 'Pardon Me';

//QUERYSELECTOR//
let headerText = document.querySelector('#fiveMagicWords');
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
form.style.backgroundColor = 'white';

// lastChild
console.log(form.lastChild);
//lastElementChild
console.log(form.lastElementChild);
form.lastElementChild.style.backgroundColor = 'green';


