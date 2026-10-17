class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let check = [];

        for (let i = 0; i < nums.length; i++) {
            if (check.includes(nums[i])) {
                return true;
            }else{
                check.push(nums[i])
            }
        }
        return false;
    }
}
