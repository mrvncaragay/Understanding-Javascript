/* 
*   Recursion - Devide and Conquer Method
*
*   -infinite recursive calls result in stack overflow. 
        -Stack Overflow when the maximum number of callstack of the program exceeds the limited amount of address space (memory).
    
    -Base Case must be implemented correctly for the recursion fucntion to work.
        -Base case also reffered to as 'terminating case'.

*/

function countFromNToZero(n) {
    //Base case or Termination Case
    if(n < 0) {
        return;
    } else {
        console.log(n);
        countFromNToZero(n - 1); //Devide and Conquer
    }
}

//countFromNToZero(10);

//Fibonacci Sequence
// Sum of the past two terms
// for example:
//  n = 5, i <= n 
//  1 + 

function fibFor(n) {
    if(n <= 1) return n;

    let sum = 0, last = 1, lastlast = 0;
    let term = `${last}`;

    for (let i = 1; i < n; i++) {
       sum = last + lastlast;
       lastlast = last;

       last = sum;
       term += ` ${sum}`;
    }

    return term;
}

//let n = 8;

//console.log(`n: ${n}`, fibFor(n));
//best case = o^2, space n^2


function fibNth(n) {

    if (n <= 1) return n;

    return fibNth(n - 1) + fibNth(n - 2);
}

console.log(fibNth(8));

//can we do better?