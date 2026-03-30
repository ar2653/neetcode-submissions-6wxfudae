class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let result = 0;
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    const bfs = (r, c) => {
        const queue = new Queue();
        queue.enqueue([r, c])
        while(!queue.isEmpty()) {
            let [currR, currC] = queue.dequeue();
            for(let [dr, dc] of directions) {
                let nr = dr + currR;
                let nc = dc + currC;
                if(nr < 0 || nc < 0 || nr >= m || nc >= n || grid[nr][nc] == "0") continue;
                grid[nr][nc] = "0";
                queue.enqueue([nr, nc]);
            }
        }
    }
    for(let r = 0; r < m; r++) {
        for(let c = 0; c < n; c++) {
            if(grid[r][c] === "1") {
                result++;
                grid[r][c] = "0";
                bfs(r, c);
            }
        }
    }
    return result;
}
}
