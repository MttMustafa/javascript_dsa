function isSubsequence(input,string) {
    let string_iter = 0; let input_iter = 0;let count = 0; 
    while(string_iter < string.length){
        console.log(string[string_iter])
        if( (input[input_iter] === string[string_iter]) ){
            if(input_iter === input.length - 1){
                ++count;
                ++string_iter;
                input_iter = 0;
            }
            else{
                ++string_iter;
                ++input_iter;
            }
        }
        else{
           ++string_iter;  
           input_iter = 0;
        }
    }
    
    return count;
  
    }
