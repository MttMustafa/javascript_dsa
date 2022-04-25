function fib(num){
    console.log(`num: ${num}`)
    if(num<=2){
        console.log(`Base: ${num}`);
        return 1;
    }
    else{
        console.log(`num-1: ${num-1}\nnum-2: ${num-2}`);
        return fib(num-1) + fib(num-2);
    }
    
  }

//   function fib(num){
//     console.log(`num: ${num}`)
//     if(num<=1){
//         console.log(`Base: ${num}`);
//         return num;
//     }
//     else{
//         console.log(`num-1: ${num-1}\t num-2: ${num-2}`);
//         return fib(num-1) + fib(num-2);
//     }
    
//   }

fib(4);