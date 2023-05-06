class GameObject {
    _x
    _y
    _velX
    _velY
    _objId

    constructor(x, y) {
        this._x = x
        this._y = y
        this._velX = 0
        this._velY = 0
    }

    tick(delta) {
        throw new Error('tick() must be overridden in subclass')
    }

    render(ctx) {
        throw new Error('render() must be overridden in subclass')
    }

    get x() {
        return this._x
    }

    set x(value) {
        this._x = value
    }

    get y() {
        return this._y
    }

    set y(value) {
        this._y = value
    }

    get velX() {
        return this._velX
    }

    set velX(value) {
        this._velX = value
    }

    get velY() {
        return this._velY
    }

    set velY(value) {
        this._velY = value
    }

    get objId() {
        return this._objId
    }

    set objId(value) {
        this._objId = value
    }
}
