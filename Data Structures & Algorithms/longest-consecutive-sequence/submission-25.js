class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length == 0) return 0;
        nums.sort((a, b) => a - b);

        let res = 1;
        let temp = 1;
        for (let i = 1; i < nums.length; i++) {
            // Skip duplicates
            if (nums[i] === nums[i - 1]) continue;

            if (nums[i] === nums[i - 1] + 1) {
                temp++;
            } else {
                temp = 1; // Reset streak
            }
            res = Math.max(res, temp);
        }
        return res;
    }
}
