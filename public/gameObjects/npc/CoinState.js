'use strict'

class CoinState extends LiveTileState {
    #timer
    constructor(tileHandler) {
        super(tileHandler)
        this.x = tileHandler.x
        this.y = tileHandler.y

        this.#timer = new Timer(COIN_TIME, () => {
            // FIXME: here also can overlap with other tiles
            ;[this.tileHandler.x, this.tileHandler.y] =
                GameLogic.getRandomGridPoint()
            const [x, y] = GameLogic.getRandomGridPoint()
            this.tileHandler.levelHandler.gameObjects.push(
                new LiveTile(x, y, this.tileHandler.levelHandler, false)
            )
            this.tileHandler.setState('TILE')
        })
    }
    tick(delta) {
        this.#timer.updateTime(delta)
    }
    render(ctx) {
        ctx.fillStyle = 'gold'
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
