class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // Check whole grid
        let m = board.length;
        let n = board[0].length;
        for(let r = 0; r < m; r++) {
            let rows = new Set();
            for(let c = 0; c < n; c++) {
                let value = board[r][c];
                if(value === '.') continue;
                else if(rows.has(value)) return false;
                else rows.add(value);
            }
        }
        for(let r = 0; r < m; r++) {
            let cols = new Set();
            for(let c = 0; c < n; c++) {
                let value = board[c][r];
                if(value === '.') continue;
                else if(cols.has(value)) return false;
                else cols.add(value);
            }
        }
        // Check sub grids
        for(let startRow = 0; startRow < m; startRow += 3) {
            for(let startCol = 0; startCol < n; startCol += 3) {
                let subset = new Set();
                for(let r = startRow; r < startRow + 3; r++) {
                    for(let c = startCol; c < startCol + 3; c++) {
                        let value = board[r][c];
                        if(value === '.') continue;
                        else if(subset.has(value)) return false;
                        else subset.add(value);
                    }
                }
            }
        }
        return true;
    }
}
