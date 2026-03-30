class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    // topKFrequent(nums, k) {
    //     let frequency = new Object();
    //     let result = [];
    //     for(let num of nums) {
    //         frequency[num] = (frequency[num] || 0) + 1;
    //     }
    //     let pq = new MinPriorityQueue(x => x[1]);
    //     for(let [num, count] of Object.entries(frequency)) {
    //         pq.enqueue([num, count]);
    //         if(pq.size() > k) {
    //             pq.dequeue();
    //         }
    //     }
    //     while(!pq.isEmpty()) {
    //         result.push(pq.dequeue()[0]);
    //     }
    //     return result;
    // }

    topKFrequent(nums, k) {
        let n = nums.length;
        let result = [];
        let frequency = new Object();
        let buckets = new Array(n + 1).fill(0).map(() => []);
        for(let num of nums) {
            frequency[num] = (frequency[num] || 0) + 1;
        }
        for(let [num, count] of Object.entries(frequency)) {
            buckets[count].push(num);
        }
        for(let i = buckets.length - 1; i >= 0; i--) {
            for(let num of buckets[i]) {
                result.push(num);
                if(result.length === k) return result;
            }
        }
    }
}
