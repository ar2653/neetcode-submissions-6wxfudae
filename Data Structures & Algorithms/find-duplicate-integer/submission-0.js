class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let n = nums.length;
        for(let i = 0; i < n; i++) {
            let idx = Math.abs(nums[i]);
            if(nums[idx] < 0) return idx;
            nums[idx] = -1 * nums[idx];
        }
    }
}
