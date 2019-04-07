import SetCanvasSize from './SetCanvasSize.js';
import FaceImage from './FaceImage.js';

const canvas = document.querySelector('canvas');
const h = window.innerHeight;
const w = window.innerWidth;
const ctx = canvas!.getContext('2d');

SetCanvasSize(canvas!, w, h);
window.addEventListener('resize', () => {
  SetCanvasSize(canvas!, w, h);
});

ctx!.fillStyle = 'blueviolet';
ctx!.fillRect(0, 0, w, h);