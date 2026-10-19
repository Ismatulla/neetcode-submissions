class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
    const count = {};
    let l = 0;
    let maxf = 0;   // highest count of any single letter seen in the frame
    let res = 0;

    for (let r = 0; r < s.length; r++) {
        count[s[r]] = (count[s[r]] || 0) + 1;      // new tile enters
        maxf = Math.max(maxf, count[s[r]]);

        while ((r - l + 1) - maxf > k) {           // too many wrong tiles?
            count[s[l]]--;                         // left tile leaves
            l++;
        }
        res = Math.max(res, r - l + 1);
    }
    return res;
}
}
