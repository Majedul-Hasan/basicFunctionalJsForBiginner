// function shortBest(numbers){

//     for(let j = 0; j< numbers.length-1; j++){
//         let maxiimum = numbers[j]
//         let max_location = j
//         for(let i = j; i < numbers.length; i++  ){
//             if(numbers[i] > maxiimum){
//                 maxiimum = numbers[i]
//                 max_location = i
//             }
//         }
//         // numbers[max_location]= numbers[0]
//     numbers[max_location] = numbers[j] 
//         numbers[j]= maxiimum
//     }
//         return numbers
// }
// console.log(shortBest([3,4,6,8,5,4,11,6,8,9]))

let arr = [3,4,6,8,5,10,11,6,8,9]

function short(a,b){
    return [a-b]
}
// console.log(arr.short())
console.log(arr)
console.log(arr.sort())


let numbers = [3,4,6,8,5,4,11,16,9];
numbers.sort((a, b) => a - b);
console.log(numbers);

let numberss = [3,4,6,8,5,4,11,6,8,9];
// numbers.sort((a, b) => a - b);
console.log(numberss.sort((a , b)=>(b-a)));