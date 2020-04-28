
// =========================== call =========================== //
//
// function showFullName() {
//     console.log( this.firstName + " " + this.lastName );
// }
// var user = {
//     firstName: "Василий",
//     lastName: "Петров"
// };
//
// // функция вызовется с this=user
// showFullName.call(user) // "Василий Петров"
// showFullName.call() // undefined -/- undefined
//
//
// =========================== call более сложный =========================== //
//
// // first:
// var user = {
//     firstName: "Василий",
//     surname: "Петров",
//     patronym: "Иванович"
// };
// function showFullName(firstPart, lastPart) {
//     console.log( this[firstPart] + " " + this[lastPart] );
// }
//
// // ===  function.call(контекст, аргумент1, аргумент2, ...)  == //
// showFullName.call(user, 'firstName', 'surname') // "Василий Петров"
// showFullName.call(user, 'firstName', 'patronym') // "Василий Иванович"
//
// // second:
// var employee = {
//     name: "Denys",
//     position: "middle-developer",
//     salary: 7000
// };
// function promotion(position, salary) {
//     this.position = position;
//     this.salary += salary;
//     console.log(`${this.name}  position: ${this.position} with salary: $${this.salary}`)
// }
// promotion.call(employee, "senior-developer", 5000);
//
//
// // =========================  apply ========================== //

// // apply => почти тоже самое но аргументы передаются в виде массивов
// promotion.call(employee, "senior-developer", 5000);
// promotion.apply(employee,["senior-developer", 5000]);
//
//
// =========================== arguments ======================= //
//
// function sumArgs() {
//     return console.log(arguments[0] + arguments[1])
// }
// sumArgs(1,2);


var user = {
    firstName: "Вася",
    sayHi: function() {
        console.log( this.firstName );
    }
};

setTimeout(function() {
    user.sayHi(); // Вася
}, 1000);

let x = {
    name: ["11", "22"]
}
console.log(x.name[1])
console.log(Date())
