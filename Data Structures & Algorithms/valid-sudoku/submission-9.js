class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let seen = new Set();
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                let val = board[r][c];
                if (val === ".") continue;
                let rowKey = `row ${r} + ${val}`;
                let colKey = `col ${c} + ${val}`;
                let box = `${Math.floor(r / 3)}+ ${Math.floor(c / 3)}+${val}`;
                if (seen.has(rowKey) || seen.has(colKey) || seen.has(box)) {
                    return false;
                }
                seen.add(rowKey);
                seen.add(colKey);
                seen.add(box);
            }
        }
        return true;
    }
}
