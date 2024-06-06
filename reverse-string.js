const reverseIterrative  = (str) =>{

    let reversedString = '';

    for(let i = str.length -1 ; i>= 0; i-- ){
        reversedString += str[i];
    }
    return reversedString;

}

const test1_basicstring = "this is black cat";
const test2_empty = '';
const test3_spaceString = ' ';



const reverseRecursive = (str) => {
    //base case 
    if(str === '') return '';
    return reverseRecursive(str.substr(1)) + str[0];

}

//Test 1
console.log(reverseIterrative(test1_basicstring));
//Test 2 
console.log(reverseRecursive(test1_basicstring));