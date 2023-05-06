'use strict'
class Player extends GameObject {
    constructor(x, y) {
        super(x, y)
        this.objId = 'PLAYER'
    }

    tick(delta) {
        this.x += this.velX * delta
        this.y += this.velY * delta

        this.velY += 10

        if (this.y > CANVAS_HEIGHT - PLAYER_HEIGHT) {
            this.velY = 0
            this.y = CANVAS_HEIGHT - PLAYER_HEIGHT
        }
        if (this.y < 0) {
            this.velY = -this.velY
            this.y = 0
        }
        if (this.x > CANVAS_WIDTH - PLAYER_WIDTH) {
            this.x = CANVAS_WIDTH - PLAYER_WIDTH
        }
        if (this.x < 0) {
            this.x = 0
        }
    }

    render(ctx) {
        ctx.fillColor = 'blue'
        ctx.fillRect(this.x, this.y, PLAYER_WIDTH, PLAYER_HEIGHT)
    }
}
