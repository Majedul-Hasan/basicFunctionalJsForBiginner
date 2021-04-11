let student = {
    ninth: {
        first: 'Nabil',
        lastL: 'sadman'
    },

    tenth: {
        first: 'nasim',
        lastL: 'box'
    },
    eleventh: {
        first: 'sumaiya',
        lastL: 'arshi'
    },
    twelveth: {
        first: 'zhid',
        lastL: 'pranto'
    },
    // studentInfo: function(){
    // return this.tenth[first] + ' ' + this.tenth[lastL];
    // } 

}
// console.log(student.studentInfo('tenth'))
 let max = {
    first: 'sumaiya',
    lastL: 'arshi',
    age : 16,
    height: 150,
    studentInfo: function(){
        return this.first + ' ' + this.lastL + '\n' +'age :' + this.age;
        } 

 }
console.log(max.studentInfo())
console.log(student.tenth.first, student.tenth.lastL )

