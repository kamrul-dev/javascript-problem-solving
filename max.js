const business = 450;
const minister = 350;
const army = 600;

// if (business > minister){
//     console.log('business person is bigger');
// }
// else{
//     console.log('Minister person is bigger');
// }

// compare 3
/* if(business > minister && business > army){
    console.log('Business is bigger.');

}
else if(minister > business && minister >army){
    console.log('Minister is bigger.');
}
// else if( army > business && army > minister){
//     console.log('Army is bigger.');
// }
else{
    console.log('Army is bigger');
} */

// var max = Math.max(business, minister, army);
// console.log('largest is ', max);

//============================================================

//Write a function and find Max number between two numbers
/* function findLargestNumber(first , second){
    if(first > second){
        return first;
    }
    else{
        return second;
    }
}
const getResult = findLargestNumber(20, 25);
console.log('The largest number is ', getResult); */

//==============================================================

// Write a function and find out the largest number between three numbers

/* function findLargestNumber(first , second, third){
    if((first > second) && (first > third)){
        return first;
    }
    else if((second > third) && (second > first)){
        return second;
    }
    else if((third > first) && (third > second)){
        return third;
    }
}
const getResult = findLargestNumber(3, 2, 1);
console.log('The largest number is ', getResult); */

//======================================================================

// Write a function and Find out the small numbers between three numbers

function findSamallestNumber(first , second, third){
    if((first < second) && (first < third)){
        return first;
    }
    else if((second < third) && (second < first)){
        return second;
    }
    else if((third < first) && (third < second)){
        return third;
    }
}
const getResult = findSamallestNumber(2, 1, 3);
console.log('The Smallest number is ', getResult);


