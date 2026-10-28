class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let hasDuplicate = new Set(nums)
        if(nums.length !==hasDuplicate.size) return true

        return false 
    }
}
