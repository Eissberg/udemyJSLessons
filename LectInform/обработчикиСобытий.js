'use strict';

let btn = document.querySelectorAll('button'),
    wrap = document.querySelector('.wrapper'),
    link = document.querySelector('a');

// btn[0].onclick = function() {           //назначение одной функции для одного элемента
//     alert('Вы нажали первую кнопку!');
// }

// btn[0].onclick = function() {           //назначение одной функции для одного элемента
//     alert('Вы опять нажали первую кнопку!');
// }


 
//   btn[0].addEventListener('click', function() {
//       alert('Вы нажали первую кнопку!');
//   });

//   btn[0].addEventListener('click', function() {
//     alert('Вы опять нажали первую кнопку!');
//   });

//   btn[0].addEventListener('mouseenter', function() {
//     alert('Вы навели на первую кнопку!');
//   });



// btn[0].addEventListener('click', function(event) {
//     console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
// });

// btn[0].addEventListener('click', function(event) {       //удаление эдемента после события
//     console.log(event);
//     let target = event.target;
//     target.style.display = 'none';
// });



// btn[0].addEventListener('click', function(event) {
//     console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
// });

// wrap.addEventListener('click', function() {
//     console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
// });

link.addEventListener('click', function(event) {
    event.preventDefault();                                                                //Отмена стандартного обработчика
    console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
});

// один обработчик для нескольких элементов

btn.forEach(function(item){
    item.addEventListener('mouseleave', function(){
        console.log('Вышли');
    });
});