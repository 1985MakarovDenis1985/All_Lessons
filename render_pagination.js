const products = [
    {"name": "Snikers #1", "price": 103.50, "image": "bg-01.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
    {"name": "Snikers #2", "price": 152.14, "image": "bg-02.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
    {"name": "Snikers #3", "price": 202.22, "image": "bg-03.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
    {"name": "Snikers #4", "price": 240.00, "image": "bg-04.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
    {"name": "Snikers #5", "price": 180.30, "image": "bg-05.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
    {"name": "Snikers #6", "price": 186.50, "image": "bg-06.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},

    {"name": "Snikers #7", "price": 111.60, "image": "bg-07.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
    {"name": "Snikers #8", "price": 169.64, "image": "bg-08.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
    {"name": "LeBron 16 #9", "price": 215.20, "image": "bg-09.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
    {"name": "Nike Zoom KD11 #10", "price": 245.00, "image": "bg-10.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
    {"name": "Snikers #11", "price": 109.30, "image": "bg-05.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
    {"name": "Snikers #12", "price": 198.50, "image": "bg-06.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},

    {"name": "Snikers #13", "price": 128.69, "image": "bg-01.jpg", "description": "These are very cool snikers. Nice colorfull and quality"},
    {"name": "Snikers #14", "price": 179.00, "image": "bg-02.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
    {"name": "Snikers #15", "price": 260.20, "image": "bg-03.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},

    {"name": "Snikers #16", "price": 301.20, "image": "bg-03.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
];


function createNewElement(tag, innerContent=null, classStr=null, attr=null){
    var el = document.createElement(tag);
    el.innerHTML = (innerContent)?innerContent:"";
    el.className = (classStr)?classStr:"";

    if(attr){
        attr.map((attr_rl)=>el.setAttribute(attr_rl.name, attr_rl.value));
    }

    return el;
}

function createCard(product){
    var link = createNewElement("a", "Add to cart", "btn btn-primary",[{"name":"href", "value":"#"}]);
    var p = createNewElement("p", product.description, "card-text");
    var title = createNewElement("h5", product.name, "card-title");

    var cardBody = attachChilderToParent(createNewElement("div", null, "card-body"), [title,p,link]);

    var image = createNewElement("img", null, "card-img-top", [{"name":"src", "value":"images/"+product.image},{"name":"alt", "value":product.name}]);

    var card = attachChilderToParent(createNewElement("div", null, "card"), [image,cardBody]);

    var catalogItem = attachChilderToParent(createNewElement("div", null, "col-lg-3 col-md-6 mb-2 catalog-item"), [card]);

    return catalogItem;
}

function attachChilderToParent(html, array_el){
    array_el.map((el)=>html.appendChild(el));
    return html;
}

var catalog = document.getElementById("catalog");
// products.map((el)=>catalog.appendChild(createCard(el)));






let per_page = 6;
let current = 0;

function firstI() {
    return current*per_page;
};

function secondI(i) {
    return i < current*per_page + per_page && i < products.length;
}

function renderProducts(){
    catalog.innerHTML = "";
    for (var i=firstI(); secondI(i);i++){
        catalog.appendChild(createCard(products[i]));
    };
};

renderProducts()



let pag_buttons = document.getElementsByClassName("page-link");

Array.from(pag_buttons).map((el)=>{
    el.addEventListener("click",(e)=>{
        console.log(e.target.dataset.link);
        current = e.target.dataset.link;
        renderProducts()
    });
});

