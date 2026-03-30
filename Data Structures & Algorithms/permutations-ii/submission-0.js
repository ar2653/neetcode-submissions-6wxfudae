class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permuteUnique(nums) {
        let result = [];
        let perm = [];
        nums.sort((a, b) => a - b);
        const visit = new Array(nums.length).fill(false);
        const back = () => {
            if(perm.length === nums.length) {
                result.push([...perm]);
                return;
            }

            for(let i = 0; i < nums.length; i++) {
                if(
                    visit[i] ||
                    (i > 0 && nums[i] === nums[i - 1] && !visit[i - 1])
                ) {
                    continue;
                }
                visit[i] = true;
                perm.push(nums[i]);
                back();
                visit[i] = false;
                perm.pop();
            }
        }
        back();
        return result;
    }
}
