const bottle = {color: 'yellow', price: 50, isCleaned: true, capacity: 1};

const keys = Object.keys(bottle)
// console.log(keys)                 //[ 'color', 'price', 'isCleaned', 'capacity' ]

const values = Object.values(bottle)
// console.log(values)                     // [ 'yellow', 50, true, 1 ]

const pair =  Object.entries(bottle)
// console.log(pair)

// const twoDimention = [ [ 'color', 'yellow' ], [ 'price', 50 ], [ 'isCleaned', true ], [ 'capacity', 1 ] ]



// seal kolle delete kora jay na-----> but modify kora  jaibo ---&&--- new add kora jay na property------------------

// freeze kolle main obejct jila ace ola takbo fixed -----no modify, no add , no delete---------

console.log(bottle)
// Object.seal(bottle)  

Object.freeze(bottle)

delete bottle.isCleaned
bottle.price = 90
bottle.height = 12;
console.log(bottle)