console.log("App was loaded... ");


const a = {
    name: "Denis",
    count: 0,
    greetting(){
        console.log("Hello Vancuver " + this.name);   //// this - означает сто браться нейм будет у каждого скопированного обьекта с измененным именем свое имя
    }
}
// console.log(a);

a.desc = "Hello"            //// динамически создаем свойства
// console.log(a.desc);        //// использ новое свойство
// console.log(a["desc"]);     //// другой вариант вызова свойства

////////////////////////

const str = "name";         //// запихтваем свойство в переменную

// console.log(a[str]);        //// так можно
// console.log(a.str);         //// так не работает

////////////////////////
////перебор свойств

// prop => включить для наших свойств
// a    => наша переменная
// console.log("следующая строка... ");

for (prop in a){
    // console.log(prop);                      //// => (name, desc)
    // console.log(`${prop} : ${a[prop]}`);      //// => (name:Denis, desc:Hello)
}

///////////////////////
//// b всегда равняеться a  и наоборот
////    ОБЬЕКТЫ ПЕРЕДАЮТСЯ ПО ССЫЛКЕ

const b = a;
a.count = 1;
// console.log(b); //// b всегда будет менятся вместе с а, а будет = b

function f(a) {  ////   <= СДЕСЬ НЕ ПЕРЕМЕННАЯ А ССЫЛКА НА НЕЕ
    a.x = "X"          //  ПОЭТОМУ ОНА ГЛОБАЛЬНО И НЕ МЕНЯЕТСЯ
    a = null
    // console.log("in f: " + a); //// => выведет null
}

f(a)                    //// => в глобальную a добавили свойство x
// console.log("out f: " + a);    //// => выведет полный обьект

///////////////////////
//// что бы клонировать обьект и работать с ним отдельно =>

const c = {};
for (prop in a) {
    c[prop] = a[prop]
}

c.x = "C";             //// c => а но с измененным свойством х
c.name = "Valia"
// console.log(c);
// console.log(a);        //// а => остался не изменным

////////////////////////
// как сделать метод и запихнуть его в свойство

a.greet = function (smt, par) {          //// => делаем метод и запихимаем его в свойство
    console.log("Hello Canada" + smt + par);
}
a.greet();                        //// => ызываем метод
// можно упростить:
// const a = {
//     name: "Denis",
//     count: 0,
//     greetting(){                //// => таким образом запихнув в общее свойство
//         console.log("Hello Vancuver");
//     }
// }

a.greet(" I am ",a.name);     //// => достучались до свойства в функции
a.greetting();
c.greetting();


////////////////////////
//// использование контекста this
var name = " I don`t know who you are ";

const d = {
    name: "Spana",
    count: 0,
    greetting(){
        // console.log("Hello Vancuver " + this.name);   //// this - означает сто браться нейм будет у каждого скопированного обьекта с измененным именем свое имя
        return function () {
            console.log("Hello Vancuver " + this.name);  //// сдесь вызывает глобальную переменную
        }
    }
};
d.greetting();
d.greetting()();


            //// только при обычной функции
            //// но если это будет стрелочная функция - то она берет this на ступень выше!!! =>
            //// но стрелочная ф пишется только в нутри обычной ф
const n = {
    name: "Spana",
    count: 0,
    greetting(){
        // console.log("Hello Vancuver " + this.name);   //// this - означает сто браться нейм будет у каждого скопированного обьекта с измененным именем свое имя
        return  () => {
            console.log("Hello Vancuver " + this.name);  //// сдесь вызывает глобальную переменную
        }
    }
};
n.greetting();
n.greetting()(); ////  и тут уже this берется только у константы n


////////////////////////








