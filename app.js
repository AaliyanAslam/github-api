const form = document.getElementById("form");
const input = document.getElementById("input");
const result = document.querySelector(".result");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  fetch(`https://api.github.com/users/${input.value}`)
    .then((response) => response.json())
    .then((response) => {
      result.innerHTML = `

    <div class="card col-md-6 col-lg-6 col-sm-12"  style="height: 28rem; width: 50rem;">
  <div class="card-body d-flex justify-content-between">
  <div class='img-n-login d-flex justify-content-center align-items-center'> 
  <ul> 
  <img src="${response.avatar_url}" class= "user-img" width= "200" height="200" alt=""><br>
  <h4 class="user-login">${response.login} </h4>
  <h6 class="user-name">${response.name} </h6>
  
  
  </ul>
  </div>
  <div class="more"> 
   
  <div class="user-more">Bio: ${response.bio}</div>
  <div class="user-more">Company: ${response.company}</div>
  <div class="user-more">Location: ${response.location}</div>
  <div class="user-more">Followers: ${response.followers}</div>
  <div class="user-more">Following: ${response.following}</div>
  <div class="user-more">Public Repositories : ${response.public_repos}</div>

  
 
  </div>
  </div>
</div>
    
    
    `;
      input.value = "";
      console.log(response);
    });
});
