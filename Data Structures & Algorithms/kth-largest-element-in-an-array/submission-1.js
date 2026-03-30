class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        k = nums.length - k;

        const quickSelect = (l, r) => {
            let pivot = nums[r];
            let p = l;
            for(let i = l; i < r; i++) {
                if(nums[i] <= pivot) {
                    [nums[p], nums[i]] = [nums[i], nums[p]];
                    p++;
                }
            }
            [nums[p], nums[r]] = [nums[r], nums[p]];
            if(k < p) {
                return quickSelect(l, p - 1);
            } else if(k > p) {
                return quickSelect(p + 1, r);
            } else {
                return nums[p];
            }
        }
        return quickSelect(0, nums.length - 1);
    }
    //     // 
    //     // let heap = new MinPriorityQueue();
    //     // for(let num of nums) {
    //     //     heap.push(num);
    //     //     if(heap.size() > k) {
    //     //         heap.pop();
    //     //     }
    //     // }
    //     // return heap.front();
    // }

    // findKthLargest(nums, k) {
    //     k = nums.length - k;

    //     const quickSelect = (left, right) => {
    //         let pivot = nums[right];
    //         let p = left;

    //         for (let i = left; i < right; i++) {
    //             if (nums[i] <= pivot) {
    //                 [nums[p], nums[i]] = [nums[i], nums[p]];
    //                 p++;
    //             }
    //         }
    //         [nums[p], nums[right]] = [nums[right], nums[p]];

    //         if (p > k) {
    //             return quickSelect(left, p - 1);
    //         } else if (p < k) {
    //             return quickSelect(p + 1, right);
    //         } else {
    //             return nums[p];
    //         }
    //     };

    //     return quickSelect(0, nums.length - 1);
    // }
}

