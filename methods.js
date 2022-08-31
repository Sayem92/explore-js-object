const student = {
    name: 'Kodom Ali',
    money: 5000,
    study: 'Math',
    subjects: ['calculus','algebra','geometry'],
    exam : function (){
        // console.log(this.name,'is participiting in an exam')
        return this.name +' '+'is participiting in an exam'
    },
    improveExam : function(subject){
        this.exam()
        return `${this.name} is taking improvement exam on ${this.subjects[2]}`
    },
    treatDey : function(amount, tips){
        this.money = this.money - amount - tips
        return this.money
    }
}






// student.exam()                    //Kodom Ali is participiting in an exam

const output = student.exam()
// console.log(output)               // Kodom Ali is participiting in an exam

const reExam = student.improveExam('algebra')
// console.log(reExam)             //Kodom Ali is taking improvement exam on algebra
                            //Kodom Ali is taking improvement exam on geometry

 const treat = student.treatDey(1000, 120)
//  console.log(treat)                          //   4000 , 3880

const dola = student.treatDey(700, 20)
//  console.log(dola)                                //  3300 , 3160


