export interface FaceImageOptions {
  src: string;
}

export default class FaceImage {
  private img!: HTMLImageElement;

  constructor(ctx: CanvasRenderingContext2D, options: FaceImageOptions) {
    this.img = new Image();
    this.img.src = options.src;

    this.img.addEventListener('load', () => {
      ctx.drawImage(this.img, 0, 0, this.imageSquare, this.imageSquare);
    });
  }

  get startingY() {
    return 0 - this.imageSquare;
  }

  get dpi() {
    return window.devicePixelRatio;
  }

  get imageSquare() {
    return (this.w <= 375)
    ? this.dpi * 330
    : this.w / 2;
  }

  get w() {
    return (window.screen.width > 375)
    ? window.innerWidth
    : window.screen.width;
  }

  get h() {
    return (window.screen.height > 375)
    ? window.innerHeight
    : window.screen.height;
  }
}
