﻿let images = document.querySelectorAll('.animal');
let greetings = document.querySelector('.greetings'); 

const pikaPath = './src/pika.gif';
const beePath = './src/bee.gif';
const greetPika = 'пика пика';
const greetBee = 'бзззз';
const complexGreet = 'бзз пика';

let pikaButton = document.querySelector('.pikaButton');
let beeButton = document.querySelector('.beeButton');
let pikaBeeButton = document.querySelector('.pikaBeeButton');
let buttons = document.querySelectorAll('.btn');

let setActiveButton = (element) => {
  for(let el of buttons) el.classList.remove('btn-active');
  element.classList.add('btn-active');
}

let setButtonListener = (node, imagesPath, greet) => {
  node.addEventListener('click', () => {
    setActiveButton(node);
    for(let it of images) {
      it.src = imagesPath;
    }
    greetings.textContent = 'Доброго утречка! ' + greet; 
  }) 
}

setButtonListener(pikaButton, pikaPath, greetPika);
setButtonListener(beeButton, beePath, greetBee);

pikaBeeButton.addEventListener('click', () => {
    setActiveButton(pikaBeeButton);
    images.forEach((item, index, arr) => {
      if((index + 1) < (arr.length / 2)) {
         item.src = pikaPath;
      } else {
         item.src = beePath;
      }
    })
    greetings.textContent = 'Доброго утречка! ' + complexGreet;
})


