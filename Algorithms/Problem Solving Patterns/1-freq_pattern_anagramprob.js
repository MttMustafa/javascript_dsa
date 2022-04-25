function validAnagram(arr1,arr2){
    let arr1_freq = {};
    let arr2_freq = {};
    if(arr1 === '' && arr2 === ''){
        return true;
    }
    //take arr1 and write freq to an obj
    for(let char of arr1){
        arr1_freq[char] = (arr1_freq[char] || 0) + 1;
    }
    //take arr2 and wrte freq to an obj
    for(let char of arr2){
        arr2_freq[char] = (arr2_freq[char] || 0)  + 1;
    }
    //compare arr1obj to arr2obj if they all have the same key with same values return if it is true
    for(let char in arr1_freq){
        if(!(char in arr2_freq)){
            return false;
        }
        if(arr1_freq[char] !== arr2_freq[char]){
            return false;
        }
    }
    return true;  
  }
  