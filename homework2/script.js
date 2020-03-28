
// --створити масив та вивести його в консоль:
//     - з 5 числових значень
/*
let arrNum = [3, 5, 6, 7, 9];
console.log(arrNum);
*/



// - з 5 стічкових значень
/*
let arrStr = ['Oleg', 'Andry', 'Ruslan', 'Max', 'Vasya'];
console.log(arrStr);

*/


// - з 5 значень стрічкового, числового та булевого типу
/*
let arrAllType = ['Kira', 4, false, 5.55, 'Alina'];
console.log(arrAllType);
*/


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
/*
let arrSpace = [];
arrSpase[0] = 'Emilly';
arrSpase[1] = 0;
arrSpase[2] = false;
arrSpase[3] = 'Olena';
console.log(arrSpace);
*/


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
/*
for (let i = 0; i<10; i++) {
    document.write('<div>AAAAA</div>')
}
document.write('<br>');
*/



// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
/*
for (let i = 0; i<10; i++) {
    document.write(`<div>AAAAA</div> <span>${i}</span>`)
}
document.write('<br>');

*/


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
/*
let index = 0;
while (index < 20){
    document.write(`<h1>BBBB</h1>`);
    index++;
}
*/

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
/*
let index2 = 0;
while (index2 < 20){
    document.write(`<h1>BBBB ${index2}</h1>`);
    index2++;
}
*/

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
///for
/*

let arrTenNum = [1,3,5,3,6,7,83,3,0,11];

for (let i = 0; i<arrTenNum.length; i++){
    console.log(arrTenNum[i]);
}
*/


//while
/*
let arrTenNum = [1,3,5,3,6,7,83,3,0,11];
let i = 0;
while (i < arrTenNum.length){
    console.log(arrTenNum[i]);
    i++;
}
*/






// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
/*
let arrTenStr = ['Olena', 'Alina', 'Emilly', 'Kira', 'Anna', 'Kira', 'Hazel', 'Eka', 'Mendy', 'Jane'];
let indx = 0;
while (indx < arrTenStr.length){
    console.log(arrTenStr[indx]);
    indx++;
}
*/






// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
/*
let arrAllTypeTen = ['Alina', 88, 0.89999, false, 'something', true, '0', {name:'Vadim', age: 5}, -5 , 'true'];
let i = 0;
while (i< arrAllTypeTen.length){
    console.log(arrAllTypeTen[i]);
    i++;
}

*/





// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
/*
let arrThreeType = ['something', 5, false , 'str1', true, 4, 44, false, 'str2', true];
let i = 0;
while (i<arrThreeType.length){
    if (typeof(arrThreeType[i])==="boolean"){
        console.log(arrThreeType[i]);
    }
    i++;
}
*/





// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
/*
let arrThreeType = ['something', 5, false , 'str1', true, 4, 44, false, 'str2', true];
let i = 0;
while (i < arrThreeType.length){
    if (typeof(arrThreeType[i])==="number"){
        console.log(arrThreeType[i]);
    }
    i++;
}
*/






// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
/*
let arrThreeType = ['something', 5, false , 'str1', true, 4, 44, false, 'str2', true];
let i = 0;
while (i < arrThreeType.length){
    if (typeof(arrThreeType[i])==="string"){
        console.log(arrThreeType[i]);
    }
    i++;
}
*/






// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
/*
let arrSpace = [];
arrSpace[0]= 'str1';
arrSpace[1]= 56465;
arrSpace[2]= '24354asd';
arrSpace[3]= false;
arrSpace[4]=  994;
arrSpace[5]= 'adsdsf';
arrSpace[6]= true;
arrSpace[7]= true;
arrSpace[8]= -55;
arrSpace[9]= 0.55;
let i = 0;
while (i< arrSpace.length){
    console.log(arrSpace[i]);
    i++;
}
*/






// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
/*
for (let i = 0; i < 10; i++){
    console.log(i);
    document.write(`${i} <br>`);
}
*/




// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
/*
for (let i = 0; i < 100; i++){
    console.log(i);
    document.write(`${i} <br>`);
}
*/







// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
/*
let count = 0;
for (let i = 0; i < 200; i+=2){
    console.log(i);
    document.write(i);
    count++;
}
console.log(`${count} ітерацій`);

*/



/*

let count = 0;
for (let i = 0; count < 100; i+=2){
    console.log(i);
    document.write(`${i} <br>`);
    count++;
}
console.log(`${count} ітерацій`);

*/




// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
/*
let count = 0;
for (let i = 1; count < 100; i++){
    if (i % 2 === 0){
        console.log(i);
        document.write(`${i} <br>`);
        count++
    }
}
console.log(`${count} ітерацій`);

*/

/*

let count = 0;
for (let i = 1; count < 100; i++){
    if (i % 2)continue;
    console.log(i);
    document.write(`${i} <br>`);
        count++
}
console.log(`${count} ітерацій`);

*/






// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

/*
let count = 0;
for (let i = 1; count < 100; i++){
    if (i % 2 === 0)continue;
    console.log(i);
    document.write(`${i} <br>`);
    count++;
}
console.log(`${count} ітерацій`);


*/





// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

/*
let drop;
for (let minutes = 0; minutes < 3; minutes++) {
    for (let seconds = 0; seconds < 60; seconds++) {


        if (minutes < 10){
            document.write(`0${minutes} :: `);
        } else document.write(`${minutes} :: `);
        if (seconds < 10){
            document.write(`0${seconds}`)
        } else  document.write(`${seconds}`);
        document.write(`<br>`);
        if (minutes === 2 && seconds === 0) break;
    }

}

*/
//////////////////////////////////////////////////////////////////////////


/*

let drop;
for (let minutes = 0; minutes < 2; minutes++) {
    for (let seconds = 1; seconds < 60; seconds++) {
       if (minutes === 0){
           document.write(`${seconds} сек <br> `)
       } else document.write(` ${minutes} хв ${seconds} сек <br> `);
       if (seconds === 59){
           document.write(` ${drop = minutes+1} хв <br>`)
       }
    }
}

*/








// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)




/*

for (let hours = 0; hours <3; hours++) {
    for (let minutes = 0; minutes < 60; minutes++) {

        for (let seconds = 0; seconds < 60; seconds++) {

            if (hours < 10) {
                document.write(`0${hours} :: `);
            }else document.write(`${hours} :: `);
            if (minutes < 10) {
                document.write(`0${minutes} :: `);
            }else document.write(`${minutes} :: `);
            if (seconds < 10) {
                document.write(`0${seconds}`);
            }else document.write(`${seconds}`);
            document.write(`<br>`);


            if (seconds === 59 && minutes < 59) document.write(`<hr>`);
            if (minutes === 59 && seconds === 59) document.write(`<hr style = 'border: red solid 2px'>`);


        }
        if (hours === 2 && minutes === 20) break;


    }
}
*/

/////////////////////////////////////////////////////////////////////////////////////

/*

let dropH;
let drop;
for (let hours = 0; hours <3; hours++) {
    for (let minutes = 0; minutes < 60; minutes++) {
        for (let seconds = 1; seconds < 60; seconds++) {
            if (minutes === 0 && hours===0) {
                document.write(`${seconds} сек <br> `)
            } else if (hours === 0) {
                document.write(`${minutes} хв ${seconds} сек <br> `);
            } else if (hours > 0 && minutes === 0) {
                document.write(`${hours} год ${seconds} сек <br> `);
            }else document.write(`${hours} год ${minutes} хв ${seconds} сек <br> `);
            if (seconds === 59&& minutes <59 && hours === 0) {
                document.write(`${drop = minutes + 1} хв <br>`);
            }
            if (seconds === 59&& minutes <59 && hours >0) {
                document.write(`${hours} год ${drop = minutes + 1} хв <br>`);
            }
            if ((minutes === 59)&&(seconds === 59)) {
                document.write(`${dropH = hours + 1} год <br>`);
            }

        }
        if (hours === 2 && minutes === 19) break;
    }

}

*/





// Додатково
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.


/*
let arr1 = [ 'a', 'b', 'c'];

let string = '';
for (let i = 0; i < arr1.length; i++){
string =  string+ arr1[i];
}
console.log(string);

*/





// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
/*
let arr1 = [ 'a', 'b', 'c'];
let i = 0;
let string = '';
while (i< arr1.length){
    string = string+ arr1[i]
    i++;
}
console.log(string);

*/

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

/*
let arr1 = [ 'a', 'b', 'c'];
let string = '';
for ( let i of arr1){
    string = string+ i;
}
console.log(string);
console.log(typeof(string));
*/

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
//
// =================
// =================
// =================
// =================
//


















// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
/*
let array =  ['a', 'b', 'c'];
let i = 1;
while   ( i < 4 ){
    array.push(i);
    i++;
}
console.log(array);
*/




// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
/*

let array = [1, 2, 3];
let array2 =[];
let i = array.length-1;
for (i; i >= 0; i--){
    array2.push(array[i]);
}
console.log(array2);


*/

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
/*
let array = [1, 2, 3];
for (let i = 4; i < 7 ; i++){
    array.push(i);
}
console.log(array);
*/






// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
/*
let array = [1, 2, 3];
for (let i = 6; i >=4 ; i--){
    array.unshift(i)
}
console.log(array);
*/





// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()

/*
let array = ['js', 'css', 'jq'];
let first = array.shift();
console.log(first);
*/




// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
/*
let array = ['js', 'css', 'jq'];
let last = array.pop();
console.log(last);
*/




// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1, 4, 5].
/*
let array = [1, 2, 3, 4, 5];
array.splice(1, 2);
console.log(array);

*/




// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
/*
let array = [1, 2, 3, 4, 5];
array.splice(0,3);
console.log(array);

*/




// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
/*
let array = [1, 2, 3, 4, 5];
array.splice(2, 3);
console.log(array);
*/







// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
/*
let array = [1, 2, 3, 4, 5];
array.splice(3,0, 'a','b','c');
console.log(array);
*/



// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
/*
let array = [1, 2, 3, 4, 5];
array.splice(1,0, 'a','b');
array.splice(6,0, 'c');
array.splice(8,0, 'e');
console.log(array);

*/





// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
/*

let arrayNum = [1, 3, 5, 2, 6, 2, 7, 4, 9, 8];

for (let i = 0; i < arrayNum.length; i++){
    if (arrayNum[i] % 2 === 0) {
        console.log(arrayNum[i]);
    }
}
*/


/*
let array = [1, 3, 5, 2, 6, 2, 7, 4, 9, 8, 22];
for (let value of array){
    if (value % 2 === 0) console.log(value);
}
*/




// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший

/*

let array1 = [1, 3, 5, 2, 6, 2, 7, 4, 9, 8, 10, 7];
let array2 =[];
let array3 =[];

///for of
for (let value of array1){
    array2.push(value);
}
console.log(array2);


/// for
for (let i = 0; i < array1.length; i++){
    array3.push(array1[i]);
}
console.log(array3);

*/






// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

/*
let array = [1, 3, 5, 2, 6, 2, 7, 4, 9, 8];
let arraySpace = [];
for (let i = 0; i < array.length; i++){
    arraySpace[i] = array[i];

}
console.log(array);
console.log(arraySpace);

*/





//
//
// ============
//
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

//     1. перебрати його циклом while
/*
let array = [2,17,13,6,22,31,45,66,100,-18];
let i = 0;
while (i < array.length) {
    console.log(array[i]);
    i++
}
*/

//     2. перебрати його циклом for

/*
let array = [2,17,13,6,22,31,45,66,100,-18];
for (let i = 0; i < array.length; i++){
    console.log(array[i]);
}
*/


//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

/*
let array = [2,17,13,6,22,31,45,66,100,-18];
let i = 1;
while (i < array.length){
    if (i % 2){
        console.log(array[i]);
    }
    i++;
}
*/



// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

/*
let array = [2,17,13,6,22,31,45,66,100,-18];
for (let i = 1; i < array.length; i++){
    if (i % 2) console.log(array[i]);
}

*/



// 5. перебрати циклом while та вивести  числа тільки парні  значення
/*
let array = [2,17,13,6,22,31,45,66,100,-18];let i = 0;
while  (i < array.length){
    if (array[i] % 2 === 0) console.log(array[i]);
    i++;
}*/

// 6. перебрати циклом for та вивести  числа тільки парні  значення
/*
let array = [2,17,13,6,22,31,45,66,100,-18];
for (let i = 0; i < array.length; i++){
    if (array[i] % 2 === 0) console.log(array[i]);
}
*/


// 7. замінити кожне число кратне 3 на слово "okten"
/*
let array = [2,17,13,6,22,31,45,66,100,-18];
for (let i = 0; i < array.length; i++){
    if (array[i] % 3 === 0) array[i]='okten';
    
}
console.log(array);
*/



// 8. вивести масив в зворотньому порядку.
/*
let array = [2,17,13,6,22,31,45,66,100,-18];
for (let i = array.length-1; i >=0; i--){
    console.log(array[i]);
}
*/
////////////////////////////////////////////////////////////////////////////////////////
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)  /////
////////////////////////////////////////////////////////////////////////////////////////


//     1. перебрати його циклом while
/*

let array = [2,17,13,6,22,31,45,66,100,-18];
let i = array.length-1;
while (i >= 0) {
    console.log(array[i]);
    i--;
}
*/

//     2. перебрати його циклом for

/*

let array = [2,17,13,6,22,31,45,66,100,-18];
for (let i = array.length-1; i >= 0; i--){
    console.log(array[i]);
}
*/



//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

/*

let array = [2,17,13,6,22,31,45,66,100,-18];
let i = array.length-1;
while (i >= 1){
    if (i % 2){
        console.log(array[i]);
    }
    i--;
}

*/

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

/*

let array = [2,17,13,6,22,31,45,66,100,-18];
for (let i = array.length-1; i >= 1; i--){
    if (i % 2) console.log(array[i]);
}


*/



// 5. перебрати циклом while та вивести  числа тільки парні  значення
/*
let array = [2,17,13,6,22,31,45,66,100,-18];
let i = array.length-1;
while  (i >= 0){
    if (array[i] % 2 === 0) console.log(array[i]);
    i--;
}
*/

// 6. перебрати циклом for та вивести  числа тільки парні  значення

/*
let array = [2,17,13,6,22,31,45,66,100,-18];
for (let i = array.length-1; i >=0; i--){
    if (array[i] % 2 === 0) console.log(array[i]);
}

*/


// 7. замінити кожне число кратне 3 на слово "okten"
/*

let array = [2,17,13,6,22,31,45,66,100,-18];
let array2 = [];
let j =0;
for (let i = array.length-1; i >=0; i--){
    if (array[i] % 3 === 0) array[i]='okten';
    array2[j]=array[i];
    j++;
}
console.log(array2);


*/

/////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////




// 1
// створити пустий масив та :
//     1. заповнити його 50 парними числами за допомоги циклу.
/*
let array = [];
let count = 0;
for (let j = 1;;j++){
    if (count < 50) {
        if (j % 2 ===0)
        {array[count]=j;
            count++;
        }
    }else break
}

console.log(array);
*/


// 2. заповнити його 50 непарними числами за допомоги циклу.
/*
let array = [];
let count = 0;
for (let j = 1;; j++){
    if (count < 50){
       if (j % 2) {
           array[count]=j;
           count++;
       }
    }else break
}
console.log(array);
*/



// 3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
/*
let arr = [];
for (let i = 0; i < 50; i++){

    arr[i] = Math.floor((Math.random()*100));
}
console.log(arr);


*/


////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

/// 2 3 4 5 разом

//////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//     диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
let arr = [];
for (let i = 0; i < 20; i++){

    arr[i] = Math.floor((Math.random()*732)+7);
}
console.log(arr);


// 2. вывести на консоль  каждый третий елемент
console.log(`кожене третє`);
for (let i2 = -1; i2 < arr.length; i2+=3){
   if (arr[i2]=== undefined){

    }else  console.log(arr[i2])
}


// 3. вывести на консоль  каждый третий елемент
// но при условии что его значение является парным.
console.log(`кожне парне з кожного третього`);
let arr2 = [];
let arr2index = 0;
for (let i3 = -1; i3 < arr.length; i3+=3){
    if (arr[i3]=== undefined){

    }else if (arr[i3] % 2 === 0) {
        console.log(arr[i3]);
        arr2[arr2index]=arr[i3];
        arr2index++;
    }
}



// 4. вывести на консоль  каждый третий елемент
// но при условии что он имеет парное значение и
// записать их в другой массив.
console.log(arr2);



// 5. Вывести каждый елемент массива у которого соседний с права элемент - парный
console.log(`кожний елемент з парним сусідом зправа`);
for (let i4 = 0; i4 < arr.length; i4++){
    if (arr[i4+1] % 2 ===0) console.log(`${arr[i4]} (${arr[i4+1]})`);
}

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////





// 5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.
//
/*
let array = [100,250,50,168,120,345,188];
let value;
let sum = 0;
let sumMid;
for (value of array){
    sum = sum +value;
}
sumMid = sum/array.length;
console.log(sumMid.toFixed(2));
*/

// 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
/*
let array = [];
let arrayX5 = [];
for (let i = 0; i < 10; i++){
    array[i] = Math.floor(Math.random()*10);
    arrayX5[i] = array[i]*5;
}
console.log(array);
console.log(arrayX5);

*/


// 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
// додати його в інший масив.

/*
let arrayIn = [];
for (let i = 0; i < 5; i++){
    arrayIn[i] = Math.floor(Math.random()*100)
}

let array = [ false, 9, 'something', 8 , 3, 'something 2', true];
for (let i2 = 0; i2 < array.length; i2++) {
    if (typeof(array[i2]) === 'number'){
        array[i2] = arrayIn;
    }
}
console.log(array);
*/
