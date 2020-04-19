// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время,
//     введенный текст остался в textarea.

/*
let text = document.createElement('textarea');
document.body.appendChild(text);

text.oninput = ()=>{
    localStorage.setItem('text', text.value)
};
(!text.value)? text.value = localStorage.getItem('text') : null;

*/





// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он
//     заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные
// стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.






/*
let task3 = document.querySelector('.task3');
task3.style.display = 'block';
let form = document.forms.form;

let textarea = document.querySelectorAll('textarea');
let fields = document.querySelectorAll('input[type=text]');
let numbers = document.querySelectorAll('input[type=number]');
let selector = document.querySelectorAll('select');
let rad = document.querySelectorAll('input[type=radio]');
let checkboxes = document.querySelectorAll('input[type=checkbox]');



function saveRad(collection) {
    for (const element of collection) {
        element.onchange = () => {
            localStorage.setItem(`${element.name}`, `${element.value}`)
        };
        let item = localStorage.getItem(`${element.name}`);
        if (!element.checked && element.value === item) element.setAttribute('checked', '');
    }
}

saveRad(rad);


function savesetFields([text, num, textarea]) {
    for (const textField of arguments[0]) {
        for (const element of textField) {
            element.oninput = () => {
                localStorage.setItem(`${element.name}`, `${element.value}`);
                if (element.value === '') localStorage.removeItem(`${element.name}`);
            };
            if (!element.value) element.value = localStorage.getItem(`${element.name}`);

        }
    }
}

savesetFields([textarea, fields, numbers]);

function savesetCB(collection) {
    for (const element of collection) {
        element.onchange = () => {
            if (element.checked) localStorage.setItem(`${element.name}`, `${element.value}`);
            if (!element.checked) localStorage.removeItem(`${element.name}`);
        };
        let item = localStorage.getItem(`${element.name}`);

        if (!element.checked && element.value === item) {
            element.setAttribute('checked', '');
        } else {
            element.removeAttribute('checked');
            localStorage.removeItem(`${element.name}`)
        }
    }
}

savesetCB(checkboxes);

function saveOption(collection) {
    for (const element of collection) {
        element.onchange = () => {
            localStorage.setItem(`${element.name}`, `${element.value}`)
        };
        let item = localStorage.getItem(`${element.name}`);
        element.options[item].selected = true
    }
}
saveOption(selector);

*/




// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "
// фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать
// и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно
// перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).





/*


let div = document.getElementById('task4');
div.style.display = 'block';



let area = document.getElementById('text');
let btn = document.getElementById('save');
let del = document.getElementById('delete');
let back = document.getElementById('left');
let go = document.getElementById('right');


let count = -1;
let move;
let arr;


///перевірка після перезавантаження
if (localStorage.getItem('arr') === null){
    arr = [];
}else {
    arr = JSON.parse(localStorage.getItem("arr"));
    count = arr.length-1;
    move= arr.length-1;
    area.value = arr[arr.length-1]

}
console.log(arr);




///збереження
btn.onclick = (ev)=>{
count++;
    arr[count]=area.value;
    ///перевірка на повтори
    if (arr[count] === arr[count-1]) {arr.splice(count,1); count-=1}
console.log(arr);
move =arr.length-1;
localStorage.setItem('arr',`${JSON.stringify(arr)}`);

    localStorage.setItem('current', `${area.value}`);
};


back.onclick = ()=>{
    move--;
    if (move >=0){
        area.value = arr[move];
    }else move =0;
console.log(move);

    localStorage.setItem('current', `${area.value}`);
};



go.onclick = ()=>{
    if (move > arr.length-2) move=arr.length-2;
    move++;
    area.value = arr[move];
    console.log(move);

    localStorage.setItem('current', `${area.value}`);
};



///видалити історію
del.onclick = ()=>{
    arr = [];
    localStorage.clear();
    count = -1;
};


*/
















// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел,
//     день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется
// форма, в которой есть все необходимые инпуты для редактирования, которые уже
// заполнены данными объекта





/*
let div = document.getElementById('task5');
div.style.display = 'block';



let saveBtn = document.getElementById('saveIn');
let textarea = document.querySelectorAll('input[type=text]');
let numbers = document.querySelectorAll('input[type=number]');
let mail = document.querySelectorAll('input[type=email]');
let ul = document.getElementById('list');




saveBtn.onclick = (ev)=>{
    function saveUser() {
        let user = {};
        for (const argument of arguments) {
            for (const element of argument) {
                user[`${element.name}`] = `${element.value}`;
                argument.value = '';
            }
        }
        nick = document.forms.form2.name.value;
        localStorage.setItem(`${nick}`, JSON.stringify(user));
    }
    saveUser(textarea,numbers,mail);
    
};




for (let i = 0; i < localStorage.length; i++) {

let key = localStorage.key(i);
let user = JSON.parse(localStorage.getItem(key));
    console.log(user);


let li = document.createElement("li");
li.innerText = `${user.name} - ${user.phone}`;
li.setAttribute('name', `${user.name}`);
ul.appendChild(li);


let edit = document.createElement('button');
edit.innerText = 'edit';
edit.setAttribute('name', `${user.name}`);
edit.classList.add('edit');
li.appendChild(edit);


let del = document.createElement('button');
del.classList.add('del');
del.setAttribute('name', `${user.name}`);
del.innerText = 'delete';
li.appendChild(del)

}


let delUser = document.getElementsByClassName('del');

console.log(delUser);
for (const btn of delUser) {
   btn.onclick = ()=>{
       localStorage.removeItem(`${btn.name}`);
       let lis = document.querySelector(`li[name=${btn.name}]`);
       lis.style.display = 'none';
   }
}

let editUser = document.getElementsByClassName('edit');

console.log(editUser);
for (const btn of editUser) {
    btn.onclick = ()=>{
        let user = JSON.parse(localStorage.getItem(`${btn.name}`));
        document.forms.form2.name.value = user.name;
        document.forms.form2.phone.value = user.phone;
        document.forms.form2.email.value = user.email;
        document.forms.form2.interprise.value = user.interprise;
        document.forms.form2.viddil.value = user.viddil;
        document.forms.form2.birth.value = user.birth;
    }

}
*/




