// creattt

function fun(){
    alert('this is a function');
     
}
// call
fun();


function greeting(){
 var name =   prompt('what is your name?');
 var result = 'hello ' + name; //string concatination
 console.log(result)
}
greeting();



   
//    greeting()


//arguments

function sumNumber(x,y){
    var result = x+y;
    console.log(result)
}

sumNumber('10','10')



function greetin(p){
    
    var result = 'hello ' + p; //string concatination
    console.log(result)
   }
   var name =   prompt('what is your name?');
   greetin(name);