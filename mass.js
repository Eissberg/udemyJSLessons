// let arr = ["first", 2, 3, "four", 5];
// //arr[99] = 99;                              // не правильно

// //редактирование массива с конца
// // arr.pop();                                //удаление с конца 
// // arr.push("5");                            //добавление в конец    

// //редактирование массивива сначала
// // arr.shift();                              //удаление с начала
// // arr.unshift("1");                         //добавление в начало

// //console.log(arr.length);                   //возвращает последний индекс +1

// arr.forEach(function(item, i, mass) {        //перебор элементов массива методом ForEach
//     console.log(i + ': ' + item + ' (massive: ' + mass + ')');
// });

// console.log(arr);

// // for (let i = 0; i <= arr.length; i++){    //перебор элементов массива циклом
// //     console.log(arr[i]);
// // }

// let mass = [1, 3, 4, 6, 7];

// for (let key of mass){                       //перебор элементов массива циклом For Of - не работает с обьектами       For in - ключи      For of - значения
//     console.log(key);
// }

// let ans = prompt("", ""),                    //метод Split
//     arr = [];

// arr = ans.split(',');
// console.log(arr);

// let arr = ["aawe", 'zzz', 'pp', 'req'],      //метод Join
//     i = arr.join(', ');

// console.log(i);

let arr = [1, 15, 4],                           //метод Sort 
i = arr.sort(compareNum);

function compareNum(a,b){                       //сортировка для циферных массивов
return a-b;
}

console.log(arr);
