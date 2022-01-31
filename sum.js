const numbers = [12, 23, 32, 15, 42, 44, 78, 10];
/* let sum = 0;
for(let i = 0; i < numbers.length; i++){
   const element= numbers[i];
   sum = sum + element;
}
console.log(sum);
 */

function arrayTotal(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
const total = arrayTotal([1, 2, 3, 4, 5, 6]);
console.log('Sum of array elements : ', total);