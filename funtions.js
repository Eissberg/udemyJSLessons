// let num = 20;
// function showFirstMessege(text) {    //funtion declaration
//     alert(text);
//     let num = 10;
//     console.log(num);
// }

// showFirstMessege("Hello!");
// console.log(num);

// console.log(calc(3,4));
// console.log(calc(8,4));

// function calc(a,b){     //funtion declaration
//     return (a + b);
// }

// let calc = function(a,b){  //function expression - функциональное выражение
//     return (a + b);
// }

// ES6

let calc = (a,b) => a+b //не имеет своего контекста вызова


console.log(calc(3,4));
console.log(calc(8,4));

function retVar() {     //funtion declaration
    let num = 50;
    return num;
}

let anotherNum = retVar();
console.log(anotherNum);

let str = "test";
console.log(str.length);

console.log(str.toUpperCase());     //свойства
console.log(str.toLowerCase());     //свойства

let twelwe = "12.2px";

//console.log(Math.round(twelwe));
console.log(parseInt(twelwe));      //методы
console.log(parseFloat(twelwe));    //методы