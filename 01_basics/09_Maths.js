console.log(Math) // Math object provides mathematical constants and functions // e.g. Math.PI, Math.sqrt()

//jab aap yaha par print krte ho to aapke pas itna detailed value nahi aati h lekin jab aap jate browser inspect ke console ke andar waha pe aapko kafi values; properties aur mil jati hai

console.log(Math.abs(-4)); // Absolute value of -4 is 4
console.log(Math.round(4.6)); // Rounds 4.6 to the nearest integer, which is 5
console.log(Math.ceil(4.2)); // Rounds 4.2 up to the nearest integer, which is 5 // Note: Math.ceil(4.2) will return 5, not 4, because it always rounds up
console.log(Math.floor(4.8)); // Rounds 4.8 down to the nearest integer, which is 4(// Note: Math.floor(4.8) will return 4, not 5, because it always rounds down
console.log(Math.min(4,3,6,8)); // Returns the smallest value among the arguments, which is 3
console.log(Math.max(4,3,6,8)); // Returns the largest value among the arguments, which is 8
console.log(Math.random()); // Returns a random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random() * 10); // Returns a random number between 0 (inclusive) and 10 (exclusive)
console.log((Math.random() * 10) + 1); // Returns a random number between 1 (inclusive) and 11 (exclusive)    // Note: To get a random number between 1 and 10, you can use Math.floor((Math.random() * 10) + 1)  // Note: Math.floor is used to round down the result to the nearest integer

const min =10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Returns a random number between 10 and 20 (inclusive) // Note: Math.floor is used to round down the result to the nearest integer

