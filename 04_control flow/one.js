//before this ,study how does javascript execute code + call stack "https://youtu.be/ByhtOgF6uYM?si=DP2b7f_JJXZkn_Q2"



// if
const isUserloggedIn = true        
const temperature = 41

// if ( temperature === 40 ){
// if ( temperature < 50 ){

//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");       
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"              //don't use var keyword as it will be accessed out of scope
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 1000                      

// if (balance > 500) console.log("test"),console.log("test2");         //implicit scope   //unreadable immmaturaed code // don't write like this

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 900");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {    
    console.log("User logged in");
}
