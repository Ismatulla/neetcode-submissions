class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // let num=[1,2,4,6]
        let res =new  Array(nums.length).fill(1);
        let prefix = 1;
        let postfix = 1;
        for (let i = 0; i < res.length; i++) {
            res[i] = prefix; //[1 1 2 8]
            prefix *= nums[i]; //1 2 8 48 
        }
        for (let i = nums.length-1; i >= 0; i--) {
            res[i] *= postfix; //8 12 24 48
            postfix *= nums[i]; // 6 24 48
        }
        return res
    }
}
