const name = "hitesh"
const repoCount =50

//console.log(name + repoCount + "Value");   //this synatax does not look good , it is not advisable to use like this   //OUTDATED

//agar aaj ke din likhna h to use karenge baik tax ''. backtax use krna ka fayda hai yaha par aata h string interpolation
// yaha aap banate ho placeholders. Unke andar jo v variable h waha aap directly injectkr skte  h
//example: 
console.log('Hello my name is ${name} and my reppo count is ${repoCount}');

//string ko declare krne ka ek aur treeka v h
//aap ek aur syntax  use kr skte ho jhaa aap new keyword use krte ho to Object use krte h javascript ke
// yah par String ka use kra aur uske constructor ke andar aapne name diya

const gameName = new String('hiteshhc')

//const gameName = new String('hitesh-hc')
//const gameName = new String('hitesh-hc-com')

// agar aap upar wale variable line of code ko browser ke inspect me jakar console me paste krte ho then run krke gameName likhte ho[puchhte ho gamename batao] to niche aap dekhoge ki String aapke paas aya h value
//jaise hi open krte ho to key value pairs dekh paoge
//isme interesting thing dekhoge ki aapke pas Length property aapko milti h + aapke paas bahut sare aur methods milte h
// jo ke prototype  k andar h
//jab open kroge to dekhoge ki kitne sare methods available h

//next interesting thing:

console.log(gameName[0]); //key access ;key value pair acccess
console.log(gameName.__proto__)   //prototype acccess      note : here it is double underscore


console.log(gameName.length);   //length access

//other methods acccess
console.log(gameName.toUpperCase()); //uppercase acceess directly without wring protocol
console.log(gameName.charAt(2));   // kisi position par kaun sa character h ye dekhna h 
console.log(gameName.indexOf('t'));   //koichacter kis position par h


// note : study all the methods

//some more methods
const newString = gameName.substring(0, 4) //substring method extracts characters from index 0 to index 4 (not including index 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)     //slice me negative index use kr skte ho   //-8 ha to pichhe se start hoga aur 4 tak chlega
console.log(anotherString);

const newStringOne = "    hitesh   "   //ye string ke andar space h to use trim method se remove kr skte ho
console.log(newStringOne);
console.log(newStringOne.trim());      //trim method removes the spaces from both ends of the string

 //study all methods by searching in google methodname javascrit mdn

const url = "https://hitesh.com/hitesh%20choudhary"     //%20 is used for space in urls

console.log(url.replace('%20','-'))      //replace method replaces the first occurrence of the specified value with the new value

console.log(url.includes('hitesh'))     //ask question where it is present or not ///includes method returns true or false
console.log(url.includes('sundar'))     

console.log(gameName.split('-'));  //split method splits the string into an array based on the given separator