
function isPalindrome(str){
    if(str[0] !== str[str.length-1]){
        return false;
    }
    else if(str.length < 2){
        return true;
    }
    else{
        return isPalindrome(str.slice(1,str.length-1))
    }
}