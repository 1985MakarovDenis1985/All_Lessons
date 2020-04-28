// function f() {
//     console.log("arguments: ");
//     console.log(arguments);
// }
//
// f(1, 2)
//
// sum = (x, ...rest) => {   // //  синтаксис оставшихся параметров
//     console.log(rest);
//     return rest.reduce((acc,el)=>acc+el, 0)
// }
// console.log(sum(1,2,3));
//

////////////////////////////////////////////////////////////

// const x = (x, y, z, ...rest) => {   // //  синтаксис оставшихся параметров
//     console.log(x);
//     console.log(y);
//     console.log(z);
//
//     console.log(rest);
// };
//
// const arr = [1,2,3,4,5] //// если подставить arr то заберется только 4, 5
//
// x(...arr);

////////////////////////////////////////////////////////////

// деструктуризация
// const {name, age, gander} = {name:"Denis", age:"33", gander:"male"};
//
// console.log(name);
// console.log(age);
// console.log(gander);

////////////////////////////////////////////////////////////

// function builder(tag) {                       //// замыкание
//     console.log(tag);                         //// <div>cont</div>
//     return function (content) {
//         return  `<${tag}>${content}</${tag}>`
//     }
// }
//
// const div = builder("div");
// console.log(div);
// console.log(div("content"));
// console.log(div("another"));

/////////////////////////////////////////////////////////////

// var tag = "111111"
// function builder() {                       //// замыкание
//     console.log(tag);
//     return function (content) {
//         return  `<${tag}>${content}</${tag}>`
//     }
// }
//
// const div = builder("div");
// // console.log(div);
// console.log(div("content"));          //// <11111>content</111111>
//
// var tag = "22222"                    //// <22222>cont</22222>
// console.log(div("text"));            //// подхватывает внешние переменные

/////////////////////////////////////////////////////////////

// function builder(tag) {
//     return function (obj) {
//         return  `<${tag} className="${obj.className}">${obj.contant}</${tag}>`
//     }
// }
// const div = builder("div");
//
// console.log(div({contant:"CONTANT", className: "container"}));      ///// конструктор создает <div className = container>CONTANT</div>

//////////////////////////////////////////////////////////////

//// расспаковуем обьект  => можно и так=)
// function builder(tag) {
//     return function ({contant, className}) {  //// => обязательно ({...})
//         return  `<${tag} className="${className}">${contant}</${tag}>`
//     }
// }
// const div = builder("div");
//
// console.log(div({contant:"CONTANT", className: "container"}));

//////////////////////////////////////////////////////////////

// let a = 5, b = 10;
// [a,b] = [b,a];  ////  c помощью дструктиризации поменяли местами переменные
//
// console.log("a",a);
// console.log("b",b);

//////////////////////////////////////////////////////////////


//// работа конструктора

// let div = document.createElement("div");
// div.setAttribute("id", "1");
// document.body.appendChild(div);
//
// class X {
//     constructor(tag, id){
//         this.div = document.getElementById(id)
//         this.tag = tag
//     }
//     add(){
//         this.div.innerHTML = this.tag
//     }
// }
//
// let y = new X();
//
// let x = new X("span", 1);
// x.add();

//////////////////////////////////////////////////////////////


//// pattern  ???????? не работает
//
//  console.log("Patterns: ");
//
// function Observeable() {
//
//     const observers = [];
//
//     this.addObs = (obs) => {
//         observers.push(obs)
//     }
//
//     this.putToBasket = (text) => {
//         observers.map(el => el.notify(text))
//     }
// }
//
// function observer(behavior) {
//     this.notify = (text) => behavior(text)
// }
//
// const observable = new Observeable();
//
// const obs1 = new Observeable((text) => {console.log(`Obs1: ${text}`)});
// const obs2 = new Observeable((text) => {console.log(`Obs1: ${text}`)});
// const obs3 = new Observeable((text) => {console.log(`Obs1: ${text}`)});
//
// observable.addObs(obs1);
// observable.addObs(obs2);
// observable.addObs(obs3);
//
//
// observable.putToBasket("hjghjgjhfh");


