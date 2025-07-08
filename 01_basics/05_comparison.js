// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2 == 1);
// console.log(2 != 1);

console.log("2" > 1);   // typescript does not compare two different datatypes
console.log("02" > 1);

console.log(null>0);
console.log(null == 0);
console.log(null>= 0);    // true because of the problem of value comparison

/*
 the reason is sthat an equality check == and comparisons ><>=<= work diffferently
Comprisons covert null to a number , treating it as 0.

That's why (3) null > = 0 is true and (1)null > 0 is false
*/


// in all the below cases the value will be given FALSE
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);


//note the above conversions of null and undefined can confuse you anytime
// so in most cases we avoid these type of conversions and clean code ka hi sabse jyada value h aur isiko  sabse jyada priority denge


//===         triple equal to do not only check value but strictly check the values i.e also check their datatypes

//== do conversion
// === do not do conversion and check dataype

console.log("2" == 2);

console.log("2" === 2);