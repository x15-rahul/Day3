const year = 2010;

function checkLeapYear(year){
    if(year%4 == 0){
        if(year%100 == 0){
            if(year%400 == 0){
                console.log('It is a leap year');
            } else {
                console.log('It is a common year');
            }
        } else {
            console.log('It is a leap year')
        }
    } else {
        console.log('It is a common year');
    }
}

checkLeapYear(year);