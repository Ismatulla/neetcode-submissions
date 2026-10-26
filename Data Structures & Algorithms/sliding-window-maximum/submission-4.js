class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const n = nums.length;
        const output = new Array(n - k + 1);
        const q = []; // stores indices, values decreasing
        let head = 0; // front of the queue
        let l = 0,
            r = 0;

        while (r < n) {
            // popBack: remove smaller values from the back
            while (q.length > head && nums[q[q.length - 1]] < nums[r]) {
                q.pop();
            }
            q.push(r); // pushBack

            // popFront: front index left the window
            if (l > q[head]) {
                head++;
            }

            if (r + 1 >= k) {
                output[l] = nums[q[head]]; // front()
                l++;
            }
            r++;
        }
        return output;
    }
}
