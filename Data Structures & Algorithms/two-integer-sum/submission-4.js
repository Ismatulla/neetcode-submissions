class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let result = new Map();
        for (let i = 0; i < nums.length; i++) {
            let check = target - nums[i];
            if (result.has(check)) {
                return [result.get(check), i];
            }
            result.set(nums[i], i);
        }
        return [];
    }
}
