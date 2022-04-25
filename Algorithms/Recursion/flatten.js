function flatten(inputArr){
    let flatArr = [];
    
    for(let i = 0; i < inputArr.length; ++i){
        if(Array.isArray(inputArr[i])){
            flatArr = flatArr.concat(flatten(inputArr[i]));
        }
        else{
            flatArr.push(inputArr[i]);
        }
    }
    return flatArr;
}