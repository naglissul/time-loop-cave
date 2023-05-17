'use strict'
class Game {
    #ctx
    #stateHandler
    running

    constructor(canvas) {
        this.#ctx = canvas.getContext('2d')

        this.#ctx.imageSmoothingEnabled = false
        this.#ctx.scale(SCALE_FACTOR, SCALE_FACTOR)

        this.#stateHandler = new StateHandler()
        this.#initListeners()

        this.running = true
        this.#gameLoop()
    }

    #initListeners() {
        addEventListener('keydown', (event) =>
            this.#stateHandler.keyPressed(event.code)
        )
        addEventListener('keyup', (event) =>
            this.#stateHandler.keyReleased(event.code)
        )
        addEventListener('beforeunload', (event) => this.#exit(event))
    }

    #gameLoop() {
        let lastTime = performance.now()
        const update = (currentTime) => {
            if (this.running) {
                const elapsedTime = currentTime - lastTime
                lastTime = currentTime

                this.#stateHandler.tick(elapsedTime / 1000)
                this.#ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
                this.#stateHandler.render(this.#ctx)

                requestAnimationFrame((time) => update(time))
            }
        }
        update(performance.now())
    }

    #exit(e) {
        removeEventListener('keydown', (event) =>
            this.#stateHandler.keyPressed(event.code)
        )
        removeEventListener('keyup', (event) =>
            this.#stateHandler.keyReleased(event.code)
        )
        e.preventDefault()
        e.returnValue = ''
        const confirmationMessage = 'Are you sure you want to quit?'
        if (e.defaultPrevented) {
            e.returnValue = confirmationMessage
        }
        return confirmationMessage
    }
}
