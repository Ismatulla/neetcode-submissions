class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // iterate thru row
        for (let i = 0; i < 9; i++) {
            let rows = new Set();
            for (let row = 0; row < 9; row++) {
                if (board[i][row] === ".") continue;
                if (rows.has(board[i][row])) {
                    return false;
                }
                rows.add(board[i][row]);
            }
        }
        // iterate thru cols
        for (let i = 0; i < 9; i++) {
            let cols = new Set();
            for (let col = 0; col < 9; col++) {
                if (board[col][i] === ".") continue;
                if (cols.has(board[col][i])) {
                    return false;
                }
                cols.add(board[col][i]);
            }
        }
        for (let square = 0; square < 9; square++) {
            let seen = new Set();
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    let row = Math.floor(square / 3) * 3 + i;
                    let col = (square % 3) * 3 + j;
                    if (board[row][col] === ".") continue;
                    if (seen.has(board[row][col])) return false;
                    seen.add(board[row][col]);
                }
            }
        }
        return true;
    }
}
