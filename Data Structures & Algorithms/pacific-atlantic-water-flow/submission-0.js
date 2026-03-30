class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        let m = heights.length;
        let n = heights[0].length;
        let pac = new Set();
        let atl = new Set();
        let result = [];
        const dfs = (r, c, visit, prev) => {
            let pos = `${r},${c}`;
            if(visit.has(pos) || r < 0 || c < 0 || r == m || c == n || heights[r][c] < prev) {
                return;
            }
            visit.add(pos);
            dfs(r + 1, c, visit, heights[r][c]);
            dfs(r - 1, c, visit, heights[r][c]);
            dfs(r, c + 1, visit, heights[r][c]);
            dfs(r, c - 1, visit, heights[r][c]);
        }
        // Go thru 1st row [(0,0) (0,1) (0,2) (0,3)]
        // Last row [[m - 1, 0], [m - 1, 1], [m - 1, 2], [m - 1, 3]]
        for(let col = 0; col < n; col++) {
            dfs(0, col, pac, heights[0][col]);
            dfs(m - 1, col, atl, heights[m - 1][col]);
        }

        // Go thru 1st col and last column
        // (0,0), (1,0), (2, 0), (3, 0)
        // (0, n - 1), (1, n - 1)....
        for(let row = 0; row < m; row++) {
            dfs(row, 0, pac, heights[row][0]);
            dfs(row, n - 1, atl, heights[row][n - 1]);
        }

        for(let r = 0; r < m; r++) {
            for(let c = 0; c < n; c++) {
                let pos = `${r},${c}`;
                if(pac.has(pos) && atl.has(pos)) {
                    result.push([r, c]);
                }
            }
        }
        return result;
    }
}

// 00 01 02 03
// 10 11 12 13
// 20 21 22 23
// 30 31 32 33

