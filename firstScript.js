'use strict';
var money = +prompt("Ваш бюджет в месяц?","2000"), 
time = prompt("Введите дату в формате YYYY-MM-DD","2019.11.27"),
dayMoney = 0, i=0;
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расхдов в этом месяце"),
        b = prompt("Во сколько обойдется?");

    if ( ((typeof(a))=== 'string') && ((typeof(a)) != null) && ((typeof(b)) != null)
        && (a != '') && (b != '') && (a.length < 50) ) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        //в елсе вернутьс к циклу заново
        alert("Будьте внимательны и вводите корректные данные!"); 
        i--;
    }
};

// while (i < 2) {
//     let a = prompt("Введите обязательную статью расхдов в этом месяце"),
//         b = prompt("Во сколько обойдется?");
//         if ( ((typeof(a))=== 'string') && ((typeof(a)) != null) && ((typeof(b)) != null)
//                  && (a != '') && (b != '') && (a.length < 50) ) {
//                  console.log("done");
//                  appData.expenses[a] = b;
//              } else {
//                  //в елсе вернутьс к циклу заново
//                  alert("Будьте внимательны и вводите корректные данные!"); 
//                  i--;
//              }    
//     i++;
// }

// do {
//     let a = prompt("Введите обязательную статью расхдов в этом месяце"),
//         b = prompt("Во сколько обойдется?");
//         if ( ((typeof(a))=== 'string') && ((typeof(a)) != null) && ((typeof(b)) != null)
//                  && (a != '') && (b != '') && (a.length < 50) ) {
//                  console.log("done");
//                  appData.expenses[a] = b;
//              } else {
//                  //в елсе вернутьс к циклу заново
//                  alert("Будьте внимательны и вводите корректные данные!"); 
//                  i--;
//              }    
//     i++;
// } while (i < 2);


appData.moneyPerDay = appData.budget / 30;

alert("ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("минимальный уровень достатка");
} else if ((appData.moneyPerDay > 100) && (appData.moneyPerDay < 2000)) {
    console.log("средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("высокий уровень достатка");
} else {
    console.log("ошибка!");
}