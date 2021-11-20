function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  const form = document.getElementById("form")
  form.style.display="block"
}

// close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

//close modal form
function closeModal() {
  var form = document.getElementById("form")
  form.reset()

  const datasDiv = document.querySelectorAll(".formData")
  datasDiv.forEach(dataDiv => {
    dataDiv.setAttribute("data-error-visible", "false") 
  })

  const successMessage = document.getElementById("successMessage")
  if(successMessage){successMessage.remove()}

  
  modalbg.style.display = "none";

}
