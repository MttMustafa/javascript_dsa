function reverse(str){
    //get the string
    //swap the first element with the last
    //trim the string by one element
    //repeat it for the next next recursion
    //concat with the next iteration
    if(str.length <= 1){
        return str;
    }
    else{
        return str[str.length-1].concat(reverse(str.slice(1,str.length-1)),str[0]);
    }
  }
  
  // reverse('awesome') // 'emosewa'
  // reverse('rithmschool') // 'loohcsmhtir'