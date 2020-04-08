//
// ==============================================
//     -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Перattеход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }





/*
function HtmlTag(titleOfTag, action, attr1, actionAttr1, attr2, actionAttr2) {
    this.titleOfTag = titleOfTag;
    this.action = action;
    this.attrs = [{titleOfAttr: attr1, actionOfAttr: actionAttr1}, {titleOfAttr: attr2, actionOfAttr: actionAttr2}];
}

let tagA = new HtmlTag('a', 'предназначен для создания ссылок', 'href', 'Задает адрес документа, на который следует перейти. ', 'name', 'Атрибут name используется для определения якоря внутри страницы.');
console.log(tagA);
let tagDiv  = new HtmlTag('div','является блочным элементом и предназначен для выделения фрагмента документа','является блочным элементом и предназначен для выделения фрагмента документа','Задает выравнивание содержимого тега', 'title','Добавляет всплывающую подсказку к содержимому.' );
console.log(tagDiv);
let tagH1   = new   HtmlTag('h1','HTML предлагает шесть заголовков разного уровня', 'align', 'Определяет выравнивание заголовка.', 'align', 'Определяет выравнивание заголовка');
console.log(tagH1);
let tagSpan = new HtmlTag('span', ' предназначен для определения строчных элементов документа.', 'accesskey', 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.', 'class', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.');
console.log(tagSpan);
let tagInput = new HtmlTag('input', 'позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.', 'autofocus', 'Устанавливает фокус в поле формы.', 'form', 'Связывает поле с формой по её идентификатору.');
console.log(tagInput);
let tagForm = new HtmlTag('form',' устанавливает форму на веб-странице.','autocomplete','Включает автозаполнение полей формы.', 'accept-charset', 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.');
console.log(tagForm);
let tagOption = new HtmlTag('option', 'определяет отдельные пункты списка, создаваемого с помощью контейнера select', 'disabled','Заблокировать для доступа элемент списка.', 'label', 'Указание метки пункта списка.');
console.log(tagOption);
let tagSelect  = new HtmlTag('select', ' позволяет создать элемент интерфейса в виде раскрывающегося списка', 'multiple', 'Позволяет одновременно выбирать сразу несколько элементов списка', 'size','Количество отображаемых строк списка');
console.log(tagSelect);
*/

// ==============================================



















// ==============================================
//     -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }




/*
class HtmlTag {
    constructor(titleOfTag, action, attr1, actionAttr1, attr2, actionAttr2) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = [{titleOfAttr: attr1, actionOfAttr: actionAttr1}, {titleOfAttr: attr2, actionOfAttr: actionAttr2}];
    }
}

let tagA = new HtmlTag('a', 'предназначен для создания ссылок', 'href', 'Задает адрес документа, на который следует перейти. ', 'name', 'Атрибут name используется для определения якоря внутри страницы.');
console.log(tagA);
let tagDiv  = new HtmlTag('div','является блочным элементом и предназначен для выделения фрагмента документа','является блочным элементом и предназначен для выделения фрагмента документа','Задает выравнивание содержимого тега', 'title','Добавляет всплывающую подсказку к содержимому.' );
console.log(tagDiv);
let tagH1   = new   HtmlTag('h1','HTML предлагает шесть заголовков разного уровня', 'align', 'Определяет выравнивание заголовка.', 'align', 'Определяет выравнивание заголовка');
console.log(tagH1);
let tagSpan = new HtmlTag('span', ' предназначен для определения строчных элементов документа.', 'accesskey', 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.', 'class', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.');
console.log(tagSpan);
let tagInput = new HtmlTag('input', 'позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.', 'autofocus', 'Устанавливает фокус в поле формы.', 'form', 'Связывает поле с формой по её идентификатору.');
console.log(tagInput);
let tagForm = new HtmlTag('form',' устанавливает форму на веб-странице.','autocomplete','Включает автозаполнение полей формы.', 'accept-charset', 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.');
console.log(tagForm);
let tagOption = new HtmlTag('option', 'определяет отдельные пункты списка, создаваемого с помощью контейнера select', 'disabled','Заблокировать для доступа элемент списка.', 'label', 'Указание метки пункта списка.');
console.log(tagOption);
let tagSelect  = new HtmlTag('select', ' позволяет создать элемент интерфейса в виде раскрывающегося списка', 'multiple', 'Позволяет одновременно выбирать сразу несколько элементов списка', 'size','Количество отображаемых строк списка');
console.log(tagSelect);
*/
// ==============================================





// ==============================================
//     - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car




/*
let car = {
    model: 'Gt',
    year: 2000,
    maxSpeed: 280,
    engine: 4,
    drive: function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
    },
    info: function () {
        for (const key in this) {
            if (typeof this[key] === 'object' || typeof this[key]==='function') {

            }else console.log(`${key} - ${this[key]}`);
        }
        for (const key in this.driver) {
            console.log(`${key} - ${this.driver[key]}`);
        }
    },
    increaseMaxSpeed: function (newSpeed) {
        this.maxSpeed+=newSpeed;
    },
    changeYear: function (newValue) {
        this.year = newValue;
    },
    addDriver: function (driver) {
        this.driver = driver;
    }

    };
car.drive();
car.changeYear(2010);
car.increaseMaxSpeed(50);
car.addDriver({name: "Alan", age: 44});
car.info();
*/

// ==============================================








// ==============================================
//     - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car







/*
function Cars(model, firm, year, maxSpeed, engine, ) {
this.model = model;
this.firm = firm;
this.year = year;
this.maxSpeed = maxSpeed;
this.engine = engine;
this.drive = function () {
    console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
};
this.info = function () {
    for (const key in this) {
        if (typeof this[key] !== 'function' && typeof this[key] !== 'object')
            console.log(`${key} - ${this[key]}`)

    }
    for (const key in this.driver) {
        console.log(`driver: \n ${key} - ${this.driver[key]}`);
    }
};
this.increaseMaxSpeed = function (newSpeed) {
    this.maxSpeed+=newSpeed;
};
this.changeYear = function (year) {
    this.year = year;
};
this.addDriver = function (driver) {
this.driver = driver;
}

}

let car = new Cars('A8','audi','2015', 300, 4);
console.log(car);
car.drive();
car.changeYear(2020);
car.increaseMaxSpeed(20);
car.addDriver({name: 'Oleg', age: 33});
car.info();
*/
////////////////////////////////////////////////////////////////////
//////////////////інфо з рекурсією//////////////////////////////////
////////////////////////////////////////////////////////////////////
/*
function Cars(model, firm, year, maxSpeed, engine, ) {
    this.model = model;
    this.firm = firm;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
    };
    this.info = function (object = this) {
        for (const key in object) {
            if (typeof object[key] !== 'function' && typeof object[key] !== 'object') {
                console.log(`${key} - ${object[key]}`)
            }else if (typeof object[key] === 'object'){
                this.info(object[key])
            }

        }

    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed+=newSpeed;
    };
    this.changeYear = function (year) {
        this.year = year;
    };
    this.addDriver = function (driver) {
        this.driver = driver;
    }

}

let car = new Cars('A8','audi','2015', 300, 4);
console.log(car);
car.drive();
car.changeYear(2020);
car.increaseMaxSpeed(20);
car.addDriver({name: 'Oleg', age: 33});
car.info();
*/

// ==============================================







// ==============================================
//     - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car








/*
class Cars {
    constructor(model, firm, year, maxSpeed, engine) {
        this.model = model;
        this.firm = firm;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
    };

    info() {
        for (const key in this) {
            if (typeof this[key] !== 'object')
            console.log(`${key} - ${this[key]}`)

        }
        for (const key in this.driver) {
            console.log(`driver: \n ${key} - ${this.driver[key]}`);
        }
    };

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    };

    changeYear(year) {
        this.year = year;
    };

    addDriver (driver) {
        this.driver = driver;
    }


}

let car = new Cars('A9','audi','2018', 320, 4);
console.log(car);
car.drive();
car.changeYear(2020);
car.increaseMaxSpeed(30);
car.addDriver({name: 'Alex', age: 55});
car.info();
*/


//////////////////////////////////////////////////////
///////інфо з рекурсією///////////////////////////////
//////////////////////////////////////////////////////
/*
class Cars {
    constructor(model, firm, year, maxSpeed, engine) {
        this.model = model;
        this.firm = firm;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
    };

    info(object = this) {
        for (const key in object) {
            if (typeof object[key] !== 'object'){
                console.log(`${key} - ${object[key]}`)
        } else this.info(object[key]);
    }
        };

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    };

    changeYear(year) {
        this.year = year;
    };

    addDriver (driver) {
        this.driver = driver;
    }


}

let car = new Cars('A9','audi','2018', 320, 4);
console.log(car);
car.drive();
car.changeYear(2020);
car.increaseMaxSpeed(30);
car.addDriver({name: 'Alex', age: 55});
car.info();
*/

// ==============================================

















































// ==============================================
//     -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом





/*
class Cinderellas {
    constructor(name, age, footsize) {
        this.name = name;
        this.age = age;
        this.footsize = footsize;
    }
    add(arr){
       arr.push(this);
}

}

class Prince {
    constructor(name, age, shoesize) {
        this.name = name;
        this.age =age;
        this.shoesize = shoesize;
    }
    findCinderella() {
        for (const arrayElement of array) {
            if (arrayElement.footsize === this.shoesize)
                this.addCinderella(arrayElement);
        }
    }
    addCinderella(object){
            this.Cinderella = object;
        }

}

let array = [];
let Alina = new Cinderellas('alina', 20, 35);
Alina.add(array);
let Emilly = new Cinderellas('Emilly', 21, 34);
Emilly.add(array);
let Hazel = new Cinderellas('Hazel', 22, 38);
Hazel.add(array);
let Bridget = new Cinderellas('Bridget', 20, 36);
Bridget.add(array);
let Karina = new Cinderellas('Karina', 28, 39);
Karina.add(array);
let Anna = new Cinderellas('Anna', 18, 35);
Anna.add(array);
let Eliza = new Cinderellas('Eliza', 20, 34);
Eliza.add(array);
let Fiona = new Cinderellas('Fiona', 21, 40);
Fiona.add(array);
let Ivi = new Cinderellas('Ivi', 25, 36);
Ivi.add(array);
let Amirah = new Cinderellas('Amirah', 20, 34);
Amirah.add(array);

console.log(array);

let John = new Prince('John',30, 38);
John.findCinderella();
console.log(John);
*/

// ==============================================






// ==============================================
//     -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить




/*
function Cinderellas(name, age, footsize){
    this.name = name;
    this.age = age;
    this.footsize = footsize;
    this.add = function (arr) {
        arr.push(this);
    }
}
function Prince (name, age, shoesize){
    this.name  = name;
    this.age = age;
    this.shoeSize = shoesize;
    this.findCinderella = function () {
        for (const arrayElement of array) {
            if (arrayElement.footsize === this.shoeSize){
                this.addCinderella(arrayElement);
            }
        }

    };
    this.addCinderella = function (obj) {
        this.Cinderella = obj;
    }
}


let array = [];
let Alina = new Cinderellas('alina', 20, 35);
Alina.add(array);
let Emilly = new Cinderellas('Emilly', 21, 34);
Emilly.add(array);
let Hazel = new Cinderellas('Hazel', 22, 38);
Hazel.add(array);
let Bridget = new Cinderellas('Bridget', 20, 36);
Bridget.add(array);
let Karina = new Cinderellas('Karina', 28, 39);
Karina.add(array);
let Anna = new Cinderellas('Anna', 18, 35);
Anna.add(array);
let Eliza = new Cinderellas('Eliza', 20, 34);
Eliza.add(array);
let Fiona = new Cinderellas('Fiona', 21, 40);
Fiona.add(array);
let Ivi = new Cinderellas('Ivi', 25, 36);
Ivi.add(array);
let Amirah = new Cinderellas('Amirah', 20, 34);
Amirah.add(array);

console.log(array); 

let John = new Prince('John',30, 40);
John.findCinderella();
console.log(John);

*/


// ==============================================
//