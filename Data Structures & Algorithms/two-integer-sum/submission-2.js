class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let remainders = new Object();
        for(let i = 0; i < nums.length; i++) {
            let difference = target - nums[i];
            if(nums[i] in remainders) {
                return [remainders[nums[i]], i];
            }
            remainders[difference] = i;
        }
        return [-1, -1];
    }
}
