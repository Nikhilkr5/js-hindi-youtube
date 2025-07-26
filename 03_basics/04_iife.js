// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();                                    //ye jo immmediate invoke function wo invoke to ho gya but siko pta nhi hai ki actually me context rokna kaha hai ; aisi situationme javascript ke andar isko end karna parta hai us line ko  aur usko end karne ke liye  ek semicolon ki jarurat parti hai 

/*
//unnamed IIFE without parametre passed
( () => {
    console.log(`DB CONNECTED TWO`);
} )()
*/

//unnamed IIFE with parameter passed
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

//do IIFE jab ek sath likhte hai to log semicolon ke sath hi glti krte hai lgana bhul jate hai

//kayi baar kya hota hai ki hum global scope jo hai; kayi baar scope ke andar kuchh variable declare hote hai aur kayi baar ho skta hi hum uss function ke andar kuchh likh rhe h , hum nhi chahte function ke andar wo global variable kucch problem kare kyuki  
//wo to avilable h; bachche to baro se mang sakte hai to usi tarh  se jo v aap function me declare kr rhe hote hai wo kayi baar global scope se pollute ho jate hai to ye do main reason hote hai 
//ki global scope se hume pollution nhi chahiye bilkul v to hum hamara ek alg scope bana lete hai
//kyuki function me to scope ban hi jata hai  aur plus mai chahta hu ki immediately execute ho jaye wahi par 