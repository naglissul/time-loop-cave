'use strict'

// abstract class
class MenuState {
    constructor(menuHandler) {
        this.menuHandler = menuHandler
        this.gameObjects = new Array()
    }

    tick(delta) {
        throw new Error('tick() must be overridden in subclass')
    }
    render(ctx) {
        throw new Error('render() must be overridden in subclass')
    }
    keyPressed(keyCode) {
        throw new Error('keyPressed() must be overridden in subclass')
    }
    keyReleased(keyCode) {
        throw new Error('keyReleased() must be overridden in subclass')
    }
}
