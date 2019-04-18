import SetCanvasSize from './SetCanvasSize.js';
import FaceImage, { FaceImageOptions } from './FaceImage.js';
import { TutorialAnimation } from './Tutorial.js';

const canvas = document.querySelector('canvas');
const h = window.innerHeight;
const w = window.innerWidth;
const ctx = canvas!.getContext('2d');

const images = [
  'img/both-of-us.jpg',
  'img/sara.jpg'
];

function animate(f: FaceImage) {
  setTimeout(() => {
    window.requestAnimationFrame(() => animate(f));
  }, 1500);
  ctx!.clearRect(0, 0, w, h);
  f.update();
}

function init() {
  const randomImageNumber = Math.floor(Math.random() * images.length);
  const options: FaceImageOptions = {
    src: images[randomImageNumber]
  };

  const f = new FaceImage(ctx!, options);
  animate(f);
}

const leftBtn = document.querySelector('#left-area');
const rightBtn = document.querySelector('#right-area');

window.addEventListener('resize', () => {
  window.location.reload();
});

leftBtn!.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('left area touched');
});

rightBtn!.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('right area touched');
});

TutorialAnimation();
setTimeout(() => {
  init();
}, 3000);
SetCanvasSize(canvas!, w, h);
