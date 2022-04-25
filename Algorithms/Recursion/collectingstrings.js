function collectStrings(obj){
    let strColl = [];
    for(let key in obj){
        if(typeof obj[key] === 'object' && !Array.isArray(obj[key])){
            strColl = strColl.concat(collectStrings(obj[key]));
        } else if(typeof obj[key]){
            strColl.push(obj[key]);
        }
    }
    return strColl;
}