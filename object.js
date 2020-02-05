// let ojb = new Object() // не пользуются

// let options = {
//     width: 1024,
//     heigth: 1024,
//     name: "test"
// };

// console.log(options.name);
// options.bool = false; // создание свойств в теле программы
// options.colors = {
//     border: "black",
//     bg: "red"
// };

// delete options.bool; //удаление свойства в теле программы

// console.log(options);

// for (let key in options) {    // работа со свойствами обьекта
//     console.log('Сойства '+ key + ' имеет значение ' + options[key]);
// }

// console.log(Object.keys(options).length); //узнать количество свойств объекта

//функции внутри объекта являються методами

// let arr = ["first", 2, 3, "four", 5];
// //arr[99] = 99;

// // arr.pop();
// // arr.push("5");

// // arr.shift();
// // arr.unshift("1");
// //console.log(arr.length);

// arr.forEach(function(item, i, mass) {
//     console.log(i + ': ' + item + ' (massive: ' + mass + ')');
// });

// console.log(arr);

// // for (let i = 0; i <= arr.length; i++){
// //     console.log(arr[i]);
// // }

// let mass = [1, 3, 4, 6, 7];

// for (let key of mass){
//     console.log(key);
// }

// let ans = prompt("", ""),
//     arr = [];

// arr = ans.split(',');
// console.log(arr);

// let arr = ["aawe", 'zzz', 'pp', 'req'];
//     i = arr.join(', ');

// console.log(i);

 let arr = [1, 15, 4],
     i = arr.sort(compareNum);

function compareNum(a,b){
    return a-b;
}

 console.log(arr);
