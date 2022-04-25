
function someRecursive(arr,callback){
    if(arr.length === 0){
        return false;
    }
    else if(callback(arr[0])){
        return true;
    }
    else{
        return someRecursive(arr.slice(1),callback);
    }
}