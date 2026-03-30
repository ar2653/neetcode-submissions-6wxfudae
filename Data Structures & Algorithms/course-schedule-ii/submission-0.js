class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        let indegree = new Array(numCourses).fill(0);
        let graph = Array.from({length: numCourses}, () => []);
        // [a, b] a <--- b;
        // to take a, you should take b
        // So a has an indegree of 1
        // In graph
        // {b: [a]} something like this
        for(let [a, b] of prerequisites) {
            indegree[a]++;
            graph[b].push(a);
        }
        let queue = [];
        // push all courses with no pre reqs
        for(let i = 0; i < numCourses; i++) {
            if(indegree[i] === 0) {
                queue.push(i);
            }
        }

        let index = 0;
        let order = new Array(numCourses);
        while(queue.length > 0) {
            let item = queue.shift();
            // This course can be completed
            order[index] = item;
            index++;
            for(let nei of graph[item]) {
                indegree[nei]--;
                if(indegree[nei] == 0) {
                    queue.push(nei);
                }
            }
        }
        return index == numCourses ? order : [];
    }
}


// 0, 1
// 0 <--- 1
// 0 has deps; 1 does not have deps