class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hashmap = {};
        for(let i = 0; i < nums.length; i++) {
            let reminder = target - nums[i];
            if(nums[i] in hashmap) {
                return [hashmap[nums[i]], i];
            }
            hashmap[reminder] = i;
        }
        return [-1, -1];
    }
}


// nums = [3,4,5,6], target = 7


// {
//     target - 3 = 4: 0

// }