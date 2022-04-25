// function countdown_list(input){ //recursion with helper function

//     coundown_arr = [];

//     function countdown(countDownVal){
//     if(countDownVal === 0){
//         coundown_arr.push(0);
//         return;
//     }
//     coundown_arr.push(countDownVal);
//     countdown(countDownVal - 1);
// }
//  countdown(input);
//  return coundown_arr;
// }
// console.log(countdown_list(13));


// function factorial(input){ //classic factorial
//     if(input === 1){
//         return 1;
//     }
//     else{
//         return input * factorial(input - 1);
//     }
// }

// console.log(factorial(1));


function find_odds(input_arr){ //pure recursion

    newArr = [];

    if(input_arr.length === 0){
        return newArr; 
    }
    if(input_arr[0] % 2 !== 0){
        newArr.push(input_arr[0]);
    }

    newArr = newArr.concat(find_odds(input_arr.slice(1)));
    return newArr;
}

