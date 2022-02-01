//

/* 
3rd = 2nd + 1st
4th = 3rd + 2nd
5th = 4th + 3rd
6th = 5th = 4th
nth = (n-1)th + (n-2)th
*/
/* const fibo = [0, 1];
for (let i = 2; i <= 10; i++) {
    //nth = (n-1)th + (n-2)th
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo); */

// fobnacci series using function

/* function fibonacciSeries(num){
    const fibo = [0, 1];
    for(let i = 2; i <= num ; i++){
        fibo[i] = fibo[i - 1] + fibo[i -2];
    }
    return fibo;
}
const getFiboResult = fibonacciSeries(12);
console.log("fibonacci series : ", getFiboResult); */


function fibonacciSeries(num){
    if(typeof num != 'number'){
        return 'please give a number';
    }
    if(num < 2){
        return 'please enter a positive number greater than 1';
    }
    const fibo = [0, 1];
    for(let i = 2; i < num ; i++){
        fibo[i] = fibo[i - 1] + fibo[i -2];
    }
    return fibo;
}
const getFiboResult = fibonacciSeries(16);
console.log("fibonacci series : ", getFiboResult);