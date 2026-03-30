class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        let s_count = new Object();
        let t_count = new Object();
        for(let i = 0; i < s.length; i++) {
            s_count[s[i]] = (s_count[s[i]] || 0) + 1;
            t_count[t[i]] = (t_count[t[i]] || 0) + 1;
        }
        for(let key in s_count) {
            if(s_count[key] !== t_count[key]) return false;
        }
        return true;
    }
}
