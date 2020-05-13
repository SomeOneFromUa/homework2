/*

// - создать массив с 20 числами.
let array = [2,1,6,8,38,4,3,57,2,7,555,2,100,6,10,1,87,2,7,9];


// -- при помощи метода sort отсортировать массив.
array.sort(function (a,b) {
return a-b;
});
console.log(array);



// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
array.sort(function (a,b) {
return b - a;
});

console.log(array);
console.log('----------');





// -- при помощи filter получить числа кратные 3
let filtredArr3  = array.filter(value => {
    if(value % 3 === 0)
    return value;
});
console.log(array);
console.log(filtredArr3);
console.log('-----');




// -- при помощи filter получить числа кратные 10
let filteredArr10 = array.filter(value => {
    if(value % 10===0) return value;
})
console.log(array);
console.log(filteredArr10);
console.log('---------');



// -- перебрать (проитерировать) массив при помощи foreach()
array.forEach((value,index) => console.log(`${index} - ${value}`));
console.log('---------');



// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
let arrX3 = array.map(value => value*=3);
console.log(array);
console.log(arrX3);

*/

///////////////////////////////////////////////////////////////////////////////////////





////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*

// - создать массив со словами на 15-20 элементов.
let arrStr = ['Oleg','Alexandr','Rue', 'Katherina','John','Karina','Ann','Olena','Jeck','Josh','Jordge','Tom','Inna','Bruice','Kane','Marta'];
// -- отсортировать его по алфавиту в восходящем порядке.
arrStr.sort();
console.log(arrStr);


// -- отсортировать его по алфавиту  в нисходящем порядке.
arrStr.sort(function (a,b) {
if (a > b){
    return -1
}else   
    return 1
});
console.log(arrStr);



// -- отфильтровать слова длиной менее 4х символов
let str4sumbols = arrStr.filter(value => {
    if (value.length < 4)
        return value
});
console.log(str4sumbols);




// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
let arrMapped = arrStr.map(value => value+= '!');
console.log(arrMapped);
*/

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////



// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
let users = [ 
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true}, 
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true}, 
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
    ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
/*
users.sort(function (a,b) {
return a.age - b.age;
});
let arrCopyYounger = [...users];
console.log(users);
arrCopyYounger.sort(function (a,b) {
    return b.age - a.age;

});
console.log(arrCopyYounger);

*/





// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
/*
users.sort(function (a,b) {
return a.name.length - b.name.length;
});
console.log(users);
let arrFalling  = [...users];
arrFalling.sort(function (a,b) {
return b.name.length - a.name.length;
});
console.log(arrFalling);
*/





// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)

/*

function deepcopy(array, target){
    for (const arrayElement of array) {
        if (typeof arrayElement === "object"){
            target.push({...arrayElement})
        }
    }
    return target
}

let usersCopy = [];
deepcopy(users,usersCopy);

usersCopy.map(value => value.id = Math.floor(Math.random()*(1000-100)+100));
console.log(users);
console.log(usersCopy);
// - відсортувати його за індентифікатором
usersCopy.sort(function (a,b) {
return a.id - b.id;
});

*/









// -- наисать функцию калькулятора с 2мя числами и колбеком

/*
function calc (a,b, callback){
   return  callback(a,b);
}
let result = calc(5,6,function (a,b) {
    return a+b;

});
console.log(result);
*/



// -- наисать функцию калькулятора с 3мя числами и колбеком
/*
function calc2 (a,b,c, callback){
    console.log(callback(a, b, c));
}
function action(a,b,c){
    return a+b+c;
}
calc2(3, 6,7, action);
*/



// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================
//
//
//
let cars = [
    {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
    {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
    {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
    {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
    {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
    {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
    {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
    {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
    {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
    {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
    {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
    {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
    {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
    ];
// Відфільтрувати масив за наступними крітеріями :
//     - двигун більше 3х літрів



///////////////////
/*
//////////////////

let carsVolMoreThen3 = cars.filter(function (value) {
    if (value.volume > 3){
        return value
    }
});
console.log(carsVolMoreThen3);





// - двигун = 2л
let carsVOl2 = cars.filter(function (value) {
if (value.volume === 2) return value;
});
console.log(carsVOl2);





// - виробник мерс
let mercedeses = cars.filter(function (value) {
if (value.producer === 'mercedes') return value;
});
console.log(mercedeses);




// - двигун більше 3х літрів + виробник мерседес
let mercVol3 = cars.filter(function (value) {
if (value.volume > 3 && value.producer === 'mercedes') return value;
});
console.log(mercVol3);





// - двигун більше 3х літрів + виробник субару
let subaruVol3 = cars.filter(value => value.volume > 3 && value.producer === 'subaru');
console.log(subaruVol3);





// - сили більше ніж 300
let power300 = cars.filter(value => {
    if (value.power > 300) return value;
});
console.log(power300);





// - сили більше ніж 300 + виробник субару
let power300subaru = cars.filter(value => {
    if (value.power > 300 && value.producer === 'subaru') return value;
});
console.log(power300subaru);




// - мотор серіі ej
let engEJ = cars.filter(value => value.engine.includes('ej'));
console.log(engEJ);



// - сили більше ніж 300 + виробник субару + мотор серіі ej
let filtercompozit = cars.filter(value => value.engine.includes('ej') && value.producer === 'subaru' && value.power > 300);
console.log(filtercompozit);


// - двигун меньше 3х літрів + виробник мерседес
let filter = cars.filter(value => value.producer === 'mercedes' && value.volume < 3);
console.log(filter);


// - двигун більше 2л + сили більше 250
let filter2 = cars.filter(value => value.volume > 2 && value.power > 250);
console.log(filter2);


// - сили більше 250  + виробник бмв
let filter3 = cars.filter(value => value.power > 250 && value.producer === 'bmw');
console.log(filter3);

///////////////
*/
///////////////







// - взять слдующий массив

let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}
    ];

// -- отсортировать его по id пользователей
/*
usersWithAddress.sort(function (a,b) {
return a.id - b.id;
});
console.log(usersWithAddress);
*/



// -- отсортировать его по id пользователей в обратном опрядке
/*
usersWithAddress.sort(function (a,b) {
return b.id - a.id;
});
console.log(usersWithAddress);
*/




// -- отсортировать его по возрасту пользователей
/*
usersWithAddress.sort(function (a,b) {
return a.age - b.age;
});
console.log(usersWithAddress);
*/




// -- отсортировать его по возрасту пользователей в обратном порядке
/*
usersWithAddress.sort(function (a,b) {
    return b.age - a.age;
});
console.log(usersWithAddress);
*/




// -- отсортировать его по имени пользователей
/*
usersWithAddress.sort(function (a,b) {
if (a.name > b.name){
    return -1
}else  
    return 1
});

console.log(usersWithAddress);
*/





// -- отсортировать его по имени пользователей в обратном порядке
/*
usersWithAddress.sort(function (a,b) {
    if (a.name < b.name){
        return -1
    }else
        return 1
});
console.log(usersWithAddress);
*/





// -- отсортировать его по названию улицы  в алфавитном порядке

/*
usersWithAddress.sort(function (a,b) {
if (a.address.street > b.address.street){
    return -1   
}else 
    return 1
});
console.log(usersWithAddress);

*/




// -- отсортировать его по номеру дома по возрастанию
/*
usersWithAddress.sort(function (a,b) {
return a.address.number - b.address.number;
});
console.log(usersWithAddress);

*/



/////////////////////////////////////////////////////////////////////////

/*
// -- отфильтровать (оставить) тех кто младше 30
let youngerThen30 = usersWithAddress.filter(value => value.age < 30);
console.log(youngerThen30);


// -- отфильтровать (оставить) тех у кого отрицательный статус
let statusFalse = usersWithAddress.filter(value => value.status === false);
console.log(statusFalse);


// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
let falseYoung = usersWithAddress.filter(value => value.status === false && value.age < 30);
console.log(falseYoung);


// -- отфильтровать (оставить) тех у кого номер дома четный
let filterNumbers = usersWithAddress.filter(value => value.address.number % 2 === 0);
console.log(filterNumbers);
*/



//
// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================




// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.
//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).

// Для початку вкладіть всі наші створені автомобілі в масив cars (carArr)




//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
/*
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

//////конструктор машин
function Cars(label, power, cost, year, id, owner) {
this.label = label;
this.power = power;
this.cost = cost;
this.year = year;
this.id = id;
this.owner = owner || 'free';
}
Cars.prototype.toArr = function (target) {
        target.push(this);
};

////////////////
let carArr = [];
///////////////
let car1 = new Cars('audi', 300, 6000,2000,1);
car1.toArr(carArr);
let car2 = new Cars('bmv', 250, 5500,2010,2);
car2.toArr(carArr);
let car3 = new Cars('opel', 400, 6800,2000,3);
car3.toArr(carArr);
let car4 = new Cars('renault', 350, 6000,2000,4);
car4.toArr(carArr);
let car5 = new Cars('peugeot', 500, 8000,2000,5);
car5.toArr(carArr);
let car6 = new Cars('mercedes', 200, 5000,2000,6);
car6.toArr(carArr);
let car7 = new Cars('smart', 350, 5900,2000,7);
car7.toArr(carArr);
let car8 = new Cars('chevrolet', 150, 4000,2000,8);
car8.toArr(carArr);
let car9 = new Cars('mazda', 450, 7000,2000,9);
car9.toArr(carArr);
let car10 = new Cars('honda', 300, 4000,2000,10);
car10.toArr(carArr);
console.log(carArr);

//////////конструктор водіїв
function Drivers(name, age, expirience, carID) {
    this.name = name;
    this.age = age;
    this.experience = expirience;
    this.carID = carID || 'null';
}

////////закріплює водія за авто а також видає авто новачку автоматично
Drivers.prototype.toCarInArr = function (array) {
    for (const arrayElement of array) {
        if (arrayElement.id === this.carID){
            arrayElement.owner = this;
        }else if (this.carID === 'null' && arrayElement.owner === 'free'){
            arrayElement.owner = this;
            this.carID = arrayElement.id;
        }
    }
};



let driver1 = new Drivers('Rue', 26,4, 1);
driver1.toCarInArr(carArr);
let driver2 = new Drivers('John', 18,1, 9);
driver2.toCarInArr(carArr);
let driver3 = new Drivers('Kelly', 30,12, 5);
driver3.toCarInArr(carArr);
let driver4 = new Drivers('Jeck', 26,5, 3);
driver4.toCarInArr(carArr);
let driver5 = new Drivers('Jonathan', 24,6, 6);
driver5.toCarInArr(carArr);
let driver6 = new Drivers('Jill', 29,4, 2);
driver6.toCarInArr(carArr);
let driver7 = new Drivers('Rasel', 25,5, 4);
driver7.toCarInArr(carArr);
let driver8 = new Drivers('Katherine', 20,1, 7);
driver8.toCarInArr(carArr);
let driver9 = new Drivers('Bill', 30,2, 10);
driver9.toCarInArr(carArr);
let driver10 = new Drivers('Pit', 26,1, 8);
driver10.toCarInArr(carArr);





//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
function costAll(array) {
let sum = 0;
    for (const arrayElement of array) {
        sum+= arrayElement.cost;
    }
console.log(sum);
    return sum;
}
costAll(carArr);

// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%


function Upgrade(array, powerUP, costUP, forEvery) {
costUP=costUP/100;
powerUP=powerUP/100;
let count = 0;
    for (let i = forEvery-1; i < array.length; i+=forEvery) {
        array[i].power = array[i].power+(array[i].power*powerUP);
        array[i].cost = array[i].cost+(array[i].cost*costUP);
        array[i].owner = 'free';
        count++;
    }
console.log(`відремонтовано ${count} авто`);
}
Upgrade(carArr,10,5,2);

costAll(carArr);


// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
////new drivers

let driver11 = new Drivers('new driver Oleg',50,20,'null');
driver11.toCarInArr(carArr);
let driver12 = new Drivers('new driver Orest',20,2,'null');
driver12.toCarInArr(carArr);
let driver13 = new Drivers('new driver Kira',23,4,'null');
driver13.toCarInArr(carArr);
let driver14 = new Drivers('new driver Sam',26,1,'null');
driver14.toCarInArr(carArr);
let driver15 = new Drivers('new driver Amelia',30,5,'null');
driver15.toCarInArr(carArr);
let driver16 = new Drivers('new driver Rue',52,10,'null');
driver16.toCarInArr(carArr);
////новачкам автоматично присвоюється машина і автоматично заповнюється
// поле carID відповідно до машини


// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.

function expRevision(array) {
    for (const arrayElement of array) {
        if (arrayElement.owner === 'free') continue;
        if (arrayElement.owner.experience < 5 && arrayElement.owner.age > 25) {
            arrayElement.owner.experience++;
            console.log(`курси пройшов:`);
        console.log(arrayElement.owner);
        }

    }

}
expRevision(carArr);

//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
*/
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////






// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и
// наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10.
//     Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента.
//     Если такого элемента нет в массиве, выведите -1.
//
// Пример:
//     Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.
//







/*
let array = [];
function RandomArr(array, length, min, max) {
    for (let i = 0; i < length ; i++) {
       array[i] = Math.floor(Math.random()*(max-min)+min);
    }
    array.sort();
}
RandomArr(array, 10,1,10);
console.log(array);




function result(arr, elementKey) {
    let arrOfIndex = [];
arr.filter((value, index) => {
    if (value === elementKey) {arrOfIndex.push(index)}
});
if (arrOfIndex.length === 0) return console.log(-1);
console.log(arrOfIndex);
console.log(`Key = ${elementKey} --- MaxIndex = ${Math.max(...arrOfIndex)}, MinIndex = ${Math.min(...arrOfIndex)}`)
}
result(array,4);

*/

