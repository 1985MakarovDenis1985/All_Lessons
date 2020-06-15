
//// ===== html =====
// <form action="" id="form">
//     <input id="" type="text" name="firstName" value="Denys"/>
//     <input type="text" name="secondName"/>
//     <input type="text" name="age"/>
//
//     <textarea name="textArea" id="t" cols="5" rows="2"></textarea>
//
//     <select name="selectOpt" id="">
//         <option value="1">11</option>
//         <option value="2">22</option>
//         <option value="3">33</option>
//     </select>
//
//     <input type='submit' name="sub" id="sub"/>
// </form>
////

//// ======== js =======

// let url = "http://localhost:3000/users";
// let form = document.getElementById("form")
//
// function myRequest() {
//
//     let formData = new FormData(form) //// => будет передавать все данные с формы
//     let obj = {}
//     formData.forEach((el, key) => {
//         obj[key] = el
//     });
//     getReq(url, obj) // => obj это data
// }
//
// async function getReq(url, data) {
//     const res = await fetch(url, {
//         method: "POST",
//         headers: {
//             "Content-type": "application/json; charset=utf-8"
//         },
//         body: JSON.stringify(data)
//     })
// }
//
// form.addEventListener("submit", (e) => {
//     e.preventDefault()
//     myRequest()
// }, {"once": true})