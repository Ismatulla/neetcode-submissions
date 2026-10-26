class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let list = { ")": "(", "}": "{", "]": "[" };
        const stack = [];
        for (const c of s) {
            if (c === "(" || c === "{" || c === "[") {
                stack.push(c);
            }else{
                if(stack.pop() !==list[c]) return false 
            }
        }
        return stack.length===0
    }
}
