
//// реактив когда текст появляется динамически

const input = document.getElementById("exampleInputEmail1")

input.addEventListener("input", (e)=>{
    console.log("input");
    document.getElementById("h1").innerHTML = e.target.value
})


console.log(input);