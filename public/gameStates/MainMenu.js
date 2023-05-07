'use strict'

class MainMenu extends GameState {
    constructor(handler) {
        super(handler)
    }

    tick(delta) {}

    render(ctx) {
        ctx.fillStyle = 'black'
        ctx.textAlign = 'center'
        ctx.fillText('Main Menu', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2)
    }

    keyPressed(keyCode) {
        if (keyCode === 'Enter') {
            this.handler.setState('INTRO')
        }
    }
    keyReleased(keyCode) {}
}
