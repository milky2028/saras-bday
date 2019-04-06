import FaceImage from './FaceImage';

const canvas = document.querySelector('canvas');
const h = window.innerHeight;
const w = window.innerWidth;
const ctx = canvas!.getContext('2d');

canvas!.width = w;
canvas!.height = h;

new FaceImage();