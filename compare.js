// const first = {a: 2};
// const second = {a: 2};
// const third = second


// if(first === second){
//     // console.log('they are same')       // aita ans
// }
// else{
//     console.log('different')
// }


// === dile oita man kun jayga ace oita o kuje pore deke --------------
// if(first === second){
//     console.log('they are same')
// }
// else{
//     // console.log('different')                // aita ans
// }



// karon second ar memory jayga ar third ar same jayga tai ---------
// if(third === second){
//     console.log('they are same')                // ans aita-- 
// }
// else{
//     console.log('different')               
// }


/// do not used this method to compare with object or array

// amnite ans--- same but position change kolle result---- diffenrent
const first = {a: 2, c: 6, b: 4};
const second = {a: 2, b: 4, c: 6};
const firstString = JSON.stringify(first)
const secondString = JSON.stringify(second)

// if(firstString === secondString){
//     console.log('same')
// }
// else{
//     console.log('different')                // different
// }


function compareObject(first, second){
    const firstKeys = Object.keys(first)
    const secondKeys = Object.keys(second)
    if(firstKeys.length === secondKeys.length){
        for(const key of firstKeys){
            if(first[key] !== second[key]){
                return false
            }
        }
        return true;
    }
    else{
        return false;
    }
}
const isSame = compareObject(first,second)
// console.log(isSame)                                         // true



