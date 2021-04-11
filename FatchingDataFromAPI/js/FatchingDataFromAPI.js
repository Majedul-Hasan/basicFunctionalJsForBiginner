




let userPromise = fetch('https://randomuser.me/api') // 

// let userPromise = fetch('https://randomuser.me/api/gdfgfg') // error exicute
console.log(userPromise)
userPromise.then((response)=>{
    // console.log(response.json()) //another promise
    return response.json()

}).then((responseData)=> {
    // console.log(responseData)
    console.log(responseData.results[0].name.title)
    console.log(responseData.results[0].name.first)
    console.log(responseData.results[0].name.last)
    console.log(responseData.results[0].dob)

})
.catch((error)=>{
    console.log("error")
    console.log(error)

})
