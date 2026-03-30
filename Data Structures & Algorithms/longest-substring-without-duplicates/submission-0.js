class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const store = new Set();
        let l = 0;
        let res = 0;
        for(let r = 0; r < s.length; r++) {
            while(store.has(s[r])) {
                store.delete(s[l]);
                l++;
            }
            store.add(s[r]);
            res = Math.max((r - l + 1), res);
        }
        return res;
    }
}


/**
 * 0 1 2 3 4 5
 * p w w k e w
 * l
 *   r
 * {p w }
 * 

// zxyzxyz = s
// longest = 0


// { z , x, y } len = 3
// remove a char if exists

// return longest


/**
 * 0 1 2 3 4 5 6
 * z x y z x y z
 *   l   r
 * 
 * 
 * 
 * 
 * 
 */

