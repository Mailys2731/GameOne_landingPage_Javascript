

function firstValidate() {
    var regFirst = new RegExp(/[a-zA-Z]{2,}/)
    let first = document.getElementById("first")
    if (!(regFirst.test(document.getElementById("first").value))) {
        first.parentNode.setAttribute("data-error-visible", "true");
        first.parentNode.setAttribute("data-error", "*Veuillez saisir 2 caractères minimum.")
        console.log("erreur prenom")

        return false
    }
    else {
        first.parentNode.setAttribute("data-error-visible", "false");
        return true
    }

}
document.getElementById("first").addEventListener("keyup", firstValidate)

const lastValidate = () => {
    var regLast = new RegExp(/[a-zA-Z]{2,}/)
    if (!(regLast.test(document.getElementById("last").value))) {
        let last = document.getElementById("last")
        last.parentNode.setAttribute("data-error-visible", "true");
        last.parentNode.setAttribute("data-error", "*Veuillez saisir 2 caractères minimum.")
        console.log("Nom invalide ou manquant")
        return false;
    }
    else {
        last.parentNode.setAttribute("data-error-visible", "false");
        return true
    }
}
document.getElementById("last").addEventListener("keyup", lastValidate)

const emailValidate = () => {
    var regEmail = new RegExp(/^[0-9a-z\._\-]+@[0-9a-z\.\-]{2,}\.[a-z]{2,3}$/, 'i');
    if (!(regEmail.test(document.getElementById("email").value))) {
        let email = document.getElementById("email")
        email.parentNode.setAttribute("data-error-visible", "true");
        email.parentNode.setAttribute("data-error", "*Veuillez entrer une adresse mail valide.")
        console.log("Email invalide ou manquant")
        return false;
    }
    else {
        email.parentNode.setAttribute("data-error-visible", "false");
        return true
    }
}
document.getElementById("email").addEventListener("keyup", emailValidate)

const birthdateValidate = () => {
    let birthdate = document.getElementById("birthdate")
    if (!(birthdate.value)) {
        birthdate.parentNode.setAttribute("data-error-visible", "true");
        birthdate.parentNode.setAttribute("data-error", "*Veuillez entrer votre date de naissance.")
        console.log("Date de naissance invalide ou manquant")
        return false;
    }
    else {
        birthdate.parentNode.setAttribute("data-error-visible", "false");
        return true
    }

}
document.getElementById("birthdate").addEventListener("change", birthdateValidate)

const quantityValidate = () => {
    var regQuantity = new RegExp(/[0-500]/)
    if (!(regQuantity.test(document.getElementById("quantity").value))) {
        let quantity = document.getElementById("quantity")
        quantity.parentNode.setAttribute("data-error-visible", "true");
        quantity.parentNode.setAttribute("data-error", "*Veuillez entrer un nombre de tournois.")
        console.log("erreur quantity")

        return false;
    }
    else {
        quantity.parentNode.setAttribute("data-error-visible", "false");
        return true
    }
}
document.getElementById("quantity").addEventListener("keyup", quantityValidate)

const locationValidate = () => {
    let locationId = document.getElementById("location")
    let location = document.querySelectorAll('input[name="location"]');
    let oneIsChecked = false
    for (i = 0; i < location.length; i++) {
        if (location[i].checked) {
            
            oneIsChecked = true
        }
    
    }
    if(!oneIsChecked) {
        locationId.setAttribute("data-error-visible", "true");
        locationId.setAttribute("data-error", "*Veuillez sélectionner une ville.")
        console.log("erreur ville")

        return false;

    }
    else {
        locationId.setAttribute("data-error-visible", "false");
        return true
    }
}

document.getElementById("location").addEventListener("change", locationValidate)

const checkbox1Validate = () => {
    const checkbox1 = document.getElementById("checkbox1")
    if(!checkbox1.checked){
        checkbox1.parentNode.setAttribute("data-error-visible", "true");
        console.log("erreur validation conditions")
        return false;   
    }
    else {
        checkbox1.parentNode.setAttribute("data-error-visible", "false");
        return true
    }
}
document.getElementById("checkbox1").addEventListener("change", checkbox1Validate)

const validate =  (event) => {
    event.preventDefault()
    let validFirst = firstValidate()
    let validLast = lastValidate()
    let validEmail = emailValidate()
    let validBirthdate = birthdateValidate()
    let validQuantity = quantityValidate()
    let validLocation = locationValidate()
    let validCheckbox1 = checkbox1Validate()
    let formValid = validFirst && validLast && validEmail && validBirthdate && validQuantity && validLocation && validCheckbox1
    if (formValid) {

        const form = document.getElementById("form")
        form.style.display="none"

        const modal = document.getElementById("modal")

        let successMessage = document.createElement("div")
        let successMessageContent = document.createElement("p")

        successMessage.setAttribute("id", "successMessage")
        successMessageContent.textContent = "Merci d'avoir soumis vos informations d'inscription"
        successMessageContent.setAttribute('class', 'label')
        modal.appendChild(successMessage)
        successMessage.appendChild(successMessageContent)
        console.log("okkkkkkkkk")
        return true

        
    }
    return false
}

