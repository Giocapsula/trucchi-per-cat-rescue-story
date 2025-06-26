/**
 * GiocapsulaCounter - Simple Counter Utility
 * Author: Giocapsula
 * License: Custom
 */

class GiocapsulaCounter {
    /**
     * Initializes a counter.
     * @param {number} [initialValue=0] - Starting value of the counter.
     */
    constructor(initialValue = 0) {
        if (typeof initialValue !== 'number') {
            throw new Error('[GiocapsulaCounter] Initial value must be a number.');
        }
        this.value = initialValue;
    }

    /**
     * Increments the counter by 1 or a custom amount.
     * @param {number} [amount=1] - Amount to increment.
     */
    increment(amount = 1) {
        if (typeof amount !== 'number') {
            console.error('[GiocapsulaCounter] Increment amount must be a number.');
            return;
        }
        this.value += amount;
    }

    /**
     * Decrements the counter by 1 or a custom amount.
     * @param {number} [amount=1] - Amount to decrement.
     */
    decrement(amount = 1) {
        if (typeof amount !== 'number') {
            console.error('[GiocapsulaCounter] Decrement amount must be a number.');
            return;
        }
        this.value -= amount;
    }

    /**
     * Resets the counter to 0.
     */
    reset() {
        this.value = 0;
    }

    /**
     * Returns the current value of the counter.
     * @returns {number}
     */
    getValue() {
        return this.value;
    }
}

// Example usage:
// const counter = new GiocapsulaCounter();
// counter.increment();
// counter.increment(5);
// console.log(counter.getValue()); // Output: 6
// counter.decrement(2);
// console.log(counter.getValue()); // Output: 4
// counter.reset();

module.exports = GiocapsulaCounter;
