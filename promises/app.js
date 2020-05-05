
// let a = 7;
// console.log(a);
//
// let b = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(a += 8);
//     },1000)
// })
// b.then(function () {
//     console.log(a)
// })

// =====================  instance #2 ========================= //

// let obj = {};
// let p = new Promise((resolve, reject) => {
//     console.log("preparing ...");
//     setTimeout(() => {
//         const backEndData = {
//             server: "aws",
//             port: "3030",
//             status: "working",
//         };
//         obj = {
//             server: "Tiphon",
//             port: 9000,
//         };
//         resolve([backEndData, obj]) // => для передачи неск. ел => []
//     }, 1000)
// })
//     .then(([backEndData, obj]) => { // => для приема неск. ел => []
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log("------------------ 1");
//                 console.log(backEndData);
//                 console.log(obj);
//                 resolve([backEndData, obj]);
//             }, 1000);
//         })
//     })
//     .then(([backEndData, obj]) => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 obj.port = 8000;
//                 console.log("------------------ 2");
//                 console.log(backEndData)
//                 console.log(obj)
//                 resolve(backEndData)
//             }, 500)
//         })
//     })
//     .catch((err) => {  //-------------- перехватываем ошибки
//         console.error("ошибка", err)
//     })
//     .finally(()=>{ // --------- финальные действия даже при ошибки
//         console.log("Finaly")
//     })
//
//
// // ------------------------ ФУНКЦИИ ЧЕРЕЗ ПРОМИСЫ | .ALL  .RACE -----------------------
//
// const sleep = function (ms) {
//     return new Promise((res, rej) =>{
//         setTimeout(()=>{
//             res()
//         }, ms)
//     })
// };
//
// sleep(2000).then(() => {console.log("еще рано")});
// sleep(3000).then(() => {console.log("пора вставать")});
//
// /*
// .all =>  then выполняется после всех выполненых промисов
//  */
// Promise.all([
//     sleep(3000).then(()=>console.log("3000")),
//     sleep(2000).then(()=>console.log("2000"))
// ])
//     .then(()=>{ // => после выполнения всех промисов выполняется then
//         console.log("completed All")
//     });
//
// /*
// .race =>  then выполняется после первого выполненного промиса
//  */
// Promise.race([
//     sleep(3000).then(()=>console.log("3000")),
//     sleep(2000).then(()=>console.log("2000"))
// ])
//     .then(()=>{
//         console.log("completed Race")
//     })
//// -----
// polifyll
// <script src="https://cdn.jsdelivr.net/npm/promise-polyfill@8/dist/polyfill.min.js"></script>






// ====================== reduce ======================= //

// let x = [1,2,3,4,5,6,7,8,9];
// let y = x.reduce(function (total, number) {
//     return total + number
// });
// console.log(y);


// ========================== every ==================== //
// => проверяет является ли каждый елимент массива единому значению и выдает либо false либо true

// let x = [1,2,3,4,5,6,7,8,9];
// let y = x.every(function (value, index, array) {
//     return value > 5
// });
// console.log(y);


// ========================== some ==================== //
// => проверяет является ли хоть один елимент массива единому значению и выдает либо false либо true

// let x = [1,2,3,4,5,6,7,8,9];
// let y = x.some(function (value, index, array) {
//     return value > 5
// });
// console.log(y);



