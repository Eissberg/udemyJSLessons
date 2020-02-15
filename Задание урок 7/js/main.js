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



    console.log(optionalExpensesItems);