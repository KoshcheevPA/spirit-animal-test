let images = document.querySelectorAll('.animal');
let greetings = document.querySelector('.greetings'); 

const pikaPath = 'pika.gif';
const beePath = 'bee.gif';
const greetPika = 'пика пика';
const greetBee = 'бзззз';
const complexGreet = 'бзз пика';

let pikaButton = document.querySelector('.pikaButton')
let beeButton = document.querySelector('.beeButton')
let pikaBeeButton = document.querySelector('.pikaBeeButton')

let setButtonListener = (node, imagesPath, greet) => {
  node.addEventListener('click', () => {
    for(let it of images) {
      it.src = imagesPath;
    }
    greetings.textContent = 'Доброго утречка! ' + greet; 
  }) 
}

setButtonListener(pikaButton, pikaPath, greetPika);
setButtonListener(beeButton, beePath, greetBee);

pikaBeeButton.addEventListener('click', () => {
    images.forEach((item, index, arr) => {
      if((index + 1) < (arr.length / 2)) {
         item.src = 'pika.gif';
      } else {
         item.src = 'bee.gif';
      }
    })
    greetings.textContent = 'Доброго утречка! ' + complexGreet;
})


