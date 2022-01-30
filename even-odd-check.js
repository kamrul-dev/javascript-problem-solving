// check given number is even or odd.  if number is even then returns true. if it is odd then returns odd.

function isEvenOdd(number){
    if(number % 2 == 0){      // conditon for odd  if(number % 2 != 0)
        return true;
    }
    else{
        return false;
    }
}

let getEven = 20;
const isEven = isEvenOdd(getEven);
console.log('Is the number even: ', isEven);
