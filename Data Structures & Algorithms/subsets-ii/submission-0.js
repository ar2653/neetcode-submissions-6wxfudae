class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        let result = [];
        let subset = [];
        nums.sort((a, b) => a - b);
        const back = (start) => {
            result.push([...subset]);

            for(let i = start; i < nums.length; i++) {
                // duplicates
                if(i > start && nums[i] === nums[i - 1]) continue;

                subset.push(nums[i]);

                back(i + 1);

                subset.pop();
            }
        }
        back(0);
        return result;
    }
}
