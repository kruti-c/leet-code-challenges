function maxTrailing(arr) {
    // Write your code here
    var maxlower = -1;
    for(let i = 1; i<= arr.length;i++){
        var left =  i-1;
            if(arr[left] < arr[i] && left >= 0){
                //console.log(maxlower)
                maxlower = Math.max( arr[i]-arr[left], maxlower) 
                left--;
            } 
        }
    return maxlower;
}

const test1 = [5,3,6,7,4];
const test1Result = maxTrailing(test1);

console.log(test1Result);


