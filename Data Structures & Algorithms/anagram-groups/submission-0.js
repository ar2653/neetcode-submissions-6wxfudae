class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let result = new Object();
        for(let word of strs) {
            let count = new Array(26).fill(0);
            for(let char of word) {
                count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }
            let key = count.join('#');
            if(key in result) {
                result[key].push(word);
            } else {
                result[key] = [word];
            }
        }
        return Object.values(result);
    }
}
