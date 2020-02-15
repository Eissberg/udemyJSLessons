let items = prompt("Каково Ваше отношение к технике Apple?","");
let 
    menu = document.querySelector('.menu'),
    menuElements = document.querySelectorAll('.menu-item'),
    menuIthem = document.createElement("li"),
    text = document.getElementById('title'),
    elements = document.querySelectorAll('.column'),
    elementForKill  = document.querySelector('.adv'),
    forMessage = document.getElementById('prompt');

 document.body.style.backgroundImage = "url('img/apple_true.jpg')";
 
 menu.insertBefore(menuElements[2], menuElements[1]);
 menu.appendChild(menuIthem);  
 menuIthem.classList.add('menu-item');
 menuIthem.textContent = 'Пятый пункт'; 

 text.textContent= "Мы продаем только подлинную технику Apple"; 

 elements[1].removeChild(elementForKill);
 
 forMessage.innerHTML = items;

