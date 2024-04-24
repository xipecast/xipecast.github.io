// sourced from (bmcilhenny): https://github.com/bmcilhenny/gritt-ify/blob/master/js/add-functionality-freeman.js
// DOM elements
const rotateLeftButton = document.getElementById('rotate-left-button');
const rotateRightButton = document.getElementById('rotate-right-button');
const freemanBorder = document.getElementById('freeman-border');
const FreemanerForm = document.getElementById('Freemaner-form');

// global variables
let rotation = 0;

// event handlers
function toggleFreeman() {
    console.log('FIRING')
    const freeman = document.getElementById('toggle-freeman');
    toggleVisibility(freeman);
}

function rotateFreeman(event) {
    const freeman = document.getElementById('small-freeman');
    rotate(freeman, event);
}

function addGreet(event) {
    event.preventDefault();
    const greet = FreemanerForm.greet.value;
    const newGreetLi = document.createElement('li');
    const newGreetAvatar = document.createElement('div');
    newGreetAvatar.className = "avatar";
    const newGreetText = document.createElement('span');
    newGreetText.innerText = greet;
    const greets = document.getElementById('greets').getElementsByTagName('ul')[0];
    const newerGreetLi = greets.appendChild(newGreetLi);
    newerGreetLi.appendChild(newGreetAvatar);
    newerGreetLi.appendChild(newGreetText);
    FreemanerForm.greet.value = "";
}


// helpers
// given a DOM element, change it's visibilty style property from hidden to visible
function toggleVisibility(element) {
    if (element.style.visibility === 'hidden') {
        element.style.visibility = 'visible'
    } else {
        element.style.visibility = 'hidden'
    }
}

// given a DOM element and a direction, rotate the element that direction
function rotate(element, event) {
    if (event.target.id === 'rotate-left-button') {
        rotation = rotation - 18;
    } else {
        rotation = rotation + 18;
    }
    element.style.transform = 'rotate(' + rotation + 'deg)';
}

// add event handlers when mouse events are triggered
freemanBorder.onmouseenter = toggleFreeman;
freemanBorder.onmouseleave = toggleFreeman;
rotateLeftButton.onclick = rotateFreeman;
rotateRightButton.onclick = rotateFreeman;
FreemanerForm.onsubmit = addGreet;
