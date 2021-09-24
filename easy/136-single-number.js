/* 136. Single Number

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.


FROM https://leetcode.com/problems/single-number/

*/


const singleNumber = (nums) => {
    
    const count = {};
    // iterate through nums array
    for (let i = 0; i < nums.length; i++){
        if (count[nums[i]]) {
            count[nums[i]] += 1;
        }
        else {
            count[nums[i]] = 1;
        }
    }
    // loop through hash map 
    for (const item in count) {
      if (count[item] == 1) {
        return item;
      }
    }
};