/*
Write a function, treeIncludes, that takes in the root of a binary tree and a target value. The function should return a boolean indicating whether or not the value is contained in the tree.
*/



class Node {

    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const treeIncludes_bfs = (root, target) => {

    if(root ===null) return false;

    const queue = [ root ];

    while(queue.length> 0 ){
        const current = queue.shift();

        if(current.val === target) return true;
        if (current.left !== null) queue.push(current.left);
        if (current.right !== null) queue.push(current.right);
    }

    return false;

}

const treeIncludes_dfs_recursive = (root, target) => {
    if (root === null) return false;
    if (root.val === target) return true;  //Base case 
    return treeIncludes_dfs_recursive(root.left, target) || treeIncludes_dfs_recursive(root.right, target);
}


const treeSum = (root) =>{
    if(root === null) return 0;
    const sum = root.val + treeSum(root.left) + treeSum(root.right);
    return sum;

}

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;


// const test1 = treeIncludes_bfs(a, "c"); // should be true
// console.log(test1); // true

// const test2 = treeIncludes_dfs_recursive(a, "e"); // should be true
// console.log(test2); // true

// const test3 = treeIncludes_dfs_recursive(a, "z"); // should be false
// console.log(test3); // false

const test4 = treeSum(a); // should be false
console.log(test4); //