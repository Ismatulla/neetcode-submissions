class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let bucket = Array.from({ length: nums.length + 1 }, () => []);
        let freq = {};
        let res = [];
        for (let n of nums) {
            freq[n] = (freq[n] || 0) + 1;
        }

        for (let key in freq) {
            let idx = freq[key];
            bucket[idx].push(parseInt(key));
        }

        for (let i = bucket.length - 1; i > 0; i--) {
            for (let n of bucket[i]) {
                res.push(n);
                if (res.length === k) {
                    return res;
                }
            }
        }
    }
}
