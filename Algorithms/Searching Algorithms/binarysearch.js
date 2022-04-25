function binarySearch(arr,val){
    let i = 0; let j = arr.length - 1
    while(i <= j){
        console.log(`i(${i}): ${arr[i]} j(${j}): ${arr[j]} middle(${Math.round((i+j)/2)}): ${arr[Math.round((i+j)/2)]}`)
        if(arr[i] === val) return i;
        else if(arr[j] === val) return j;
        else if(arr[Math.round((i+j)/2)] === val) return Math.round((i+j)/2);
        else if(val > arr[Math.round((i+j)/2)]) i = Math.round((i+j)/2) + 1;
        else if(val < arr[Math.round((i+j)/2)]) j = Math.round((i+j)/2) - 1;
    }
    return -1;  
}


console.log(binarySearch([1,2,5,6,7,7,8,9],8));