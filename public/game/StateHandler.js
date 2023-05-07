'use strict'
class StateHandler {
    #currState

    constructor() {
        this.setState('MAINMENU')
    }

    tick(delta) {
        this.#currState.tick(delta)
    }

    render(ctx) {
        this.#currState.render(ctx)
    }

    setState(state) {
        if (state === 'MAINMENU') {
            this.#currState = new MainMenu(this)
        } else if (state === 'INTRO') {
            this.#currState = new Intro(this)
        } else if (state === 'LEVEL1') {
            this.#currState = new Level1(this)
        } else if (state === 'GAMEOVER') {
            this.#currState = new GameOver(this)
        } else if (state === 'WIN') {
            this.#currState = new Win(this)
        } else {
            console.error("GameState '" + state + "' doesn't exist")
        }
    }

    keyPressed(keyCode) {
        this.#currState.keyPressed(keyCode)
    }

    keyReleased(keyCode) {
        this.#currState.keyReleased(keyCode)
    }
}
