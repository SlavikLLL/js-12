let arr = [];
let li_elements = document.body.getElementsByTagName('li');
console.log( "Количество элементов:",li_elements.length);
for(let text of li_elements){
    arr.push(text.textContent);
}
console.log(arr);
let ul_element = document.body.childNodes[1];
console.log(ul_element.attributes);
let arr_attr_names = [];
for(let attr of ul_element.attributes){
    arr_attr_names.push(attr.name);
}
console.log(arr_attr_names);
let li_last = document.querySelector('li:last-child');
li_last.innerHTML = "Привет меня зовут Славик";
let first_li = document.querySelector('li:first-child');
first_li.setAttribute('data-my-name','Slavik');
ul_element.removeAttribute('data-dog-tail');

