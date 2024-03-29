'use strict'
class Player extends GameObject {
    #recoverTimer
    #isRecovering

    constructor(x, y, levelHandler) {
        super(x, y)
        this.levelHandler = levelHandler
        this.objId = 'PLAYER'
        this.shouldJump = false
        this.#recoverTimer = null
        this.#isRecovering = false
    }

    tick(delta) {
        this.shouldJump = false
        // Move
        this.x += this.velX * delta
        this.y += this.velY * delta

        //Recovering timer
        this.#recoverTimer?.updateTime(delta)

        // Gravity
        this.velY += 10

        // Walls
        if (this.y > CANVAS_HEIGHT - PLAYER_HEIGHT) {
            this.velY = 0
            this.y = CANVAS_HEIGHT - PLAYER_HEIGHT
            this.shouldJump = this.levelHandler.jumpActivated && true
        }
        if (this.y < 0) {
            this.velY = -this.velY
            this.y = 0
        }
        if (this.x > CANVAS_WIDTH - PLAYER_WIDTH) {
            this.x = CANVAS_WIDTH - PLAYER_WIDTH
        }
        if (this.x < 0) {
            this.x = 0
        }

        // Tile collision
        this.levelHandler.gameObjects.forEach((obj, index) => {
            if (obj.objId === 'ENEMY') {
                if (
                    new Rect(
                        this.x,
                        this.y,
                        PLAYER_WIDTH,
                        PLAYER_HEIGHT
                    ).isColliding(
                        new Rect(obj.x, obj.y, TILE_SIZE, TILE_SIZE)
                    ) &&
                    !this.#isRecovering
                ) {
                    this.levelHandler.lifeCount--

                    this.#isRecovering = true
                    this.#recoverTimer = new Timer(RECOVERY_TIME, () => {
                        this.#isRecovering = false
                        this.#recoverTimer = null
                    })
                }
            } else if (obj.objId === 'TILE') {
                if (
                    new Rect(
                        this.x,
                        this.y,
                        PLAYER_WIDTH,
                        PLAYER_HEIGHT
                    ).isColliding(new Rect(obj.x, obj.y, TILE_SIZE, TILE_SIZE))
                ) {
                    this.text = new Rect(
                        this.x,
                        this.y,
                        PLAYER_WIDTH,
                        PLAYER_HEIGHT
                    ).collidingSide(
                        new Rect(obj.x, obj.y, TILE_SIZE, TILE_SIZE)
                    )
                    if (this.text === 'top') {
                        this.velY = 0
                        this.y = obj.y - PLAYER_HEIGHT
                        this.shouldJump =
                            this.levelHandler.jumpActivated && true
                    }
                    if (this.text === 'bottom') {
                        this.velY = Math.abs(this.velY)
                    }
                    if (this.text === 'right') {
                        this.x = obj.x + TILE_SIZE
                    }
                    if (this.text === 'left') {
                        this.x = obj.x - PLAYER_WIDTH
                    }
                }
            } else if (obj.objId === 'COIN') {
                if (
                    new Rect(
                        this.x,
                        this.y,
                        PLAYER_WIDTH,
                        PLAYER_HEIGHT
                    ).isColliding(new Rect(obj.x, obj.y, TILE_SIZE, TILE_SIZE))
                ) {
                    this.levelHandler.coinCount += 1
                    this.levelHandler.deleteObject(index)
                }
            } else if (obj.objId === 'FOOD') {
                if (
                    new Rect(
                        this.x,
                        this.y,
                        PLAYER_WIDTH,
                        PLAYER_HEIGHT
                    ).isColliding(new Rect(obj.x, obj.y, TILE_SIZE, TILE_SIZE))
                ) {
                    if (obj.isHidingCoin) {
                        ;[obj.x, obj.y] = GameLogic.getRandomGridPoint()
                        obj.setState('COIN')
                    } else {
                        this.levelHandler.deleteObject(index)
                    }
                }
            }
        })

        // Jump
        if (this.shouldJump) {
            this.velY = -200
        }
    }

    render(ctx) {
        ctx.fillStyle = this.#isRecovering ? 'lightblue' : 'blue'
        ctx.fillRect(this.x, this.y, PLAYER_WIDTH, PLAYER_HEIGHT)

        // Tile place
        ctx.strokeRect(
            Math.floor((this.x + PLAYER_WIDTH / 2) / TILE_SIZE) * TILE_SIZE,
            Math.floor((this.y + PLAYER_HEIGHT / 2) / TILE_SIZE - 1) *
                TILE_SIZE,
            TILE_SIZE,
            TILE_SIZE
        )

        ctx.fillStyle = 'black'
        ctx.strokeRect(
            this.x,
            this.y,
            (PLAYER_WIDTH *
                (RECOVERY_TIME - (this.#recoverTimer?.getTime() || 0))) /
                RECOVERY_TIME,
            1
        )
    }
}
