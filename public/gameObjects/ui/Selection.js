class Selection extends GameObject {
    #text
    #menuHandler

    constructor(text, x, y, menuHandler) {
        super(x, y)
        this.objId = 'SELECTION'
        this.#text = text
        this.#menuHandler = menuHandler
        this.isActive = false
    }

    tick(delta) {}

    render(ctx) {
        if (this.isActive) {
            ctx.fillStyle = 'red'
        } else {
            ctx.fillStyle = 'black'
        }
        ctx.fillText(this.#text, this.x, this.y)
    }
}
