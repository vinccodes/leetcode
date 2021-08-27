/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    const hashMap = {}
    let maxCount = 0;
    let majority = 0
    
    // case for only 1 element
    if (nums.length == 1) {
        return nums[0]
    }
    
    // iterate through nums 
    for (let i = 0; i < nums.length; i++) {
        // if the number doesn't exist add it to hashmap
        if (hashMap[nums[i].toString()]) {
            hashMap[nums[i].toString()] += 1;
            
            if (hashMap[nums[i].toString()] > maxCount) {
                maxCount = hashMap[nums[i].toString()]
                majority = nums[i]
            }
            // check if the count of the element appears more than n / 2 times
            if (hashMap[nums[i].toString()] > nums.length / 2) {
                return nums[i]
            }
        }
        else {
            hashMap[nums[i].toString()] = 1
            
        }
    }
    return majority
};