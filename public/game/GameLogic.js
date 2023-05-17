class GameLogic {
    static isRectsColliding(x1, y1, w1, h1, x2, y2, w2, h2) {
        return (
            ((x1 + w1 >= x2 && x1 + w1 <= x2 + w2) ||
                (x1 >= x2 && x1 <= x2 + w2)) &&
            ((y1 + h1 >= y2 && y1 + h1 <= y2 + h2) ||
                (y1 >= y2 && y1 <= y2 + h2))
        )
    }

    static whichRectSideColliding(x1, y1, w1, h1, x2, y2, w2, h2) {
        if (x1 >= x2 && y1 >= y2 && x1 - x2 >= y1 - y2) {
            return 'right'
        }
        if (x1 >= x2 && y1 >= y2 && x1 - x2 <= y1 - y2) {
            return 'bottom'
        }

        if (x1 <= x2 && y1 >= y2 && x2 + w2 - x1 - w1 >= y1 - y2) {
            return 'left'
        }
        if (x1 <= x2 && y1 >= y2 && x2 + w2 - x1 - w1 <= y1 - y2) {
            return 'bottom'
        }

        if (x1 <= x2 && y1 <= y2 && x1 + w1 - x2 >= y1 + h1 - y2) {
            return 'top'
        }
        if (x1 <= x2 && y1 <= y2 && x1 + w1 - x2 <= y1 + h1 - y2) {
            return 'left'
        }

        if (x1 >= x2 && y1 <= y2 && x2 + w2 - x1 >= y1 + h1 - y2) {
            return 'top'
        }
        if (x1 >= x2 && y1 <= y2 && x2 + w2 - x1 <= y1 + h1 - y2) {
            return 'right'
        }
        console.error('Colliding side is undefined')
    }

    //TODO: For new pos, check the existing objects. Taken pos list
    static getRandomGridX() {
        return Math.floor(Math.random() * GRID_WIDTH) * TILE_SIZE
    }

    static getRandomGridY() {
        return Math.floor(Math.random() * GRID_HEIGHT) * TILE_SIZE
    }

    static getRandomEnemyMoveX(x) {
        let dir
        if (x === CANVAS_WIDTH - TILE_SIZE) {
            dir = Math.floor(Math.random() * 2) + 1
        } else if (x === 0) {
            dir = Math.floor(Math.random() * 2)
        } else {
            dir = Math.floor(Math.random() * 3)
        }
        if (dir === 0) {
            return x + TILE_SIZE
        } else if (dir === 1) {
            return x
        } else if (dir === 2) {
            return x - TILE_SIZE
        } else {
            console.error('sth wrong with Math.random()')
        }
    }

    static getRandomEnemyMoveY(y) {
        let dir
        if (y === CANVAS_HEIGHT - TILE_SIZE) {
            dir = Math.floor(Math.random() * 2) + 1
        } else if (y === 0) {
            dir = Math.floor(Math.random() * 2)
        } else {
            dir = Math.floor(Math.random() * 3)
        }
        if (dir === 0) {
            return y + TILE_SIZE
        } else if (dir === 1) {
            return y
        } else if (dir === 2) {
            return y - TILE_SIZE
        } else {
            console.error('sth wrong with Math.random()')
        }
    }

    //TODO: Add a timing method - event based timing
    //TODO: Add a verctor data structure
}
