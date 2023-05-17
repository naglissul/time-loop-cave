'use strict'

class MainMenu extends GameState {
    #currState

    constructor(handler) {
        super(handler)
        this.setState('SELECT')
    }

    tick(delta) {
        this.#currState.tick(delta)
    }

    render(ctx) {
        this.#currState.render(ctx)
    }

    keyPressed(keyCode) {
        this.#currState.keyPressed(keyCode)
    }
    keyReleased(keyCode) {
        this.#currState.keyReleased(keyCode)
    }

    setState(state) {
        if (state === 'SELECT') {
            this.#currState = new Select(this)
        } else if (state === 'OPTIONS') {
            this.#currState = new Options(this)
        } else if (state === 'HELP') {
            this.#currState = new Help(this)
        } else {
            console.error("MenuState '" + state + "' doesn't exist")
        }
    }
}
