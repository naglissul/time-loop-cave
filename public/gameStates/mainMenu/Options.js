'use strict'
class Options extends MenuState {
    constructor(menuHandler) {
        super(menuHandler)
        this.soundOn = true
        this.musicOn = true

        this.gameObjects.push(new Selection('Sound: ', 50, 50, this))
        this.gameObjects.push(new Selection('Music:', 50, 100, this))
        this.gameObjects.push(new Selection('Done', 50, 120, this))
        this.activeIndex = 0
        this.gameObjects[this.activeIndex].isActive = true
    }

    tick(delta) {}

    render(ctx) {
        ctx.fillStyle = 'black'
        ctx.textAlign = 'center'
        ctx.fillText('Options', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2)
        this.gameObjects.forEach((obj) => {
            obj.render(ctx)
        })

        ctx.fillStyle = 'black'
        ctx.textAlign = 'center'
        ctx.fillText(this.soundOn ? 'ON' : 'OFF', 100, 50)
        ctx.fillText(this.musicOn ? 'ON' : 'OFF', 100, 100)
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
            this.soundOn = !this.soundOn
        } else if (this.activeIndex === 1) {
            this.musicOn = !this.musicOn
        } else if (this.activeIndex === 2) {
            this.menuHandler.setState('SELECT')
        } else {
            console.error(
                "MenuOption with index '" + this.activeIndex + "' doesn't exist"
            )
        }
    }
}
