import FaceImage from './FaceImage';
import setCanvasSize from './setCanvasSize';

const canvas = document.querySelector('canvas');
const h = window.innerHeight;
const w = window.innerWidth;
const ctx = canvas!.getContext('2d');

setCanvasSize(canvas!, w, h);
window.addEventListener('resize', () => {
  setCanvasSize(canvas!, w, h);
});