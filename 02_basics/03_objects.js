// singleton
Object.create // is used to create an object with a specified prototype object and properties  // it allows you to create a new object with the specified prototype object and properties, without using a constructor function or class  // it is useful for creating objects with a specific prototype chain or for creating objects with specific properties without using a constructor function or class

// object literals

const mySym = Symbol("key1")


const JsUser = {              // object literal syntax
    name: "Hitesh",                             // object key  // property name
    "full name": "Hitesh Choudhary",        // key with space in it, needs to be accessed with bracket notation
    [mySym]: "mykey1",                     // computed property name, can be accessed with bracket notation
    age: 18,
    location: "Jaipur",                 
    email: "hitesh@google.com",       
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)           //   // accessing object properties using dot notation    // it is the most common way to access object properties   // it is used to access the value of a property in an object using the property name directly
// console.log(JsUser["email"])      // accessing object properties using bracket notation   // it is used to access the value of a property in an object using the property name as a string, useful for keys with spaces or special characters
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])         // accessing computed property name using bracket notation   // it is used to access the value of a property in an object using a variable or expression that evaluates to a property name

JsUser.email = "hitesh@chatgpt.com"              // updating object property using dot notation   // it is used to update the value of a property in an object using the property name directly
// Object.freeze(JsUser)                       // freezes the object, making it immutable, no further changes can be made to the object  // it prevents any changes to the object, including adding, removing, or modifying properties
JsUser.email = "hitesh@microsoft.com"          // updating object property using dot notation again, but it will not work if the object is frozen
// console.log(JsUser);                       // accessing object properties using dot notation

JsUser.greeting = function(){                // adding a method to the object using dot notation   // it is used to add a function as a property of an object, allowing the object to have behavior or functionality
    console.log("Hello JS user");                // it is a method that logs a greeting message to the console
}
JsUser.greetingTwo = function(){                   // using `this` keyword to refer to the current object    // it is used to refer to the current object within a method, allowing access to other properties and methods of the object
    console.log(`Hello JS user, ${this.name}`);     // it is a method that logs a greeting message to the console, using the `this` keyword to refer to the current object
}

console.log(JsUser.greeting());        // calling the method using dot notation   // it is used to call a method of an object, executing the function associated with the property name
console.log(JsUser.greetingTwo());           // calling the method using dot notation again, it will use the `this` keyword to refer to the current object

