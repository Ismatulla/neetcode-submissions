class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0;
        let res = 0;
        let lookup = new Set();

        for (let r = 0; r < s.length; r++) {
            while (lookup.has(s[r])) {
                lookup.delete(s[l]);
                l++;
            }
            lookup.add(s[r]);
            res = Math.max(res, r - l + 1);
        }
        return res;
    }
}
