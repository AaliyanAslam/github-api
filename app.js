const form = document.getElementById('form');
const input = document.getElementById('input');
const result = document.querySelector(".result");


form.addEventListener('submit', (event) =>{
event.preventDefault();
fetch(`https://api.github.com/users/${input.value}`)
.then((response => response.json()))
.then((response => {

    result.innerHTML +=    `

    <div class="card" style="width: 18rem;">
  <div class="card-body">
       <h1>${response.login} </h1>
 <img src="${response.avatar_url}" width= "100" alt="">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
    
    
    `
    console.log(response);
    
  
    
  
    
}))


})





