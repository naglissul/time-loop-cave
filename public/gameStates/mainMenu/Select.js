'use strict'
class Select extends MenuState {
    constructor(menuHandler) {
        super(menuHandler)
        this.gameObjects.push(
            new Selection('Play', CANVAS_WIDTH / 2, 100, this)
        )
        this.gameObjects.push(
            new Selection('Options', CANVAS_WIDTH / 2, 120, this)
        )
        this.gameObjects.push(
            new Selection('Help', CANVAS_WIDTH / 2, 140, this)
        )
        this.activeIndex = 0
        this.gameObjects[this.activeIndex].isActive = true
    }

    tick(delta) {}

    render(ctx) {
        ctx.fillStyle = 'black'
        ctx.textAlign = 'center'
        ctx.fillText('Time Loop Cave', CANVAS_WIDTH / 2, 70)
        this.gameObjects.forEach((obj) => {
            obj.render(ctx)
        })
    }

    keyPressed(keyCode) {
        if (keyCode === 'Enter') {
            this.select()
        }
        if (keyCode === 'ArrowDown') {
            this.selectionROR()
        }
        if (keyCode === 'ArrowUp') {
            this.selectionROL()
        }
    }
    keyReleased(keyCode) {}

    selectionROR() {
        this.gameObjects[this.activeIndex].isActive = false
        this.activeIndex = (this.activeIndex + 1) % this.gameObjects.length
        this.gameObjects[this.activeIndex].isActive = true
    }

    selectionROL() {
        this.gameObjects[this.activeIndex].isActive = false
        this.activeIndex =
            (this.activeIndex + this.gameObjects.length - 1) %
            this.gameObjects.length
        this.gameObjects[this.activeIndex].isActive = true
    }

    select() {
        if (this.activeIndex === 0) {
            this.menuHandler.handler.setState('INTRO')
        } else if (this.activeIndex === 1) {
            this.menuHandler.setState('OPTIONS')
        } else if (this.activeIndex === 2) {
            this.menuHandler.setState('HELP')
        } else {
            console.error(
                "MenuOption with index '" + this.activeIndex + "' doesn't exist"
            )
        }
    }
}
