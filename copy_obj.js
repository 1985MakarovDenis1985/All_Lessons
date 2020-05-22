// const user = {
//     "name": "Denys",
//     "email": "mda@gmail.com",
//     "job": "front-end",
//     "team": {
//         "first": "vsc",
//         "second": "apach"
//     }
// }
//
// let obj = {};

// /// --------------------------- 1 -------------------------------------
// Object.assign(obj, user) /// => Object.assign(target, ...source)

// /// --------------------------- 2 -------------------------------------
// for (let key in user){
//     obj[key] = user[key]
// }

// /// --------------------------- 3 -------------------------------------
// obj = {...user}


// /// --------------------------- 4 глубокое копирование ----------------
// let obj = JSON.parse(JSON.stringify(user))
//
// console.log(obj)
// console.log(user)