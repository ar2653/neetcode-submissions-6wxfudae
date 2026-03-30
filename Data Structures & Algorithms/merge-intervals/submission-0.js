class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        if(!intervals) return [];
        intervals = intervals.sort((a, b) => a[0] - b[0]);
        let merged = [];
        merged.push(intervals[0]);
        for(let i = 1; i < intervals.length; i++) {
            let last = merged.length - 1;
            if(merged[last][1] >= intervals[i][0]) {
                merged[last][1] = Math.max(merged[last][1], intervals[i][1]);
            } else {
                merged.push(intervals[i]);
            }
        }
        return merged;
    }
}
