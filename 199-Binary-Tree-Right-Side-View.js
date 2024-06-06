/*
Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4]
Example 2:

Input: root = [1,null,3]
Output: [1,3]
Example 3:

Input: root = []
Output: []


*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {

    if(root === null) return [];

    var results = [];
    var queue = [root];
    
    while(queue.length>0){
        let level = [];
        let levelSize = queue.length;

        while(levelSize){
            let current = queue.shift();
    
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);

            level.push(current.val);
            levelSize --;
        }
        results.push(level[level.length-1]);
    }
    return results;
};
