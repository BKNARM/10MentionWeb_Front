

let loader = document.querySelector('#loader');
window.addEventListener('load', () => {
    loader.classList.add('hideLoader');
})


// ----------------------------Bouton No---------------------------- //


let btnNo = document.querySelector('#btnNo')
let n = Math.random(10); 

btnNo.addEventListener('mouseover', () => {
    // Mettre à jour n en suivant la conjecture de Collatz
    n = n % 2 === 0 ? n / 2 : 3 * n + 1;

    // Déplacer le bouton en fonction de la nouvelle valeur de n
    btnNo.style.left = n + "rem";
    btnNo.style.top = n + "rem";
});
btnNo.addEventListener('mousover', ()=>{


    function rand() {
        let x = Math.floor(Math.random() * 5)
        return x
    }



    btnNo.style.left = rand() + "rem";
    btnNo.style.top  = rand() + "rem"



    btnNo.style.left = x + "rem";
    btnNo.style.top  = y + "rem";



})





