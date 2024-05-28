/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

*/

/*
1. helper function : Clean up the String i.e. remove the invalid chars and make them lowecase 
2. helper function : to check it is palindrome string

*/

const cleanupString = (s) =>{

    var newString =  "";
    var validChar = "qwertyuiopasdfghjklzxcvbnm1234567890";

    for(let i = 0; i < s.length; i++){
        //covert the case to lower before matching
        let lCase = s[i].toLowerCase();
        //If you have not found the char it shouldn't be there and is a invalid character.
        if(validChar.indexOf(lCase) !==-1){
            newString+=lCase;
        }
    }

    console.log(newString);

    return newString;

}
const isValidPalindrome = (s) =>{

    //return true or false.
    // The idea is to compare the strings one from start and other at end and if the match  
    var leftPointer = 0;
    var rightPointer = s.length -1;

    while(leftPointer < rightPointer){
        if(s[leftPointer] !== s[rightPointer]){
            return false;
        }
        leftPointer++;
        rightPointer--;
    }
    return true;
}

const problem125 = (s)=>{

    //Clean up 
    const cleanStr = cleanupString(s);

    console.log(cleanStr);
    
   return isValidPalindrome(cleanStr);

    //Check for Palidrome
}

const test1 = "A man, a plan, a canal: Panama";

console.log(problem125(test1));

