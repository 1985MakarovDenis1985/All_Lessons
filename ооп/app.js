//// ============================================== 1 ==============================================
// function seyHello(firstName, secondName) {
//     console.log(`Hello ${firstName}  ${secondName}!`)
// }
// seyHello("Denys", "Makarov");
//// ========================

//// ============================================== 2 ==============================================
// const person1 = {
//     "name":"Denys",
//     "famile":"Makarov"
// };
// const person2 = {
//     "name":"Valentina",
//     "famile":"Happy"
// };
//
// function seyHello(person) {
//     console.log(`Hello ${person.name}  ${person.famile}!`)
// }
// seyHello(person2)
///==========================


//// ============================================== 3 ==============================================
// const person1 = {
//     "name":"Denys",
//     "famile":"Makarov"
// };
// const person2 = {
//     "name":"Valentina",
//     "famile":"Happy"
// };
//
// function seyHello() {
//     console.log(`Hello ${this.name}  ${this.famile}!`)
// }
// seyHello.bind(person2)();


//// ============================================== 4 ==============================================
// const person1 = {
//     "name":"Valentina",
//     "famile":"Happy",
//     "age":"30",
//     seyHello(){
//         console.log(`Hello ${this.name}  ${this.famile}! Мне ${this.age} лет`)
//     }
// };
//
// function seyHello() {
//     console.log(`Hello ${this.name}  ${this.famile}!`)
// }
// person1.seyHello()
////=============================


//// ============================================== 5 ==============================================
// function getPerson(name, family, age) {
//     const person = {
//         name:name,
//         family:family,
//         age:age,
//
//         sayHello () {
//             console.log(`Hello! My name is ${this.name}. I am ${this.age} age old`)
//         }
//     };
//     return person
// }
// const person1 = getPerson("Denys", "Makarov", 33);
// const person2 = getPerson("Valentyna", "Happy", 30);
// person1.sayHello();
// person2.sayHello();
// console.log(person1);


//// ============================================== 6 ==============================================
// function Person(name, family, age) {
//     this.name = name;
//     this.family = family;
//     this.age = age;
//     this.sayHello = () => {
//             console.log(`Hello! My name is ${this.name}. I am ${this.age} age old`)
//     };
//     return this // можно не писать
// }
// Person.prototype.address = "Canada"; // в основном слассе Person не будет существовать но отдельно присвоить можно
//
//         // также можно в прототип написать и функцию :
// Person.prototype.newFun = function newFunction ()  {
//     console.log(`Hello! My name is ${this.name}. I am ${this.age} age old soon`)
// };
//
// const person = new Person("Denys", "Makarov", 33);  //   this это person1
// person.sayHello();
// console.log(person); // address отсутствует как свойство
// console.log(person.address); // address присвоен отдельно
// person.newFun(); // function присвоена так же через прототип


//// ============================================== 7 ==============================================
// function Person(name, family, age) {
//     this.name = name;
//     this.family = family;
//     this.age = age;
//
// Person.count +=1;
// }
// Person.count = 0;  // => Статическое свойство (счетчик сколько создано обьектов)
//
// Person.prototype.newFun = function newFunction ()  {
//     console.log(`Hello! My name is ${this.name}. I am ${this.age} age old soon`)
// };
//
// const person1 = new Person("Denys", "Makarov", 33);
// const person2 = new Person("Valentyna", "Happy", 30);
// const person3 = new Person("Valentyna", "Happy", 30);
//
//
// person1.newFun();
// person2.newFun();
// console.log(Person.count);


//// ============================================== CLASS ==============================================

// class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     sayHello () {
//         console.log(`My name is ${this.name}! I am ${this.age} yers old`)
//     }
// }
//
// const person = new Person("Denys", 33);
// person.sayHello();


//// ============================================== наследование ==============================================

// class Animal {
//     constructor (name) {
//         this.sound = "";
//         this.name = name;
//     }
//     voice () {
//         console.log(this.sound)
//     }
// }
//
// class Dog extends Animal{
//     constructor (name){
//         super(name);
//         this.sound = "dog bark 'hav' " // =>
//     }
//     voice () {
//         console.log("собака говорит: Gafff")
//     }
// }
// class Cat extends Animal{
//     constructor (name){
//         super(name);
//         this.sound = "myyy"
//     }
// }
//
// let cat = new Cat("Mila");
// let dog = new Dog("Bobby");
//
// cat.voice(); // => сначало ищет в прототипе Cat - не находит и подномиется на Animal
// dog.voice(); // => сначало ищет в прототипе Dog  и находит


//// ===== пример наследование =======

// class Point {
//     constructor() {
//         this.x = 0;
//         this.y = 0;
//     }
// }
//
// class Circle extends Point {
//     constructor() {
//         super();
//         this.r = 0;
//     }
// }
//
// class Ring extends Point {
//     constructor() {
//         super();
//         this.R = 0;
//     }
// }
//
// class Jewelre extends Ring {
//     constructor() {
//         super();
//         this.coust = 100;
//     }
// }
//
// const x = new Jewelre();
// console.log(x)


// ================================ add ================================ //
// let user = {
//     name : "Bob",
//     fun: function () {
//         console.log("Hello " + this.name)
//     }
// }; => обязательно точка с запятой
//
// (user.fun)()


// let states =  {
//     state1:{
//         address: "Zaporizye",
//         inhabitans: 800000,
//     },
//     state2:{
//         address: "Dnipro",
//         inhabitans: 1000000,
//     }
// };
//
// console.log(states)
// console.log(states.state1)

// let obj = {}
// function f() {
//     let inp = document.getElementById("text")
//     inp.addEventListener("keypress", (e)=>{
//         // e.preventDefault();
//         if (e.keyCode == 13) {
//             console.log(inp.value);
//             obj.name = inp.value;
//             obj.fam = inp.value + "hhhhhh"
//             console.log(obj);
//         }
//     })
// }
// f()

// ================================ add 2 ================================ //

// const point = {
//     x: 100,
//     y: 111,
//
//     print() {
//         console.log(this.x, this.y)
//         return this
//     },
//
//     moveTo(dx, dy) {
//         this.x += dx;
//         this.y += dy;
//         // console.log(this.x, this.y)
//         return this
//     }
// };
//
// function main() {
//     // // const result = point.print();
//     // // const result_2 = result.print();
//     // // result_2.print()
//
//     point.print()
//         .print()
//         .print()
//         .moveTo(11, -11)
//         .print()
// }