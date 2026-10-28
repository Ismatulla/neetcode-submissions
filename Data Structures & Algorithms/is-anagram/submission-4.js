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

        for(let key in checkS){
            
            if(checkS[key]!==checkT[key]){
                return false
            }
        }
        return true 
    }
}
