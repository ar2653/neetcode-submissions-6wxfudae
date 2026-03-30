class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates.sort((a, b) => a - b);
        let result = [];
        let combination = [];

        const backtrack = (index, remaining) => {
            if(remaining === 0) {
                result.push([...combination]);
                return;
            }

            if(index >= candidates.length || remaining < 0) return;

            // pick
            combination.push(candidates[index]);
            backtrack(index + 1, remaining - candidates[index]);
            combination.pop();

            
            // Skip the number and dups
            while(index + 1 < candidates.length && candidates[index] == candidates[index + 1]) {
                index++;
            }
            backtrack(index + 1, remaining);
        }
        backtrack(0, target);
        return result;
    }
}
