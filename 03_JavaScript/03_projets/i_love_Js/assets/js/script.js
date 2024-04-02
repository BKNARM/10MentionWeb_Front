// =====================Dark mode======================

let switchBox = document.querySelector(".switch");

let container = document.querySelector('.container-fluid');

let btnChange = document.querySelector('.btn');

switchBox.addEventListener('click', changeMode);

function changeMode() {
    container.classList.toggle('container-change')
}

let kontejner = document.querySelector('.navbar-desktop');

let liens = document.querySelectorAll('.navbar-desktop a');
let icon = document.querySelector('.switch i');
let titre = document.querySelector('h1');
let btnJour = document.querySelector('.btn');
console.log(btnChange);


switchBox.addEventListener('click', promijeniboju);

function promijeniboju() {

    kontejner.classList.toggle('nav-dark');


    for (let lien of liens) {
        lien.classList.toggle('liensDarkMode');
    }

    btnChange.classList.toggle('btn-change');

    icon.classList.toggle('icon-change');

    if (icon.classList.contains('bi-sun-fill')) {
        icon.classList.remove('bi-sun-fill');
        icon.classList.add('bi-moon-fill');
    } else {
        icon.classList.remove('bi-moon-fill');
        icon.classList.add('bi-sun-fill');
    }

    switchBox.classList.toggle('switch-change');
    titre.classList.toggle('titre');
    btnJour.classList.toggle('bouttonJour');
    btnChange.classList.toggle('btn-dark')


    
}

//========================exo===========================
let emoji = document.querySelector('.bi-emoji-neutral')
emoji.addEventListener('click', emojiSwitcher);



function emojiSwitcher(){
    if (emoji.classList.contains('bi-emoji-neutral')) {
        emoji.classList.remove('bi-emoji-neutral');
        emoji.classList.add('bi-emoji-heart-eyes');
    } else {
        emoji.classList.remove('bi-emoji-heart-eyes');
        emoji.classList.add('bi-emoji-neutral');
    }
}


let abonne = document.querySelector('.btn-abonner')
abonne.addEventListener('click',abonnement)



function abonnement() {
    
}













