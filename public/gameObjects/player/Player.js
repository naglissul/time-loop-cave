'use strict'
class Player extends GameObject {
    constructor(x, y, levelHandler) {
        super(x, y)
        this.levelHandler = levelHandler
        this.objId = 'PLAYER'
        this.text = 'not colliding'
    }

    tick(delta) {
        // Move
        this.x += this.velX * delta
        this.y += this.velY * delta

        // Gravity
        this.velY += 10

        // Walls
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

        // Tile collision
        this.levelHandler.gameObjects.forEach((obj) => {
            if (obj.objId === 'LIVETILE') {
                if (
                    GameLogic.isRectsColliding(
                        this.x,
                        this.y,
                        PLAYER_WIDTH,
                        PLAYER_HEIGHT,
                        obj.x,
                        obj.y,
                        TILE_SIZE,
                        TILE_SIZE
                    )
                ) {
                    this.text = GameLogic.whichRectSideColliding(
                        this.x,
                        this.y,
                        PLAYER_WIDTH,
                        PLAYER_HEIGHT,
                        obj.x,
                        obj.y,
                        TILE_SIZE,
                        TILE_SIZE
                    )
                    if (this.text === 'top') {
                        this.velY = 0
                        this.y = obj.y - PLAYER_HEIGHT
                    }
                    if (this.text === 'bottom') {
                        this.velY = Math.abs(this.velY)
                    }
                    if (this.text === 'right') {
                        this.x = obj.x + TILE_SIZE
                    }
                    if (this.text === 'left') {
                        this.x = obj.x - PLAYER_WIDTH
                    }
                }
            } else {
                this.text = 'not colliding'
            }
        })
    }

    render(ctx) {
        ctx.fillStyle = 'blue'
        ctx.fillText(this.text, 30, 20)

        ctx.fillRect(this.x, this.y, PLAYER_WIDTH, PLAYER_HEIGHT)
    }
}
