"use strict";  //treat all JS code as newer version

// alert(3+3)  // we are using node js, not browser

// console.log(3+3); console.log("Hitesh") not a good way


//note: javascript avoids spaces automatically 

console.log(3
    +
      3)  //code readaility should be high




// correct and readable way
console.log(3+3)
console.log("Nikhil")



//javascript documentation :mdn, but original javscript documentaion :tc39.es(ecma script)


let name = "hitesh"   //string datatype
let age= 18            //number
let isLoggedIn = false     //boolean datatype
let state;


/*
datatypes:
    number ==> 2 to power 53
    bigint 
    string===> ""   // but you can write in singe uote but it is advisable to only write in double quote
    boolean ===> true/false
    null ==>  standalone value      //null is the representation of empty value
    undefined  ==> it means the value is not defined or assigned
    symbol ==> unique    //to find the uniqueness among the components; symbol is used

    object

 */   


console.log(typeof "hitesh");
console.log(typeof age);
console.log(typeof null)       //object

console.log(typeof undefined);  //undefined
    