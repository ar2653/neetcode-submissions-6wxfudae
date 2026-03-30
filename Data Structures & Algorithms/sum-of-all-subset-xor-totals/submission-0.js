class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    subsetXORSum(nums) {
        const getXOR = (index, current) => {
            if(index === nums.length) {
                return current;
            }

            let withEl = getXOR(index + 1, current ^ nums[index]);
            let without = getXOR(index + 1, current);

            return withEl + without;
        }

        return getXOR(0, 0);
    }
}
