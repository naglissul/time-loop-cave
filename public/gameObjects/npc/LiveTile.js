'use strict'
class LiveTile extends GameObject {
    constructor(x, y) {
        super(x, y)
        this.objId = 'LIVETILE'
    }

    tick(delta) {}
    render(ctx) {
        ctx.fillStyle = 'brown'
        ctx.fillRect(this.x, this.y, TILE_SIZE, TILE_SIZE)
    }
}
