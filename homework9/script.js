// Кожна функція має мати якесь успіше або не успішне виконання. Тобто можливий
// варіант, що при виконанні функції доїхати на роботу ви стали в заторі і не попали
// на роботу. Або йдучи на обід ви забули гаманець і лишились голодні.Зробити свій
// розпоряжок дня.
//
// Мають бути функції, які є асинхронними (мають сетТаймАут або сетІнтервал) які
// описують якусь певну вашу дію в день.
// Наприклад функція прокинутись триває 1с, поїсти - 0,5с. Доїхати до роботи - 2с.
// Пообідати - 1с.
// Зробити таких функцій в районі 10 штук. Функція має приймати параметр, який буде
// відповідати за успішне чи не успішне виконання.
// Далі виконати їх в тій послідовності, в якій ви виконуєте їх у свій звичайний
// день.
//
//  Тобто, як приклад
// Прокинулись - Поснідали - Зібрались - ПОїхали на роботу - Працююєте - Пообідали -
// Працюєте - Випили кави - Працюєте - Поїхали до дому - Повчились - Лягли спати.

/////

let cash = 50;
let food = true;
let trafficstuck = false;
isLessonHard = true;

function wakeUp(isWaked) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (isWaked){
            console.log('I`ve got up');
            console.log('I should cook the breakfast');
            resolve(food);
            }else
                reject('zzzzzzz');
                },1000)
    })
}
function breakfast(food) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (food){
                console.log('I`m having a meal');
                resolve(true);
            }else reject('I`m hungry, I can`t work')
        },2000)
    })

}
function gathering() {
return new Promise((resolve, reject) => {
    setTimeout(()=>{
        let wallet =0;
        wallet+=cash;
        console.log('I`m ready to go');
        resolve(wallet)
    },2000)
})
}


function wayToWork(money){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (trafficstuck){
                reject('I couldn`t get to work, because there was a traffic stuck')
            }else if (money>=10){
                money-= 10;
                console.log('I took a bus');
                console.log(`cash = ${money}`);
                resolve(money);
            }else {
                reject('I forgot my money, I can`t get to work')
            }
        },3000)
    })
}
function working(money){
    return new Promise(resolve => {
        setTimeout(()=>{
            console.log('working... I need a cup of coffe');
            if (money>20){
                money-=20;
                resolve(money);
                console.log(`cash = ${money}`);
            }else
                console.log('I`ve no money');
            resolve(money);
        },3000)
    })
}
function dinner(money){
    return new Promise((resolve) => {
        setTimeout(()=>{
            if (money>=50){
                console.log("I`m having a dinner");
                money-=50;
                console.log(`cash = ${money}`);
                resolve(money);
            }else {
                console.log("I dont have enough money. I will skip a meal");
                resolve(money)
            }
        },3000)

    })
}
function backToWork(money){
    return new  Promise(resolve => {
        setTimeout(()=>{
            console.log('back to work');
resolve(money)
        },4000)
    })

}
function goHome(money){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('It`s time to go home');
            if (money>=10){
                console.log('I will take a bus');
                money-=10;
                console.log(`cash - ${money}`);
                resolve('I`m home');
            } else {
                reject('I don`t have enough money, I will walk home. It takes me mach time. I won`t be on lesson...');
            }
        },3000)
    })
}
function lesson(text){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log(text);
            console.log('Watching a lesson');
            if (isLessonHard){
                resolve('Im going to sleep')
            }else reject ('I will do my homework and then fall asleap')
        },2000)
    })
}
function sleep(text){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log(text);
        },3000)
    })
}


wakeUp(true)
    .then(value => breakfast(value))
    .then(value => gathering(value))
    .then(value => wayToWork(value))
    .then(value => working(value))
    .then(value => dinner(value))
    .then(value => backToWork(value))
    .then(value => goHome(value))
    .then(value => lesson(value))
    .then(value => sleep(value))
    .catch(reason => console.log(reason))
    .finally(() => console.log('the end'));





/*
let cash = 100;
let food = true;
let trafficstuck = false;
isLessonHard = true;

function wakeUp(isWaked ,cb) {
        setTimeout(()=>{
            if (isWaked){
                console.log('I`ve got up');
                console.log('I should cook the breakfast');
                cb(null, food);

            }else
                cb('zzzzzzz');
        },1000)

}




function breakfast(food,cb) {

        setTimeout(()=>{
            if (food){
                console.log('I`m having a meal');
                cb(null, true);
            }else
                cb('I`m hungry, I can`t work')
        },2000)


}
function gathering(value,cb) {

        setTimeout(()=>{
            let wallet =0;
            wallet+=cash;
            console.log('I`m ready to go');
            cb(null,wallet)
        },2000)

}




function wayToWork(money,cb){

        setTimeout(()=>{
            if (trafficstuck){
                cb('I couldn`t get to work, because there was a traffic stuck')
            }else if (money>=10){
                money-= 10;
                console.log('I took a bus');
                console.log(`cash = ${money}`);
                cb(null,money);
            }else {
               cb('I forgot my money, I can`t get to work')
            }
        },3000)

}
function working(money,cb){

        setTimeout(()=>{
            console.log('working... I need a cup of coffee');
            if (money>20){
                money-=20;
                cb(null,money);
                console.log(`cash = ${money}`);
            }else
                console.log('I`ve no money');
            cb(null,money);
        },3000)

}
function dinner(money,cb){

        setTimeout(()=>{
            if (money>=50){
                console.log("I`m having a dinner");
                money-=50;
                console.log(`cash = ${money}`);
                cb(null,money);
            }else {
                console.log("I dont have enough money. I will skip a meal");
                cb(null,money)
            }
        },3000)


}
function backToWork(money,cb){

        setTimeout(()=>{
            console.log('back to work');
            cb(null,money)
        },4000)


}
function goHome(money,cb){

        setTimeout(()=>{
            console.log('It`s time to go home');
            if (money>=10){
                console.log('I will take a bus');
                money-=10;
                console.log(`cash - ${money}`);
                cb(null,'I`m home');
            } else {
                cb('I don`t have enough money, I will walk home. It takes me mach time. I won`t be on lesson...');
            }
        },3000)

}
function lesson(text,cb){

        setTimeout(()=>{
            console.log(text);
            console.log('Watching a lesson');
            if (isLessonHard){
                cb(null,'Im going to sleep')
            }else cb ('I will do my homework and then fall asleap')
        },2000)

}
function sleep(text){

        setTimeout(()=>{
            console.log(text);
        },3000)

}
wakeUp(true, (err, data)=>{
    if (err){
        console.log(err);
    }else{
        breakfast(data, (err, data)=>{
            if (err){
                console.log(err);
            }else {
                gathering(data, (err, data) => {
                    if (err) {
                        console.log(err);
                    } else {
                        wayToWork(data, (err, data) => {
                            if (err) {
                                console.log(err);
                            } else {
                                working(data, (err, data) => {
                                    if (err) {
                                        console.log(err);
                                    } else {
                                        dinner(data, (err, data) => {
                                            if (err) {
                                                console.log(err);
                                            } else {
                                                backToWork(data, (err, data) => {
                                                    if (err) {
                                                        console.log(err);
                                                    } else {
                                                        goHome(data, (err, data) => {
                                                            if (err) {
                                                                console.log(err);
                                                            } else {
                                                                lesson(data, (err, data) => {
                                                                    if (err) {
                                                                        console.log(err);
                                                                    } else {
                                                                        sleep(data);
                                                                    }
                                                                })
                                                            }
                                                        })
                                                    }
                                                })
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
});*/
