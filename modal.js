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
  //Réinitialisation du formulaire lorsqu'on quitte le modal
  form.reset()

  //Réinisialisation des erreurs d'entrées
  const datasDiv = document.querySelectorAll(".formData")
  datasDiv.forEach(dataDiv => {
    dataDiv.setAttribute("data-error-visible", "false") 
  })

  //Suppression du success message
  const successMessage = document.getElementById("successMessage")
  if(successMessage){successMessage.remove()}

  //Suppression du boutton "fermer" créé lors du success message
  const successBtn = document.getElementById("btn-successId")
  if(successBtn){successBtn.remove()}

  //On cache le modal
  modalbg.style.display = "none";

}
