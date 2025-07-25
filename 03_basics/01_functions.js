
function sayMyName(){         
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()
/*
function addTwoNumbers(number1, number2){

    console.log(number1 + number2);
}
const result = addTwoNumbers(3, 5)
console.log("Result: ", result);                  // Result: undefined (because we are not returning anything from the function)  //ab kayi log ye smjh lete h ki console.log kiya h function me to console log dikh rha to yahi value wapas gyi h   -->nai nahi nahi yahi sabse bari galti h  // console print krne ka mtlab ye nhi ki function wo value return v kr rha h  // return apne aap me concept h  // console.log sirf print krta
*/

/*
function addTwoNumbers(number1, number2){

    let result = number1 + number2
    return result
    console.log("Hitesh")        //ye hitesh kavi execute nhi hoga kyuki return ke baad koi bhi code execute nhi hota   // lekin ye hitesh wala agar return result ke upar(pahle) le jaunga tab hitesh print hoga
   
}

const result = addTwoNumbers(3, 5)

console.log("Result: ", result);                  // Result: 8   
*/


function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    //console.log("Hitesh")        //ye hitesh kavi execute nhi hoga kyuki return ke baad koi bhi code execute nhi hota
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

console.log("Result: ", result);                  // Result: 8   

/*
function loginUserMessage(username){
    
    return `${username} just logged in`                  //backticks ` ` use kr rhe kyuki sabse aasan yahi h ; string interpollation
}

 console.log(loginUserMessage("hitesh"))               //hitesh just logged in    
 console.log(loginUserMessage(""))                      // just logged in    // empty string pass kiya to bhi koi error nhi aaya
 console.log(loginUserMessage())                         // undefined just logged in   // agar koi value pass nhi ki to undefined pass ho gya
 */

/*
function loginUserMessage(username){
    //if(username === undefined){                      // agar username pass nhi kiya to ye condition true ho jayegi
    if(!username){                                     // agar username pass nhi kiya to ye condition true ho jayegi    // !username ka mtlab agar username falsy value hai to ye condition true ho jayegi (falsy values: undefined, null, 0, "", NaN)
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`                  //backticks ` ` use kr rhe kyuki sabse aasan yahi h ; string interpollation
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage())
*/




function loginUserMessage(username = "sam"){
    if(!username){                                     
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`                  //backticks ` ` use kr rhe kyuki sabse aasan yahi h ; string interpollation
}

console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage())







//... ko hi  rest parameter or operator and spread operator bola jata h    // inke use case pe depend kra jata h kab isko spread operator bolenge kab usko rest operator bolenge
//... symbol is used in two different contexts in JavaScript: as a rest parameter and as a spread operator
//... symbol is used to create a rest parameter, which allows a function to accept an indefinite number of arguments as an array
//... symbol is used to create a spread operator, which allows an iterable (like an array

function calculateCartPrice(val1, val2, ...num1){          // ...num1 is a rest parameter, it will take all the remaining arguments as an array   //val1 and val2 are normal parameters, they will take the first two arguments passed to the function // num1 will take all the remaining arguments passed to the function as an array
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))



const user = {        
    username: "hitesh",
    prices: 199                  //problem with this is that we are not using prices in the function, so it will not be printed  //here it should be price not prices
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)   // passing object as an argument to the function





//direct object paassing
handleObject({
    username: "sam",
    price: 399
})




// function to return the second value of an array
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));                                   /// passing array as an argument to the function after storing it in a variable
console.log(returnSecondValue([200, 400, 500, 1000]));     // passing array as an argument to the function directly, without storing it in a variable