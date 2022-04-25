function averagePair(arr,avg){
    if(arr == []) return false;
    //input arr and a avg value
    //define two int values 
    let head = 0; let tip = arr.length - 1;
    //int values will keep indexes in array
    //create a loop limit is the array size
      while(arr[head] !== arr[tip]){
          console.log((arr[head]+arr[tip])/2);
          if((arr[head]+arr[tip])/2 === avg){
              return true;
          }
          else if((arr[head]+arr[tip])/2 < avg){
              ++head;
          }
          else{
              --tip;
          }
      }
    return false;
    //one value will come after than another
    //in every loop values in two indexes will be summed 
    //if the value equals two avg value return true
    //return false after the loop
    //output bool
  }


  console.log(averagePair([1,2,3],2.5));