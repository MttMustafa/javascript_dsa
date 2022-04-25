function selectionsort(arr) {//it just loops through the array and compares one index value with the ones comes after it.
    for(let i = 0; i < arr.length; ++i){
        let smallest = i;
        for(let j = i + 1; j<arr.length; ++j){
            if(arr[j] < arr[smallest]) smallest = j;
        }
        if(i !== smallest) [arr[i],arr[smallest]] = [arr[smallest],arr[i]];
    }
    return arr;
}


console.log(selectionsort([2000,53,267,8,3,464,84]));