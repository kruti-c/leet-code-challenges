/**
 * Hash Set - Early Exit
 * Time O(N) | Space O(N)
 * https://leetcode.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 */

//Set : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
var containsDuplicate = function(nums) {
    const numSet = new Set(); 

    for(i=0; i < nums.length; i++){
        if(numSet.has(nums[i])){  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/has
            return true;
        }
         numSet.add(nums[i])
    }
    return false;
};