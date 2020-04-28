"use strict"

var products = [
  {"name":"snikers #1", "price":"125.22", "image":"bg-01.jpg", "discription":"This is a cool snikers"},
  {"name":"snikers #2", "price":"225.22", "image":"bg-02.jpg", "discription":"This is a cool snikers"},
  {"name":"snikers #3", "price":"155.99", "image":"bg-03.jpg", "discription":"This is a cool snikers"},
  {"name":"snikers #4", "price":"125.75", "image":"bg-04.jpg", "discription":"This is a cool snikers"},
  {"name":"snikers #5", "price":"129.32", "image":"bg-05.jpg", "discription":"This is a cool snikers"},
  {"name":"snikers #6", "price":"155.15", "image":"bg-06.jpg", "discription":"This is a cool snikers"},
  {"name":"snikers #7", "price":"325.52", "image":"bg-07.jpg", "discription":"This is a cool snikers"},
  {"name":"snikers #8", "price":"425.22", "image":"bg-08.jpg", "discription":"This is a cool snikers"},
];


function createNewElement(tag, innerContent=null, classStr=null, attr=null) {
var el = document.createElement(tag);
    el.innerHTML = (innerContent)?innerContent:"";
    el.className = (classStr)?classStr:"";

    // if (attr) {
    //   el.setAttribute(attr.name, attr.value);
    // }
    if(attr){                                                         // что бы поставить несколько
      attr.map((attrEl) => el.setAttribute(attrEl.name, attrEl.value))// атрибутов
    }                                                                 // --- для этого все атрибуты в функции должны быть обернуты в array []



return el;
};

function createCard(product) { // создаем block "card-body" с елементами в нутри: h5, p, a;
  var title = createNewElement("h5", product.name, "card-title");
  var p = createNewElement("p", product.discription, "card-text");
  var link = createNewElement("a", "Add to card", "btn btn-primary", [{"name":"href", "value":"#"}]);//--- обертка []

  // var cardBoby = createNewElement("div", "", "card-body");
  // cardBoby.appendChild(title);
  // cardBoby.appendChild(p);
  // cardBoby.appendChild(link);

                // измененный cardBoby с помощью фенкции //
  var cardBoby = creatFamily(createNewElement("div", "", "card-body"), [title, p, link]);


                              // создаем img
  var img = createNewElement("img", product.name, "card-img-top", [{"name":"src", "value":"img/"+product.image},{"name":"alt", "value":"Ok!"}]);//--- обертка []
                              // создаем block "card" с img и block`ом "card-body" в нутри
  // var card = createNewElement("div", "", "card");
  // card.appendChild(img);
  // card.appendChild(cardBoby);

  // переработанный card //
  var card = creatFamily(createNewElement("div", "", "card"), [img, cardBoby]);


                              // создаем block "catalog-item" и ложем в него block "catalog-item";
  // var catalogItem = createNewElement("div", "", "col-lg-3 col-md-6 catalog-item");

  //переработанный catalogItem
  var catalogItem = creatFamily(createNewElement("div", "", "col-lg-3 col-md-6 catalog-item"),[card]) ;

  // catalogItem.appendChild(card)
  return catalogItem;
};

// функция для cardBoby
function creatFamily(html, array_el) {
  array_el.map((el)=>html.appendChild(el));
  return html;
}

////========>>>>>>>>> далее создаем массив с блоками выше (catalog-item) обращаясь к массиву "products"
// var htmlProductsArray = products.map((el) => createCard(el));

////========>>>>>>>>> далее обращаемся к blokу в HTML через id => "catalog" и закидываем туда наш массив из "catalog-item";
var catalog = document.getElementById("catalog");
// htmlProductsArray.map((el) => catalog.appendChild(el))  // проходим по массиву блоков из "catalog-item"
                                                        // ... и все элементы массива включаем в блок с id = "catalog"
products.map((el) => catalog.appendChild(createCard(el))) // <= укароченный вариант (55 и 59) строки

console.log(catalog);









//
// <div class="col-lg-3 col-md-6 catalog-item">
//   <div class="card">
//     <img class="card-img-top" src="img/bg-03.jpg" alt="Card image cap">
//     <div class="card-body">
//       <h5 class="card-title">Card title</h5>
//       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//       <a href="#" class="btn btn-primary">Go somewhere</a>
//     </div>
//   </div>
// </div>


// как сделать блок с элиментами через функцию //

// изначальный cardBoby:
// var cardBoby = createNewElement("div", "", "card-body");
// cardBoby.appendChild(title);
// cardBoby.appendChild(p);
// cardBoby.appendChild(link);
//
// функция:
// function foo(html, array_el) {
//   array_el.map((el)=>html.appendChild(el));
//   return html;
// }
//
// переработанный cardBoby
// var cardBoby = foo(createNewElement("div", "", "card-body"), [title, p, link]);
//
