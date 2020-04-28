"use strict"



var nav = document.createElement("div")
	nav.setAttribute("id","nav");
	nav.innerHTML = "Main Box";
	document.body.appendChild(nav);
var ul = document.createElement("ul");
	nav.appendChild(ul);



var items = [
	{"name":"page_1", "href":"test_1.html"},
	{"name":"page_2", "href":"test_2.html"},
	{"name":"page_3", "href":"test_3.html"}
];

for (var i =0; i<items.length; i++){
	var li = document.createElement("li");
	var a = document.createElement("a");
	a.setAttribute("href", items[i].href);
	a.innerHTML = items[i].name;
	a.setAttribute("class", "link");

	if(document.location.href.indexOf(items[i].href) != -1){
		a.classList.add("active");
	}


	ul.appendChild(li);
	li.appendChild(a);
}