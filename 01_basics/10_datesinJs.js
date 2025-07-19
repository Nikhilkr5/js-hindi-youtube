//Dates
 
let myDate = new Date()

// console.log(myDate); // Current date and time // e.g. "2023-10-01T12:34:56.789Z"   
// console.log(myDate.toString()); // Converts the date to a string representation // e.g. "Sun Oct 01 2023 12:34:56 GMT+0000 (Coordinated Universal Time)"
// console.log(myDate.toDateString()); // Returns the date part as a string  // e.g. "Sun Oct 01 2023" 
// console.log(myDate.toTimeString()); // Returns the time part as a string // e.g. "12:34:56 GMT+0000 (Coordinated Universal Time)"
// console.log(myDate.toISOString()); // Returns the date in ISO format // e.g. "2023-10-01T12:34:56.789Z"
// console.log(myDate.toLocaleString()); // Returns the date and time in the local format // e.g. "10/1/2023, 12:34:56 PM" (depending on your locale)
// console.log(myDate.toLocaleDateString()); // Returns the date in the local format // e.g. "10/1/2023" (depending on your locale)
// console.log(typeof myDate); // Returns the type of the variable, which is "object" // Note: In JavaScript, Date is an object, not a primitive type
// console.log(myDate.getFullYear()); // Returns the year of the date // e.g. 2023
// console.log(myDate.getMonth()); // Returns the month of the date (0-11, where 0 is January and 11 is December) // e.g. 9


/*
//let myCreatedDate = new Date(2023, 0, 23) // Creates a new date object for January 23, 2023 (months are 0-indexed in JavaScript)

console.log(myCreatedDate); // Outputs the created date object // e.g. "2023-01-23T00:00:00.000Z"
console.log(myCreatedDate.toString()); // Converts the created date to a string representation // e.g. "Mon Jan 23 2023 00:00:00 GMT+0000  (Coordinated Universal Time)"
console.log(myCreatedDate.toDateString()); // Returns the date part as a string // e.g. "Mon Jan 23 2023"
*/


// let myCreatedDate = new Date(2023, 0, 23,5,3,0) // Creates a new date object for January 23, 2023 at 05:03:00 (months are 0-indexed in JavaScript)
// console.log(myCreatedDate.toLocaleString()); // Outputs the created date in local format // e.g. "1/23/2023, 5:03:00 AM" (depending on your locale) 

// let myCreatedDate = new Date("2023-01-14") // Creates a new date object for January 14, 2023
// console.log(myCreatedDate.toLocaleString()); // Outputs the created date in local format // e.g. "1/14/2023, 12:00:00 AM" (depending on your locale)


let myCreatedDate = new Date("01-14-2023") // Creates a new date object for January 14, 2023
//console.log(myCreatedDate.toLocaleString()); // Outputs the created date in local format // e.g. "1/14/2023, 12:00:00 AM" (depending on your locale)

let myTimeStamp = Date.now() // Returns the current timestamp in milliseconds since January 1, 1970

// console.log(myTimeStamp); // Outputs the current timestamp // e.g. 1706784000000 (this value will vary based on the current date and time)
// console.log(myCreatedDate.getTime()); // Outputs the timestamp of the created date // e.g. 1705180800000 (this value will vary based on the date you created)
// console.log(Date.now()); // Outputs the current timestamp in milliseconds since January 1, 1970 // e.g. 1706784000000 (this value will vary based on the current date and time)
// console.log(Date.now()/1000); // Outputs the current timestamp in seconds since January 1, 1970 // e.g. 1706784000 (this value will vary based on the current date and time)
// console.log(Math.floor(Date.now()/1000));  // Outputs the current timestamp in seconds since January 1, 1970, rounded down to the nearest whole number // e.g. 1706784000 (this value will vary based on the current date and time)


let newDate = new Date()
console.log(newDate.getMonth()); // Outputs the current month (0-11, where 0 is January and 11 is December) // e.g. 9 for October
console.log(newDate.getDay()); // Outputs the current day of the week (0-6, where 0 is Sunday and 6 is Saturday) // e.g. 0 for Sunday
console.log(newDate.getMonth() + 1); // Outputs the current month (1-12, where 1 is January and 12 is December) // e.g. 10 for October

//'${newDate.getDay()} and the time is ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}' 

newDate.toLocaleString('default', {
    weekday: "long",
})    