//  let fullName ={
//      firstName: 'Majedul',
//      lastName: 'Hasan',

//  }
//  const {firstName, lastName}= fullName
 
//  console.log(firstName)
//  console.log(lastName)

let user =[
    {
        firstName: 'Majedul',
        lastName: 'Hasan',  
    },
    (user)=>{
    console.log("I set The user", user)
    }

]

const [newUser, setUser] = user;
console.log(newUser) 

/// {firstName: "Majedul", lastName: "Hasan"}

setUser({firstName: "Bidya", lastName: "Priya"})

let  [ fruit1, fruit2, fruit3] = ['Apple',  'Apricots','Avocado','Banana','Blackberries','Blackcurrant','Blueberries','Breadfruit']
console.log(fruit1)
console.log(fruit2)
console.log(fruit3)

