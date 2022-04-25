function stringifyNumbers(obj){
    let newObj = {}
    for(let key in obj){
        if(typeof obj[key] === 'object' && !Array.isArray(obj[key])){
            newObj[key] = stringifyNumbers(obj[key]);
        }
        else if(typeof obj[key] === 'number' ){
           newObj[key] = obj[key].toString();
        }
        else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}