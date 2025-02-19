const form = document.getElementById('form');
const input = document.getElementById('input');
const result = document.querySelector(".result");


form.addEventListener('submit', (event) =>{
event.preventDefault();
fetch(`https://api.github.com/users/${input.value}`)
.then((response => response.json()))
.then((response => {

    result.innerHTML +=    `
    <h1>${response.login} </h1>
 <img src="${response.avatar_url}" alt="">
    
    
    
    `
    console.log(response);
    
  
    
  
    
}))


})





