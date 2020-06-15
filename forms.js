//// html ////
//  <form action="" id="form">
//      <input id="ttt" type="text" name="firstName"/>
//      <input type="text" name="secondName"/>
//      <input type="text" name="age"/>
//
//      <input type='submit' name="sub" id="sub"/>
//  </form>
//


//// ====== ====== ==== ===== ==== ====== ====== ====== ====== ////


//// js ////

//     let form = document.getElementById("form");
//     let formData = new FormData(form) //// => будет передавать все данные с формы
//     let obj = {}
//     formData.forEach((el, key) => { // el => это значение из формы
// //         if (obj.hasOwnProperty(key)){  // => если надо записть в obj только те значения которые которые содержит обеъкт
//               obj[key] = el               // ключи записаны в name в формме
// //        }
//     });


//// ====== ====== ==== ===== ==== ====== ====== ====== ====== ////


//// --------------- функция добавления в базу --------------- ////
// const url2 = 'http://localhost:3000/users'
//
// function create () { //// создаем объект
//     return new Promise((resolve, reject )=> {
//         let user = {}
//         let form = document.getElementById("form");
//         form.onsubmit = (e) => {
//             e.preventDefault()
//             let newF = new FormData(form)
//             newF.forEach((el, key)=>{
//                 user[key] = el
//             })
//             resolve(user)
//         };
//     })
// }
// function addDB(body) { //// добавляем в базу данных
//     return fetch(url2, {
//         method: 'post',
//         headers: {
//             'content-type':'application/json'
//         },
//         body: JSON.stringify(body)
//     })
// }
// create().then((data)=>{ //// итоговая функция
//     addDB(data)
// })


////// ================== создаем | сравниваем с БД | добавляем | =================

// new Promise((res, rej) => {      ////  => создакем новый обьект из формы
//     formData.forEach((el, key) => {
//         // if (obj.hasOwnProperty(key)){ ////  => если хотим добавить только существующие свойчтва в объект
//         obj[key] = el;
//         // }
//
//         res(obj)
//     });
// })
//     .then((obj) => {             ////  => получаем базу данных для сравнения с обьектом
//         fetch("http://localhost:3000/users")
//             .then((data) => data.json())
//             .then((data) => {
//                 data.forEach((el, key, i) => { //// => сравниваем существует ли объект
//                     switch (el.firstName === obj.firstName || obj.firstName == "") {
//                         case true :
//                             same = true; break;
//                         case false :
//                             same = false;
//                     }
//
//                 })
//
//             })
//             .then(() => { ////  => добавляем в базу
//                 if (same === false) {
//                     fetch("http://localhost:3000/users", {
//                         method: 'post',
//                         headers: {
//                             'Content-type': 'application/json'
//                         },
//                         body: JSON.stringify(obj)
//                     })
//                     console.log("Ok")
//                 } else {
//                     console.log("already exist")
//                 }
//             })
//     })

//// =================== объект в объекте ====================
// let form = document.getElementById("form");
// function createFormObject(e) {
//     e.preventDefault();
//     let x = {
//         firstName: "",
//         secondName: "",
//         address: {
//             city: "",
//             country: ""
//         }
//     };
//
//     let newFormData = new FormData(form);
//     newFormData.forEach((el, key) => {
//         if (key == "firstName" || key == "secondName" || key == "age"){
//             x[key] = el
//         } else if (key == "city" || key == "country"){
//             x.address[key] = el
//         }
//     })
// }