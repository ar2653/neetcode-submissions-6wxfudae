class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        let m = board.length;
        let n = board[0].length;
        let result;
        const explore = (r, c, idx) => {
            if(idx === word.length) return true;

            if(r < 0 || r >= m || c < 0 || c >= n || board[r][c] !== word[idx] ||
            board[r][c] == "#") {
                return false;
            }

            board[r][c] = "#";
            result = (explore(r + 1, c, idx + 1) || explore(r - 1, c, idx + 1) ||
                    explore(r, c - 1, idx + 1) || explore(r, c + 1, idx + 1))
            board[r][c] = word[idx];
            return result;
        }


        for(let r = 0; r < m; r++) {
            for(let c = 0; c < n; c++) {
                if(explore(r, c, 0)) {
                    return true;
                }
            }
        }
        return false;
    }
}
