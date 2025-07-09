const score = 400   // Number

const balance = new Number(100)
console.log(balance)              // Number { 100 }  


// the above line of  code can be done in browser -> inspect -> console as well to see the prototypes 


console.log(balance.toString());  // "100"

console.log(balance.toString().length);  // 3

console.log(balance.toFixed(2));  // "100.00"
console.log(balance.toFixed(2).length);  // 6

//const otherNumber =23.89066

//console.log(otherNumber.toPrecision(3));  // "23.9"

const otherNumber =123.8966

console.log(otherNumber.toPrecision(4)); // "123.9"

const hundreds = 1000000
console.log(hundreds.toLocaleString());  // "1,000,000" 

console.log(hundreds.toLocaleString('en-IN'));  // "1,000,000"  // Indian numbering system

//now interesting thing : go to browser -> inspect and type:
/*
Number
// after pressing enter:
// function Number() { [native code] }

jaise hi aap Number ke sath aap dot lgate ho tab aapko Number ke methods dikhte hain:
//ya yu kahe to aapko pta lgega ki kafi values aapke paas h
min value aur aur max value bhi milti hai


Number.MAX_VALUE  // 1.7976931348623157e+308
Number.MIN_VALUE  // 5e-324

Number.MAX_SAFE_INTEGER  // 9007199254740991

// after pressing enter

*/




