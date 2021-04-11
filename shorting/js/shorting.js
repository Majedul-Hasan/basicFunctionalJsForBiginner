function shortBest(numbers){

    for(let j = 0; j< numbers.length-1; j++){
        let maxiimum = numbers[j]
        let max_location = j
        for(let i = j; i < numbers.length; i++  ){
            if(numbers[i] > maxiimum){
                maxiimum = numbers[i]
                max_location = i
            }
        }
        // numbers[max_location]= numbers[0]
    numbers[max_location] = numbers[j] 
        numbers[j]= maxiimum
    }
        return numbers
}
console.log(shortBest([3,4,6,8,5,4,11,6,8,9]))