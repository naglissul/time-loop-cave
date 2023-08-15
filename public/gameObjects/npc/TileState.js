'use strict'
class TileState extends LiveTileState {
    #timer

    constructor(tileHandler) {
        super(tileHandler)
        this.x = tileHandler.x
        this.y = tileHandler.y
        this.#timer = new Timer(TILE_TIME, () =>
            this.tileHandler.setState('ENEMY')
        )
    }
    tick(delta) {
        this.#timer.updateTime(delta)
    }
    render(ctx) {
        ctx.fillStyle = 'maroon'
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
