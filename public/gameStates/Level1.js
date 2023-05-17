'use strict'

class Level1 extends GameState {
    liveTileObjects
    #dumpTileCount
    constructor(handler) {
        super(handler)
        this.gameObjects.push(new Player(10, 10, this))
        this.gameObjects.push(new CoinCounter(300, 20, this))
        this.gameObjects.push(new LifeCounter(40, 20, this))
        this.#dumpTileCount = 1000 //10 every 100 frames
        this.coinCount = 0
        this.lifeCount = 3
        this.jumpActivated = false
    }

    tick(delta) {
        if (this.#dumpTileCount > 0) {
            if (this.#dumpTileCount % 100 === 0) {
                this.gameObjects.push(
                    new LiveTile(
                        GameLogic.getRandomGridX(),
                        GameLogic.getRandomGridY(),
                        this,
                        true
                    )
                )
            }

            this.#dumpTileCount--
        }
        if (this.coinCount >= 10) {
            this.handler.setState('WIN')
        }
        if (this.lifeCount <= 0) {
            this.handler.setState('GAMEOVER')
        }
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
                    this.jumpActivated = true
                }
                if (keyCode === 'ArrowRight') {
                    obj.velX = 100
                }
                if (keyCode === 'ArrowLeft') {
                    obj.velX = -100
                }
                if (keyCode === 'Space') {
                    this.gameObjects.push(
                        new LiveTile(
                            Math.floor((obj.x + PLAYER_WIDTH / 2) / TILE_SIZE) *
                                TILE_SIZE,
                            Math.floor(
                                (obj.y + PLAYER_HEIGHT / 2) / TILE_SIZE - 1
                            ) * TILE_SIZE,
                            this,
                            false
                        )
                    )
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
                if (keyCode === 'ArrowUp') {
                    this.jumpActivated = false
                }
            }
        })
    }

    deleteObject(index) {
        delete this.gameObjects[index]
    }
}
