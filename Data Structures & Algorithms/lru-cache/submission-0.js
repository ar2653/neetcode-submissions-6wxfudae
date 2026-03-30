class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cap = capacity;
        this.cache = new Map();
        this.left = new Node(0, 0);
        this.right = new Node(0, 0);
        this.left.next = this.right;
        this.right.prev = this.left;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.cache.get(key)) {
            const node = this.cache.get(key);
            this.remove(node); // Remove from DLL
            this.insert(node); // Insert at right. It becomes MRU
            return node.val;
        }
        return -1;
    }

    remove(node) {
        let prev = node.prev;
        let next = node.next;
        prev.next = next;
        next.prev = prev;
        node.next = null;
        node.prev = null;
    }

    insert(node) {
        let prev = this.right.prev;
        let next = this.right;
        prev.next = node;
        next.prev = node;
        node.next = next;
        node.prev = prev;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    /**
     * Value is present, so update it
     * Value is not present:
     * put it in Map
     * and also in DLL
     * 
     * Check size of map
     */
    put(key, value) {
        if(this.cache.get(key)) {
            const node = this.cache.get(key);
            this.remove(node);
        }
        const newNode = new Node(key, value);
        this.cache.set(key, newNode);
        this.insert(newNode);
        // remove lru when size exceeds
        // also remove from cache
        if(this.cache.size > this.cap) {
            const lru = this.left.next;
            this.remove(lru);
            this.cache.delete(lru.key);
        }
    }
}



















