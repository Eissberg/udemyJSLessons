// touchstart   //аналог клика
// touchmove    //касание к экрану с перемещением пальца
// touchend     //палец удаление от экрана
// touchenter   //когда палец заходит на элемент
// touchleave   //антагонист touchenter
// touchcancel  //когда точка соприкоснованеия больше не регистрируется на поверхности(сернутое приложение)

window.addEventListener('DOMContentLoaded', function(){
    let box = document.querySelector('.box');

    box.addEventListener('touchstart', function(e){
        e.preventDefault();
        console.log("Red box: touchstart");
        console.log(e.target);          //получим тот элемент, в который тыкнули
        console.log(e.touches[0].target);          //указываем target для первого пальца

        // console.log(e.touches);         //получаем все пальцы, которые каснулись сенсорной панели в независимости от обьекта на котором было касание
        console.log(e.changedTouches);  //аналогичное свойство
        console.log(e.targetTouches);   //получаем только пальци, которые коснулись сенсорной панели в пределах определенного обьекта
    });

    box.addEventListener('touchmove', function(e){
        e.preventDefault();
        console.log("Red box: "+ e.touches[0].pageX );
    });

    // box.addEventListener('touchend', function(e){
    //     e.preventDefault();
    //     console.log("Red box: touchend");
    // });

    // регулярные выражения состоят из двух частей - это Flac-и и Pattern-ы
    // первый вариант - конструктор

    new RegExp('pattern', 'flags');

    // второй вариант 

    /pattern/flags              //шаблон того, что мы хотим найти, флаги - вспомагательные символы


    let ans = prompt('Введите Ваше имя');

    let reg = /n/i;

    console.log(ans.search(reg));
    
    // флаги

    let reg = /n/gi; //найдет все совпадения. флаги можно комбинировать

    console.log(ans.match(reg));
    console.log(reg.test(ans));     //проверка на вхождение возвращая true или false
    // i - флаг регистра, говорит, что мы хотим найти все независимо от регистра
    // g - флаг глобальности, говорит, что мы ищем все независимо от колличества вхождений
    // m - флаг многострочности

    //класы символов

    // \d - найти цифры     \D - не чило
    // \w - буквы           \W - не букву
    // \s - пробелы         \S - не пробел

    // есть у регулярных выражений методы, которые работают со строками

    let pass = prompt('Введите пароль');

    console.log(pass.replace(/./g, "*"));    //СПЕЦСИМВОЛ ТОЧКА - ОЗНАЧАЕТ, ЧТО БУДЕМ ИСКАТЬ ЛЮБЫЕ СИМВОЛЫ КОТОРЫЕ ПОПАДУТ В НАШУ СТРОКУ
    alert('12-34-56'.replace(/-/g, ':'));


    let ans = prompt('Введите число');

    let reg = /\d/g;

    console.log(ans.search(reg));

    // ****************** пример

    let str = "My name is R2D2";
    console.log(str.match(/\w\d\w\d/)); //Поиск последовательности буква - число - буква - число

    console.log()str.match(/\//); // экран - /
});

