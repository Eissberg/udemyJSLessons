// setTimeout(func, delay);        //func - функция для запуска, delay - задержка

// setTimeout(sayHello, 3000);

// let timerId = setTimeout(sayHello, 3000);
// clearTimeout(timerId);             // остановка таймера

// let timerId = setInterval(sayHello, 3000);
// // clearTimeout(timerId);             // остановка таймера

// function sayHello(){
//     alert('Hello World!');
// } 

// чем рекурсивный SetTimeout лучше  - setInterval не будет ждать полного выполенния предыдущего цикла функции, а будет запускать её мтрого по истечении времени

// рекурсивный serTimerout

// let timerId = setTimeout(function log(){
//     console.log("Hello");
//     setTimeout(log, 2000);
// });

let btn = document.querySelector('.btn'),
    elem = document.querySelector('.box');

function myAnimation() {
    let pos = 0;

    let id = setInterval(frame, 10);
    function frame() {
       if (pos == 300) {
            clearInterval(id);
       } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
       };
    };
};

btn.addEventListener("click", myAnimation);

// Деллигирования для кнопок через родителя

let btnBlock = document.querySelector('.btn-block'),
    btns = document.getElementsByTagName('button');

// btnBlock.addEventListener('click', function(event) {
//     if (event.target && event.target.tagName == 'BUTTON') {          // Для всех элементов
//         console.log('Hello!');
//     }

// btnBlock.addEventListener('click', function(event) {
//     if (event.target && event.target.classList.contains('first')) {  //Для первой кнопки
//         console.log('Hello!');
//     }    

btnBlock.addEventListener('click', function(event) {
    if (event.target && event.target.matches('button.first')) {     // сотрудники Googleб поиск опредеелнной кнопки с определенным классом
        console.log('Hello!');
    }    
});