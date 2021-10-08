/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

*/
// Brute Force solution, O(n)**2


const twoSum = (nums, target) => {
    // one pointer
    for (let i = 0; i < nums.length; i++) {
        // inner loop - check if they sum to TARGET 
        for (let j = 0; j < nums.length; j++) {
            // 1. index i !== index j
            if (i !== j ) {
                if (nums[i] + nums[j] == target) {
                    return [i, j]
                }
            }
        }
    }
};