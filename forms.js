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
//         obj[key] = el               // ключи записаны в name в формме
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