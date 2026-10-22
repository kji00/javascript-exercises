/* 
1. Leap years are divisble by 4
2. If the year is divisible by 4 AND 100 but NOT 400 it is not a leap year
3. If the year is divisible by 4 AND 100 AND 400 it is a leap year
*/


const leapYears = function(year) {
    if(year % 4 !== 0 && year % 100 !== 0 && year % 400 !== 0 ){
        return false;
    } else if(year % 4 === 0 && year % 100 === 0 && year % 400 !== 0 ){
        return false;
    } else if(year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0){
        return true;
    } else if(year % 4 === 0 && year % 100 === 0 && year % 400 === 0){
        return true;
    }

};

// Do not edit below this line
module.exports = leapYears;
