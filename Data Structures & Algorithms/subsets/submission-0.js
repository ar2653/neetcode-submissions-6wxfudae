class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let n = nums.length;
        let result = [];
        let subset = [];
        const backtrack = (i) => {
            if(i === n) {
                result.push([...subset]);
                return;
            }
            backtrack(i + 1);

            // pick
            subset.push(nums[i]);
            backtrack(i + 1);
            subset.pop();
        }
        backtrack(0);
        return result;
    }
}

