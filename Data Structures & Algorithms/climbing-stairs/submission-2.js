class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let cache = new Array(n).fill(-1);

        const dfs = (i) => {
            if(i >= n) return i == n;
            if(cache[i] !== -1) return cache[i];
            return cache[i] = dfs(i + 1) + dfs(i + 2);
        }
        return dfs(0);
    }
}

/**
 * if n = 1 step theres 1 way
 * if n = 2 there are 2 ways to get to second step
 * by either taking 1, 1 or 2 directly
 * 
 * so to get to step 3 you can add 1 + num of steps to get to step 2
 * ...
 * 
 * so F(n) = 1 + F(n - 1)
 * n = 4 stpes
 * 
 * 1 - 1
 * 
 * 
 */