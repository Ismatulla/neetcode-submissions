class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let isExist = {};
        let res = [];
        for (let i = 0; i < numbers.length; i++) {
            let complement = target - numbers[i];

            if (isExist[complement]) {
                res.push(isExist[complement], i + 1);
            }
            isExist[numbers[i]] = i+1;
        }
        return res;
    }
}
