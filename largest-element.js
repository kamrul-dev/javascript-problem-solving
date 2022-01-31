
// Find out largest number froma an array

/* function largestElement(numbers){
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element > largest){
            largest = element;
        }      
    }
    return largest;
}

const ages = [12, 23, 32, 42, 45, 43, 13, 60];
const oldest = largestElement(ages);
// const oldest2 = largestElement([-1, -6, -17]);
console.log("Largest Number of Age", oldest); */

// ===========================================================

// find out lowest element from an array
function smallestNumber(numbers){
    let smallest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element < smallest){
            smallest = element;
        }
    }
    return smallest;
}
const ages = [12, 23, 32, 42, 45, 43, 6, 13, 60];
const oldest = smallestNumber(ages);
console.log("Smallest Number of Age", oldest);