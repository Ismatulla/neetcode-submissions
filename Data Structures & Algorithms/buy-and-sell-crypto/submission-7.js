class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buy = 0,
            sell = 0,
            maxP = 0;
        while (sell < prices.length) {
            if (prices[buy] < prices[sell]) {
                maxP = Math.max(maxP, prices[sell] - prices[buy]);
            } else {
                buy = sell;
            }
            sell++;
        }
        return maxP;
    }
}
