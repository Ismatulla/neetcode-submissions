class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    // loop thru and sort
    // create hashMap and check if duplicate exist ,if so here key will be idx value will be empty array and gets pushed same value
    // at the end
    groupAnagrams(strs) {
        let res = {};
        for (const s of strs) {
            const count = new Array(26).fill(0);
            for (let c of s) {
                count[c.charCodeAt(0) - "a".charCodeAt(0)] += 1;
            }
            let key = count.join(",");
            if (!res[key]) {
                res[key] = [];
            }
            res[key].push(s);
        }
        return Object.values(res)
    }
}
