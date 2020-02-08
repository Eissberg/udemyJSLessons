let box = document.getElementById("box"),
    btn = document.getElementsByTagName("button"),
    circle = document.getElementsByClassName("circle"),
    heart = document.querySelectorAll('.heart'),
    //heart = document.querySelectorAll('.wrapper .heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'blue';
btn[1].style.borderRadius = '100%';
circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

// for (let i = 0; i < heart.length; i++) {
//     heart[i].style.backgroundColor = 'blue';
// }

// heart.forEach(function(item, i, hearts){
//     item.style.backgroundColor = 'green';
// });

let div = document.createElement('div');
    text = document.createTextNode('I am');

div.classList.add('black');

// document.body.appendChild(div);              //вставляет обьект в конец тега
// wrapper.appendChild(div);                    //вставляет обьект в конец wrapper


// div.innerHTML = '<h1>Hello World!</h1>';     //добавление текста или html кода в элементы

div.textContent = 'Hello World!';               //добавление текста или html кода в элементы

document.body.insertBefore(div, circle[0]);     //добавление перед елементом
document.body.removeChild(circle[1]);           // удаление элемента со страницы
wrapper.removeChild(heart[1]);

document.body.replaceChild(btn[1], circle[1]);  // замена элемента доугим элементом

// console.log(div);
console.log(div);

 