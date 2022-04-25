function capitalizeFirst (arr) {
    //take the arr
    //take the first string, capitalize first letter
    //add it to the end of the array
    //recurse from the second element
      if(arr.length === 0){
          return [];
      }
      else{
          arr[0] = arr[0].slice(0,1).toUpperCase() + arr[0].slice(1);
        
        return arr.slice(0,1).concat(capitalizeFirst(arr.slice(1)));
      }
  
  }
  
  console.log(capitalizeFirst(['car','taco','banana']));
  