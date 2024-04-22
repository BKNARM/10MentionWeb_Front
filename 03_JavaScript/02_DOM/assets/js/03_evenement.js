/* Les évènement vont me permettre de déclencher une fonction c'est à dire une série d'instruction, suite à une action de mon utilisateur..
// OBJECTIF : Étre en mesure de capturer ces évènements afin d'exécuter une fonction 
    Les Évènement MOUSE (Souris):

        click   : au click sur un élément
        mouseenter : la souris passe au dessus de le zone d'un élément
        mouseleave  : la souris sort de la zone d'un élément*
    
    Les Évènements KEYBOARD (Clavier):

        Keydown  : une touche du clavier est enfoncée
        Keyup   : une touche du clavier a été relachée

    Les Évènements WINDOW (Fenêtre)

        scroll   : défilement de la fenêtre 
        resize   : redimensionnement de la fenêtre

    Les Évènements FORM (formulaire)

        Change    : pour les éléments <input>, <select> et <textearea>
        submit   : à l'envoi du formulaire 
        input     : pour capter la saisie  d'un utilisateur sur un champ <input>

        ------------------ Les écouteurs d'évènements -------------------

    Pour attacher un évènement à un élèment, ou autrement dit, pour déclencher un écouteur d'évènement qui se chargera de déclencher une fonction, je vais utliser la syntaxe suivante
         selecteur.addEventListener('évènement', fonction);

          Etape 1 -> selectionner les elements
          Etape 2 -> Créer les fonctions qui seront executé par l'evenement
          Etape 3 -> Poser l'écouteur d'evenement pour l'intéraction
*/

// div #rouge

let divRouge = document.querySelector('#rouge');// je séléctionne ma div par son id ensuite je lui ajoute un écouteur d'événement

divRouge.addEventListener('click', fDivRouge);
//l'écouteur d'événement se décompose en deux argument
//1 -> l'action ici le click
//2 -> le nom de la fonction ici fDivRouge

function fDivRouge() {
    divRouge.style.backgroundColor = "gold";
    divRouge.style.borderRadius = "50%";
    divRouge.innerText = "GOLD"
}




//le paragraphe p
function fP1() {
    alert('le paragraphe est cliqué');
}




//div # ORANGE
let divOrange = document.querySelector('#orange');

divOrange.addEventListener('dblclick', function () {
    divOrange.style.backgroundColor = "silver";
    divOrange.style.borderRadius = "50%";
    divOrange.innerText = "SILVER"
});

// le h2 avec ondblclick

function dbl() {
    alert('suite à un double click')
}


//div avec l'id BLEU


//mousover
let divBleu = document.querySelector('#bleu');

divBleu.addEventListener('mouseover',()=>{
    divBleu.style.backgroundColor = "black";
    divBleu.style.borderRadius = "50%";
    divBleu.innerText = "crno"
})

function ovr() {
    alert('suite à un double click')
}


//div #primary

let divPrimary = document.querySelector('#primary');

divPrimary.addEventListener('mouseout',()=>{
    divPrimary.style.backgroundColor = "grey";
    divPrimary.style.borderRadius = "50%";
    divPrimary.innerText = "primary"
});


//div #success

let divChangeCouleur = document.querySelector('#success'); //quand on selectionne par id le '#' n'est pas necessaire et si on utilise le queryselector et q'on appel l'element par son ID on doit forcement utiliser les sélécteurs
divChangeCouleur.addEventListener('click', ()=>{
    if (divChangeCouleur.classList.contains('vert')) {//je verifie si la div contient la classe vert dans la liste de classes
        divChangeCouleur.classList.remove('vert');
        divChangeCouleur.classList.add('gold');
        divChangeCouleur.innerText = "GOLD";
        
    } else {
        divChangeCouleur.classList.remove('gold');
        divChangeCouleur.classList.add('vert');
        divChangeCouleur.innerText = "#Success";
    }
})




//cache cache

let imgChat = document.querySelector('img');
imgChat.style.width="300px";


//les p soulignées

//boucle for of
let mojiP = document.querySelectorAll('#sekcijaP p');
// for (let p of mojiP) {
//     p.style.color = "red";
//     p.style.fontWeight = "bold";
//     p.style.textDecoration = "underline"
// }   



for (let  i = 0;  i < mojiP.length;  i++) {
    mojiP[i].style.textDecoration="underline";
    mojiP[i].style.color="red"
    mojiP[i].style.fontWeight ="bold"

}
console.log(mojiP);

//while

let i = 0

while (i< mojiP.lenght) {

        mojiP[i].style.color = "#ff3366";
        mojiP[i].style.fontWeight = "bold";
        mojiP[i].style.textDecoration = "underline"
    i++   

}


mojiP[0].addEventListener('click', ()=>{
    imgChat.classList.add('hide')
});

mojiP[1].addEventListener('click', ()=>{
    imgChat.classList.remove('hide')
});

mojiP[2].addEventListener('click', ()=>{
    imgChat.classList.toggle('hide')
})








