class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let check = new Set();
        for (let num of nums) {
            if (check.has(num)) return true;
            check.add(num);
        }
        return false;
    }
}
