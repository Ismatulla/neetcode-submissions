class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        if (height.length == 0) return 0;
        let l=0,
            r = height.length - 1,
            res = 0,
            leftMax = height[l],
            rightMax = height[r];
        while (l < r) {
            if (leftMax < rightMax) {
                l++;
                leftMax = Math.max(leftMax, height[l]);
                res += leftMax - height[l];
            } else {
                r--;
                rightMax = Math.max(rightMax, height[r]);
                res += rightMax - height[r];
            }
        }
        return res;
    }
}
//[0,2,0,3,1,0,1,3,2,1]
