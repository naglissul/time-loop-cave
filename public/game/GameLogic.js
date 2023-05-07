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
        if (x1 > x2 && y1 > y2 && x1 - x2 > y1 - y2) {
            return 'right'
        }
        if (x1 > x2 && y1 > y2 && x1 - x2 < y1 - y2) {
            return 'bottom'
        }

        if (x1 < x2 && y1 > y2 && x2 + w2 - x1 - w1 > y1 - y2) {
            return 'left'
        }
        if (x1 < x2 && y1 > y2 && x2 + w2 - x1 - w1 < y1 - y2) {
            return 'bottom'
        }

        if (x1 < x2 && y1 < y2 && x1 + w1 - x2 > y1 + h1 - y2) {
            return 'top'
        }
        if (x1 < x2 && y1 < y2 && x1 + w1 - x2 < y1 + h1 - y2) {
            return 'left'
        }

        if (x1 > x2 && y1 < y2 && x2 + w2 - x1 > y1 + h1 - y2) {
            return 'top'
        }
        if (x1 > x2 && y1 < y2 && x2 + w2 - x1 < y1 + h1 - y2) {
            return 'right'
        }
        return 'undef'
    }
}
