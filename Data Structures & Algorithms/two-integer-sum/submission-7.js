class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let track = new Map();
        let res = [];
        for (let i = 0; i < nums.length; i++) {
            let complement = target - nums[i];
            if (track.has(complement)) {
                res.push(i, track.get(complement));
            }
            track.set(nums[i], i);
        }
        return res;
    }
}
