'use strict'

class Win extends GameState {
    constructor(handler) {
        super(handler)
        const outroStory =
            "So yeah... Claude didn't get any treasure out of the cave as he anticipated. But at least he escaped the cave. Everything was normal again - not pixelated and without any endless respawn loops or treasures. Claude was again next to the cave entrance. He was again holding the map for finding the treasure in the cave. Claude left the map where he found it, next to the entrance. As he heard someone approching, he hid behind one of the trees. A person, looking exactly like him, approached the entrance, picked the map and entered the cave. But just before he did that, Claude accidently stepped on a tree branch. Fortunatelly, the person didn't see him. So Claude just carried on wandering in the forest, looking for the way out. But then he doesn't notice a giant rock, when thinking about what happened, and bumps into it, hurting his head and loosing conciousness"
    }

    tick(delta) {}

    render(ctx) {
        ctx.fillStyle = 'black'
        ctx.textAlign = 'center'
        ctx.fillText(
            'You won. Now outro...',
            CANVAS_WIDTH / 2,
            CANVAS_HEIGHT / 2
        )
    }

    keyPressed(keyCode) {
        if (keyCode === 'Enter') {
            this.handler.setState('MAINMENU')
        }
    }
    keyReleased(keyCode) {}
}
