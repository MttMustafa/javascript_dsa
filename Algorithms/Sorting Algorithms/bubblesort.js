function bubblesort(arr) {
    let swapped;
    for(let i = arr.length-1;i >= 0; --i){ //we decrease the i cause the greatest value always end up in the end and we dont have to compare it
        swapped = false;
        for(let j = 0; j <= i-1; ++j){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]; //swap
                swapped = true;
            }
        }
        if(!swapped) break; //if the algorithm didnt made any swaps in the last comparisson loop we no longer need to go over again array is sorted
    }
    return arr;
}

arr = [3,6,3,63,2,245,87,2];

console.log(bubblesort(arr));