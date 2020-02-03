let ojb = new Object() // не пользуются

let options = {
    width: 1024,
    heigth: 1024,
    name: "test"
};

console.log(options.name);
options.bool = false; // создание свойств в теле программы
options.colors = {
    border: "black",
    bg: "red"
};

delete options.bool; //удаление свойства в теле программы

console.log(options);

for (let key in options) {    // работа со свойствами обьекта
    console.log('Сойства '+ key + ' имеет значение ' + options[key]);
}

console.log(Object.keys(options).length); //узнать количество свойств объекта

//функции внутри объекта являються методами