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



//Hash Map: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map 
//key value pair
/**
 * Hash Map - Frequency Counter
 * Time O(N) | Space O(1)
 * https://leetcode.com/problems/valid-anagram/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = (s, t, map = new Map()) => {
    const isEqual = s.length === t.length;
    if (!isEqual) return false;

    addFrequency(s, map);      /* Time O(N) | Space O(1) */
    subtractFrequency(t, map); /* Time O(N) | Space O(1) */

    return checkFrequency(map);/* Time O(N) */
};

const addFrequency = (str, map) => {
    for (const char of str) {/* Time O(N) */
        const count = (map.get(char) || 0) + 1;

        map.set(char, count);   /* Space O(1) */
    }
}

const subtractFrequency = (str, map) => {
    for (const char of str) {/* Time O(N) */
        if (!map.has(char)) continue;

        const count = map.get(char) - 1;

        map.set(char, count);   /* Space O(1) */
    }
};

const checkFrequency = (map) => {
    for (const [ char, count ] of map) {/* Time O(N) */
        const isEmpty = count === 0;
        if (!isEmpty) return false;
    }

    return true;
}