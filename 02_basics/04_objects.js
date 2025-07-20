//in this video we will learn about objects ko singleton kaise kr sakte h ya constructor ki madad se kaise  declare kr skte h
// objects are used to store data in key-value pairs, where keys are strings and values can be any data type, including other objects or functions
// objects are mutable, meaning you can change


// const tinderUser = new Object()    //singleton object   // creates an empty object using the Object constructor, but it is not commonly used, object literals are preferred
const tinderUser = {}     //non singleton oject   // creates an empty object using object literal syntax, which is the most common way to create objects in JavaScript

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);     // creates an object with properties id, name, and isLoggedIn, where id is a string, name is a string, and isLoggedIn is a boolean //{}

const regularUser = {           // creates an object with properties email and fullname, where email is a string and fullname is an object containing userfullname, which in turn contains firstname and lastname
    email: "some@gmail.com",                // email is a string
    fullname: {           // fullname is an object
        userfullname: {        // userfullname is an object
            firstname: "hitesh",        // firstname is a string
            lastname: "choudhary"         // lastname is a string
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);      // Accessing the firstname property of the userfullname object within the fullname object of the regularUser object
       //kucchh kaam ki batein :// console.log(regularUser.fullname?.userfullname.lastname);          // Optional chaining operator (?.) is used to safely access nested properties, preventing errors if any part of the chain is undefined or null  //asks if fullname exists, then userfullname, then lastname, if any of them is undefined or null, it will return undefined instead of throwing an error
const obj1 = {1: "a", 2: "b"}           // creates an object with properties 1 and 2, where 1 is a string and 2 is a string    // keys can be numbers or strings, but they are always converted to strings in JavaScript objects
const obj2 = {3: "a", 4: "b"}         
const obj4 = {5: "a", 6: "b"}          

// const obj3 = { obj1, obj2 }       // creates an object with properties obj1 and obj2, where obj1 and obj2 are objects themselves, resulting in a nested object structure    // this is not merging the objects, it is creating a new object with obj1 and obj2 as properties  // this will not merge the objects, it will create a new object with obj1 and obj2 as properties, resulting in a nested structure
// const obj3 = Object.assign({}, obj1, obj2, obj4)             // Object.assign() is used to merge multiple objects into a new object, where the first argument is an empty object that will receive the properties of obj1, obj2, and obj4


//read object  assign mdn documentation



const obj3 = {...obj1, ...obj2}     // creates a new object by spreading the properties of obj1 and obj2 into a new object, effectively merging them into a single object    // the spread operator (...) is used to merge objects, where properties from obj1 and obj2 are copied into a new object, resulting in a flat structure with properties from both objects
// console.log(obj3);              // Output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }  // the resulting object will have properties from both obj1 and obj2, with keys as strings





//users jab database se aapke pas ayenge to user ayenge array of objects ke form me, jisme har user ka object hoga, jisme id aur email property hogi

const users = [                  // creates an array of user objects, where each user object has an id and email property
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email        // Accessing the email property of the second user object in the users array, which is an array of objects containing user data    // this is how you would typically access properties of objects within an array in JavaScript
// console.log(tinderUser);     // Output: { id: '123abc', name: 'Sammy', isLoggedIn: false }  // the tinderUser object now contains three properties: id, name, and isLoggedIn

// console.log(Object.keys(tinderUser));        // Returns an array of the keys (property names) of the tinderUser object, which would be ['id', 'name', 'isLoggedIn']   // Object.keys() is a method that returns an array of the keys of an object, allowing you to iterate over the properties of the object
// console.log(Object.values(tinderUser));      // Returns an array of the values of the tinderUser object, which would be ['123abc', 'Sammy', false]   // Object.values() is a method that returns an array of the values of an object, allowing you to access the values associated with each key
// console.log(Object.entries(tinderUser));     // Returns an array of key-value pairs of the tinderUser object, where each pair is an array containing the key and its corresponding value, resulting in [['id', '123abc'], ['name', 'Sammy'], ['isLoggedIn', false]]   // Object.entries() is a method that returns an array of arrays, where each inner array contains a key-value pair from the object, allowing you to iterate over both keys and values simultaneously

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));     // Checks if the tinderUser object has a property named 'isLoggedIn', returning true if it exists and false otherwise   // hasOwnProperty() is a method that checks if an object has a specific property, returning true or false based on its existence  // this is useful for checking if a property exists in an object before accessing it, preventing potential errors






//DESTRUCTURING:


const course = {                 // creates an object representing a course, with properties name, coursename, price, and courseInstructor 
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor     // Accessing the courseInstructor property of the course object, which is a string representing the instructor's name

const {courseInstructor: instructor} = course        // Destructuring the course object to extract the courseInstructor property and assign it to a new variable named instructor, effectively renaming it in the process   // Destructuring allows you to extract properties from an object and assign them to variables, making it easier to work with object data

// console.log(courseInstructor);          // console.log(instructor);                // Output: hitesh  // the instructor variable now holds the value of the courseInstructor property from the course object, which is 'hitesh'
console.log(instructor);                  // Output: hitesh  // the instructor variable now holds the value of the courseInstructor property from the course object, which is 'hitesh'    // Destructuring is a powerful feature in JavaScript that allows you to extract values from objects or arrays and assign them to variables in a concise way




//JSON:
// JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy to read and write for humans and machines. It is often used to transmit data between a server and a web application as an alternative to XML.
// JSON is a string representation of an object, and it can be easily converted to and from JavaScript objects using JSON.stringify() and JSON.parse() methods.

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }



//API IN ARRAY FORMAT v milti h
// API se data jab aata h to wo array of objects ke form me aata h, jisme har object me user ka data hota h, jaise id, email, name, etc.
[
    {},
    {},
    {}
]