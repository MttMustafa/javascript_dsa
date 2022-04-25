function linearSearch(arr,val){
    /*for(let i = 0; i<arr.length; ++i){ //linear search
        if(arr[i] === val){
            return i;
        }
    }
    return -1;*/
      let count = 0;
      function search(arr,val){ //my own imlementation with recursion
          if(arr.length === 0){
              count = -1;
              return;
          } else if(arr[0] === val){
              return;
          } else{
              ++count;
              return search(arr.slice(1),val);
          }
      }
      
      search(arr,val);
      return count;
  }
