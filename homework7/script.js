// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".



/*

let task1 = document.querySelector('.task1');
task1.style.display = 'block';
let text = document.createElement("p");
let btn = document.createElement('button');
btn.innerText = 'disable text';
text.setAttribute('id','text');
text.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eligendi error exercitationem minus odit praesentium, quam quasi repellendus sequi totam. Deleniti doloremque explicabo id ipsam libero nulla, quaerat quidem quod.\n';
task1.appendChild(text);
task1.appendChild(btn);
btn.onclick = ()=>{
     if (text.style.display === 'block'){
    text.style.display = 'none';
    }else text.style.display = 'block'
};

*/





//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
/*let task2 = document.querySelector('.task2');
task2.style.display = 'block';
let btn2 = document.createElement('button');
task2.appendChild(btn2);
btn2.innerText = 'hide';
btn2.onclick = function () {
    this.style.visibility ='hidden';

}*/



// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача


/*
let task3 = document.querySelector('.task3');
task3.style.display = 'block';
let validation = document.forms.validation;
console.log(validation);

validation.okey.onclick = function (ev){
    if (validation.age.value < 18) {
        console.log(validation.age.innerText);
        alert('not for child');
        ev.preventDefault();
    }
};
*/




// - Создайте меню, которое раскрывается/сворачивается при клике
let menuButton = document.querySelector('.menu_btn');
let menu = document.querySelector('.menu');
menuButton.addEventListener('click', ()=>{
    menu.classList.toggle('menu_move')
});

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.



/*


let comments = [
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'Andry', body:'hello world!'},
    {title : 'Rue', body:'lorem ipsum dolo sit ameti dolo sit ametidolo sit ameti'},
    {title : 'Katherina', body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eligendi error exercitationem minus odit praesentium, quam quasi repellendus sequi totam. Deleniti doloremque explicabo id ipsam libero nulla, quaerat quidem quod'},
    {title : 'Jeck', body:'Hello my name is Jeck'},
    {title : 'Bob', body:'lorem ipsum dolo sit ameti'},
    {title : 'Bill', body:'aldfhalfhasdlfhjasdfhjkdsafhjl'},
    {title : 'John', body:'01010101010101010100101010'},
    {title : 'Anna', body:'hi'},
    {title : 'Emilly', body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eligendi error exercitationem minus odit praesentium, quam quasi repellendus sequi totam. Deleniti doloremque explicabo id ipsam libero nulla, quaerat quidem quod'},
];

let div = document.querySelector('.task4');
div.style.display = 'block';

function commentAppend(arr, target) {
    for (const arrElement of arr) {
        let comment = document.createElement('div');
        let user = document.createElement('span');
        let text = document.createElement('p');
        let hide = document.createElement('span');
        user.innerText = `${arrElement.title}`;
        user.classList.add('comTitle');
        text.innerText = `${arrElement.body}`;
        text.classList.add('comText');
        hide.innerText = `hide/unhide`;
        hide.classList.add('comBtn')
        comment.appendChild(user);
        comment.appendChild(text);
        comment.appendChild(hide);
        comment.style.display = 'flex';
        comment.style.flexDirection = 'column';
        hide.addEventListener('click', ()=>{
            text.classList.toggle('commentnone');

        });
        target.appendChild(comment);

    }

}
commentAppend(comments, div);

*/





// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

/*


let div = document.querySelector('.task5');
div.style.display = 'block';

let buttonForms = document.querySelector('.forms_btn');
function check(object){
     if (object.checked) {
          return object.value;
     }else return null
}
buttonForms.onclick = ()=>{
   let form1 = document.forms.form1;
   let form2 = document.forms.form2;

   console.log(`name - ${form1.name.value  || null} \nage - ${form1.age.value || null} \nemail - ${form1.email.value || null}\nstatus - ${check(form1.status)}`);
   console.log(`sex - ${form2.sex.value || 'other'}\n skills: ${check(form2.skills1 )|| ''} ${check(form2.skills2) || ''} ${check(form2.skills3) || ''}`)

};


*/




// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
/*
let div = document.querySelector('.task6');
div.style.display = 'block';


let main = document.querySelector('.forTable');
function creatrTable(rows, cols, target, text) {
let table = document.createElement('table');
target.appendChild(table);
    for (let i = 1; i <= rows; i++) {
       let tr = document.createElement('tr');
       table.appendChild(tr);
        for (let j = 1; j <= cols; j++) {
            let td = document.createElement('td');
            tr.appendChild(td);
            td.innerText = text;
        }
    }
}


/////////////////////////////////////////////////
///creatrTable(5,5,main,'afafaf');
/////////////////////////////////////////////////




//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let tableParametes = ()=>{
    let cols = document.forms.parametrs.cols.value;
    let rows = document.forms.parametrs.rows.value;
    let text = document.forms.parametrs.content.value;
    creatrTable(rows, cols, main, text);
};
let button = document.querySelector('.btn_forTable');
console.log(button);
button.onclick = ()=>{
    tableParametes();
};

*/



// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

/*
let div = document.querySelector('.block_slider');
div.style.display = 'flex';


let letf = document.querySelector('.letf');
let right = document.querySelector('.right');
let slider = document.querySelector('.slider');

let count = 0;
right.addEventListener('click',function (ev) {
     if (ev) count+=400;
     if (count >=1600) count = 0;
     console.log(count);
     slider.style.left = `-${count}px`;
});
letf.addEventListener('click',function (ev) {

     if (ev) count-=400;
     if (count < 0 ) count = 1200;
     console.log(count);
     slider.style.left = `-${count}px`;
});
*/



// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

/*
let div = document.querySelector('.task7');
div.style.display = 'block';
let mass = ['сука','пизда','блядь','хуй','нахуй','єбав','гандон'];
let text = document.forms.badLanguage.text;
let button = document.forms.badLanguage.submit;
function alerts(words, form) {
    for (const word of words) {
        console.log(form.value);
        console.log(word);
        if (word === form.value)
            alert('bad language')
        }

}

button.onclick = (ev)=>{
    ev.preventDefault();
    alerts(mass,text);
};
*/


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

/*
let div = document.querySelector('.task7');
div.style.display = 'block';
let mass = ['сука','пизда','блядь','хуй','нахуй','єбав','гандон'];
let text = document.forms.badLanguage.text;
let button = document.forms.badLanguage.submit;
function alerts(words, form) {
    for (const word of words) {
        console.log(form.value);
        console.log(word);
        if (form.value.includes(word)) alert('bad language')
    }

}

button.onclick = (ev)=>{
    ev.preventDefault();
    alerts(mass,text);
};

*/




//
//
// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
//     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте

/*
let arrayOfH2 =document.querySelectorAll('.rules h2');
let ulMenu = document.querySelector('.menu ul');

console.log(arrayOfH2);
function createmenu(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li');
        let a = document.createElement('a');
        li.appendChild(a);
        a.innerText = `${arr[i].innerText}`;
        arr[i].setAttribute('id', `item${i}`);
        a.setAttribute('href',`#item${i}`);
        target.appendChild(li);

    }
}

createmenu(arrayOfH2,ulMenu );
*/



// -- взять массив пользователей
let usersWithAddress = [
     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
 ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ



/*

let div = document.querySelector('.task8');
div.style.display = 'block';

let target = document.querySelector('.container');

function addcontent(arr, target) {
     target.innerHTML = '';
     console.log(arr);
     for (let i = 0; i < arr.length; i++) {
          let div = document.createElement('div');
          const {id,name,age, status, address: {city, street, number}} = arr[i];
          div.innerText = `id - ${id} name - ${name} status - ${status} age - ${age} adress:    city - ${city}  street - ${street} number - ${number}`;
          target.appendChild(div);
          }
     }

addcontent(usersWithAddress, target);
let check1 = document.forms.filter.falseStatus;
let check2 = document.forms.filter.older29;
let check3 = document.forms.filter.Kyiv;

function filterf(arr) {
   let newArr = JSON.parse(JSON.stringify(arr));

   if (check1.checked) newArr = newArr.filter(value => value.status === false);

   if (check2.checked) newArr = newArr.filter(value =>value.age >= 29);

   if (check3.checked) newArr = newArr.filter(value =>value.address.city === 'Kyiv');

   addcontent(newArr, target);

}

let button = document.forms.filter.filterRes;
let button2 = document.forms.filter.restore;
button.onclick = ()=>{filterf(usersWithAddress)};
button2.onclick = ()=>{addcontent(usersWithAddress, target)};
*/








//
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
//
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
