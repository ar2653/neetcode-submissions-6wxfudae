class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let m = grid.length;
        let n = grid[0].length;
        let result = 0;

        const dfs = (r, c) => {
            if(r < 0 || r >= m || c < 0 || c >= n || grid[r][c] == 0) return 0;
            grid[r][c] = "0";
            return 1 +  dfs(r + 1, c) +
                        dfs(r - 1, c) +
                        dfs(r, c + 1) +
                        dfs(r, c - 1);
        }


        for(let r = 0; r < m; r++) {
            for(let c = 0; c < n; c++) {
                if(grid[r][c] === 1) {
                    result = Math.max(result, dfs(r, c));
                }
            }
        }
        return result;
    }
}
