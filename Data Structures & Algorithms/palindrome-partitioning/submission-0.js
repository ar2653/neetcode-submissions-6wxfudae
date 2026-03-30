class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        let result = [];
        let sub = [];

        const back = (start) => {
            if(start >= s.length) {
                result.push([...sub]);
                return;
            }

            for(let i = start; i < s.length; i++) {
                if(this.isPalindrome(s, start, i)) {
                    sub.push(s.substring(start, i + 1));
                    back(i + 1);
                    sub.pop();
                }
            }
        }
        back(0);
        return result;
    }

    // Helper function
    isPalindrome(s, i, j) {
        while(i < j) {
            if(s[i] !== s[j]) {
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
}
