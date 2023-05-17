'use strict'

class EnemyState extends LiveTileState {
    #maxTime
    #moveTimePast
    #maxMoveTime

    constructor(tileHandler) {
        super(tileHandler)
        this.x = tileHandler.x
        this.y = tileHandler.y
        this.#maxTime = 3
        this.#maxMoveTime = 0.5
        this.#moveTimePast = 0
    }
    tick(delta) {
        this.timePast += delta
        this.#moveTimePast += delta
        if (this.timePast >= this.#maxTime) {
            this.tileHandler.x = this.x
            this.tileHandler.y = this.y
            this.tileHandler.setState('FOOD')
        }
        if (this.#moveTimePast >= this.#maxMoveTime) {
            this.#moveTimePast = 0
            this.x = GameLogic.getRandomEnemyMoveX(this.x)
            this.y = GameLogic.getRandomEnemyMoveY(this.y)
        }
    }
    render(ctx) {
        ctx.fillStyle = 'crimson'
        ctx.fillRect(this.x, this.y, TILE_SIZE, TILE_SIZE)
        ctx.fillStyle = 'black'
        ctx.strokeRect(
            this.x,
            this.y,
            (TILE_SIZE * this.timePast) / this.#maxTime,
            1
        )
    }
}
