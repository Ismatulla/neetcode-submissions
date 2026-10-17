class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k)
    {
        let obj = {};
        let result = [];
        for (let i = 0; i < nums.length; i++) {
            obj[nums[i]] = (obj[nums[i]] || 0) + 1;
        }
        let res = Object.values(obj);

        while (k > 0) {
            let max = Math.max(...res);
            let res2 = Object.keys(obj).find((key) => obj[key] === max);
            result.push(Number(res2));
            delete obj[res2];
            res.splice(res.indexOf(max), 1);
            k--;
        }
        return result;
    }
}
