class MinStack {
    constructor() {
        this.items = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.items.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        return this.items.pop();
    }

    /**
     * @return {number}
     */
    top() {
      return   this.items[this.items.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return Math.min(...this.items);
    }
}
