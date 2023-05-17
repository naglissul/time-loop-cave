'use strict'
class CoinCounter extends GameObject {
    levelHandler
    #total

    constructor(x, y, levelHandler) {
        super(x, y)
        this.objId = 'COINCOUNTER'
        this.levelHandler = levelHandler
        this.#total = 10
    }

    tick(delta) {}

    render(ctx) {
        ctx.fillStyle = 'black'
        ctx.fillText(
            `Coins: ${this.levelHandler.coinCount}/${this.#total}`,
            this.x,
            this.y
        )
    }
}
