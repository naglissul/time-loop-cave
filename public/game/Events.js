'use strict'
class Events {
    #game
    #stateHandler

    constructor(game, stateHandler) {
        this.#game = game
        this.#stateHandler = stateHandler
        this.#initListeners()
    }

    #initListeners() {
        addEventListener('keydown', (event) =>
            this.#stateHandler.keyPressed(event.code)
        )
        addEventListener('keyup', (event) =>
            this.#stateHandler.keyReleased(event.code)
        )
        addEventListener('beforeunload', (event) => this.#game.exit(event))
        addEventListener('shutdown', () => close())
    }
}
