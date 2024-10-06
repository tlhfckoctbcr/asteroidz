export class Canvas {
  canvas: HTMLCanvasElement | null = null;

  context: CanvasRenderingContext2D | null = null;

  constructor() {
    this.init();
  }

  init() {
    this.canvas = this.createCanvas(500, 500);
    this.context = this.createContext(this.canvas);
    document.body.appendChild(this.canvas);
  }

  private createCanvas(width: number, height: number): HTMLCanvasElement {
    const canvas = document.createElement("canvas");
    canvas.width = width || 500;
    canvas.height = height || 500;

    return canvas;
  }

  private createContext(canvas: HTMLCanvasElement): CanvasRenderingContext2D {
    const context = canvas.getContext("2d");
    if (!context) throw new Error('Canvas context not found.');
    context?.scale(20, 20);

    return context;
  }
}
