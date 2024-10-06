import { Canvas } from "../ui/canvas";

type GameState = "ready" | "start" | "stop" | "gameover";

export class Game {
  private canvas: Canvas | null = null;

  state: GameState = "ready";

  constructor() {
    console.log("Game created!");
    this.start();
  }

  start() {
    console.log("Game started!");
    this.canvas = new Canvas();
  }
}
