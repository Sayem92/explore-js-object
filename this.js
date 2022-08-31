// console.log(this)                all windraw asbe


// regular function ar arrow function ar modde this ar man alada---

// regular function---this dile oi object ta dibe--
// arrow function---this dile oi object ta ak level upore giah windraw dibe--


const kodomAli = {
    name: 'Kodom Ali',
    money: 5000,
    study: 'Math',
    subjects: ['calculus','algebra','geometry'],
    exam : function (){
         console.log(this)
        return this.name +' '+'is participiting in an exam'
    },
    examArrow : () =>{
        console.log(this)
    },
    examNested : () =>{
        const arrow = () =>{
            console.log(this)
        }
        arrow()
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

kodomAli.exam()

const badamAli = {
    name : 'kaca badam ali',
    money : 8000
}

badamAli.exam = kodomAli.exam
badamAli.exam()


function clickHandler(){
    console.log('inside click handler', this)
}

document.getElementById('btn-click2').addEventListener('click', function(){
    console.log(this)
})
