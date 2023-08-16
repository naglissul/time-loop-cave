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
}
