'use strict'
class TileState extends LiveTileState {
    #maxTime

    constructor(tileHandler) {
        super(tileHandler)
        this.x = tileHandler.x
        this.y = tileHandler.y
        this.#maxTime = 10
    }
    tick(delta) {
        this.timePast += delta
        if (this.timePast >= this.#maxTime) {
            this.tileHandler.setState('ENEMY')
        }
    }
    render(ctx) {
        ctx.fillStyle = 'maroon'
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
