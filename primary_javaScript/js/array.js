let fruits = ['apple', 'banna', 'mango']
 fruits = new Array('apple', 'banna', 'mango','orange')

// alert(fruits[0])
console.log(fruits[2])
fruits[0] = 'jsck'
console.log(fruits)


// loop
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i])
}
// arraay common method

console.log('tostring', fruits.toString())
console.log(fruits.join('  '))
console.log(fruits,'\n', fruits.pop(), '\n', fruits) //removes last item
console.log(fruits,'\n', fruits.push('lemon', 'oliv'), '\n', fruits) //appends

console.log(fruits[4])
fruits[4]= 'lichi' //change 5th index array

console.log(fruits)

fruits[fruits.length] = 'grave' //same as push()
console.log(fruits)


console.log(fruits.shift(), '\n', fruits) // remove first element form list

console.log(fruits.unshift('coconut'), fruits)

let veg = ['tomato' , 'potato', 'brocoli'];

let concate = fruits.concat(veg)

console.log(concate)
let concES = [fruits, veg]

console.log(concES)
let concESsix = [...fruits, ...veg]//
console.log(concESsix)
