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
  <div class="more m-3"> 
   
    <div class="user-more-div">
      <div class="user-more"><span class="fw-bold"> Bio: </span> ${response.bio}</div>
  <div class="user-more"><span class="fw-bold">Company:</span> ${response.company}</div>
  <div class="user-more"><span class="fw-bold">Location:</span> ${response.location}</div>
  <div class="user-more"><span class="fw-bold">Followers:</span> ${response.followers}</div>
  <div class="user-more"><span class="fw-bold">Following:</span> ${response.following}</div>
  <div class="user-more"><span class="fw-bold">Public Repositories :</span> ${response.public_repos}</div>

  <a href="${response.html_url}">
<button class="cssbuttons-io-button">
 See Github
  <div class="icon">
    <svg
      height="24"
      width="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
        fill="currentColor"
      ></path>
    </svg>
  </div>
</button>
</a>


  
    
    </div>
  

 
  </div>
  </div>
</div>
    
    
    `;
      input.value = "";
      console.log(response);
    });
});
