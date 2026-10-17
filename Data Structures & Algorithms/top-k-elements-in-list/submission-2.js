class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqMap = {};
        // Create buckets up to length N + 1
        const buckets = Array.from({ length: nums.length + 1 }, () => []);

        for (const num of nums) {
            freqMap[num] = (freqMap[num] || 0) + 1;
        }

        for (const [num, count] of Object.entries(freqMap)) {
            buckets[count].push(Number(num));
        }

        const result = [];
        // Collect numbers starting from highest frequency bucket
        for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
            if (buckets[i].length > 0) {
                result.push(...buckets[i]);
            }
        }

        return result.slice(0, k);
    }
}
