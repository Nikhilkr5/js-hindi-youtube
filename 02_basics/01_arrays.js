// array
//aaray should be written in square brackets
//() => paranthesis   [] --> brackets      , {} -> braces


//javascript  arrays are resizable
//read mdn js array


const myArr = [1, 2, 3, 4, 5] 

console.log(myArr[0]);

const myHeroes = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);


/* kucch kaam ki baaatein:
// 1. arrays are zero indexed
// 2. arrays are mutable
// 3. arrays can hold any data type
// 4. arrays can hold any number of elements
// 5. arrays can be nested
// 6. arrays can be resized
// 7. arrays can be iterated using loops
// 8. arrays can be used with array methods
// 9. arrays can be used with array destructuring

*/
/*
inspect->console:
write:
>console.log(myArr);    // array deeclaration
enter
>numbers
ab jaise hi number ko expand karenge to dekh s kte h yaha par aya length jo iski erk property hai 
aur ek prototype  ; isko jab aap open kroge to furthert  ek aur protoptype ayega  ; isko jab open kroge to further koi protype nh ayega

*/



// Array methods

// myArr.push(6)
// console.log(myArr);

// myArr.push(7)
// console.log(myArr);

// myArr.pop()

// myArr.unshift(9)          // 9 will be einserted at the start of the array   
// myArr.shift()             // 9 will be removed from the start of the array    //note unshift me to hum argument dete hai but shift me koi argument ya parameter nahi dete

// console.log(myArr.includes(9));    //questionare method    //to ask or know that 9 is included or present in array or not   // it will return true or false(boolean type) 
// console.log(myArr.indexOf(3));     //index v pucch skte hai ki 3 ka index kya hai   //it will return the index of the element if it is present in the array otherwise it will return -1

// const newArr = myArr.join()

// console.log(myArr);  // original array will remain unchanged
// console.log( newArr);   // join method will convert the array into a string with comma separated values    // by default   // you can also pass a separator as an argument to the join method, like myArr.join("-") or myArr.join(" ")


// slice, splice

console.log("A ", myArr); 

const myn1 = myArr.slice(1, 3)     // slice will return a new array with the elements from index 1 to index 3 (not inclusive of index 3)   // it will not change the original array

console.log(myn1);     
console.log("B ", myArr);   // original array will remain unchanged


const myn2 = myArr.splice(1, 3)    // splice will remove the elements from index 1 to index 3 (not inclusive of index 3) and return a new array with the removed elements   // it will change the original array
console.log("C ", myArr);  // original array will be changed // it will remove the elements from the original array  // it will also return the removed elements as a new array   // it will change the original array
console.log(myn2);   // it will return the removed elements as a new array   // it will change the original array  // it will return the removed elements as a new array  