class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(!nums || nums.length == 0) return 0;
        
        let numSet = new Set(nums);
        let longest = 0;

        for(let num of numSet) {
            if(numSet.has(num - 1)) continue;
            let current = num;
            let sequenceLength = 1;
            while(numSet.has(current + 1)) {
                sequenceLength++;
                current++;
            }
            longest = Math.max(sequenceLength, longest);
        }
        return longest;
    }
}
