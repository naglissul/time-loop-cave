'use strict'
'use strict'

class LiveTile extends GameObject {
    #currState

    constructor(x, y, levelHandler, isHidingCoin) {
        super(x, y)
        this.levelHandler = levelHandler
        this.setState('TILE')
        this.isHidingCoin = isHidingCoin
    }

    tick(delta) {
        this.#currState.tick(delta)
    }
    render(ctx) {
        this.#currState.render(ctx)
    }
    setState(state) {
        if (state === 'TILE') {
            this.objId = 'TILE'
            this.#currState = new TileState(this)
        } else if (state === 'ENEMY') {
            this.objId = 'ENEMY'
            this.#currState = new EnemyState(this)
        } else if (state === 'COIN') {
            this.objId = 'COIN'
            this.#currState = new CoinState(this)
        } else if (state === 'FOOD') {
            this.objId = 'FOOD'
            this.#currState = new FoodState(this)
        } else {
            console.error("LiveTileState '" + state + "' doesn't exist")
        }
    }
}
