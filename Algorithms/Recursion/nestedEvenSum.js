function nestedEvenSum (obj) {
    let sum = 0;
    for(key in obj){
        if(typeof obj[key] === 'object' && obj[key] !== null){
            sum += nestedEvenSum(obj[key]);
        }
        else{
            if(typeof obj[key] === 'number'){
                if(obj[key] % 2 === 0){
                    sum += obj[key];
                }
            }
        }
    }
    return sum;
}