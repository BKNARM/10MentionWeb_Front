//alert("ok")

/*Affin de modifier notre page HTML selon les intéractions d'un utilisateur, nous allons modifier notre DOM grâce à JavaScript
*/


//--------------
//-SELECTIONNER NOS ELEMENTS
//--------------

//selection via tag

let title = document.getElementsByTagName('h1');
console.log(title);

let lesP = document.getElementsByTagName('p');// on cherche tout les paragraphes denotre page 
//on recupere un array (tableau) d'elements
console.log(lesP);


//Grâce a ma variable dans la quel j'ai séléctionné tous les "p", je peux viser un seul des éléments grâce à son index. Pour faire du CSS j'utilise la propriété 'style' suivi des memes déclarations que j'utilise en CSS, avec du camelCase à la place de kebab-case.

//la propriété style permet d'acceder finement au style qui concernant un élément particulier
lesP[0].style.backgroundColor="red";
lesP[0].style.color="white";
lesP[0].style.fontWeight = "bold";

//selection via ID

let titre = document.getElementById("titre");
console.log(titre);

//Sélection via classe

let selectClass = document.getElementsByClassName("selectClass");
console.log(selectClass);

// Lorsqu'on sélectionne plusieurs éléments en même temps avec getElementsByClassName, on crée un array en JavaScript qui affiche dans la console avec l'intitulé HTMLCollection. Comme un tableau, le premier élément aura l'index 0.

console.log(selectClass[1])
console.log(selectClass[1].innerHTML);



// innerHTML est une propriété en JavaScript qui permet d'accéder ou de définir le contenu HTML d'un élément. Elle renvoie ou modifie le contenu HTML (c'est-à-dire les balises et le texte) à l'intérieur de l'élément spécifié.

// MINI EXO 1 : modifier le contenu du h2 qui a la classe .subtitle : 'Je change le titre, youhou'

let subtitle = document.getElementsByClassName("subtitle");
console.log(subtitle[0].innerHTML="<strong>ceci est le titre mofifié avec javaScript</strong>");


//mini exo 1 : Sélectionner tous les p dans la page et changer le texte en majuscules


//1ère façon de faire

lesP[0].style.textTransform="upperCase";
lesP[1].style.textTransform="upperCase";
lesP[2].style.textTransform="upperCase";
lesP[3].style.textTransform="upperCase";
lesP[4].style.textTransform="upperCase";


//2ère façon de faire

for (let i = 0; i < lesP.length; i++) {
    
    lesP[i].style.textTransform="upperCase";
    
}

//3ère façon de faire

for(let p of lesP ){

    // Boucle for of : je déclare une variable p qui représente chaque élément dans le tableau lesP, au niveau de l'instruction à exécuter j'appelle la variable p en lui attribuant le style souhaité avec la propriété style.



    p.style.textTransform="upperCase";
}






