const user = {                
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);                        //to jab v aap current context ko refer kr rhe ho to uske sath hum lgate hai this keyword
        console.log(this);                    
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);         //output: {}     yani current context hai empty kyuki hum node environment ke andar hai ,jab aap node environmnet ke andar hai o aapka jo this hai wo refer kar rha h kis chiz ko ek empty object ko kyuki abhi koi global ke andar context hi nhi hai  
// jab aap browser me (i.e inspect->console)  console.log(this) krenge  tab aapko yaha par >Windows dikhayi par rha hai
//browser ke andar jo global object hai wo Windows object hai 


// function chai(){
//     let username = "hitesh"

//    // console.log(this);
//     console.log(this.username);            //undefined
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    //console.log(this.username);          //undefined
    console.log(this);            //{}
}


// chai()




// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


//implicit return (isme  {} use nhi krne hote hai)
// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))




// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

