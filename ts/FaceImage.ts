export interface FaceImageOptions {
  src: string;
}

export default class FaceImage {
  private img!: HTMLImageElement;
  private ctx!: CanvasRenderingContext2D;
  private y!: number;
  private x!: number;

  constructor(ctx: CanvasRenderingContext2D, options: FaceImageOptions) {
    this.y = this.startingY;
    this.x = 0;
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = options.src;
  }

  public update() {
    this.draw(this.x, this.y);

    if (this.y + 100 < this.h - this.imageSquare) {
      this.y = this.y + 100;
    } else {
      this.y = this.h - this.imageSquare;
    }
  }

  private draw(x: number, y: number) {
    this.ctx.drawImage(this.img, x, y, this.imageSquare, this.imageSquare);
    this.img.style.display = 'none';
  }

  get startingY() {
    return 0 - this.imageSquare;
  }

  get imageSquare() {
    return (this.w >= 1125)
    ? this.w / 4
    : (this.w >= 750)
    ? this.w / 3
    : (this.w <= 375)
    ? this.w
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
