'use strict'

// Timer is set for specific time period, then the callback is called and timer resets
class Timer {
    #time
    #timeperiod
    #callback

    constructor(timeperiod, callback) {
        this.#time = 0
        this.#timeperiod = timeperiod
        this.#callback = callback
    }

    updateTime(delta) {
        this.#time += delta
        if (this.#time >= this.#timeperiod) {
            this.#callback()
            this.#time = 0
        }
    }

    getTime() {
        return this.#time
    }

    getTimePeriod() {
        return this.#timeperiod
    }
}
