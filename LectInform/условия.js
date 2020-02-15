'use strict';
// if (1) {
//     console.log("Yes");
// } else {
//     console.log("No");
// }
let num = 50;

// if (num < 49) {
//     console.log("No"); 
// } else if (num > 100) {
//     console.log("Many");
// } else {
//     console.log("Yes");
// };

// (num == 50) ? console.log("Yes") : console.log("No");

switch (num) {
    case num < 49:
        console.log("No");
        break;
    case num > 100:
        console.log("Many");
        break;
    case num > 80:
        console.log("Many2");
        break;
    case 50:
        console.log("Yes");
        break;
    default:
        console.log("Allert");
        break;
}
