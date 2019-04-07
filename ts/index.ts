import SetCanvasSize from './SetCanvasSize.js';
import FaceImage, { FaceImageOptions } from './FaceImage.js';

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

init();
SetCanvasSize(canvas!, w, h);
window.addEventListener('resize', () => {
  SetCanvasSize(canvas!, w, h);
});
