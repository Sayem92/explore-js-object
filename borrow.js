const kodomAli = {
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

const result = kodomAli.exam()

const badamAli = {
    name : 'kaca badam',
    money : 8000
}


// call, apply same kaj --- arek joner object a new object ar man kaj kora --
// call kolle parameter , di diba
// apply kolle paremeter [] modde diba

const result2 = kodomAli.exam.call(badamAli)
// console.log(result2)                                // kaca badam is participiting in an exam

const badamMoney = kodomAli.treatDey.call(badamAli, 400, 60)
console.log(badamMoney)                                             // 7540

const badamMoney2 = kodomAli.treatDey.apply(badamAli, [400, 60])
console.log(badamMoney2)                                             // 7080 

const badamAliTreat = kodomAli.treatDey.bind(badamAli)
const remaining = badamAliTreat(1000, 60)
console.log(remaining)