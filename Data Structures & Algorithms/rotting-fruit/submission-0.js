class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let m = grid.length;
        let n = grid[0].length;
        let queue = new Queue();
        let fresh = 0;
        let time = 0;
        // Fill the queue with rotten oranges
        // Count Fresh Oranges
        for(let r = 0; r < m; r++) {
            for(let c = 0; c < n; c++) {
                if(grid[r][c] == 2) {
                    queue.enqueue([r, c]);
                }
                if(grid[r][c] == 1) {
                    fresh++;
                }
            }
        }
        let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        while(!queue.isEmpty() && fresh > 0) {
            let size = queue.size();
            for(let i = 0; i < size; i++) {
                let [r, c] = queue.dequeue();
                for(let [dr, dc] of directions) {
                    let nr = r + dr;
                    let nc = c + dc;
                    if(nr < 0 || nr >= m || nc < 0 || nc >= n || grid[nr][nc] != 1) continue;
                    grid[nr][nc] = 2;
                    queue.enqueue([nr, nc]);
                    fresh--;
                }
            }
            time++;
        }
        return (fresh === 0) ? time : -1;
    }
}









