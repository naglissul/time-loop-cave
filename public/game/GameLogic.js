'use strict'
class GameLogic {
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
    static getRandomGridPoint() {
        return [
            Math.floor(Math.random() * GRID_WIDTH) * TILE_SIZE,
            Math.floor(Math.random() * GRID_HEIGHT) * TILE_SIZE,
        ]
    }

    //TODO: here too, check for existing tiles
    static getRandomEnemyMove([x, y]) {
        let dirX
        if (x === CANVAS_WIDTH - TILE_SIZE) {
            dirX = Math.floor(Math.random() * 2) + 1
        } else if (x === 0) {
            dirX = Math.floor(Math.random() * 2)
        } else {
            dirX = Math.floor(Math.random() * 3)
        }

        let dirY
        if (y === CANVAS_HEIGHT - TILE_SIZE) {
            dirY = Math.floor(Math.random() * 2) + 1
        } else if (y === 0) {
            dirY = Math.floor(Math.random() * 2)
        } else {
            dirY = Math.floor(Math.random() * 3)
        }

        let retX
        let retY

        if (dirX === 0) {
            retX = x + TILE_SIZE
        } else if (dirX === 1) {
            retX = x
        } else if (dirX === 2) {
            retX = x - TILE_SIZE
        } else {
            console.error('sth wrong with Math.random()')
        }

        if (dirY === 0) {
            retY = y + TILE_SIZE
        } else if (dirY === 1) {
            retY = y
        } else if (dirY === 2) {
            retY = y - TILE_SIZE
        } else {
            console.error('sth wrong with Math.random()')
        }

        return [retX, retY]
    }
    //TODO: Add a verctor data structure
}
