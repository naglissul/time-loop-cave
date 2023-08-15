'use strict'

class FoodState extends LiveTileState {
    #timer

    constructor(tileHandler) {
        super(tileHandler)
        this.x = tileHandler.x
        this.y = tileHandler.y
        this.#timer = new Timer(FOOD_TIME, () =>
            this.tileHandler.setState('TILE')
        )
    }

    tick(delta) {
        this.#timer.updateTime(delta)
    }

    render(ctx) {
        ctx.fillStyle = 'wheat'
        ctx.fillRect(this.x, this.y, TILE_SIZE, TILE_SIZE)
        ctx.fillStyle = 'black'
        ctx.strokeRect(
            this.x,
            this.y,
            (TILE_SIZE * this.#timer.getTime()) / this.#timer.getTimePeriod(),
            1
        )
    }
}
