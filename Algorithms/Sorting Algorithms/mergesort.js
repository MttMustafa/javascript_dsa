function merge(arr1,arr2){
    let mergedArr = []; 
    let i = 0;
    let j = 0;
    while(i !== arr1.length && j !== arr2.length){ //looping as long as i and j are in arr boundries
        if(arr1[i] <= arr2[j]){ //if first pointer is smaller we push the smaller one in the array
            mergedArr.push(arr1[i]);
            ++i; //and we increment the first pointer we will compare the new index with second pointer to check if there is still a smaller number in first array
        }
        else if(arr2[j] <= arr1[i]){ //checking the other way around doing the opposite
            mergedArr.push(arr2[j]);
            ++j;
        }
    }
    while(i !== arr1.length){ //if first array is longer than the other there should be remaining elements we should push them end of the array
        mergedArr.push(arr1[i]);
        ++i;
    }
    while(j !== arr2.length){ //same thing for case for second array
        mergedArr.push(arr2[j]);
        ++j;
    }
    return mergedArr;
}


function mergeSort(arr) {
    if(arr.length <= 1) return arr; //returns the array if function split the array to the 1 or smaller sized array
    let mid = Math.floor(arr.length/2); //finding middle point
    let left = mergeSort(arr.slice(0,mid)); //returns the left half of the array until it reaches the one element array
    let right = mergeSort(arr.slice(mid)); //after we return the one element (or smaller) size array on the left size we return the right side of the array until we reach a array length of one or smaller
    return merge(left,right); //it calls the merge function starting with merging one (or smaller) sized arrays and build up to bigger arrays and finally merges the first half division and merges the whole array.
}


console.log(mergeSort([12,23,45,23,345,23,8423,1,565,2,41,1,4,47,6,2,27,864561]));