// - створити функцію яка виводить масив
/*

function arrLog(array) {
console.log(array);
}

*/


// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.

/*
function arrRandom(width, max, min,) {
    let array = [];
    for (let i = 0; i < width; i++) {
        array[i] = Math.floor(Math.random()*(max-min)+min);

    }
    arrLog(array)
}

arrRandom(10,20,1);

*/




///////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
// - створити функцію яка приймає три числа та виводить та повертає найменьше.

/*
function minNum(a, b, c) {
    if (a <= b && a <= c) return(a);
    if (b <= a && b <= c) return(b);
    if (c <= b && c <= a) return(c);
}
let minNumber = minNum(1,1,8);
console.log(minNumber);
*/







// - створити функцію яка приймає три числа та виводить та повертає найбільше.

/*
function maxNum(a, b, c) {
    if (a >= b && a >= c) return(a);
    if (b >= a && b >= c) return(b);
    if (c >= b && c >= a) return(c);
}
let maxNumber = maxNum(9,2,8);
console.log(maxNumber);
*/








// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше


/*
function maxAndMin(arr) {
    let max = 0;
    let min;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    } console.log(`max - ${max}`);
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] < max){
            max = arguments[i];
            document.write(`${max}\n`)
        }
    } return(max)
}

let min = maxAndMin( 4,5,-10,0,6,-8,2,3,0,0);
console.log(`min - ${min}`);


*/







// - створити функцію яка виводить масив
/*
function arrLog(array) {
    console.log(array);
}
*/

// - створити функцію яка повертає найбільше число з масиву


/*

function maxOfArr(array) {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
            console.log(max);
        }
    }return(max);
}
let array = [-5,7,3,-28,6,8,-5];
let max = maxOfArr(array);
console.log(`max - ${max}`);

*/








// - створити функцію яка повертає найменьше число з масиву


/*
function minOfArr(array) {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
            console.log(min);
        }
    }return(min);
}
let array = [-1,0,3,2,6,-8,5,8,1];
let min = minOfArr(array);
console.log(`min - ${min}`);



*/



// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
/*
let array = [1,0,3,2,6,8,5,8,1];
function summOfArray(arr) {
    let summ = 0;
    for (const num of arr) {
        summ += num;
    }return(summ)

}
let sum = summOfArray(array);
console.log(sum);
*/



// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
/*
let array = [4,7,3,7,8,3,3,66,2,7,3,8,1];
function medMath(array) {
    let sum = 0;
    let medium;
    for (const number of array) {
        sum += number;
    } medium = sum/array.length;
    return(medium.toFixed(2))
}

let medium = medMath(array);
console.log(medium);
*/



// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в
// масиві

/*
let arr = ['afafa', true, 'afaf', 3, {name: 'Rue', age: 33}, [4,5,78,8],6];
function numberOfEll(array) {
    let count = 0;
    for (const arrayKey in array) {
        count++;
    }return(count)
}
let count = numberOfEll(arr);
console.log(count);

*/


// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них



/*
let arr = ['afafa', true, 'afaf', 3, {name: 'Rue', age: 33, wife: true}, [4,5,'rgrg',78,8],9,'ffg'];

/!*
function numOfField(array, count = 0) {
	for (const key in array) {
	count++;
		console.log(count + '----');
		console.log(array[key]);
	}
	for (const key in array) {
		if (typeof array[key] ==='object'){
			let count2 = numOfField(array[key])
			count = count +count2
		}
	}
	 return(count);
}


let result = numOfField(arr);


console.log(result);
*!/

*/






// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     Приклад
//     [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

/*
let arr1 = [1,2,3,4];
let arr2 = [2,3,4,5];
function sumOfEllements(arr1, arr2) {
    let arr3 = [];
    for (let i = 0; i < arr1.length; i++) {
        let sum = arr1[i]+arr2[i];
        arr3.push(sum);

    }return(arr3)
}
let array3 = sumOfEllements(arr1, arr2);
console.log(array3);
*/








// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
/*
function moveEllement(array, i) {
let elemen = array.splice(i,1);

array.splice(i+1, 0, elemen[0]);
    console.log(array);
    console.log(elemen);
}
let array = [4,7,3,7,8,3,7,66,2,7,3,8,1];
console.log(array);
moveEllement(array, 6 );
*/






// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
/*
function sortZero(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0){
            let zero = array.splice(i,1);
            array.push(zero[0])
        }
        
    }console.log(array);
}
let array = [0,7,0,6,8,0,7,0,2,7,3,8,0,7,8,43,7,1];
sortZero(array);
*/

// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
//









// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
/*
(() => {
    let greetings = document.createElement("div");
    greetings.innerText = `Hello owu`;
    document.body.appendChild(greetings);
})();
*/

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

/*
function append(type, text) {
let element = document.createElement(type);
element.innerText = text;
document.body.appendChild(element);
}
append('h1', 'hello world');


*/

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
/// в index.html ////

/*
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
function cardCreator(array) {
let card = document.createElement("div");
card.classList.add('car');
	for (const arrayKey in array) {
		let specification = document.createElement("div");
		if (typeof array[arrayKey] === 'object'){
			let include = document.createElement("div");
			include.innerText = `${arrayKey}`;
			include.classList.add('include');
			card.appendChild(include);
			for (const arrayElementKey in array[arrayKey]) {
				let specincule = document.createElement("div");
				specincule.innerText = `${arrayElementKey} - ${array[arrayKey][arrayElementKey]}`;
				include.appendChild(specincule)
			}
		}else  specification.innerText = `${arrayKey} - ${array[arrayKey]}`
		card.appendChild(specification);

	} return(card);
}
function appendEllement(array, identify){
	let elementId = document.getElementById(identify);
	for (const arrayElement of array) {
	let card = cardCreator(arrayElement);
	elementId.appendChild(card);
	}
}

appendEllement(cars2, 'carslist');

*/





// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
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
     {user_id: 4, country: 'USA', city: 'Miami'},
];

function completeArray(arr1, arr2) {
    for (const card of arr1) {
        for (const location of arr2) {
            if (card.id === location.user_id){
                card.location = location;
            }
        }
    }return(arr1);
    
    
}

let newarr = completeArray(usersWithId, citiesWithId);
console.log(newarr);
*/





// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
// 
//
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
/*
function createBlock(object) {
	let block = document.createElement("div");
		let title = document.createElement("h2");
		title.innerText = object.title;
		block.appendChild(title);
		let body = document.createElement("div");
		body.innerText = object.body;
		block.appendChild(body);
	return(block);
}
let wrap = document.getElementById('wrap');
for (const rule of rules) {
let block = createBlock(rule);
wrap.appendChild(block);
}

*/

