export interface FaceImageOptions {
  src: string;
}

export default class FaceImage {
  private img!: HTMLImageElement;
  private ctx!: CanvasRenderingContext2D;
  private y: number;

  constructor(ctx: CanvasRenderingContext2D, options: FaceImageOptions) {
    this.y = this.startingY;
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = options.src;

    this.img.addEventListener('load', () => {
      this.draw(this.y);
    });
  }

  public update() {
    this.draw(this.y);
    this.y++;
  }

  private draw(y: number) {
    this.ctx.drawImage(this.img, 0, y, this.imageSquare, this.imageSquare);
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
