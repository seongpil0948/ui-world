export class Ball {
  constructor(stageWidth, stageHeight, radius, speed, color = "#fdd700") {
    this.radius = radius;
    this.vx = speed;
    this.vy = speed;
    this.color = color;

    const diameter = this.radius * 2;
    this.x = diameter + (Math.random() * stageWidth - diameter);
    this.y = diameter + (Math.random() * stageHeight - diameter);
  }

  bounceWindow(stageWidth, stageHeight) {
    const minX = this.radius;
    const minY = this.radius;
    const maxX = stageWidth - this.radius;
    const maxY = stageHeight - this.radius;

    if (this.x <= minX || this.x >= maxX) {
      this.vx *= -1;
      this.x += this.vx;
    } else if (this.y <= minY || this.y >= maxY) {
      this.vy *= -1;
      this.y += this.vy;
    }
  }

  draw(ctx, stageWidth, stageHeight) {
    this.x += this.vx;
    this.y += this.vy;

    this.bounceWindow(stageWidth, stageHeight);

    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x / 2, this.y / 2, this.radius, 0, 2 * Math.PI);
    ctx.fill();
  }
}
