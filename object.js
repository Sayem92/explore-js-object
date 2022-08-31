//1. create object using object literals 
const player = {};
player.name = 'Small Nirob';                         // property----
player.speciality = 'Batsman';
// console.log(player) //{ name: 'Small Nirob', speciality: 'Batsman' }

player.bat = function(){                            // methods----
    console.log('Swing your bat')
}
// player.bat()
// console.log(player)
//   {
//     name: 'Small Nirob',       
//     speciality: 'Batsman',     
//     bat: [Function (anonymous)]   // parameter nai tai anonymous----
//   }


const student = {
    name : 'pandy',
    job : 'kay anda',
    ball : function (){
        console.log('throw the ball')
    },
    salary : 10000,
}
// console.log(student)


// 2. object constructor----------
 const person = new Object();
//  console.log(person)                //  {}


 const person2 = Object();
//  console.log(person)                //  {}

// 3. object create method 

const item = Object.create(null)
// console.log(item)                   //[Object: null prototype] {}

const logic = Object.create(student)            // somporko korce student a
// console.log(logic)                      //  {}
// console.log(logic.salary)           // 10000
//  console.log(logic.friend)           // undefined-- aita nai kutay



// 4. class

class persons{
    name = 'Abul';
    address = 'Sodor ghat';
    constructor (age){
        this.age = age
    }
}

const person1 = new persons(56)
// console.log(person1) //  persons { name: 'Abul', address: 'Sodor ghat', age: 56 }

// 4. function 

function car(model,price){
    this.model = model
    this.price = price
}
const tesla = new car('elon',5600000)
// console.log(tesla)       //car { model: 'elon', price: 5600000 }