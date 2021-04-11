//condishonals control flows (if else)

// 109-35 age group
// && AND
// || OR


// var age = prompt('what is your age?')
var age = 30


if ( age>=18 && age <=35){
    status = 'Wellcome, to javaScript'
} else{
    status = 'tsrget rejected'
}
console.log(status)


// switch 

// diffrence between weekdayu vs weekend
// day 0 --> sunday --> weekend
// day1 --> monday --> weekday
// day 2 -->  --> weekday
// day 3 -->  --> weekday
// day 4 --> sunday --> weekday
// day 5 --> sunday --> weekday
// day 6 --> friday --> weekend
// day 7 --> sat --> weekend
var num = prompt('what is today?')
switch (num) {
    case 0:
        text = 'weekend'        
        break;
        case 6:
        text = 'weekend'        
        break;
        case 7:
        text = 'weekend'        
        break;

    default:
        text= 'weekday'  
        break;
}
console.log(text)


