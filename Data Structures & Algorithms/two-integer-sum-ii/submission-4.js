class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let lookup = new Map();

        for (let i = 0; i < numbers.length; i++) {
            let complement = target - numbers[i];
            if (lookup.has(complement)) {
                return [lookup.get(complement) + 1, i + 1];
            }
            lookup.set(numbers[i], i);
        }
    }
}
