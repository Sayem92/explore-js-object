const numbers = [12, 25, 68, 9, 89, 256]
// for(const number of numbers){
//     console.log(number)
// }



// 3 ways to read object propertise
/* 
1. bottle.color
2. bottle['color']
3. bottle[key]
*/

// for of loop can not used with object------!!!!!!!!---------
const bottle = {color: 'yellow', price: 50, isCleaned: true, capacity: 1};

// for of loop allow to array--------
const keys = Object.keys(bottle)
// console.log(keys)                 //[ 'color', 'price', 'isCleaned', 'capacity' ]


for(const key of keys){
    // console.log(key, bottle[key])    // bottle[key] = mane ar value gula
}


//----------------------------------------------------------------------
// for in    allow to object
for (const key in bottle){
    const value = bottle[key]
    // console.log(key, value )     // key= property,  bottle[key] = value
}


//advanced
const pair = Object.entries(bottle)
for(const [key, value] of Object.entries(bottle)){
    console.log(key, value)
}