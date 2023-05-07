'use strict'

class Win extends GameState {
    constructor(handler) {
        super(handler)
    }

    tick(delta) {}

    render(ctx) {
        ctx.fillStyle = 'black'
        ctx.textAlign = 'center'
        ctx.fillText(
            'You won. Now outro...',
            CANVAS_WIDTH / 2,
            CANVAS_HEIGHT / 2
        )
    }

    keyPressed(keyCode) {
        if (keyCode === 'Enter') {
            this.handler.setState('MAINMENU')
        }
    }
    keyReleased(keyCode) {}
}
