class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        let result = [];
        let comb = [];

        const backtrack = (start) => {
            if(comb.length === k) {
                result.push([...comb]);
                return;
            }

            for(let i = start; i <= n; i++) {
                comb.push(i);
                backtrack(i + 1);
                comb.pop();
            }
        }
        backtrack(1);
        return result;
    }
}

/**
 *          -
 *        /    |. \
 *       1.    2.  3
 *      / \.   / \
 *     2. 3.  
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */