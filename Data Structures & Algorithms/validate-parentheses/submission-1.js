class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let brackets = {
            '}':'{',
            ')':'(',
            ']':'[',
        }
        let stack = [];
        for(let char of s) {
            if(char in brackets) {
                let top = stack.pop();
                if(top !== brackets[char]) return false;
            } else {

                stack.push(char);
            }
        }
        return stack.length === 0;
    }
}
