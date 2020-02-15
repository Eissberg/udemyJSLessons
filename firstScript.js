'use strict';
let 
    startButton = document.getElementById('start'),

    budgetValue = document.querySelector('.budget-value'),
    dayBudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthsavingsValue = document.querySelector('.monthsavings-value'),
    yearsavingsValue = document.querySelector('.yearsavings-value'),
    expensesItems = document.querySelectorAll('.expenses-item'),
    buttonUTVexp = document.querySelectorAll('button')[0],
    buttonUTVopt = document.querySelectorAll('button')[1],
    buttonRASCH = document.querySelectorAll('button')[2],
    optionalExpensesItems = document.querySelectorAll('.optionalexpenses-item'),
    otherOptionalExpenses = document.querySelector('.choose-income'),
    checkSavingsBool = document.querySelector('#checkbox'),
    savingsSumm = document.querySelector('.choose-sum'),
    savingsPercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.momth-value'),
    dayValue = document.querySelector('.day-value');

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
    savings: true,
    chooseExpenses: function() {
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
    },
    detectDayBudget: function(){
        appData.moneyPerDay = (appData.budget / 30).toFixed(1);
        alert("ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function(){
        if (appData.moneyPerDay < 100) {
            console.log("минимальный уровень достатка");
        } else if ((appData.moneyPerDay > 100) && (appData.moneyPerDay < 2000)) {
            console.log("средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("высокий уровень достатка");
        } else {
            console.log("ошибка!");
        }
    },
    checkSavings: function(){
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
            
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с Вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function(){
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
    },
    chooseIncome: function(){
        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую!)", "");
            while (items == "" || items == null || !isNaN(items)){
                alert("Будьте внимательны и вводите корректные данные!"); 
                items = prompt("Что принесет дополнительный доход? (Перечислите через запятую!2)", "");
            }
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что-то еще?"));
            appData.income.sort()
            
            appData.income.forEach(function(item, inn, mass) {
                 if (inn != 0) {
                    console.log("Способы доп. зароботка: " + item + " " + inn);
                }
            });
    }
}

//  for (let key in appData) {    // работа со свойствами обьекта
//      console.log("Наша программа включает в себя данные: "+ key + " имеет значение " + appData[key]);
//  }