'use strict';
var money = prompt("Ваш бюджет в месяц?","2000"), 
time = prompt("Введите дату в формате YYYY-MM-DD","2019.11.27"),
dayMoney = 0;
let appData = {
    budget: money,
    timeData: time,
    expenses: {
        one: prompt("Введите обязательную статью расхдов в этом месяце"),
        two: ":",
        three: prompt("Во сколько обойдется?"),
        four: prompt("Введите обязательную статью расхдов в этом месяце"),
        five: ":",
        six: prompt("Во сколько обойдется?")
        },
    optionalExpenses: {},
    income: [],
    savings: false
};

dayMoney = (2000 - appData.expenses.three - appData.expenses.six)/30;
alert("Ваш дневной бюджет = "+dayMoney);

//console.log(appData.expenses);  
