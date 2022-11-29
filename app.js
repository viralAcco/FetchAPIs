const input_field = document.querySelector('#in');
const button = document.querySelector('#btn');
const content = document.querySelector('#content-area');

console.log(input_field);

async function api_call(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(res);
    const json = await res.json();
    console.log(json);
    json.forEach(data => {    
        const elem = document.createElement('p');
        elem.textContent = data.title;
        content.appendChild(elem);
    });    
    button.onclick = function(){
        content.innerHTML = "";
        var result = "Not Found!";
        json.forEach(data => {
            if(data.title === input_field.value){
                result = data.title;
            }
        })
        const elem = document.createElement('p');
        elem.textContent = result;
        content.appendChild(elem);
    };
}
api_call();

input_field.addEventListener('keypress', function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        button.click();
        input_field.value = "";
    }
})


























    // console.log("Hello! " + input_field.value);
    // const elem = document.createElement('p');
    // elem.textContent = input_field.value;
    // content.appendChild(elem);
    // input_field.value = "";



// input_field.addEventListener('keypress', function(event){
//     if(event.key === "Q"){
//         event.preventDefault();
//         input_field.value = "";
//     }
// })

// const p = new Promise((res, rej) => {
//     rej(2);
// }).then(v => {
//     console.log(v);
// }).cathc(err => {
//     console.log(err);
// });

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(val =>{ 
//     console.log(val);
//     return val.json();
// }).then(v => console.log(v));