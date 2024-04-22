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


// titre.style.backgroundColor="pink";


let pink = document.getElementsByClassName('pink');
// pink.style.backgroundColor='pink'
pink[0].style.backgroundColor='pink'
console.log(pink);


//Selection via queryselector (selectionner le premier élément trouvé)


// La méthode querySelector() retourne le 1er élément trouvé spécifié en paramètres.
// L'avantage de querySelector c'est qu'il utilise la syntaxe de sélection CSS -> #monId .maClass <balise>.

let div =document.querySelector('div');

div.style.border='10px solid #000'


//Selectionne via queryselectorAll() (selectionne tous les éléments trouvés)

// sélectionne toutes les balises en ensemble et retourne un array d'élements*

let query = document.querySelectorAll('.selectClass');

console.log(query);//on a 3 paragrape qui ont la classe selectClass

for (let i = 0; i < query.length; i++) {
    
    console.log(query[i].innerText);
}

//La propriété innerText est similaire à innerHTML, mais elle fonctionne avec le texte brut à l'intérieur d'un élément, plutôt qu'avec le HTML. Elle permet d'accéder au texte contenu dans un élément HTML et de le modifier si nécessaire.

let rajout = document.querySelector(" .bg-success p")

rajout.innerHTML = "<strong>je suis la </strong>"

//CREATION D'UN NOUVEL ELEMENT

let section = document.querySelector('section');
//Pour créer un élément, nous utilisions la méthode creatElement (), puis nous l'integrons dans le noeud souhaité

let nouveauParaFin = document.createElement('p');

nouveauParaFin.innerHTML = "<strong>coucou, je suis ton nouveau paragraphe à la fin de la section </strong>";
nouveauParaFin.style.color = "red";

section.append(nouveauParaFin);//append() -> insére du contenu à la fin de la section. //append() accepte tous les éléments (balise ou string).

let nouveauParaDebut = document.createElement('p');
nouveauParaDebut.innerHTML = "<strong>coucou, je suis ton nouveau paragraphe à la fin de la section </strong>";

nouveauParaDebut.style.color = "green";

section .prepend(nouveauParaDebut);//prepend()-> insere du contenue de la section

//---------------------------------------------------------------
//DEPLACER UN ELEMENT

// pour deplacer un element , il faut 3 parametres
    /*
        * -> le parent
        * -> l'element a de placer 
        * -> l'element qui vient apres 
    */

let parent = document.querySelector('main');
let jeBouge = document.querySelector('h4');
let h2 = document.querySelector('.subtitle');

parent.insertBefore(jeBouge, h2);


//SUPPRIMER UN ELEMENT

//pour supprimer un element il faut deux parametres : 

/*
     * -> le parent
     * -> l'element a supprimer       
*/

let ul = document.querySelector('ul');

let li = document.querySelector('ul :nth-child(2');

console.log(li);


//Pour supprimer , on utilise .removeChild()
ul.removeChild(li);

//CREER UN ATTRIBUT ET SA VALEUR

// setAttribute( ) : méthode pour ajouter un nouveau attribut ou changer la valeur d'un attribut existant pour un élément

let baliseA = document.querySelector('a');

baliseA.setAttribute("attribut", "valeurAttribut");//je rajoute un attribut à la balise a

baliseA.setAttribute("href", "01_introduction.html");//changer la valeur de l'attribut href

let lesA = document.querySelectorAll('a')

let valeurA = lesA[3].getAttribute('href');//ici je récupère la valeur de l'attribut href avec le getAttribute( )
console.log(valeurA);





// Grâce à votre script, créez une balise a dans la balise h1 avec le lien vers la documentation JS () qui s'affiche sur un nouvel onglet.
// Ce lien sera de couleur blanche et non souligné.

let insertionA = document.createElement('a');
insertionA.innerHTML = "c'est moi le nouveau contenue du h1";
let lElementParent = document.getElementById('titre');
lElementParent.innerHTML="";
lElementParent.appendChild(insertionA);
insertionA.setAttribute("href", "https://developer.mozilla.org/fr/docs/Web/JavaScript");
insertionA.setAttribute("target", "_blank")
insertionA.style.textDecoration="none";
insertionA.style.color="white";

///////////////////////correction/////////////////////////////////


//correction de Marc
// let container = document.querySelector('h1');
// let element = document.createElement('a');
// element.setAttribute('href', 'https://developer.mozilla.org/fr/docs/Web/JavaScript');
// element.setAttribute('target', '_blank');
// element.style.textDecoration="none";
// element.style.color="white";
// element.innerText = "document JS"
// container.innerText = ""
// container.appendChild(element);


//correction Sahar

// container.innerHTML = '<a> Cours Javascript </a>';
// let element = document.querySelector('h1 a')
// element.setAttribute("href", "https://developer.mozilla.org/fr/docs/Web/JavaScript");
// element.setAttribute("target", "_blank");
// element.style.textDecoration="none";
// element.style.color="white"


//3eme façon de faire et la plus facile

// container.innerHTML = "<a href = 'https://developer.mozilla.org/fr/docs/Web/JavaScript' target='_blank' >Cours JavaScript</a>";
// let element = document.querySelector('h1 a');
// element.style.color="white";
// element.style.textDecoration="none";





