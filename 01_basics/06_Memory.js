/*Memories:
Stack Memory and Heap memory

where they are used :

*jitne v primitive type batae the waha  sab jagah stack memory use hoti h 
*Jitne v non primitive type h waha Heap memory use hote h

Stack(Primitive) , Heap(Non -Primitive)

Note: Jab v Stack memory use hoti iska mtlb jo v apne variable declare kara uska copy milta h
  
        jab v memory Heap ke andar define hoti h; koi object ya kuchh v Heap ke andar chla jata h tab wha se milta reference  h , original value ka; JO V CHANGE KRENGE ORIGINAL VALUE ME CHANGE HOGA 

       
*/

let myYoutubename ="hiteshchoudharydotcom"

let anothername  = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename)
console.log(anothername);

let userOne = {
        email: "user@google.com",              //remember to put comma otherwise giving error in terminal
        upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"                                                  //dotvalue se hum object me excess kr skte h

console.log(userOne.email);
console.log(userTwo.email);


