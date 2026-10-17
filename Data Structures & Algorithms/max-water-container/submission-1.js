class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0,
            r = heights.length - 1,
            res=0
        for (let i = 0; i < heights.length; i++) {
            while (l < r) {
                let area = (r - l) * Math.min(heights[l], heights[r]);
                res = Math.max(res, area);
                if (heights[l] < heights[r]) {
                    l += 1;
                } else {
                    r -= 1;
                }
            }
        }
        return res;
    }
}
