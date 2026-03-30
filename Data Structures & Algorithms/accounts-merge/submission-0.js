class UnionFind {
    constructor(n) {
        this.parent = Array.from({length: n}, (_, i) => i);
        this.rank = Array.from({length: n}).fill(1);
    }

    // Find function
    find(x) {
        if(x !== this.parent[x]) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }

    union(x1, x2) {
        let p1 = this.find(x1);
        let p2 = this.find(x2);
        // cycle detected
        if(p1 === p2) return false;

        if(this.rank[p1] > this.rank[p2]) {
            this.parent[p2] = p1;
            this.rank[p1] += this.rank[p2];
        } else {
            this.parent[p1] = p2;
            this.rank[p2] += this.rank[p1];
        }
        return true;
    }
}

class Solution {
/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
accountsMerge(accounts) {
    let n = accounts.length;
    let uf = new UnionFind(n);
    let emailToAcc = new Map(); // email --> index of account

    // Build UF structure
    for(let i = 0; i < n; i++) {
        for(let j = 1; j < accounts[i].length; j++) {
            const email = accounts[i][j];
            if(emailToAcc.has(email)) {
                uf.union(i, emailToAcc.get(email));
            } else {
                emailToAcc.set(email, i);
            }
        }
    }

    // Group emails by leader
    const emailGroup = new Map();
    for(const [email, accId] of emailToAcc.entries()) {
        const leader = uf.find(accId);
        if(!emailGroup.has(leader)) {
            emailGroup.set(leader, []);
        }
        emailGroup.get(leader).push(email);
    }

    // Build result
    const result = [];
    for(const [accId, emails] of emailGroup.entries()) {
        emails.sort();
        const merged = [accounts[accId][0], ...emails];
        result.push(merged);
    }
    return result;
};
}