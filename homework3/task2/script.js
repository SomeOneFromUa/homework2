//1 - создать 5 объектов. В каждом объекте не менее 3х полей.
// Все объекты разные по набору полей. (Т.е поле name
// должно присутствовать только 1 раз в одном объекте )
let obj1 = {
    name: 'Ruslan',
    age: 23,
    isMerried: false,
    height: '180sm'
};
let obj2 = {
    organization: 'owu',
    location: 'lviv',
    floors: 2,
    isOpen: true
};
let obj3 = {
    productType: 'Laptop',
    madeBy: 'Asus',
    diagonal: 15,
    status: true
};
let obj4 = {
    carType: 'universal',
    model: 'Megane',
    engine: 1.5,
    year: 2012,
    insure: false
};
let obj5 = {
    numOfcars: 100,
    sale: 40,
    onTest: 30,
    isStatus: false
};




// 2- создать 5 объектов с полностью разным набором полей.
// В каждом объекте должен присутсвовать массив и внутренний объект.
// Опишите что угодно, машину, картину, болт...
// Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
let man = {
    name: 'kokos',
    skills: ['java', 'js'],
    wife: {name: 'cherry', age: 18}
};
let woman = {
    hisname: 'Anna',
    isPretty: true,
    parameters: {height: 170, weight: 60},
    cat: ['Boris', 'Vasya', 'Sharik']
};
let race = {
    cars: ['audi', 'BMW', 'Mercedes'],
    location: {place: 'downtown', laps: 5},
    trophy: 5000,
};
let game = {
    locations: 20,
    finalLoc: {locName: 'Kiln of the First Flame', boss: 'Gvin'},
    Deadcount: 999,
    souls: [70, 140]
};
let something = {
    someNum: [45, 54, 75, 74, 33, 55],
    someStr: 'string',
    someObj: {field: 'stuff', int: 44},
    IsAnything: true
};




//3 - При помощи for in вывести все ключи всех объектов из задания 1 и 2

/*
for (const key in obj1) {
    console.log(key);
};
console.log('------------------');
for (const obj2Key in obj2) {
    console.log(obj2Key);
}
console.log('------------------');
for (const obj3Key in obj3) {
    console.log(obj3Key);
}
console.log('------------------');
for (const obj4Key in obj4) {
    console.log(obj4Key);
}
console.log('------------------');
for (const obj5Key in obj5) {
    console.log(obj5Key);
}

*/






/*

console.log('------------------');
for (const manKey in man) {
    console.log(manKey);
};
console.log('------');
for (const manWifeKey in man.wife) {
    console.log(manWifeKey);
};
console.log('------------------');
for (const womanKey in woman) {
    console.log(womanKey);
};
console.log('------');
for (const womanParamater in woman.parameters) {
    console.log(womanParamater);
};
console.log('------------------');
for (const raceKey in race) {
    console.log(raceKey);
};
console.log('------');
for (const locationKey in race.location) {
    console.log(locationKey);
};
console.log('------------------');
for (const gameKey in game) {
    console.log(gameKey);
};
console.log('------');
for (const finalLocKey in game.finalLoc) {
    console.log(finalLocKey);
};
console.log('------------------');
for (const somethingKey in something) {
    console.log(somethingKey);
};
console.log('------');
for (const someObjkey in something.someObj) {
    console.log(someObjkey);
};

*/


//4 - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2

/*
console.log(Object.keys(obj1));
console.log(Object.keys(obj2));
console.log(Object.keys(obj3));
console.log(Object.keys(obj4));
console.log(Object.keys(obj5));
console.log(Object.keys(man));
console.log(Object.keys(man.wife));
console.log(Object.keys(woman));
console.log(Object.keys(woman.parameters));
console.log(Object.keys(race));
console.log(Object.keys(race.location));
console.log(Object.keys(game));
console.log(Object.keys(game.finalLoc));
console.log(Object.keys(something));
console.log(Object.keys(something.someObj));
*/




//5 - Создать массив из 10 объектов cars и заполнить его машинами с полями модель,
// год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
let cars = [
    {model: 'Tesla', year: 2015, power: 250, collor: 'black'},
    {model: 'A8', year: 2000, power: 300, collor: 'wjite'},
    {model: 'Civik', year: 2019, power: 280, collor: 'grey'},
    {model: 'Charger', year: 2010, power: 250, collor: 'metalic'},
    {model: 'Padjero', year: 2009, power: 200, collor: 'black'},
    {model: 'Impresa', year: 2020, power: 310, collor: 'red'},
    {model: 'GT', year: 2006, power: 230, collor: 'green'},
    {model: 'Camaro', year: 2010, power: 300, collor: 'yellow'},
    {model: 'MSport', year: 2005, power: 200, collor: 'white'},
    {model: 'Cybertrack', year: 2020, power: 400, collor: 'grey'},
];





//6 - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион.
// (Значаения полей могу быть выдуманными)
let cities = [
    {nameOf: 'Kyiv', citizens: 2950800, country: 'Ukraine', region: 'Kyiv region'},
    {nameOf: 'Boston', citizens: 694583, country: 'USA', region: 'Massachusetts'},
    {nameOf: 'Singapore', citizens: 5638700, country: 'Republic of Singapore', region: 'Republic of Singapore'},
    {nameOf: 'Warsaw', citizens: 1783321, country: 'Poland', region: 'Masovia'},
    {nameOf: 'Saint Petersburg', citizens: 5351935, country: 'Russia', region: 'Northwestern'},
    {nameOf: 'Amsterdam', citizens: 872680, country: 'Netherlands', region: 'North Holland'},
    {nameOf: 'Los Angeles', citizens: 3792621, country: 'USA', region: 'California'},
    {nameOf: 'Mexico City', citizens: 8918653, country: 'Mexico', region: 'Mexico'},
];





//7 - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность,
// цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
let cars2 = [
    {model: 'Tesla', year: 2015, power: 250, collor: 'black', driver: {name: 'ALina', age: 30, experience: 5}},
    {model: 'A8', year: 2000, power: 300, collor: 'wjite', driver: {name: 'Oleg', age: 25, experience: 8}},
    {model: 'Civik', year: 2019, power: 280, collor: 'grey', driver: {name: 'Bogdan', age: 22, experience: 2}},
    {model: 'Charger', year: 2010, power: 250, collor: 'metalic', driver: {name: 'Rue', age: 28, experience: 5}},
    {model: 'Padjero', year: 2009, power: 200, collor: 'black', driver: {name: 'Anna', age: 45, experience: 20}},
    {model: 'Impresa', year: 2020, power: 310, collor: 'red', driver: {name: 'Vasya', age: 50, experience: 28}},
    {model: 'GT', year: 2006, power: 230, collor: 'green', driver: {name: 'Petrik', age: 18, experience: 1}},
    {model: 'Camaro', year: 2010, power: 300, collor: 'yellow', driver: {name: 'John', age: 16, experience: 0}},
    {model: 'MSport', year: 2005, power: 200, collor: 'white', driver: {name: 'Karina', age: 29, experience: 5}},
    {model: 'Cybertrack', year: 2020, power: 400, collor: 'grey', driver: {name: 'Jeck', age: 19, experience: 1}},
];





//8 - проитерировать каждый массив из задания 5,6,7 при помощи while.

/*
let i = 0;
while   (i< cars.length){
    console.log(cars[i]);
    i++
};
console.log('----------------------------------------------------------');
i = 0;
while (i < cities.length){
    console.log(cities[i]);
    i++
}
console.log('----------------------------------------------------------');

i = 0;
while (i < cars2.length){
    console.log(cars2[i]);
    i++
}

*/





//9 - проитерировать каждый массив из задания 5,6,7 при помощи for .

/*
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}
console.log('----------------------------------------------------------');

for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);

}
console.log('----------------------------------------------------------');
for (let i = 0; i < cars2.length; i++) {
    console.log(cars2[i]);

}
*/






//10 - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
/*
for (const car of cars) {
    console.log(car);
}
console.log('----------------------------------------------------------');
for (const city of cities) {
    console.log(city);
}
console.log('----------------------------------------------------------');
for (const cars2Element of cars2) {
    console.log(cars2Element);
}
*/





//11- взять объекты из задания 1 и превратить каждый в json.

/*
let obj1JSON = JSON.stringify(obj1);
let obj2JSON = JSON.stringify(obj2);
let obj3JSON = JSON.stringify(obj3);
let obj4JSON = JSON.stringify(obj4);
let obj5JSON = JSON.stringify(obj5);
console.log(obj1JSON);
console.log(obj2JSON);
console.log(obj3JSON);
console.log(obj4JSON);
console.log(obj5JSON);

*/



// 12- взять json из задания 11 и превратить их обратно в объекты.
/*
let objFromJson1 = JSON.parse(obj1JSON);
console.log(objFromJson1);
let objFromJson2 = JSON.parse(obj2JSON);
console.log(objFromJson2);
let objFromJson3 = JSON.parse(obj3JSON);
console.log(objFromJson3);
let objFromJson4 = JSON.parse(obj4JSON);
console.log(objFromJson4);
let objFromJson5 = JSON.parse(obj5JSON);
console.log(objFromJson5);

*/




// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
/*
for (const car of cars) {
    console.log(JSON.stringify(car));
}
*/




// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
/*
for (const city of cities) {
    console.log(JSON.stringify(city));
}
*/

// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу 
// скоприовать в новый массив.

/*
let newCars = [];
for (let i = 0; i < cars2.length; i++) {
    newCars[i] = JSON.parse(JSON.stringify(cars2[i]))
    
}
console.log(cars2);
console.log('=========================');
newCars[0].model = 'New Tesla';
console.log(newCars);
*/




// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills
// которое является массивом. Проитерировать массив пользователей и в каждом пользователе
// проитерировать его массив skills


/*
let users1 = [
    {name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
    {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
    {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
    {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
    {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}
];
for (const user of users1) {
    console.log(user);
    console.log(user.skills);
    console.log('-------');

}
*/


// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills
// которое является массивом. Проитерировать массив пользователей и в каждом пользователе
// проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
//


/*
let users2 = [
    {name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
    {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
    {name: 'kolya', age: 29, status: true, skills: ['mysql', 'mongo']},
    {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
    {name: 'max', age: 30, status: true, skills: ['mysql', 'mongo']}
];

let usersSkills = [];
for (let i = 0; i < users2.length; i++) {
    console.log(users2[i]);
    console.log(users2[i].skills);
    usersSkills[i]= users2[i].skills.slice(0,2);
}
console.log(usersSkills);
console.log('=======Перевірка===============');
users2[0].skills.push('test');
console.log(usersSkills[0]);
console.log(users2[0].skills);
//// якщо без slice -то свориться посилання і зміни в першому масиві перенесуться і в другий/////

*/







// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.

/*
let users3 = [
    {name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
    {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
    {name: 'kolya', age: 29, status: true, skills: ['mysql', 'mongo']},
    {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
    {name: 'max', age: 30, status: true, skills: ['mysql', 'mongo']}
];
for (const user of users3) {
    console.log(`name - ${user.name}`);
    for (const skill of user.skills) {
        console.log(skill);

    }
    console.log('------');
}
*/



//////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////


let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];




// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати)
// їх в інший порожній масив.

/*
let usersAdress = [];
let usersAdress2 = [];

for (let i = 0; i < users.length; i++) {
    usersAdress[i] = JSON.parse(JSON.stringify(users[i].address));
    usersAdress2.push(users[i].address);

}
console.log(usersAdress);
console.log('=======Перевірка===============');
users[0].address.city = 'akfljaklfjafkjaf;';
console.log(usersAdress[0]);
console.log(usersAdress2[0]);

*/





// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги
// document.createElement. Всі данні в одному блоці.

/*
for (const user of users) {
    let userCard = document.createElement('div');
    userCard.style.backgroundColor = 'grey';
    userCard.style.marginBottom = '5px';
    userCard.style.width = '300px';
    userCard.innerHTML = `name - ${user.name} <br>age - ${user.age} <br>status - ${user.status}<br>
    adress - ${user.address.country}, ${user.address.city}, ${user.address.street}  ${user.address.houseNumber}`;
    document.body.appendChild(userCard);
}
*/


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги
// document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

/*
for (const user of users) {
    let userCard = document.createElement('div');
    userCard.style.border = 'solid 1px grey';
    userCard.style.marginBottom = '5px';
    userCard.style.width = '300px';
    let name = document.createElement('div');
    name.innerHTML = `name - ${user.name}`;
    let age = document.createElement('div');
    age.innerHTML = `age - ${user.age}`;
    let status = document.createElement('div');
    status.innerHTML = `status - ${user.status}`;
    let address = document.createElement('div');
    address.innerHTML = `adress - ${user.address.country}, ${user.address.city}, ${user.address.street}  ${user.address.houseNumber}`;

    document.body.appendChild(userCard);
    userCard.appendChild(name);
    userCard.appendChild(age);
    userCard.appendChild(status);
    userCard.appendChild(address);

}
*/





// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги
// document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити
// окремим блоком, з блоками для кожної властивості
//


/*
for (const user of users) {
    let userCard = document.createElement('div');
    userCard.style.border = 'solid 1px grey';
    userCard.style.marginBottom = '5px';
    userCard.style.width = '200px';
    userCard.style.backgroundColor = 'aqua';
    let name = document.createElement('div');
    name.innerHTML = `name - ${user.name}`;
    let age = document.createElement('div');
    age.innerHTML = `age - ${user.age}`;
    let status = document.createElement('div');
    status.innerHTML = `status - ${user.status}`;


    let address = document.createElement('div');
    address.style.backgroundColor = 'pink';
    address.style.marginTop = '5px';
    let country = document.createElement("div");
    country.innerHTML = `country - ${user.address.country}`;
    let city = document.createElement("div");
    city.innerHTML = `city - ${user.address.city}`;
    let street = document.createElement("div");
    street.innerHTML = `street - ${user.address.street}`;
    let house = document.createElement("div");
    house.innerHTML = `house - ${user.address.houseNumber}`

    document.body.appendChild(userCard);
    userCard.appendChild(name);
    userCard.appendChild(age);
    userCard.appendChild(status);
    userCard.appendChild(address);
    address.appendChild(country);
    address.appendChild(city);
    address.appendChild(street);
    address.appendChild(house);


}
*/


///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:


/*
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false},
];
let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'},];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
let completeUsers = [];
let z = 0;
for (let i = 0; i < usersWithId.length; i++) {
    for (let j = 0; j < citiesWithId.length; j++) {
        if (usersWithId[i].id === citiesWithId[j].user_id){
            completeUsers[z] = Object.assign(usersWithId[i], citiesWithId[j]);
            z++;
        }
    }
}
console.log(completeUsers);
usersWithId[0].name = 'vasyaasdfasfdsafasdfdsa';
console.log(usersWithId);
console.log(citiesWithId);
///////// Object.assign  - вертає ссилку////////
*/


// Частковий приклад реультату:
//     let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]


/*
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false},
];
let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'},];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
let completeUsers = [];
for (let i = 0; i < usersWithId.length; i++) {
    for (let j = 0; j < citiesWithId.length; j++) {
        if (usersWithId[i].id === citiesWithId[j].user_id){
            usersWithId[i].address = citiesWithId[j];
            completeUsers.push(usersWithId[i]);
        }
    }
}
console.log(completeUsers);
*/


//////////////////////////////////////////////////////////////////////////
//////////////// without refer////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

/*
let usersWithId0 = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false},
];
let citiesWithId0 = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'},];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив

let usersWithId = JSON.parse(JSON.stringify(usersWithId0));
let citiesWithId = JSON.parse(JSON.stringify(citiesWithId0));

for (let i = 0; i < usersWithId.length; i++) {
    for (let j = 0; j < citiesWithId.length; j++) {
        if (usersWithId[i].id === citiesWithId[j].user_id){
            usersWithId[i].address = citiesWithId[j];
        }
    }
}
usersWithId0[0].name = 'vasyaasdfasfdsafasdfdsa';
console.log(usersWithId0);
console.log(citiesWithId0);
console.log(usersWithId); ////результат
*/






////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////

// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з
// селекторів по id , class та тегу


/*

let block = document.createElement("div");
block.classList.add('divka');
block.id = 'divkaID';
block.style.backgroundColor = 'grey';
document.body.appendChild(block);
block.style.width = '300px';
block.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi aspernatur, aut delectus deserunt, ducimus error esse eveniet minus nisi nulla optio recusandae rem, repellendus sit veniam vero! Ex, provident.';


console.log(document.getElementById('divkaID').innerText);
console.log(document.getElementsByClassName('divka')[0].innerHTML);
console.log(document.getElementsByTagName("div")[2].innerText);

// - змінити цей текст використовуючи селектори id, class,  tag
document.getElementById('divkaID').innerText = 'adfafafadsf';
document.getElementsByClassName('divka')[0].innerText = `gsgsgfdsdsfgfd`;
document.getElementsByTagName("div")[2].innerText = 'sfafasdfas';

// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
document.getElementById('divkaID').style.height = '50px';
document.getElementsByClassName('divka')[0].style.width = '100px';
document.getElementsByTagName("div")[2].style.border = 'solid 5px pink';
*/






/////////////////////////////////////////////////////////////////////////////
// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені

/*
let table = document.createElement('table');
document.body.appendChild(table);
let tr = document.createElement('tr');
table.appendChild(tr);
tr.style.border = 'solid 1px black';
table.style.border = 'solid 1px black';

let i =0;
while (i < 3){
    let td = document.createElement('td');
    tr.appendChild(td);
    td.style.border = 'solid 1px black';
    table.style.borderCollapse = 'collapse';
    td.innerText = `${Math.floor(Math.random()*(12-6)+6)}`;
    i++;
}

*/



// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з
// трьома ячейками всередені


/*
let table = document.createElement('table');
document.body.appendChild(table);
table.style.border = 'solid 1px black';

for (let i = 0; i < 10; i++) {
    let tr = document.createElement('tr');
    table.appendChild(tr);
    tr.style.border = 'solid 1px black';

    let td1 = document.createElement('td');
    tr.appendChild(td1);
    let td2 = document.createElement('td');
    tr.appendChild(td2);
    let td3 = document.createElement('td');
    tr.appendChild(td3);
    td1.style.border = 'solid 1px black';
    td2.style.border = 'solid 1px black';
    td3.style.border = 'solid 1px black';
    table.style.borderCollapse = 'collapse';
    td1.innerText = '1';
    td2.innerText = '2';
    td3.innerText = '3';
}
*/



// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені


/*
let table = document.createElement('table');
document.body.appendChild(table);
table.style.border = 'solid 1px black';

for (let i = 0; i < 10; i++){
    let tr = document.createElement('tr');
    table.appendChild(tr);
    tr.style.border = 'solid 1px black';
    for (let j =0; j < 5; j++){
        let td = document.createElement('td');
        tr.appendChild(td);
        td.style.border = 'solid 1px black';
        table.style.borderCollapse = 'collapse';
        td.innerText = `${Math.floor(Math.random()*(12-6)+6)}`;

    }
}
*/



// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt


/*
let table = document.createElement('table');
document.body.appendChild(table);
table.style.border = 'solid 1px black';
let n = prompt('enter number of rows');
let m = prompt('enter number of cols');

for (let i = 0; i < n; i++){
    let tr = document.createElement('tr');
    table.appendChild(tr);
    tr.style.border = 'solid 1px black';
    for (let j =0; j < m; j++){
        let td = document.createElement('td');
        tr.appendChild(td);
        td.style.border = 'solid 1px black';
        table.style.borderCollapse = 'collapse';
        td.style.width = '10px';
        td.style.height = '10px';
        td.style.backgroundColor = `rgb(${Math.random()*225},${Math.random()*225},${Math.random()*225})`;

    }
}

*/





//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////
// ============
// ====class===
//     ============
//
// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2)
// характеризують тему контенту яка вказана в параграфі.
// створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список
// (ul>li), який буде змістом того, що знаходиться на сторінці.
// Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з
//  кожне правило в окремому блоці. При цому в блоці, номер правила записати в свій блок,
//  текст правила записати в свій окремий блок.
//  Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap
//  файла rule.html
//



/*
let article = document.getElementById('wrap');
let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];
for (const rule of rules) {
        let block = document.createElement("div");
        article.appendChild(block);
        let h2 = document.createElement("h2");
        let p = document.createElement("p");
        h2.innerText = `${rule.title}`;
        p.innerText = `${rule.body} `;
        block.appendChild(h2);
        block.appendChild(p);


}
let contentMenu = document.createElement("ul");
contentMenu.style.border = 'solid 1px grey';
let content = document.getElementById('content');
content.appendChild(contentMenu);


let massH1 = document.getElementsByTagName("h2");
for (const h2 of massH1) {
    let title = document.createElement("li");
    title.innerText = `${h2.innerText}`;
    contentMenu.appendChild(title)
}
*/



///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл.
// У файлі прописати наступні доступи та дії
// - знайти всі елементі, які мають id
/*
let massEll = document.getElementsByTagName('*');
for (const massEllElement of massEll) {
    if (massEllElement.id)
        console.log(massEllElement);
}

// - знайти всі параграфи ,та змінити текст на hello oktenweb!
let paragraph = document.getElementsByTagName("p");
for (const paragraphElement of paragraph) {
    paragraphElement.innerText = 'hello oktenweb!'
}
//     - знайти всі div та змінити ім колір на червоний
let redDiv  = document.getElementsByTagName("div");
for (const divka of redDiv) {
    divka.style.backgroundColor = 'red';
}

*/




///////////////////////////////////////////////////////////////////////////////
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users.
// За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий
// об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).
/*
let blockOfUsers = document.createElement('div');
document.body.appendChild(blockOfUsers);



fetch('https://jsonplaceholder.typicode.com/users')
    .then(userss=>userss.json())
    .then(usersFake => {console.log(usersFake);
        for (let object of usersFake) {
            ////////ітерація по кожному оюєкту масиву

            let card = document.createElement("div");
            blockOfUsers.appendChild(card);
            card.style.backgroundColor = 'aqua';
            card.style.marginBottom = '15px';



            for (const key in object) {
                ////// ітерація по ключам обєкта
                if (typeof object[key] === 'object') {

                    let div2 = document.createElement("div");
                    card.appendChild(div2);
                    div2.style.backgroundColor = 'pink';
                    div2.innerText = `${key} \n`;

                    for (const keyIn in object[key]) {



                        if (typeof object[key][keyIn] === 'object') {

                            let div3 = document.createElement("div");
                            div3.style.backgroundColor = 'grey';
                            div2.appendChild(div3);
                            div3.innerText = `${keyIn} \n `;

                            for (let keyInIn in object[key][keyIn]) {
                                let div3text = document.createElement("div");
                                div3text.innerText = `${keyInIn}: ${object[key][keyIn][keyInIn]}`;
                                div3.appendChild(div3text);

                                console.log(`${keyInIn}: ${object[key][keyIn][keyInIn]}`);
                            }
                        } else {
                            let div2tect = document.createElement("div");
                            div2tect.innerText = ` ${keyIn}: ${object[key][keyIn]}`;
                            div2.appendChild(div2tect);
                            console.log(`${keyIn}: ${object[key][keyIn]}`)
                        }
                    }
                }else {
                    let divMainTect = document.createElement("div");
                    divMainTect.innerText = `${key}: ${object[key]}`;
                    card.appendChild(divMainTect);
                    console.log(`${key}: ${object[key]}`)
                }
                }
            }
        }


    );

let width = document.getElementsByTagName("div");
for (const widthElement of width) {
    widthElement.style.width = '350px';
}
*/





// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts.
// За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий
// об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
/*

let blockOfposts = document.createElement('div');
document.body.appendChild(blockOfposts);
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(userss=>userss.json())
    .then(posts => {console.log(posts);
            for (let object of posts) {
                ////////ітерація по кожному оюєкту масиву

                let card = document.createElement("div");
                blockOfposts.appendChild(card);
                card.style.backgroundColor = 'aqua';
                card.style.marginBottom = '15px';

                for (const key in object) {
                    ////// ітерація по ключам обєкта
                        let divMainTect = document.createElement("div");
                        divMainTect.innerText = `${key}: ${object[key]}`;
                        card.appendChild(divMainTect);
                        console.log(`${key}: ${object[key]}`)
                    }
                }
            }
    );

let width = document.getElementsByTagName("div");
for (const widthElement of width) {
    widthElement.style.width = '350px';
}

*/





// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments.
// За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий
// об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
/*
let blockOfcomments = document.createElement('div');
document.body.appendChild(blockOfcomments);

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(userss=>userss.json())
    .then(comments => {console.log(comments);
            for (let object of comments) {
                ////////ітерація по кожному оюєкту масиву

                let card = document.createElement("div");
                blockOfcomments.appendChild(card);
                card.style.backgroundColor = 'aqua';
                card.style.marginBottom = '15px';



                for (const key in object) {

                    let divMainTect = document.createElement("div");
                    divMainTect.innerText = `${key}: ${object[key]}`;
                    card.appendChild(divMainTect);
                    console.log(`${key}: ${object[key]}`)
                }
            }
        }


    );

let width = document.getElementsByTagName("div");
for (const widthElement of width) {
    widthElement.style.width = '350px';
}


*/







// ****** при помощи fetch (как в примере) получить от jsonplaceholder все posts. Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments. Объеденить соответсвующий post с соответсвующими comment и вывести в браузер. Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту
//


/////////////////експерeменти///////////////////////
/*
let array = {
    name: 'max',
    driver: {name: 'ALina', age: 30, experience: 5},
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}

for (const key in array) {
    if (typeof array[key] === 'object'){
        console.log(`${key}:`);
        for (const keyIn in array[key]) {
            console.log(`${keyIn}: ${array[key][keyIn]}`);
        }
    }else  {
        console.log(`${key}: ${array[key]}`)
    }
}
*/
