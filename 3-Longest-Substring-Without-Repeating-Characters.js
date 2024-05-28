/*

3. Longest Substring Without Repeating Characters


- unique list  - hash set


*/




/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    var hs = new Set();
    for(let char of s){
        if(!(hs.has(char))){
            hs.add(char);
        }
    }
    return hs.size;
    
};

const test = "abcabcbb";
console.log(lengthOfLongestSubstring(test))