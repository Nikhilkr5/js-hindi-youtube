//var c = 300          //var c is function scoped, so it will not be accessible outside the function
let a = 300


//jo v if ke andar leikh rh e pura wo hai block scope aur if ke bahar jo likh rhe  ayani upar wo h global scope
if (true) {              //{} -> scope        //object me  v curly braces hota h lekin wo object declaration hai  // ye agar kisi function ke sth aata hai ya if else ke sath aata hai tab whaa par bol;a  jata hai scope yani scope of that program ya us function ka scope ya if else ka scope 
    let a = 10                                         //global scope me jo v aap likhenge wo value yaha pe availbale hoti h scope ke andar lekin scope ke andar jo value likhte h wo bahar nnhi jani chahiye            
    const b = 20                                        //var b = 20  so don't use var in scopes //var b is function scoped, let and const are block scoped
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);



//chhote baro se icecream chhin sakte h lekin bare chooto se icecream nhi le sakte ajeeb lgega


//Nested Scope
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);                 //error

     two()

}

// one()                        //one will not get excuted if two is not executed  


//isiko kisi had tak closure v kaha jata hai ki aapka jo andar ka function hai wo bahar ke variable ko accees kar pata hai but actually me itna hi nhi hai uske pichhe aur v detail hai 
// abhi ke liye basics itna hai ki nested function jab hote hai to apapke jo hild function hai wo parent ke variable ko access kar pate hai 









if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);        //error
}

// console.log(username);                //error 


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){              
    return num + 1
}


  
addTwo(5)       //error     /Cannot acccess 'addTwo' before initialzation
const addTwo = function(num){         //ye v functionn hi hai lekin isko kavi kabar expression v bol diya jata hai   // ye ek variabe ki tarah hai 
    return num + 2
}



//kucch kaam ki baatein:
// error aya access krne me lekin upar to kar liya tha
// ye problem aati hai jab aap function ko kis tarah se declare krte hai
// upar wale me tosirf hmne declaration diya hai  ; niche me hmne declare karne ke sath usko ek variable me hold v kr diya hi
// to ye ek concept aata hai javascript me age chlkar jisko kahte hai hoisting ki function kaise declare hote hai , kaha unko rakha jata hai, kya unka execution context hai ya phir kis tarh se variable ko javascript treat kri hai , kaise ek final tree banati jaha par sare variables rkhe jate hai ,sare functions rkhe jate hai

// to ye ek hoisting hota hai jaha pe executon context banta hai ki aap dcelaration se pahle aap use ni kr sakte hai but is case me aap kr parhe hai aur us case me nhi kr pate hai ye dhyan rkhiyega 
