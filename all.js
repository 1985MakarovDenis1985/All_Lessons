"use strict"

// .reduce(схлопывае)  ---    вычесление всех елиментов в массиве
// .split    ---    разбиваем на массив
// .push     ---    добавить в конец ел в массив
// .pop      ---    добавить в конец ел в массив
// .shift    ---    удалить с начала
// .unshift  ---    добавить в начало
// .slice    ---    вырезаем arr.slice(begin, сколько el после);
// .concat   ---    соединили два массива
// .splice   ---    удалить ел и тут же вставить -  arr.splice(begin,  кол ел уд,  вставить ел (через запятую))
// .substr() ---    первое зн. с какого ел начать резать  - второй -> сколько резать
// .join     ---    соединяем после .split
//  Object   ---    обьекты
// .forEach(funcnion(){ })            --- метод для перебора массива после for
// .map(function (el, i, ...){ })     --- перебор с созданием нового массива
// .filter(function (el,i){ })        --- перебор массива с фильтрацией
// .revers()                          ---
// .sort(function(a,b){ return a - b }); // функции
// .sort(function(a,b){ return 0 });//      для правильной
// .sort(function(a,b){ return b - a });//  сортировки
// .sort(function(a,b){ return -1 });
// пузырьковый метод сортировки
// .test
// .REPLACE

////=======
//const f = (e) => {
//  console.log("lkjkl");
// }
//
// f()




// var values = [5,5,5]
// var total = values.reduce(function (a, b) {
//   return a * b;
// }, 0);//       0 - на что */+/-// первое число                                                   .reduce(схлопывае)
// console.log(total);//                                              и делает подсчет вычеслений всего массива (ел к ел)


//===============================                                .split
// //
// var arr = "hello Denis! How are you up to today";
// console.log(arr);
//
//                                                               //  создаем мссив из текста - для перебора
//
// var str = arr.split("")// - по буквам; // (" ") - по словам   //.split
// console.log(str);
//
// ==========================

// var str = "Hello Denis! How are you up to today";        // преобразование каждой первой в слове буквы
// var arr = str.split(" ");                               // в заглавную
// console.log(arr);
//
// for (var i = 0; i < arr.length; i++) {
//   arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1);
//   console.log(arr[i]);
// };
//
// str = arr.join(" ");
// console.log(str);


//==========================

// var str = [1,55,33,22,77,88,37];
// var i = 0;
// while(i < str.length){
//   console.log(str[i]);
//   i++;
// };
// str[3] = 101;
// console.log(str);
//
// str.push(111, 333);// добавить в конец         .push
// console.log(str);
//
// str.pop();// удалить с конец                   .pop
// console.log(str);

//============================

// var arr = [1,55,33,22,77,88,37];
// console.log(arr);
//
// for (var i = 0; i < arr.length; i++) {
//   arr[0] = arr[i+1]
// }
// console.log(arr);
//
//
// str.shift();   //       удалить с начала          .shift
// console.log(str);
//
// str.unshift(333);//     добавить в начало        .unshift
// console.log(str);


//===================
// var arr = [1,55,33,22,77,88,37];
// console.log(arr);
// var x;
//
// x = arr.slice(2, 0);    //  вырезаем                  .slice
// console.log(x);
//

// x = x.concat(arr);     // соединили два массива       .concat
// console.log(x);

//====================                                   .splice
//
// var arr = [1,55,33,22,77,88,37];
// console.log(arr);
//
// //
// //        //удалили(i), сколько el    новые el добавили в массив
// //
// arr.splice(1,      2,              31, 31, 31);   // удалили и тут же вставили     .splice
// console.log(arr);

//=====================

// var arr = [1,55,33,22,77,88,37];
// console.log(arr);
//
// var str = arr.join();                        .join
// console.log(str);                           соеденили разбитый массив
//
//=====================

//                                              Object

// var arr =[1,55,33,22,77,88,37];    // просто массив
// var obj = [
//                                   // массив обьектов
//     {"name": "Denis","age":  "33", "massiv": arr},
//     {"name": "Valya","age":  "28", "massiv": arr},
//     {"name": "Alina","age":  "25", "massiv": arr}
// ];
//   console.log(obj);
//
//   console.log(obj[2].age);  // обращение к ключау(age)
//
//   for (var i = 0; i < obj.length; i++) {
//     console.log(obj[i].name + " " + obj[i].age);
//   }

//======================                          forEach
//                                                метод для перебора массива
//                                                вместо "for"
//======= #1

    //  // item – очередной элемент массива.
    //  // i – его номер.
    //  // arr – массив, который перебирается.

// var arr = ["Яблоко", "Апельсин", "Груша"];
//
// arr.forEach(function(item, i, arr) {
//   alert( i + ": " + item + " (массив:" + arr + ")" );
// });
//

//======== #2                              .forEach(funcnion(){ })

//  var arr =[1,55,33,22,77,88,37];
//  var obj = [
//      {"name": "Denis", "age":  "33", "massiv": arr},
//      {"name": "Valya", "age":  "28", "massiv": arr},
//      {"name": "Shpana","age":  "1",  "massiv": arr}
//  ];
//
// // element =  obj[i](все i)  // i = индекс(просто номер) // arr = сам массив(obj)
//
//  obj.forEach(function(element, i, arr) {     просто пеореберает массив
//     console.log(i, arr[i].name );
//  });


//==========                                   метод .map

//                                           - переберает массив, клонирует его
//                                             и создает новый с изменениями
//
// var arr = "Hello Denis! How are you up to today";
// arr = arr.split(" ");
// var x;
//
// x = arr.map(function(el) {
//    return el[0].toUpperCase() + el.substr(1);
// });
//
// console.log(x);
// console.log(arr);


//======== как сделать цепочную функцию =========//

 // var arr = "Hello Denis! How are you up to today";
 //
 // var x = arr.split(" ").map(function(el) {
 //   return el[0].toUpperCase() + el.substr(1);
 // }).join(" ");
 //
 // //--------- с =>
 //
 // var x = arr.split(" ").map( (el) =>
 //   el[0].toUpperCase() + el.substr(1) ).join(" ");
 //
 //
 // console.log(x);


// LESSON 3

//  =============                           forEach(function (el, i, ...))
// var arr = [1,2,3,4,5,6,7,8,9];
// console.log(arr);
//
// arr.forEach(function(el, i, dif_arr) {
//   if (dif_arr[i]%2 == 0) {
//     console.log(arr[i]);
//   }
// });

 //       =====                              for
 // var arr = [1,2,3,4,5,6,7,8,9];
 // console.log(arr);
// for (var i = 0; i < arr.length; i++) {
//   if(arr[i]%2 == 0){
//     continue;
//   }
//   console.log(arr[i]);
// }

//   =========                                map(function (el, i, ...))

// var arr = [1,2,3,4,5,6,7,8,9];
// console.log(arr);
//
// var x = arr.map(function(el, i, dif_arr) {
//   if (dif_arr[i]%2 == 1) {
//     console.log(arr[i]);
//     return arr[i];
//   }
// });
// console.log(x);

//=====================                      filter(function (el,i))

// var arr = [1,2,3,4,5,6,7,8,9];
// console.log(arr);
//
// var x = arr.filter(function(el, i) {
//   return el%2 == 0;
// });
// console.log(x);

//=====================                       revers()

// var arr = [1,2,3,4,5,6,7,8,9];
// // console.log(arr.reverse());
//                                           //  метод с нутри
// function reverseArr(data) {
//   var temp = []
//   for (var i = data.length; i > 0; i--) {
//     console.log(data[i]);
//     temp.push(data[i]);
//     }
//     return temp
// };
// reverseArr(arr)



//                                         //    sort

// var arr =[1,5,3,7,9,0,6,8,4,2,11,23];
// console.log(arr.sort(function(a,b){ return a - b })); // функции
// console.log(arr.sort(function(a,b){ return 0 }));//      для правильной
// console.log(arr.sort(function(a,b){ return b - a }));//  сортировки
// console.log(arr.sort(function(a,b){ return -1 }));
//


//                                         //    под капотом
// function sortArr(data) {
//   var temp;
//
//   for (var i = 0; i < data.length; i++) {
//     console.log(data[i]);
//     // перебор в переборе
//     for (var j = 0; j < data.length; j++) {
//       if (data[j]<data[i]) {
//         console.log("left hand : " + data[i]);
//         console.log("in array" + data[j]);
//
//         temp = data[i]; // from left yo temp
//         data[i] = data[j];// from right to left
//         data[j] = temp;
//         // continue;
//       }
//     }
//   }
//   return data;
// }
// console.log(sortArr(arr));

//                                         // пузырьковый метод


// var arr =[4,3,6,5,1,2,7,9,8,];
// var temp;
//
// function sortArr(data) {
//   for (var i = data.length; i > 0; i--) {
//     console.log(data);
//       for (var j=0; j < i; j++) {
//         console.log("i : " + data[i]);
//         console.log("j : " + data[j]);
//         if (data[i] < data[j]) {
//           temp = data[i];
//           data[i] = data[j];
//           data[j] = temp
//         }
//       }
//   }
//   return data;
// }
// console.log(sortArr(arr));




                              ////           every(funcnion)
 // var arr =[4,3,6,5,1,2,7,9,8,];
 // var temp;
 //
 // temp = arr.every(function (el) {    //       что бы пройтись по каждому элименту
 //   return el < 0;                    //       и выполнить услови если все числа...
 // });                                 //       положительные или отрицательные к примеру
 // if (temp) {
 //   console.log("Ok");
 // }else{
 //   console.log("Not");
 // }
 //
 //
 //



    // TEST

    //[a-zA-Z]/.test(document.getElementById("test").value)

    // [\d] - для цифр
    // [\D] - для нецифр



//// REPLACE
// let x = "lsdkcak ksh sk hkhasf  khe fe  iehf ";
// console.log(x.replace(/a/g, "Z"));











//
