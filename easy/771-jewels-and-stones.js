/* You're given strings jewels representing the types of stones that are jewels, 
and stones representing the stones you have. 
Each character in stones is a type of stone you have. 
You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3
Example 2:

Input: jewels = "z", stones = "ZZ"
Output: 0
 

Constraints:

1 <= jewels.length, stones.length <= 50
jewels and stones consist of only English letters.
All the characters of jewels are unique. 
*/

const numJewelsInStones = (jewels, stones) => {
    let count = 0;
    // loop through stones
    for (let i = 0; i < stones.length; i++) {
        // compare each stone to jewels
       for (let j = 0; j < jewels.length; j++) {
           if (jewels[j] == stones[i]) {
               count += 1;
           }
       }
    }
    return count;
};
