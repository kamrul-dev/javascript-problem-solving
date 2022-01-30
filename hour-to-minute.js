// convert hour to minute

function hourInMinute(number){
    let calucalateMinute = number * 60;
    return calucalateMinute;
}
let hour = 1;
const resultInMinute = hourInMinute(hour);
console.log('Hour to minute conversion result: ', resultInMinute);