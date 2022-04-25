function isSubsequence(input,string) {
    
    let string_iter = 0; let input_iter = 0;
    
    while(string_iter < string.length){
        
        if( (input[input_iter] === string[string_iter]) ){
            if(input_iter === input.length - 1){
                return true;
            }
            else{
                ++string_iter;
                ++input_iter;
            }
        }
        else{
           ++string_iter;   
        }
    }
    
    return false;
  
    }

   /* function isSubsequence(str1, str2) {
        var i = 0;
        var j = 0;
        if (!str1) return true;
        while (j < str2.length) {
          if (str2[j] === str1[i]) i++;
          if (i === str1.length) return true;
          j++;
        }
        return false;
      }
*/

  console.log(isSubsequence("hello","helqlo world"));