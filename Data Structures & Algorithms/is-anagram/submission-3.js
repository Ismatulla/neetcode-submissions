class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        let checkS = {};
        let checkT = {};
        for (let i = 0; i < s.length; i++) {
            checkS[s[i]] = (checkS[s[i]] || 0) + 1;
            checkT[t[i]] = (checkT[t[i]] || 0) + 1;
        }
        for (const val in checkS) {
            if (checkS[val] !== checkT[val]) return false;
        }
        return true 
    }
}
