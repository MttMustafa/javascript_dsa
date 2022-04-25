function areThereDuplicates(...args) {
    //take the array
    let freq = {};
    for(let i of args){
        if(i in freq){
            return true;
        }
        else{
            freq[i] = 1;
        }
    }
    return false;

}


console.log(areThereDuplicates('a','ğ','b'));

//areThereDuplicates One Liner Solution

    function areThereDuplicates2() {
      return new Set(arguments).size !== arguments.length;
    }

//areThereDuplicates Solution (Multiple Pointers)

    function areThereDuplicates3(...args) {
      // Two pointers
      args.sort((a,b) => a > b);
      let start = 0;
      let next = 1;
      while(next < args.length){
        if(args[start] === args[next]){
            return true
        }
        start++
        next++
      }
      return false
    }