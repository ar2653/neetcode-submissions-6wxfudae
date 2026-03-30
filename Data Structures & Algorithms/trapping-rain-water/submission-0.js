class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        if(!height || height.length === 0) return 0;
        let l = 0;
        let r = height.length - 1;
        let maxL = height[l];
        let maxR = height[r];
        let res = 0;
        while(l < r) {
            if(maxL < maxR) {
                l++;
                maxL = Math.max(maxL, height[l]);
                res += (maxL - height[l]);
            } else {
                r--;
                maxR = Math.max(maxR, height[r]);
                res += (maxR - height[r]);
            }
        }
        return res;
    }
}



/**
4:08


[0,2,0,3,1,0,1,3,2,1]
   l               r

maxL = 0;
maxR = 0;

// water cant be trapped at borders

// water at a position is

maxHeight at Left = 2
and MaxHeight at right = 3

min(ml, mr) ====> 2
- h[i] = 0


// 2 units of water is stored here


ml = 2;
mr = 3

2 - 3 = -1; no water

maxl = 3; maxr = 3

w = 3 - h[i] = 2 units of water


*/