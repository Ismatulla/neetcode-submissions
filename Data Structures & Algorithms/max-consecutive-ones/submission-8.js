class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
  findMaxConsecutiveOnes(nums) {
        const n = nums.length;
        let res = 0;
        for (let i = 0; i < n; i++) {
            let cnt = 0;
            for (let j = i; j < n; j++) {
                if (nums[j] === 0) break;
                cnt++;
            }
            res = Math.max(res, cnt);
        }
        return res;
    }
}

// loop thru and store vars to increase 2) keep increasing vars until loop hits number that is different 3) create another vars to store the value from first var and repeat the first process 4) compare result of 2 vars and if 2nd var has bigger value swap it and save in first var ,otherwise repeat the process
