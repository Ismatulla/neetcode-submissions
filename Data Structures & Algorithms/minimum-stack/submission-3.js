class MinStack {
    constructor() {
        this.items = [];
        this.mins = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.items.push(val);
        const min = this.mins.length ? Math.min(val, this.mins[this.mins.length - 1]) : val;
        this.mins.push(min)
    }

    /**
     * @return {void}
     */
    pop() {
        this.mins.pop()
        return this.items.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.items[this.items.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.mins[this.mins.length-1]
    }
}
