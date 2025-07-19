/*
Kuchh kaam ki baatein:
inspect -> console :
const myArr  = [1, 2, 3, 4]

my Arr
jaise hi array oopen krenge apapko milenge yaha prototye
prototype jab open krenge tab dekhenge  array ke methods

*/


const marvel_heros = ["thor", "Ironman", "spiderman"] //
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros) // adds dc_heros as a single element to marvel_heros   // ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]    

console.log(marvel_heros);      // ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]    
console.log(marvel_heros[3][1]);  //not a good way to access     // flash    

const allHeros = marvel_heros.concat(dc_heros)    // combines both arrays into a new array    // ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]
console.log(allHeros);  // ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]  // // this is a better way to access elements from both arrays

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // flattens the array to a single level, Infinity means it will flatten all levels  // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]   //returns a new array with all sub arrray elements concatenated into it recursively up to the specified depth
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))   // false, because "Hitesh" is a string, not an array  // true if the value is an array, false otherwise  // it checks if the value is an array or not
console.log(Array.from("Hitesh"))   // ['H', 'i', 't', 'e', 's', 'h']  // converts the string into an array of characters  // it creates a new array from an array-like or iterable object
console.log(Array.from({name: "hitesh"})) // interesting // [{name: "hitesh"}]  // it creates an array with a single element which is an object with name property // it creates an array from an array-like or iterable object, but since the object is not iterable, it will create an array with a single element which is the object itself

let score1 = 100 
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  // [100, 200, 300]  // it creates a new array with the given elements as its elements  // it creates an array from a variable number of arguments, regardless of the number of arguments passed    // of se :- return  a new array from a set  of elements  // it is similar to the Array constructor, but it does not create an array with a single element which is the arguments object
