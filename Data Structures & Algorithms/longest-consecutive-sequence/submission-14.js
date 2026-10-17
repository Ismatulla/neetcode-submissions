class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (!nums || nums.length === 0) return 0;

        let numSet = new Set(nums);
        let longestStreak = 0;

        for (let num of numSet) {
            // Check if this number is the START of a sequence
            if (!numSet.has(num - 1)) {
                let currentNum = num;
                let currentStreak = 1;

                // Count consecutive numbers upwards
                while (numSet.has(currentNum + 1)) {
                    currentNum += 1;
                    currentStreak += 1;
                }

                longestStreak = Math.max(longestStreak, currentStreak);
            }
        }

        return longestStreak;
    }
}
//nums =1,3,2,5,6,
