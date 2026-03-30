class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    totalNQueens(n) {
        let cols = new Set();
        let pos = new Set();
        let neg = new Set();

        const backtrack = (r) => {
            if(r === n) {
                return 1;
            }
            let count = 0;

            for(let c = 0; c < n; c++) {
                if(cols.has(c) || pos.has(r + c) || neg.has(r - c)) continue;

                cols.add(c);
                pos.add(r + c);
                neg.add(r - c);
                count += backtrack(r + 1);
                cols.delete(c);
                pos.delete(r + c);
                neg.delete(r - c);
            }
            return count;
        }
        return backtrack(0);
    }
}
