'use strict'

// abstract class
class LiveTileState {
    tileHandler

    constructor(tileHandler) {
        this.tileHandler = tileHandler
        this.timePast = 0
    }

    tick(delta) {
        throw new Error('tick() must be overridden in subclass')
    }
    render(ctx) {
        throw new Error('render() must be overridden in subclass')
    }
}
