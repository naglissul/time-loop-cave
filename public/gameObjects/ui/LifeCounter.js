'use strict'
class LifeCounter extends GameObject {
    levelHandler
    #total

    constructor(x, y, levelHandler) {
        super(x, y)
        this.objId = 'LIFECOUNTER'
        this.levelHandler = levelHandler
        this.#total = 3
    }

    tick(delta) {}

    render(ctx) {
        ctx.fillStyle = 'black'
        ctx.fillText(
            `Lives: ${this.levelHandler.lifeCount}/${this.#total}`,
            this.x,
            this.y
        )
    }
}
