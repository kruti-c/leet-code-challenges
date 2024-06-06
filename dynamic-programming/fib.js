/*
1. memozation
2. tabulation 

The Fibonacci sequence is a series of numbers in which each number (after the first two)
 is the sum of the two preceding ones. It typically starts with 0 and 1. The sequence goes like this:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ..

*/

const fib = (n) =>{

    //Base case 
    if(n < 2) return 1;
    return fib(n-1) + fib(n-2);

}

console.log(fib(7));