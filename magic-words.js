// Change h2 text by using getelementbyid//
let showCase = document.getElementById("fiveMagicWords");
showCase.innerText = "There are five magic words";

// Implementing styles from the DOM
showCase.previousElementSibling.style.color = 'black';
const jumbotron = document.querySelector('.jumbotron');
jumbotron.style.backgroundColor = 'pink'
jumbotron.lastElementChild.style.backgroundColor = 'pink';
jumbotron.lastElementChild.style.color = 'black'


// Adding event listeners to list
let items = document.getElementsByClassName('list-group-item');

// Please
const please =items[0];
  const pleaseDetails = () => {
    please.innerText = 'Please: Please is a magic word because it can turn an order into a request. We can also use please to make and accept offers and invitations. We generally put "please" at the end of requests, and at the start of invitations and offers. If we put it at the start of a request it adds emphasis.'
    please.style.backgroundColor = 'pink'
  }
please.addEventListener('click', pleaseDetails)

// Excuse
let excuse = items[1];
  const excuseDetails = () => {
    excuse.innerText = 'Excuse Me: This word could be used in various ways: To take permission, maybe to leave a meeting or people, is also a polite of telling someone to leave the way for you.Its just a polite word for having your way.The magic is that it leaves you without having to argue with people.'
    excuse.style.backgroundColor = 'pink'
  };
excuse.addEventListener('click', excuseDetails);

// sorry
let sorry= items[2];
    const sorryDetails = () => {
      sorry.innerText = 'Sorry: The word "Sorry" is used to render an apology to someone you have offended, though some persons find it so hard to say sorry or feel sorry for what they have done because they feel they should be apologised to or they feel big being the one to apologise (Pride).'
      sorry.style.backgroundColor = 'pink';
    };
sorry.addEventListener('click', sorryDetails);

//Thank you
const thankYou = items[3];
  const thankYouDetails = () => {
    thankYou.innerText = 'Thank You: This is used to appreciate someone for something good the person has done, we still have some people that are never grateful for anything rather they always feel cheated or the person havent done enough.'
    thankYou.style.backgroundColor = 'pink';
  }
thankYou.addEventListener('click', thankYouDetails);

//Pardon Me
const pardonMe = items[4];
  const pardonMeDetails = () => {
    pardonMe.innerText = 'Pardon Me: This word shows that you have acknowledged your mistake and you are truly sorry. It saves you from further punishments you should have received for your actions and leaves the person with no other choice.The magic is also that it brings healing and forgiveness.'
  pardonMe.style.backgroundColor = 'pink';
  };
pardonMe.addEventListener('click', pardonMeDetails,true);

//QUERYSELECTOR//
let headerText = document.querySelector('#fiveMagicWords');
headerText.style.color = "black";

// Changing background using ParentElement
let itemList = document.querySelectorAll('li')[2];
itemList.parentElement.parentElement.style.backgroundColor = 'black';
document.querySelector('.name').style.color = 'pink';

//Learn More Button Output
const learnMoreButton = document.querySelector('.learn-more-button');
const outputDiv = document.querySelector('.outputDiv');
  const alertUser = ( ) => {
    alert('Kindly Suscribe to our Newsletter to learn more');
    outputDiv.style.color = 'pink'
  };
  learnMoreButton.addEventListener('click' ,alertUser);

// Welcome Message 
const form = document.querySelector('#updateName');
const nameOutput = document.querySelector('.submit-output');
const nameInput = document.querySelector('#fill-name');
  const welcomeUser = (Event) => {
    Event.preventDefault()
    alert('Dear ' + nameInput.value +",You just Suscribed to our Newsletter ");
  };
form.addEventListener('submit' ,welcomeUser);


//Change Box Background Colour
let box = document.querySelector('.box');
box.addEventListener('mousemove',myFunction);

const output = document.querySelector('.output');
output.style.backgroundColor = 'white'

function myFunction(event) {
  let xEvent = event.offsetX;
  let yEvent = event.offsetY;
  document.querySelector('h5').innerText = 'Thanks for Suscribing ' + nameInput.value;
  box.style.backgroundColor = 'rgb('+xEvent+','+yEvent+',70)';
}







