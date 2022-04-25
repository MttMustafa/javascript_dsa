

function find_max_sum(arr,subset_size){
    max_sum = 0;
    if(arr == []) return undefined;
    
    for(let i = 0; i < subset_size ; ++i ){
        max_sum += arr[i];
    }

    let temp_sum = 0;
    for(let i = subset_size; i < arr.length; ++i){
        temp_sum += arr[i] - arr[i - subset_size];
        max_sum = Math.max(max_sum,temp_sum);
    }
    return max_sum;

     
}


console.log(find_max_sum([1,2,3,4,5,6,7,8,9],4));
