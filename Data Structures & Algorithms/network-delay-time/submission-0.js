class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        // Build Adjacency list from times
        const adj = {};
        for(let i = 1; i <= n; i++) {
            adj[i] = [];
        }
        for(let [u, v, w] of times) {
            adj[u].push([v, w]);
        }

        const pq = new MinPriorityQueue((entry) => entry[0]);
        // Time for the node to reach the source itself will be 0
        // k is the source
        pq.enqueue([0, k]); // time, node

        const visit = new Set();
        let t = 0;

        while(!pq.isEmpty()) {
            const [w1, v1] = pq.dequeue();
            if(visit.has(v1)) continue;
            visit.add(v1);

            t = Math.max(t, w1);

            if(adj[v1]) {
                for(const [n2, w2] of adj[v1]) {
                    if(!visit.has(n2)) {
                        pq.enqueue([w1 + w2 , n2]);
                    }
                }
            }
        }

        return visit.size == n ? t : -1;
    }
}
