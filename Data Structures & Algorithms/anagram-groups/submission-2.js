class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    // loop thru and sort
    // create hashMap and check if duplicate exist ,if so here key will be idx value will be empty array and gets pushed same value
    // at the end
    groupAnagrams(strs) {
        let obj = {};
        let sorted = [];

        for (let str of strs) {
            sorted.push(str.split("").sort().join(""));
        }
        console.log(sorted);
        for (let str = 0; str < sorted.length; str++) {
            if (!obj[sorted[str]]) {
                obj[sorted[str]] = [];
            }
            obj[sorted[str]].push(strs[str]);
        }
        return Object.values(obj);
    }
}
