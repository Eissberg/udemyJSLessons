'use strict';
let money, time;

function start() {
    money = +prompt("Ваш бюджет в месяц?","2000"); 
    time = prompt("Введите дату в формате YYYY-MM-DD","2019.11.27");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет в месяц?","2000"); 
    }
}

start();



//dayMoney = 0, i=0;
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {

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
    } 
}

chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(1);
    alert("ежедневный бюджет: " + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("минимальный уровень достатка");
    } else if ((appData.moneyPerDay > 100) && (appData.moneyPerDay < 2000)) {
        console.log("средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("высокий уровень достатка");
    } else {
        console.log("ошибка!");
    }
}

detectLevel();

function checkSavings(){
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");
        
        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с Вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();

function chooseOptExpenses() {

    for (let i = 0; i < 3; i++) {
        let a = prompt("Введите необязательную статью расхдов в этом месяце"),
            b = prompt("Во сколько обойдется?");
    
        if ( ((typeof(a))=== 'string') && ((typeof(a)) != null) && ((typeof(b)) != null)
            && (a != '') && (b != '') && (a.length < 50) ) {
            console.log("done again");
            appData.optionalExpenses[a] = b;
        } else {
            //в елсе вернутьс к циклу заново
            alert("Будьте внимательны и вводите корректные данные!"); 
            i--;
        }
    } 
}

chooseOptExpenses();