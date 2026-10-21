class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const k = s1.length;
        if (k > s2.length) return false;

        const a = 97;
        const need = new Array(26).fill(0);
        const window = new Array(26).fill(0);

        for (let i = 0; i < k; i++) {
            need[s1.charCodeAt(i) - a]++;
            window[s2.charCodeAt(i) - a]++;
        }

        // count how many letters have matching counts
        let matches = 0;
        for (let j = 0; j < 26; j++) {
            if (need[j] === window[j]) matches++;
        }
        if (matches === 26) return true;

        for (let i = k; i < s2.length; i++) {
            const inIdx = s2.charCodeAt(i) - a;
            const outIdx = s2.charCodeAt(i - k) - a;

            window[inIdx]++;
            if (window[inIdx] === need[inIdx]) matches++;
            else if (window[inIdx] === need[inIdx] + 1) matches--;

            window[outIdx]--;
            if (window[outIdx] === need[outIdx]) matches++;
            else if (window[outIdx] === need[outIdx] - 1) matches--;

            if (matches === 26) return true;
        }
        return false;
    }
}
