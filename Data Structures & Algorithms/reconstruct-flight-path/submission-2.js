class Solution {
    /**
     * @param {string[][]} tickets
     * @return {string[]}
     */
    // findItinerary(tickets) {
    //     let result = [];
    //     result.push("JFK");

    //     tickets.sort();

    //     const adj = {};
    //     for(let [src, dst] of tickets) {
    //         if(!adj[src]) adj[src] = [];
    //     }
    //     for(let [src, dst] of tickets) {
    //         adj[src].push(dst);
    //     }

    //     const dfs = (src) => {
    //         if(result.length === tickets.length + 1) {
    //             return true;
    //         }
    //         if(!adj[src]) {
    //             return false;
    //         }

    //         let temp = [...adj[src]];
    //         for(let i = 0; i < temp.length; i++) {
    //             const v = temp[i];
    //             adj[src].splice(i, 1);
    //             result.push(v);

    //             if(dfs(v)) return true;
    //             result.pop();
    //             adj[src].splice(i, 0, v);
    //         }
    //         return false;
    //     }
    //     dfs('JFK');
    //     return result;
    // }

    findItinerary(tickets) {
        const adj = {};
        for(const [src, dst] of tickets) {
            if(!adj[src]) adj[src] = [];
            adj[src].push(dst);
        }

        for(const src in adj) {
            adj[src].sort((a, b) => {
                if(a > b) return -1;
                else if(a < b) return 1;
                else return 0;
            })
        }

        let result = [];

        const visit = (curr) => {
            let destinations = adj[curr];
            while(destinations && destinations.length > 0) {
                visit(destinations.pop());
            }
            result.push(curr);
        }
        visit("JFK");
        return result.reverse();
    }
}









