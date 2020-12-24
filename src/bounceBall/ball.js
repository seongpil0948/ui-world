export class Ball {
    constructor (stageWidth, stageHeight, radius, speed) {
        this.radius = radius
        this.vx = speed
        this.vy = speed
        this.stageWidth = stageWidth
        this.stageHeight = stageHeight

        const diameter = this.radius * 2
        // x, y are center of ball
        this.x = diameter + (Math.random() * stageWidth - diameter)
        this.y = diameter + (Math.random() * stageHeight - diameter)
    }

    draw(ctx) {
        this.x += this.vx;
        this.y += this.vy;

        this.bounceWindow()
        ctx.fillStyle = '#fdd700';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
    }
    // 공이 경계선에 닿았는지 판별, 닿았다면 반대로 튕긴다
    bounceWindow() {
        const b = {
            min: this.radius, // surface of ball
            maxX: this.stageWidth - this.radius,
            maxY: this.stageHeight - this.radius
        }
        if (this.x <= b.min || this.x >= b.maxX ) {
            this.vx *= -1 // 반대로 움직인다
            this.x += this.vx;
        } else if (this.y <= b.min  || this.y >= b.maxY) {
            this.vy *= -1;
            this.y += this.vy;
        }
    }
}