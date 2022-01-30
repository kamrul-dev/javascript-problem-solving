// check given year is leap year. If it is leap year then return true. otherwise return false.

function leapYear(year){
    if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
        return true;
    }
    
     return false;
}

var leap = 2023;
var isLeapYear = leapYear(leap);
console.log('Is the year leap year: ',isLeapYear);

var leap1 = 2024;
var isLeapYear1 = leapYear(leap1);
console.log('Is the year leap year: ',isLeapYear1);