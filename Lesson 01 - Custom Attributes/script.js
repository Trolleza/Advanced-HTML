let list = document.getElementById("list");

list.dataset.anything = 4;

let id = parseInt(list.getAttribute("data-id"));
console.log(id);

let num = parseInt(list.dataset.anything);

let content = ""

for(let i = 0; i < num; i++){
    content += "<li>" + i + "</li>";}

    list.innerHTML = content;

