/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    // minMeetingRooms(intervals) {
    //     intervals = intervals.sort((a, b) => a.start - b.start);
    //     const minHeap = new MinPriorityQueue();
    //     for(const interval of intervals) {
    //         if(!minHeap.isEmpty() && minHeap.front() <= interval.start) {
    //             minHeap.pop();
    //         }
    //         minHeap.push(interval.end);
    //     }
    //     return minHeap.size();
    // }


    minMeetingRooms(intervals) {
        intervals = intervals.sort((a, b) => a.start - b.start);
        let heap = new MinPriorityQueue();
        for(let int of intervals) {
            if(!heap.isEmpty() && heap.front() <= int.start) {
                heap.pop();
            }
            heap.push(int.end);
        }
        return heap.size();
    }
}
