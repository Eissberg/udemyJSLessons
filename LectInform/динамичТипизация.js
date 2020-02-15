// - to string

//  1)
String(null);

console.log(typeof(String(4)));

// 2)
console.log("WW "+ 5 );  // строка
console.log('https://facebook.com/catalog/' + 5);


// - to Mumber

//  1)
console.log(typeof(Number('4')));

//  2)
console.log(typeof(5 + +'5'));  //число - унарный плюс перед строкой превращает строку в число

//  3)
console.log(typeof(parseInt('14px', 10)));

let ans = +prompt("Hello?", '');    //перед prompt - унарный плюс


// Логическое преобразование
// все, что всегда превращается в 0
// 0, '', null, undefined, NaN
//  1)
let switcher = null;

if (switcher){
    console.log("Working..");
}

switcher = 1;

if (switcher){
    console.log("Working..");
}

//  2)
console.log(typeof(Boolean('4')));

//  3)
console.log(typeof(!!'4'));