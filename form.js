
// Fonction de validation du prénom : minimum 2 caractères et non nul
function firstValidate() {
    
    var regFirst = new RegExp(/[a-zA-Z]{2,}/);
    let first = document.getElementById("first");
    //on compare la valeur entrée par l'utilisateur à l'expression régulière
    if (!(regFirst.test(document.getElementById("first").value))) {
        //gestion de l'affichage de l'erreur
        first.parentNode.setAttribute("data-error-visible", "true");
        first.parentNode.setAttribute("data-error", "*Veuillez saisir 2 caractères minimum.");
        return false;
    }
    else { // Si l'entrée est valide, on cache l'erreur
        first.parentNode.setAttribute("data-error-visible", "false");
        return true;
    }
};
// On actualise l'état de l'entrée (erreur ou non), à chaque touche de clavier enfoncée
document.getElementById("first").addEventListener("keyup", firstValidate);


//Validation nom idem au prénom
const lastValidate = () => {
    var regLast = new RegExp(/[a-zA-Z]{2,}/);
    if (!(regLast.test(document.getElementById("last").value))) {
        let last = document.getElementById("last");
        last.parentNode.setAttribute("data-error-visible", "true");
        last.parentNode.setAttribute("data-error", "*Veuillez saisir 2 caractères minimum.");
        return false;
    }
    else {
        last.parentNode.setAttribute("data-error-visible", "false");
        return true
    }
}
document.getElementById("last").addEventListener("keyup", lastValidate);

//Validation de l'email (idem)
const emailValidate = () => {
    var regEmail = new RegExp(/^[0-9a-z\._\-]+@[0-9a-z\.\-]{2,}\.[a-z]{2,3}$/, 'i');
    if (!(regEmail.test(document.getElementById("email").value))) {
        let email = document.getElementById("email");
        email.parentNode.setAttribute("data-error-visible", "true");
        email.parentNode.setAttribute("data-error", "*Veuillez entrer une adresse mail valide.");
        return false;
    }
    else {
        email.parentNode.setAttribute("data-error-visible", "false");
        return true
    }
}
document.getElementById("email").addEventListener("keyup", emailValidate);

//Vérification de la présence d'une date de naissance
const birthdateValidate = () => {
    let birthdate = document.getElementById("birthdate");
    if (!(birthdate.value)) {
        birthdate.parentNode.setAttribute("data-error-visible", "true");
        birthdate.parentNode.setAttribute("data-error", "*Veuillez entrer votre date de naissance.");
        return false;
    }
    else {
        birthdate.parentNode.setAttribute("data-error-visible", "false");
        return true;
    }

}
//On vérifie le statut de l'entrée à chaque changement
document.getElementById("birthdate").addEventListener("change", birthdateValidate);



//Vérification que la quantité soit entrée et soit un nombre
const quantityValidate = () => {
    var regQuantity = new RegExp(/[0-500]/);
    if (!(regQuantity.test(document.getElementById("quantity").value))) {
        let quantity = document.getElementById("quantity");
        quantity.parentNode.setAttribute("data-error-visible", "true");
        quantity.parentNode.setAttribute("data-error", "*Veuillez entrer un nombre de tournois.");

        return false;
    }
    else {
        quantity.parentNode.setAttribute("data-error-visible", "false");
        return true;
    }
}
document.getElementById("quantity").addEventListener("keyup", quantityValidate);


// Vérification qu'une case radio location est selectionnée
const locationValidate = () => {
    let locationId = document.getElementById("location");
    //Récupération de tous les input avec le nom "location"
    let location = document.querySelectorAll('input[name="location"]');
    //Création d'une variable booléenne pour l'information: une ville est checkée
    let oneIsChecked = false
    //On intère sur tous les inputs "location"
    for (i = 0; i < location.length; i++) {
        if (location[i].checked) {
            
            oneIsChecked = true
        };
    
    };
    //si la variable retourne faux, on affiche l'erreur
    if(!oneIsChecked) {
        locationId.setAttribute("data-error-visible", "true");
        locationId.setAttribute("data-error", "*Veuillez sélectionner une ville.")
        return false;

    }
    else {
        locationId.setAttribute("data-error-visible", "false");
        return true;
    }
};

document.getElementById("location").addEventListener("change", locationValidate);

//Vérification de la validation des conditions
const checkbox1Validate = () => {
    const checkbox1 = document.getElementById("checkbox1");
    if(!checkbox1.checked){
        checkbox1.parentNode.setAttribute("data-error-visible", "true");
        console.log("erreur validation conditions");
        return false;   
    }
    else {
        checkbox1.parentNode.setAttribute("data-error-visible", "false");
        return true;
    }
}
document.getElementById("checkbox1").addEventListener("change", checkbox1Validate);

//Fonction d'envoi du formulaire
const validate =  (event) => {
    //on empêche le comportement par défault du bouton submit
    event.preventDefault();

    let validFirst = firstValidate();
    let validLast = lastValidate();
    let validEmail = emailValidate();
    let validBirthdate = birthdateValidate();
    let validQuantity = quantityValidate();
    let validLocation = locationValidate();
    let validCheckbox1 = checkbox1Validate();

    //si l'un des champs retourne false, la variable formValid retourne false
    let formValid = validFirst && validLast && validEmail && validBirthdate && validQuantity && validLocation && validCheckbox1;
    //si tous les inputs sont correctement renseignés:
    if (formValid) {

        const form = document.getElementById("form");
        //on cache le formulaire pour afficher le message de validation
        form.style.display="none";

        const modal = document.getElementById("modal");

        // Création du success message

        let successMessage = document.createElement("div");
        let successMessageContent = document.createElement("p");

        successMessage.setAttribute("id", "successMessage");
        successMessageContent.setAttribute('class', 'label');

        successMessageContent.textContent = "Merci d'avoir soumis vos informations d'inscription";

        modal.appendChild(successMessage);

        successMessage.appendChild(successMessageContent);

        // Création du bouton fermer
        let successBtn = document.createElement("button");

        successBtn.setAttribute("class", "btn-success");
        successBtn.setAttribute("id", "btn-successId");

        successBtn.textContent = "Fermer";
        modal.appendChild(successBtn);
        //AU click, la modal se ferme grâce à la fonction closeModal comme pour la croix en haut à droite du modal
        successBtn.addEventListener("click", closeModal);

        console.log("Le formulaire est correctement renseigné");
        return true;
    }

    console.log("Il y a une erreur dans le formulaire");
    return false;

}


