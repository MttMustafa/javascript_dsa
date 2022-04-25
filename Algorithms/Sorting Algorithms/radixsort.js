function findDigit(num,digit) { //function used for finding the number in a given digit
    return Math.floor(Math.abs(num) / Math.pow(10,digit)) % 10; //code divides the number a power of 10 that leaves that digit last digit then we take the modulus of 10  to get that number. 
}


function findNumOfDigits(num){ //function used for finding the number of digits of a number
    if(num === 0) return 1; //log10 of 0 is -Infinity . we avoid that result with this condition
    else return Math.floor(Math.log10(Math.abs(num))) + 1; //log10 gives the power of 10 that makes up the periticular number. We floor that number and add 1. The result gives the number of digits somehow.
}

function mostDigits(arr) { // function used for finding the biggest number of digits in the array
    let maxDigit = 0;
    for(let i = 0; i < arr.length; ++i){
        maxDigit = Math.max(maxDigit,findNumOfDigits(arr[i]));
    }
    return maxDigit;
}

function radixSort(arr) { 
    maxDigit = mostDigits(arr); //we find the maximum number of digits in the array
    for(let i = 0; i < maxDigit; ++i){ //outer loop will loop through 0 the maxnumber of digit
        let numBucket = Array.from({length: 10}, () => []); //we create an array of 10 empty arrays.
        for(let j = 0; j < arr.length; ++j ){ //inner loop loops through each number in the array
            let digitIndex = findDigit(arr[j],i); //we get the number from spesific digit for each number in each iteration
            numBucket[digitIndex].push(arr[j]); //we insert the number according to number in that spesific digit. so in each outer iteration smallest digit will be in the smallest num of index. ex: in number 1234 for i=0 : digitIndix = 4 so numBucket index will be 4 and we push 1234 to the array in that index.  
        }
        arr = [].concat(...numBucket); //flatten numbBucket will be our new array.
    }
    return arr;
}


console.log(radixSort([56,3,12,5,1,123,782,35]));