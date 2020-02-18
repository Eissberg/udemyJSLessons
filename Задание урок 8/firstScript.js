// 'use strict';
let startButton = document.getElementById('start'),
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
    checkSavingsBool = document.querySelector('#savings'),
    savingsSumm = document.querySelector('.choose-sum'),
    savingsPercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;

    buttonRASCH.disabled = true;
    buttonUTVexp.disabled = true;
    buttonUTVopt.disabled = true;

startButton.addEventListener('click', function() {
    time = prompt("Введите дату в формате YYYY-MM-DD","2019.11.27");
    money = +prompt("Ваш бюджет в месяц?","2000"); 
    
    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет в месяц?","2000"); 
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
    buttonRASCH.disabled = false;
    buttonUTVexp.disabled = false;
    buttonUTVopt.disabled = false;
});

// buttonUTVexp.addEventListener('mouseover', function() {
//     if (buttonUTVexp.disabled == false) {
//         alert("Перед началом расчетов необходимо нажать кнопку 'Начать расчет'");
//     }
// });

buttonUTVexp.addEventListener('click',function() {
    let sum = 0;
    for (let i = 0; i < expensesItems.length; i++) {
        let a = expensesItems[i].value,
            b = expensesItems[++i].value;
    
        if ( ((typeof(a))=== 'string') && ((typeof(a)) != null) && ((typeof(b)) != null)
            && (a != '') && (b != '') && (a.length < 50) ) {
            console.log("done");
            appData.expenses[a] = b;
            sum += +b;
        } else {
            //в елсе вернутьс к циклу заново
            alert("Будьте внимательны и вводите корректные данные!"); 
            i--;
        }
    } 
    expensesValue.textContent = sum;
});

buttonUTVopt.addEventListener('click', function() {
    for (let i = 0; i < optionalExpensesItems.length; i++) {
        let opt = optionalExpensesItems[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    } 
});

buttonRASCH.addEventListener('click', function(){
    if (appData.budget != undefined){
        appData.moneyPerDay = ((appData.budget- +expensesValue.textContent) / 30).toFixed(1);
        dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "минимальный уровень достатка";
        } else if ((appData.moneyPerDay > 100) && (appData.moneyPerDay < 2000)) {
            levelValue.textContent = "средний уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "высокий уровень достатка";
        } else {
            levelValue.textContent = "ошибка!";
        }
    } else {
        dayBudgetValue.textContent = "Произошла ошибка!";
    }   
});

otherOptionalExpenses.addEventListener('input', function() {
    let items = otherOptionalExpenses.value;
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;
});

checkSavingsBool.addEventListener('click', function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

savingsSumm.addEventListener('click', function() {
    if (appData.savings == true) {
        let sum = +savingsSumm.value,
            percent = +savingsPercent.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

savingsPercent.addEventListener('click', function() {
    if (appData.savings == true) {
        let sum = +savingsSumm.value,
        percent = +savingsPercent.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);  
    }
});

//dayMoney = 0, i=0;
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}

//  for (let key in appData) {    // работа со свойствами обьекта
//      console.log("Наша программа включает в себя данные: "+ key + " имеет значение " + appData[key]);
//  }