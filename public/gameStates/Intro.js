'use strict'

class Intro extends GameState {
    constructor(handler) {
        super(handler)
        const storyIntro =
            "Once upon a time, a guy named Claude woke up with an aching head in a forest next to a giant rock. | After checking his forehead he found a few drops of blood. | Claude didn't remember how he ended up here. | After some wandering around, | without any communication device, | he found an entrance to a cave. | Next to it there was a map. | Claude picked it up. The map had directions of how to find a treasure chest inside the cave. The map was really basic, so Claude couldn't help himself but fulfill his curiosity and greediness.| Just before entering the cave he heard someone near in the forest stepping on a tree branch and, of course, felt being followed. | When Claude entered the cave the whole environment changed, everything became pixelated. The map disappeared. A rocky pixelated wall appeared behind him, locking him down in the cave with an endless respawn loop. "
    }

    tick(delta) {}

    render(ctx) {
        ctx.fillStyle = 'black'
        ctx.textAlign = 'center'
        ctx.fillText('Intro', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2)
    }

    keyPressed(keyCode) {
        if (keyCode === 'Enter') {
            this.handler.setState('LEVEL1')
        }
    }
    keyReleased(keyCode) {}
}
