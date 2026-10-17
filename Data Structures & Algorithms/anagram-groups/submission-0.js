class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
      const res={}
      for(const s of strs){
        const sortedS=s.split('').sort().join()
        if(!res[sortedS]){
            res[sortedS]=[]
        }
        res[sortedS].push(s)
      }
      return Object.values(res)
    }
}
// create response object 2) loop and sort 3) push the sorted string as a key and original as a value ,3) get Object.values(res)
