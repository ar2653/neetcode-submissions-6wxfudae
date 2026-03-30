class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max_profit = 0;
        let cheapest = prices[0];
        for(let price of prices) {
            if(price < cheapest) cheapest = price;
            max_profit = Math.max(max_profit, price - cheapest);
        }
        return max_profit;
    }
}
