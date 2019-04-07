const canvas = document.querySelector('canvas');
const h = window.innerHeight;
const w = window.innerWidth;
const ctx = canvas!.getContext('2d');

export default class FaceImage {
  src: string;

  constructor(src: string) {
    this.src = src;
  }
}

function setCanvasSize(c: HTMLCanvasElement, width: number, height: number) {
  c.width = width;
  c.height = height;
}

setCanvasSize(canvas!, w, h);
window.addEventListener('resize', () => {
  setCanvasSize(canvas!, w, h);
});

ctx!.fill = 'blueviolet';
ctx!.fillRect(0, 0, w, h);