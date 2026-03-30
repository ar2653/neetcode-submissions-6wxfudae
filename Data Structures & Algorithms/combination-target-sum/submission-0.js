class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let result = [];
        let combination = [];
        const backtrack = (index, remaining) => {
            if(remaining === 0) {
                result.push([...combination]);
                return;
            }

            if(remaining < 0 || index >= nums.length) {
                return;
            }

            // pick
            combination.push(nums[index]);
            backtrack(index, remaining - nums[index]);

            // Skip
            combination.pop();
            backtrack(index + 1, remaining);
        }
        backtrack(0, target);
        return result;
    }
    
}
