class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let step = 0;
        let result = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 1) {
                step += 1;
            } else {
                if (step > result) {
                    result = step;
                }
                step = 0;
            }
        }
        return Math.max(result,step);
    }
}

// loop thru and store vars to increase 2) keep increasing vars until loop hits number that is different 3) create another vars to store the value from first var and repeat the first process 4) compare result of 2 vars and if 2nd var has bigger value swap it and save in first var ,otherwise repeat the process
