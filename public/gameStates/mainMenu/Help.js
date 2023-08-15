'use strict'
class Help extends MenuState {
    constructor(menuHandler) {
        super(menuHandler)
    }

    tick(delta) {}

    render(ctx) {
        ctx.fillStyle = 'black'
        ctx.textAlign = 'center'
        ctx.fillText('Help', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2)
    }

    keyPressed(keyCode) {
        if (keyCode === 'Enter') {
            this.menuHandler.setState('SELECT')
        }
    }

    keyReleased(keyCode) {}
}
