/* 
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
121. Best Time to Buy and Sell Stock


You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.



*/

const maxProfit = (stocks) => {
    let minimum = Number.POSITIVE_INFINITY;
    let maximum = 0;
    // check if there are stock prices
    if (stocks.length == 0) {
        return 0;
    }
    // get current day's stock price
    for (let i = 0; i < stocks.length; i++) {
        if (stocks[i] < minimum) {
            minimum = stocks[i];
        } else if(stocks[i] - minimum > maximum) {
            maximum = stocks[i] - minimum;
        }
    }
    return maximum;
}