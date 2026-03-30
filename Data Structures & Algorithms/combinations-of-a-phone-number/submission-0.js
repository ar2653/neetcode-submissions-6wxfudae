class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        let result = [];
        let charMap = {
            "2": "abc",
            "3": "def",
            "4": "ghi",
            "5": "jkl",
            "6": "mno",
            "7": "pqrs",
            "8": "tuv",
            "9": "wxyz"
        };

        const backtrack = (i, current) => {
            if(current.length === digits.length) {
                result.push(current);
                return;
            }
            let letters = charMap[digits[i]];
            for(let char of letters) {
                backtrack(i + 1, current + char);
            }
        }
        if(digits.length) {
            backtrack(0, "");
        }
        return result;
    }
}
