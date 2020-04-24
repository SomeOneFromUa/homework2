function userCard(number) {
let balance = 100;
let transitionLimit = 100;
let historyLogs =[];
let key = number;


function getCardOptions() {
return {balance,
transitionLimit,
    historyLogs,
    key
}



}
function logoperation(type, change) {
    function render(number){
        if (number<10){
            let newnumber='0'+number;
            return newnumber
        }else return number
    }

    let h = new Date();
    let time = `${render(h.getDate())}/${render(h.getMonth())}/${h.getFullYear()}, ${render(h.getHours())}.${render(h.getMinutes())}.${render(h.getSeconds())} `;
    let obj = {operationType: type, credits: change, operationTime: time};
historyLogs.push(obj)
}



function takeCredits(money) {
    if (money<=balance && money<=transitionLimit){
        balance-=money;
        logoperation('Withdrawal of credits', money);
        return balance;
    }else  if (money>balance) {console.error(`you don't have enough money`);
    }else if (money>transitionLimit){
        console.error(`out of transition limit`);
    }
}


function putCredits(money) {
    balance+=money;
    logoperation('Received credits', money);
    return balance;
}

function setTransitionLimit(limit) {
    transitionLimit = limit;
    logoperation('Transition Limit change', limit);
    return transitionLimit;
}

function transferCredits(credits, card) {
    if (credits<=balance && credits<=transitionLimit){
        takeCredits((credits+(credits*0.005)));
        return card.putCredits(credits);
    }else  if (credits>balance) {console.error(`you don't have enough money`);
    }else if (credits>transitionLimit){
        console.error(`out of transition limit. You can change your limit in options`);
    }
}




return {
    getCardOptions,
    putCredits,
    takeCredits,
    setTransitionLimit,
    transferCredits
}
}



/*
let card1 = userCard(1);

card1.putCredits(150);

card1.setTransitionLimit(5000);
let card2 = userCard(2);
card1.transferCredits(200,card2);
card1.putCredits(5000);
card1.takeCredits(5001);
console.log(card1.getCardOptions());
console.log(card2.getCardOptions());
console.log(card2);
*/

console.log('---------------------------------------------');


class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
    }
    addCard(number){
        for (const card of this.cards) {
            if (card.num === number) return console.error('you already have card with this key'
            );
        }
        if (this.cards.length > 2) {
             console.error('you can`t add more then 3 cards');
        }else {
            let card = userCard(number);
            this.cards.push({num: number, cardObj: card});
        }
    }
    getCardByKey(key){
       if (this.cards.find((element)=>{
           return  element.num === key})){
           for (const card of this.cards) {
               if (card.num === key){
                   return card.cardObj;
               }
           }
       }else return console.error('key is not found');

    }
}


let user1 = new UserAccount('bob');
user1.addCard(1);
user1.addCard(2);
user1.addCard(2);
user1.addCard(3);
user1.addCard(4);
console.log(user1);

let card1 = user1.getCardByKey(1);
let card2 = user1.getCardByKey(2);
let card3 = user1.getCardByKey(3);
let card4 = user1.getCardByKey(4);



card1.putCredits(500);
card1.setTransitionLimit(800);
card1.transferCredits(300, card2);
card2.takeCredits(50);



console.log(card1.getCardOptions());
console.log(card2.getCardOptions());
console.log(card3.getCardOptions());