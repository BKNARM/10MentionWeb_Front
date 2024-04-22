let loader = document.querySelector('#loader');
window.addEventListener('load',()=>{
    loader.classList.add('hideLoader');
})


// let question = document.querySelector('.fa-question');
// let pe = document.querySelector('p')

// let verif = false;
// window.addEventListener('load',()=>{
//     pe.classList.add('disparition');
// })

// question.addEventListener('click', modificator);
// function modificator(){

//     pe.classList.add('apparition');
//     question.remove();
//     // verif= true;     
    
// }

// let body = document.querySelector('body');
// body.addEventListener('click', modificato);

// function modificato(){
//     pe.classList.add('disparition');
//     pe.classList.remove('apparition');
   
// }




//Affichage du mot de passe
let afficheMdp = document.querySelector('.fa-eye-slash');
let password = document.querySelector('#password');

afficheMdp.addEventListener('click', ()=>{
    switch (password.type) {
        case "password":
            password.type= "text";
            afficheMdp.classList.replace('fa-eye-slash', 'fa-eye');
            break;
    
        default:
            password.type= "password";
            afficheMdp.classList.replace('fa-eye','fa-eye-slash' );
            break;
    }
})

// valiudation du formulaire

let form = document.querySelector('#form');
let username = document.querySelector('#username');
let email = document.querySelector('#email');
let password2 = document.querySelector('#password2');

form.addEventListener('submit', (event)=>{

    event.preventDefault(); //une méthode utilisée dans les événements Javascript pour empêcher le comportement associé à un événement de se produire.

    formVerif();


})

function formVerif(){
         let usernameValue = username.value.trim(); 
         let  emailValue = email.value .trim();
         let  passwordValue = password.value .trim();
         ;
         let  password2Value = password2.value.trim();
         console.log(username.value);
         console.log(email.value);
         console.log(password.value);
         console.log(password2.value); 
}






