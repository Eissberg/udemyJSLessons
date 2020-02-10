let items = prompt("Каково Ваше отношение к технике Apple?","");
let menuElement = document.querySelector('.menu'),
    menuPoint = document.getElementsByClassName('menu-item'),
    text = document.getElementsByClassName('title'),
    elements = document.getElementsByClassName('column'),
    kill  = document.querySelector('.adv');
    forMessage = document.getElementById('prompt');

 menuElement.insertBefore(menuPoint[2], menuPoint[1]);  
 document.body.style.backgroundImage = 'url(../img/apple_true.jpg)';

 text[0].textContent= "Мы продаем только подлинную технику Apple"; 

 elements[1].removeChild(kill);

 
 forMessage.innerHTML = items;
 
