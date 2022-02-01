// remove duplicate value from array

/* const names = ['kamrul', 'hasan', 'fahim','khalid', 'nuhas', 'kamrul', 'hasan', 'khalid'];

function removeDuplicate(names){
    const unique = [];
    // for(let i = 0; i<names.length; i++){
    //     const element = names[i];
        // console.log(element);
    for(const element of names){
        if(unique.indexOf(element) == -1){
            unique.push(element);
        }
    }
    return unique;
}
const uniqueNames = removeDuplicate(names);
console.log(uniqueNames); */

//==================================================

// remove duplicate value from an array


const numbers = [1, 2, 3, 4, 1, 3, 6, 6, 8]
function numberDuplicate(){
    const uniqueNumber = [];
    for( const element of numbers){
        if(uniqueNumber.indexOf(element) == -1){
            uniqueNumber.push(element);
        }
    }
    return uniqueNumber;
}
const uniqueNumbers = numberDuplicate(numbers);
console.log(uniqueNumbers);