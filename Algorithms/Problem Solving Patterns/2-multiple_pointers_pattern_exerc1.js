

function pair_finder(arr){
    
    incrementing_pointer = 0;
    decrementing_pointer = arr.length - 1;
    pair_list = [];

    while(incrementing_pointer < decrementing_pointer){
        if(arr[incrementing_pointer] + arr[decrementing_pointer] === 0){
             pair_list.push([arr[incrementing_pointer], arr[decrementing_pointer]]);
             incrementing_pointer += 1;
             decrementing_pointer -= 1;
        }
        else if(arr[incrementing_pointer] + arr[decrementing_pointer] < 0 ){
            incrementing_pointer += 1;
        }
        else{
            decrementing_pointer -= 1;
        }
    }
    console.log(pair_list);
    return pair_list;

}



pair_finder([-2,-1,0,1,2]);