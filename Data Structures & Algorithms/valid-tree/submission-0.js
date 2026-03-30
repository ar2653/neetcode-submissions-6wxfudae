class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if(edges.length > n - 1) {
            return false;
        }
        let graph = Array.from({length: n}, () => []);
        for(let [u, v] of edges) {
            graph[u].push(v);
            graph[v].push(u);
        }
        let visit = new Set();
        const dfs = (node, parent) => {
            if (visit.has(node)) return false;
            
            visit.add(node);

            for(let nei of graph[node]) {
                if(nei == parent) continue;
                if(!dfs(nei, node)) return false;
            }
            return true;
        }
        return dfs(0, -1) && visit.size == n;
    }
}
