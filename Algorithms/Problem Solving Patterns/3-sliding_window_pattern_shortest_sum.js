function minSubArrayLen(arr,goal){
  //input an array and a sum goal
  
  //define two pointers both pointing 0
  let follow = 0; let lead = 0;
  //define a total value init value 0
  let total = 0;
  //define subsetsize init value is Infinity
  let subsetsize = Infinity;
  
  
  //create a loop which true while following no greater than lead 
      while((follow <= lead)){
      //in loop define two logic gates
          //if total is smaller than goal 
          if((total < goal) && (lead < arr.length)){
              total += arr[lead]; //add the lead to total value
              ++lead; //increase the lead +1
              //console.log("lead: " + lead);
          }
          
          //if total is greater or equal than goal
          else if(total >= goal){
              subsetsize = Math.min(lead - follow,subsetsize); //calculate the subarray size
              total -= arr[follow];//substract the head value
              ++follow;//increase the head value +1
              //console.log("follow: " + follow);
          }
          
          else if(lead === arr.length){
            break;
          }
      }
      return subsetsize == Infinity ? 0 : subsetsize;
      //return subarray size
  }
  

console.log(minSubArrayLen([2,3,1,2,4,3], 7));