class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const seen = new Set();

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const val = board[r][c];

                // Skip empty cells
                if (val === ".") continue;

                // Create unique string identifiers for row, column, and 3x3 sub-box
                const rowKey = `row ${r} has ${val}`;
                const colKey = `col ${c} has ${val}`;
                // The brilliant math trick for 3x3 sub-boxes: dividing row/col by 3
                const boxKey = `box ${Math.floor(r / 3)},${Math.floor(c / 3)} has ${val}`;

                // If any of these keys already exist in our set, we found a duplicate!
                if (seen.has(rowKey) || seen.has(colKey) || seen.has(boxKey)) {
                    return false;
                }

                seen.add(rowKey);
                seen.add(colKey);
                seen.add(boxKey);
            }
        }

        return true;
    }
}
