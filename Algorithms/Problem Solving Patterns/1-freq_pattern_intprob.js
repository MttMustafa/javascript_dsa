function sameFrequency(int1, int2){
    //convert ints data type to string so you can iterate in them
    let string1 = int1.toString();
    let string2 = int2.toString();
    //create an object
    let freq_records = {}
    //take the first argument and iterate in it if the char doesnt exist add it
    //to the object and make the count 1
    console.log(string1);
    console.log(string2);
    for(let i=0; i < string1.length; ++i){
        console.log(string1[i]);
      if(!(string1[i] in freq_records)){
          freq_records[string1[i]] = 1;
      }else{
         freq_records[string1[i]] += 1;
      }
    }
    console.log(freq_records); 
    for(let i=0; i < string2.length; ++i){
      if(!(string2[i] in freq_records)){
          console.log("here");
          return false;
      }else{
         freq_records[string2[i]] -= 1;
      }
    }
 console.log(freq_records); 
    for(let i in freq_records){
        console.log(i);
        if(freq_records[i] != 0){
            console.log("here"); 
            return false;
        }
    }
    return true;
      //if the char exist in obj increase the value by 1
    //take the second argument and iterate in it if the value not exist in the obj
      //return false
      //if the argument do exist in obj decrease the value by 1 
    //take the object an iterate in it if there is a key value that not zero return false else return true
  }


  console.log(sameFrequency(281,182));