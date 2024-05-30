/*

Binary Tree : 
- at most 2 children as a node
- one root only
- exactly one path to root and any node
- parent and child.
- singleton tree - root to itself
- no node - edge case - empty tree is a binary tree. i.e zero node


*/



class Node {

    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


/*
Depth First Values : a way to traverse the nodes - traversal problem 
*/
//Iterative apporach

const depthFirstSearch_iterative = (root) =>{

    if (root === null) return [];

    //Stack = array 
    const result = [];
    const stack = [ root ];

    while(stack.length > 0){
        const current = stack.pop();

        result.push(current.val);

        if(current.right) stack.push(current.right);
        if(current.left) stack.push(current.left);

    }

    return result;
}

const depthFirstSearch_recusive = (root) => {

    if (root === null) return [];

    const rootLeft = depthFirstSearch_recusive(root.left);
    const rootRight = depthFirstSearch_recusive(root.right);

    return [root.val, ...rootLeft, ...rootRight]

}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;




const testdfs = depthFirstSearch_iterative(a);
const testdfsRecursive = depthFirstSearch_recusive(a);

console.log(testdfs);
console.log(testdfsRecursive);