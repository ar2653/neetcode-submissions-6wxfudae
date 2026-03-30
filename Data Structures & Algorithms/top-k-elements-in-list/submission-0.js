class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let frequency = new Object();
        let result = [];
        for(let num of nums) {
            frequency[num] = (frequency[num] || 0) + 1;
        }
        let pq = new MinPriorityQueue(x => x[1]);
        for(let [num, count] of Object.entries(frequency)) {
            pq.enqueue([num, count]);
            if(pq.size() > k) {
                pq.dequeue();
            }
        }
        while(!pq.isEmpty()) {
            result.push(pq.dequeue()[0]);
        }
        return result;
    }
}
