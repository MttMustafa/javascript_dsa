function pivot(arr,start = 0,end = arr.length - 1) {
    let pivot = start; //we assigned a pivot point. we will compare idexes comes after this
    let pivot_index = start;//this values will determine the final point of the pivot. we will also this to swap the first value greater than the pivot value
    let pointer = start + 1; //our starting point for the comparisson
    while(pointer <= end){
        if(arr[pointer] < arr[pivot]){ 
            ++pivot_index;//if the pointed value (which starts counting right after pivot) we increment the pivot_index (because it points the last smaller number atm)...
            [arr[pivot_index],arr[pointer]] = [arr[pointer],arr[pivot_index]];//...and swap with the the value pointed by the pointer (which is smaller than the pivot)...
            ++pointer; //...then we increment the pointer for the comparison for the next iteration
        }
        else ++pointer; //if the pointed value is greater then the pivot we just increment the pointer to look up the next one in the next iteration
    } //what we ultimately do here is we swap the values smaller then the pivot with the first value(by index) greater than the pivot and we swap their place so we have the smaller values accumulates right after pivot and greater values accumulates after smaller values.   
    [arr[pivot_index],arr[pivot]] = [arr[pivot],arr[pivot_index]]; //and finally we swap the last smaller value (pointed by the pivot_index variable) with the pivot and we left with smaller values on the left side and bigger values on the right side.
    return pivot_index;
}

arr = [31,112,345,64,21,88,11,3,5,1,2];

function quickSort(arr, left = 0, right = arr.length - 1) {
    if(left < right){ //while calling quicksort function over and over at some point right value will be smaller or equal to left value in that condition we'll just return the array
        let pivotIndex = pivot(arr, left, right); //we find the the pivot points' new index for left and right boundries
        quickSort(arr, left, pivotIndex - 1); //we call the quicksort function again with boundaries of left to pivot's index - 1 . 
        quickSort(arr, pivotIndex + 1, right); //we call the quicksort function again with boundraies of pivot's index + 1 and right index. 
    }
    return arr;
}

quickSort(arr);
console.log(arr);