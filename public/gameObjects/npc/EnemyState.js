'use strict'

class EnemyState extends LiveTileState {
    #lifeTimer
    #moveTimer

    constructor(tileHandler) {
        super(tileHandler)
        this.x = tileHandler.x
        this.y = tileHandler.y

        this.#lifeTimer = new Timer(ENEMY_LIFE_TIME, () => {
            this.tileHandler.x = this.x
            this.tileHandler.y = this.y
            this.tileHandler.setState('FOOD')
        })
        //FIXME: when moving around, overlaps with other objects/tiles
        this.#moveTimer = new Timer(ENEMY_MOVE_TIME, () => {
            ;[this.x, this.y] = GameLogic.getRandomEnemyMove([this.x, this.y])
            tileHandler.x = this.x
            tileHandler.y = this.y
        })
    }

    tick(delta) {
        this.#lifeTimer.updateTime(delta)
        this.#moveTimer.updateTime(delta)
    }

    render(ctx) {
        ctx.fillStyle = 'crimson'
        ctx.fillRect(this.x, this.y, TILE_SIZE, TILE_SIZE)
        ctx.fillStyle = 'black'
        ctx.strokeRect(
            this.x,
            this.y,
            (TILE_SIZE * this.#lifeTimer.getTime()) /
                this.#lifeTimer.getTimePeriod(),
            1
        )
    }
}
