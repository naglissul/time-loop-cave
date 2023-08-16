'use strict'
class Rect {
    constructor(x, y, w, h) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
    }

    isColliding(other_rect) {
        return (
            this.x < other_rect.x + other_rect.w &&
            this.x + this.w > other_rect.x &&
            this.y < other_rect.y + other_rect.h &&
            this.y + this.h > other_rect.y
        )
    }

    collidingSide(tile_rect) {
        if (
            this.x >= tile_rect.x &&
            this.y >= tile_rect.y &&
            this.x - tile_rect.x >= this.y - tile_rect.y
        ) {
            return 'right'
        }
        if (
            this.x >= tile_rect.x &&
            this.y >= tile_rect.y &&
            this.x - tile_rect.x <= this.y - tile_rect.y
        ) {
            return 'bottom'
        }

        if (
            this.x <= tile_rect.x &&
            this.y >= tile_rect.y &&
            tile_rect.x + tile_rect.w - this.x - this.w >= this.y - tile_rect.y
        ) {
            return 'left'
        }
        if (
            this.x <= tile_rect.x &&
            this.y >= tile_rect.y &&
            tile_rect.x + tile_rect.w - this.x - this.w <= this.y - tile_rect.y
        ) {
            return 'bottom'
        }

        if (
            this.x <= tile_rect.x &&
            this.y <= tile_rect.y &&
            this.x + this.w - tile_rect.x >= this.y + this.h - tile_rect.y
        ) {
            return 'top'
        }
        if (
            this.x <= tile_rect.x &&
            this.y <= tile_rect.y &&
            this.x + this.w - tile_rect.x <= this.y + this.h - tile_rect.y
        ) {
            return 'left'
        }

        if (
            this.x >= tile_rect.x &&
            this.y <= tile_rect.y &&
            tile_rect.x + tile_rect.w - this.x >= this.y + this.h - tile_rect.y
        ) {
            return 'top'
        }
        if (
            this.x >= tile_rect.x &&
            this.y <= tile_rect.y &&
            tile_rect.x + tile_rect.w - this.x <= this.y + this.h - tile_rect.y
        ) {
            return 'right'
        }
        console.error('Colliding side is undefined')
    }
}
