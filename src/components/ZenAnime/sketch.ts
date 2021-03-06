import p5 from "p5";

import { Bubble } from "./Bubble";

export const sketch = (p: p5) => {
  let bubbles: Bubble[] = [];
  let max = p.max(p.displayWidth, p.displayHeight);
  let width = max;
  let height = max;

  p.setup = () => {
    p.createCanvas(width, height);
    for (let i = 0; i < width / 10; i++) {
      bubbles[i] = new Bubble(
        p.random(width),
        p.random(-100, height),
        width,
        height,
      );
    }
  };

  p.draw = () => {
    p.clear();
    for (let i = 0; i < bubbles.length; i++) {
      show(bubbles[i]);
      bubbles[i].move();
    }
  };

  function show(b: Bubble) {
    p.stroke(255, 255, 255, 10);
    p.strokeWeight(0);
    p.fill(b.r, b.g, b.b, 12);
    p.ellipse(b.x, b.y, b.size, b.size);
  }
};
