//iterration

fruits = ['Apple',  'Apricots','Avocado','Banana','Blackberries','Blackcurrant','Blueberries','Breadfruit']


console.log('for loop normal ',' \n' )
for(let index = 0; index<fruits.length; index++){
    console.log(fruits[index]) 
}


for (let x of fruits){
    console.log('\n', x)
}
console.log('\n' ,'forEach');
 fruits.forEach((x)=>{
    console.log(x)
})


// newFruits = fruits.forEach((x)=>{
//     console.log(x)
// })
// console.log(newFruits) //does not works


console.log( 'map ','\n', 'method')
n = fruits.map((fruit)=>{
    console.log(fruit)

    return `${fruit} modified`
}    )

console.log(n)

console.log( 'map method','\n', 'filter method')
n = fruits.map((fruit)=>{
    console.log(fruit)

    return fruit
}    ).filter((m)=>{
    if(m =='Banana'){
        return false
    }else{
        return true
    }
} )

// console.log(n)


console.log( 'map method','\n', 'filter method', '\n es')
n = fruits.map((fruit)=>{
    console.log(fruit)

    return fruit
}    ).filter((m)=>{ `${m}`=='Banana' ? false : true}
} )

console.log(n)