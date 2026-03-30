class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        let m = grid.length;
        let n = grid[0].length;
        let seen = new Set();
        let q = new Queue();

        function addCell(r, c) {
            let pos = `${r},${c}`;
            if(r < 0 || c < 0 || r >= m || c >= n || seen.has(pos) || grid[r][c] === -1) return;
            seen.add(pos);
            q.push([r, c]);
        }

        for(let r = 0; r < m; r++) {
            for(let c = 0; c < n; c++) {
                if(grid[r][c] === 0) {
                    q.push([r, c]);
                    seen.add(`${r},${c}`);
                }
            }
        }

        let dist = 0;
        while(!q.isEmpty()) {
            for(let i = q.size(); i > 0; i--) {
                let [r, c] = q.pop();
                grid[r][c] = dist;
                addCell(r + 1, c);
                addCell(r - 1, c);
                addCell(r, c + 1);
                addCell(r, c - 1);
            }
            dist++;
        }
    }
}

// [
//   [INF,-1,0,INF],
//   [INF,INF,INF,-1],
//   [INF,-1,INF,-1],
//   [0,-1,INF,INF]
// ]

// [
//   [0,-1],
//   [INF,INF]
// ]