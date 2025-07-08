// data types---- primitive data structure and non primitive data structure
 

// Primitive data structure
        
// 7 types : String , Number , Boolean , null, undefined , Symbol, BigInt




//kkkb 
/*
JavaScript is dynamically typed.
This means:
You don't need to declare variable types explicitly.
The type of a variable is determined at runtime.
Variables can hold values of any type and can change types dynamically.
*/

const score= 100;
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail = undefined
//let userEmail;      // don't know why it is giving error  despite sir has done this

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //not same despite hmne value same li h lekin jo return value h wo same nhi h 


//const bigNumber = 34584644841468899995477778959588n



//Reference (Non Primitive) 

// Array, Objects, Functions

const heros = ["shaktiman" , "nagraj" , "doga"];

let myObj = {
    name: "Nikhil",                   // basically the values inside the curly braces are the objects
    age: 22,                          // aapka man ho to aap object ko variable me store kr skte h eg: let myObj ={   }


}

const myFunction = function(){
    console.log("Helo world");
}


console.log(typeof bigNumber)

console.log(typeof outsideTemp);

console.log(typeof scoreValue);


console.log(typeof myFunction);

console.log(typeof anotherId);

console.log(typeof heros);


//study from the link: 
//https://262.ecma-international.org/5.1/#sec-11.4.3