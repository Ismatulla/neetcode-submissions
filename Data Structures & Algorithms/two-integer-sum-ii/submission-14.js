class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l = 0;
        let r = numbers.length - 1;
        while (l < r) {
            let check = numbers[l] + numbers[r];
            if (check > target) {
                r--;
            }
            if (check < target) {
                l++;
            }
            if (check == target) {
                return [l + 1, r + 1];
            }
        }
        return []
    }
}
