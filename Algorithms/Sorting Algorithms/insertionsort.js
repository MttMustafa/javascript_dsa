function insertionsort(arr) {
    for(let i = 1; i<arr.length; ++i){
        let current = arr[i];
        let insertion_point = i;
        for(let j = i - 1; j >= 0; --j){
            if(current < arr[j]){
                arr[j+1] = arr[j]; //copying bigger value to next index for shifting
                insertion_point = j; //recording bigger value's index so if program doesnt find bigger value in next iteration loop will break and... 
            }
            else{
                break;
            }
        }
        arr[insertion_point] = current; //...we program will insert the value in correct place.

    }
    return arr;
    
}

console.log(insertionsort([2,1,9,76,4]));
