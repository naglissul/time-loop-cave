'use strict'

class Level1 extends GameState {
    constructor(handler) {
        super(handler)
        this.gameObjects.push(new Player(10, 10, this))
        this.gameObjects.push(new LiveTile(1 * TILE_SIZE, 3 * TILE_SIZE))
        this.gameObjects.push(new LiveTile(4 * TILE_SIZE, 3 * TILE_SIZE))
        this.gameObjects.push(new LiveTile(7 * TILE_SIZE, 3 * TILE_SIZE))
        this.gameObjects.push(new LiveTile(10 * TILE_SIZE, 3 * TILE_SIZE))
        this.gameObjects.push(new LiveTile(13 * TILE_SIZE, 3 * TILE_SIZE))
    }

    tick(delta) {
        this.gameObjects.forEach((obj) => {
            obj.tick(delta)
        })
    }

    render(ctx) {
        ctx.fillStyle = 'black'
        ctx.textAlign = 'center'
        ctx.fillText('Level 1', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2)
        this.gameObjects.forEach((obj) => {
            obj.render(ctx)
        })
    }

    keyPressed(keyCode) {
        if (keyCode === 'Enter') {
            this.handler.setState('GAMEOVER')
        }
        this.gameObjects.forEach((obj) => {
            if (obj.objId === 'PLAYER') {
                if (keyCode === 'ArrowUp') {
                    obj.velY = -200
                }
                if (keyCode === 'ArrowRight') {
                    obj.velX = 100
                }
                if (keyCode === 'ArrowLeft') {
                    obj.velX = -100
                }
            }
        })
    }
    keyReleased(keyCode) {
        this.gameObjects.forEach((obj) => {
            if (obj.objId === 'PLAYER') {
                if (keyCode === 'ArrowRight') {
                    obj.velX = 0
                }
                if (keyCode === 'ArrowLeft') {
                    obj.velX = 0
                }
            }
        })
    }
}
