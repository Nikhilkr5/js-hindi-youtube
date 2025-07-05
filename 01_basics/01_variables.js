const accountId =144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity ="Jaipur"
let accountState;
// accountId = 2 // not allowed -->because assignment agar constant me dege to mai change nhi kr skta hu

//note : javascript me semicolon lgaiye nhi lgaiye appki marzi
accountEmail = "hc@hc.com"
accountPassword ="21212121"
accountCity = "Bengaluru"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
