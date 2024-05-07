
    // function validateForm(event) {
    //     event.preventDefault();

    //     let email = document.getElementById('email').value;
    //     let subject = document.getElementById('subject').value;
    //     let message = document.getElementById('message').value;

    //     let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     let subjectRegex = /^[a-zA-Z0-9\s]+$/;
    //     let isValid = true;
    //     let msgError = document.querySelector('span')

    //     if (!emailRegex.test(email)) {
    //         msgError.innerHTML= "Pas un mail valide"
    //         isValid = false;
    //     }

    //     if (!subjectRegex.test(subject)) {
    //         msgError.innerHTML= "Pas un mail valide"
    //         isValid = false;
    //     }

    //     if (message.length < 20 || message.length > 200) {
    //         msgError.innerHTML= "le message n'est pas valide"
    //         isValid = false;
    //     }

    //     if (isValid) {
    //         alert("Form submitted successfully!");
            
    //         event.target.submit();
    //     }
    // }

    // document.querySelector('form').addEventListener('submit', validateForm);



    // assets/jss/javascript.js


















// document.addEventListener("DOMContentLoaded", function() {
//     document.querySelector('#submitBtn').addEventListener('click', validateForm);
//     document.querySelector('#resetBtn').addEventListener('click', clearErrorMessages);
//     document.querySelector('form').addEventListener('submit', validateForm);
// });

// function validateForm(event) {
//     event.preventDefault();

//     let email = document.getElementById('email').value;
//     let subject = document.getElementById('subject').value;
//     let message = document.getElementById('message').value;

//     let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     let subjectRegex = /^[a-zA-Z0-9\s]+$/;

//     let isValid = true;

//     if (!emailRegex.test(email)) {
//         displayErrorMessage('email', 'Email not valid');
//         isValid = false;
//     } else {
//         removeErrorMessage('email');
//     }

//     if (!subjectRegex.test(subject)) {
//         displayErrorMessage('subject', 'Subject not valid');
//         isValid = false;
//     } else {
//         removeErrorMessage('subject');
//     }

//     if (message.length < 20 || message.length > 500) {
//         displayErrorMessage('message', 'Message must be between 20 and 500 characters long');
//         isValid = false;
//     } else {
//         removeErrorMessage('message');
//     }

//     if (isValid) {
//         // Form submission logic here
//         // Uncomment the line below to submit the form
//         event.target.submit();
//     }
// }

// function displayErrorMessage(inputId, message) {
//     let span = document.querySelector(`#${inputId}`).nextElementSibling;
//     span.innerText = message;
// }

// function removeErrorMessage(inputId) {
//     let span = document.querySelector(`#${inputId}`).nextElementSibling;
//     span.innerText = '';
// }








// assets/jss/javascript.js

// document.addEventListener("DOMContentLoaded", function() {
//     document.querySelector('#submitBtn').addEventListener('click', validateForm);
//     document.querySelector('#resetBtn').addEventListener('click', clearErrorMessages);
// });

// function validateForm(event) {
//     event.preventDefault();

//     let email = document.getElementById('email').value;
//     let subject = document.getElementById('subject').value;
//     let message = document.getElementById('message').value;

//     let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     let subjectRegex = /^[a-zA-Z0-9\s]+$/;

//     let isValid = true;

//     if (!emailRegex.test(email)) {
//         displayErrorMessage('email', 'Email not valid');
//         isValid = false;
//     } else {
//         removeErrorMessage('email');
//     }

//     if (!subjectRegex.test(subject)) {
//         displayErrorMessage('subject', 'Subject not valid');
//         isValid = false;
//     } else {
//         removeErrorMessage('subject');
//     }

//     if (message.length < 20 || message.length > 500) {
//         displayErrorMessage('message', 'Message must be between 20 and 500 characters long');
//         isValid = false;
//     } else {
//         removeErrorMessage('message');
//     }

//     if (isValid) {
//         // Form submission logic here
//         // Uncomment the line below to submit the form
//         event.target.submit();
//     }
// }

// function displayErrorMessage(inputId, message) {
//     let span = document.querySelector(`#${inputId}`).nextElementSibling;
//     span.innerText = message;
// }

// function removeErrorMessage(inputId) {
//     let span = document.querySelector(`#${inputId}`).nextElementSibling;
//     span.innerText = '';
// }

// function clearErrorMessages() {
//     let spans = document.querySelectorAll('span');
//     spans.forEach(span => {
//         span.innerText = '';
//     });
// }







// let form = document.querySelector('#form');
// let sujet = document.querySelector('#subject');
// let email = document.querySelector('#email');
// let msgArea = document.querySelector('#message');
// let message = "";

// let myAlert = document.querySelector('#alert');
// let inputs = document.querySelectorAll('input');


// function setValidation(element, info = null) {
//     let formControl = element.parentElement;
//     let span = formControl.querySelector('span');

//     if (info != null) {
//         small.innerText = info;
//         formControl.className = "form-control error";
//     } else {
//         formControl.className = "form-control success";
//     }

// }


// form.addEventListener('submit', (event) => {

//     event.preventDefault(); // Une méthode utilisée dans les événements JavaScript pour empêcher le comportement par défaut associé à un évenement de se produire.
//     // trim() en JS est utilisée pour supprimer les espaces blanc au début et à la fin d'une chaîne de caractéres
//     let usernameValue = username.value.trim();
//     let emailValue = email.value.trim();
//     let passwordValue = password.value.trim();
//     let password2Value = password2.value.trim();

//     let donnee = [usernameValue, emailValue, passwordValue, password2Value]

//     // Username verify

//     if (donnee.includes("")) {

//         myAlert.innerHTML = '<p class="alert alert-danger text-center mt-3" role="alert">Veuillez renseigner tout les champs</p>'
//         for (let input of inputs) {

//             setValidation(input, message);
            


//         }

        
        
        
//     }
//     else {

//         myAlert.innerHTML = "";
    
//         if (!usernameValue.match(/^[a-zA-Z]+$/)) {



//             message = 'Username ne\'est pas valide, username doit contenir que des lettres ';

//             setValidation(username, message);

//         } else {

//             let lengthUsername = usernameValue.length;
//             // console.log(lengthUsername);
//             if (lengthUsername < 3) {

//                 message = "Username doit avoir au moins 3 caractéres";
//                 setValidation(username, message);

//             } else {
//                 setValidation(username);


//             }
//         }

//         // email verify

//         let regexEmail = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,6}$/;


//         if (!regexEmail.test(emailValue)) {

//             message = 'Email n\est pas valide';
//             setValidation(email, message);


//         } else {
//             setValidation(email);
//         }

//         // password verify

//         // let regexPassWord = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$/;




//         // if (!regexPassWord.test(passwordValue)) {

//         //     message = 'Le mot de passe n\'est pas valide';
//         //     setValidation(password, message);

//         // } else {

//         //     setValidation(password);
//         // }
//         // // password2 verify
//         // if (password2Value != passwordValue) {

//         //     message = 'La confirmation du mot de passe ne correspondent pas  ';
//         //     setValidation(password2, message);

//         // } else {

//         //     setValidation(password2);

//         // }
//     }

//     if (myAlert.innerHTML == "" && message == "") {
        
//         myAlert.innerHTML = '<p class="alert alert-success text-center mt-3" role="alert">Vous etes bien inscrit ! <a href="#">Connectez-vous ici</a></p>'
//     }

// })



document.addEventListener("DOMContentLoaded", function() {
    // Get the form element
    let form = document.getElementById("form");

    // Add event listener for form submission
    form.addEventListener("submit", function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the input fields and associated spans
        let emailInput = document.getElementById("email");
        let emailSpan = emailInput.previousElementSibling;
        
        let subjectInput = document.getElementById("subject");
        let subjectSpan = subjectInput.previousElementSibling;
        let messageInput = document.getElementById("message");
        let messageSpan = messageInput.previousElementSibling;

        // Get the values of the input fields
        let emailValue = emailInput.value.trim();
        let subjectValue = subjectInput.value.trim();
        let messageValue = messageInput.value.trim();

        // Check if any of the fields are empty
        let isValid = true;
        if (emailValue === "") {
            emailSpan.textContent = "Veuillez entrer votre e-mail.";
            isValid = false;
        } else {
            emailSpan.textContent = "";
        }

        if (subjectValue === "") {
            subjectSpan.textContent = "Veuillez entrer le sujet.";
            isValid = false;
        } else {
            subjectSpan.textContent = "";
        }

        if (messageValue === "") {
            messageSpan.textContent = "Veuillez entrer votre message.";
            isValid = false;
        } else {
            messageSpan.textContent = "";
        }

        // If any field is empty, prevent form submission
        if (!isValid) {
            return false;
        }

        let successMessage = document.createElement("p");
        successMessage.textContent = "Ton message a bien été pris en compte.";
        form.appendChild(successMessage);

        // If all fields are filled, proceed with form submission
        form.submit();
        
    });
});



