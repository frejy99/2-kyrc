'use strict'

var money = prompt("Ваш бюджет?");
var name = prompt("Название вашего магазина?");
var time = 19;//2 курс цикл

var MainList = {//1 курс
    Budget : "50000",
    Magazin : "SaleStore",
    ShopGoods : ["Кроссовки", "Штаны", "Аксессуары"],//двоеточие почему то только берет тут
    Employers : {
        name : "Vlad",
        age : 28,
        name : "Alexander",
        age : 22,
        name : "Alex",
        age : 18
    },
   open : false // открыт ли магазин
}
for (var i = 0; i < 5; i++ ) { //2 курс циклов
    var a = prompt(" Какой тип товаров будем продавать?");

    if((typeof(a)) === 'string' &&  (typeof(a)) === null && a != "" && a.length < 50 ) {
        console.log("Всё верно!");
        MainList.ShopGoods[i] = a;
    } else {
        
    }

if (time < 0) {//2 курс циклы
    console.log("Такого не может быть");
 } else if (time > 8 && time <20) {
    console.log("Время работать!");
    } else if (time < 24) {
    console.log("Уже поздно!");
        } else{
            console.log("В сутках только 24 часа!");
        }

}
alert(MainList.Budget / 30);// 1 курс бюджет на 30 дней
console.log(MainList);//1 курс
