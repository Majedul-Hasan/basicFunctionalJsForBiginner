function findMin(numbers){
    let minimum = numbers[0]
    for(let i = 0; i < numbers.length; i++  ){
        if(numbers[i] < minimum){
            minimum = numbers[i]
        }
    }
    return minimum
}
console.log(findMin([3,4,6,8,5,4,6,8,9]))

function findmaxi(numbers){
    let maxiimum = numbers[0]
    for(let i = 0; i < numbers.length; i++  ){
        if(numbers[i] > maxiimum){
            maxiimum = numbers[i]
        }
    }
    return maxiimum
}
console.log(findmaxi([3,4,6,8,5,4,11,6,8,9]))