//Basic Syntax of switch case:-

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


//aise samjh sakte hai ki bahut sare lock hai aapke paas aur ek chabhi hai jisme us chabhi ka jo v tala khul jayega uske andar ka code execute kar denge 
const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;                           //by defaullt kya hota hai jaha par v key  match ho gya aapka uske bad ka sara code execute ho jata hai agar break nhi lgaenge tab   // to break kya karta hai control flow ko break kr deta hai
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}