const userEmail = []           // string hai to maan liya true value , "" empty string hai to maan liya false , [] empty array hota to true maan liya

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null   undefined              // yaha par jitna v aapko dekhna hai wo sara ka sara aapko dekhna hai do hi keyword ke upar : ek null aur dusra undefined  ; sari kahani inhi dono ke upar tiki rhti hai

let val1;
// val1 = 5 ?? 10                     // console.log karke jab output print krenge to milega 5
// val1 = null ?? 10                  //yaha  10
// val1 = undefined ?? 15               // yaha 15
val1 = null ?? 10 ?? 20                 // yaha 10

console.log(val1);





// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")






//kucch kaam ki baatein:
//jab hum browser console mejakar check krteh :

// false == 0    to true output aata hai
// false == ''      true
// 0 == ''          true