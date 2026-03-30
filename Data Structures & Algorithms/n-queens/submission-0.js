class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        let cols = new Set();
        let posD = new Set();
        let negD = new Set();
        let board = Array.from({length: n}, () => new Array(n).fill("."));
        let res = [];
        const backtrack = (r) => {
            if(r === n) {
                res.push(board.map((row) => row.join("")));
                return;
            }

            for(let c = 0; c < n; c++) {
                if(cols.has(c) || posD.has(r + c) || negD.has(r - c)) continue;

                cols.add(c);
                posD.add(r + c);
                negD.add(r - c);
                board[r][c] = "Q";

                backtrack(r + 1);

                cols.delete(c);
                posD.delete(r + c);
                negD.delete(r - c);
                board[r][c] = ".";
            }
        }
        backtrack(0);
        return res;
    }
}
