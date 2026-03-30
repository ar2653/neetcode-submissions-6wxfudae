class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const dfs = (grid, r, c) => {
            if(r < 0 || r >= grid.length || c < 0 || c >= grid[r].length || grid[r][c] === '0') return false;
            grid[r][c] = '0';
            dfs(grid, r-1, c);
            dfs(grid, r+1, c);
            dfs(grid, r, c - 1);
            dfs(grid, r, c + 1);
        }
        let res = 0;
        for(let r = 0; r < grid.length; r++) {
            for(let c = 0; c < grid[0].length; c++) {
                if(grid[r][c] === '1') {
                    res++;
                    dfs(grid, r, c);
                }
            }
        }
        return res;

    }
    

}
