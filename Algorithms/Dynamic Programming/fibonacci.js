//This algorithm uses memoization technique in dynamic programing
//with memoization we save the results in an array to later use them when they needed
//so we don't make the same calculations over and over
//this is useful for algorithms with many overlapping subproblems like fibonacci

function fib_memo(numOfSeq, memoArr = []) {
    if(memoArr[n] !== undefined)  return memoArr[n];
    if(numOfSeq < 2) return 1;
    let result = fib_memo(numOfSeq - 1, memoArr) + fib_memo(numOfSeq - 2, memoArr);
    memoArr[n] = result;
    return result;
}


//tabulated approach 
//instead of using recursion we create an array with base values built in
//then we calculate the Nth sequence from the base

function fib_tabu(n) {
    if(n <= 2) return 1;
    let fibArr = [0,1,1];
    for (let i = 3; i < n; i++) {
        fibArr[i] = fibArr[i - 1] + fibArr[i - 2];        
    }
    return fibArr[n];
}