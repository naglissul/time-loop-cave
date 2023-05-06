'use strict'

class Level1 extends GameState {
    constructor(handler) {
        super(handler)
        this.gameObjects.push(new Player(10, 10))
    }

    tick(delta) {
        this.gameObjects.forEach((obj) => {
            obj.tick(delta)
        })
    }

    render(ctx) {
        this.gameObjects.forEach((obj) => {
            obj.render(ctx)
        })
    }

    keyPressed(keyCode) {
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
