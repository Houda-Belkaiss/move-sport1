// ============================================================
// MoveSpot : parcours pédagogique
// Travaillez UNE étape à la fois et testez avant de continuer.
// Aucune solution n'est fournie : à vous de jouer !
// ============================================================


// ------------------------------------------------------------
// ÉTAPE 0 : Découvrir les données
// ------------------------------------------------------------
// Questions :
//  - Que contient le tableau `cours` ? array of object// Combien d'éléments: 4 elements ?
//  - Que contient un cours ?id/nom/categorie/duree/coach/image/ prix/creneaux:  //Et un créneau ?//id /jour/ heure /occupes
//  - Comment accéder au prix du 2e cours ?// cours[1].prix //par  Au 1er créneau du 3e cours ?//cours[2].creneaux[0]
// TODO : affichez `cours` dans la console avec console.log(), puis explorez-le.
//console.log(cours);


// ------------------------------------------------------------
// ÉTAPE 1 : Sélectionner les éléments du DOM
// ------------------------------------------------------------
// Identifiants disponibles dans index.html :
//
//

//  courses-container, selected-course-title, slots-container,
//  seats-container, summary-course, summary-slot, summary-seats,
//  summary-count, summary-total, confirm-button, message
// TODO : récupérez ces éléments et rangez-les dans des constantes.
// Question : quelle est la différence entre getElementById et querySelector ?// la différence est getElementById est seluctione par id et queryselector est selectione les classe et id et aussi type de data qui done 

const coursesContainer = document.getElementById("courses-container");
//console.log(coursesContainer);
const selectedCourseTitle = document.getElementById("selected-course-title");
//console.log(selectedCourseTitle);
const slotsContainer = document.getElementById("slots-container");
//console.log(slotsContainer);
const seatsContainer = document.getElementById("seats-container");
//console.log(seatsContainer);
const summaryCourse = document.getElementById("summary-course");
//console.log(summaryCourse);
const summarySlot = document.getElementById("summary-slot");
//console.log(summarySlot);
const summarySeats = document.getElementById("summary-seats");
//console.log(summarySeats);
const summaryCount = document.getElementById("summary-count");
//console.log(summaryCount);
const summaryTotal = document.getElementById("summary-total");
//console.log(summaryTotal);
const confirmButton = document.getElementById("confirm-button");
//console.log(confirmButton);
const message = document.getElementById("message");
//console.log(message);








// ------------------------------------------------------------
// ÉTAPE 2 : État de l'application
// ------------------------------------------------------------
// L'application doit "se souvenir" de ses choix pendant la session.
// TODO : déclarez les variables d'état nécessaires.
//const coursesContainer = document.getElementById("courses-container") ;
// Question : de quelles informations avez-vous besoin ?
//  (cours choisi, créneau choisi, emplacements choisis...)
// en a besoin l'information cours choisi avec leur informations
// Indice : pourquoi un tableau est-il adapté pour les emplacements choisis ?







// ------------------------------------------------------------
// ÉTAPE 3 : Afficher les cours (US01)
// ------------------------------------------------------------
// TODO : écrivez une fonction qui parcourt `cours` et crée une carte par cours.
//  - Étudiez d'abord une carte statique dans index.html (c'est votre modèle).
//  - Videz ensuite #courses-container, puis recréez les cartes depuis les données.
//  - Chaque carte affiche : visuel, catégorie, nom, durée, coach, prix.
// Questions :
//  - Quelle boucle ou méthode de tableau allez-vous utiliser ? ils doit utilise forEch
//  - Comment stocker l'id du cours sur la carte (indice : data-*) ?
//  - Les template literals (`...${valeur}...`) peuvent-ils vous aider ?
cours.forEach(element => {
  const article = document.createElement('article');
  article.innerHTML = `
        <article  class="cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:shadow-md" data-id="${element.id}">
            <img src=${element.image} alt="Visuel du cours HIIT Express" class="h-36 w-full object-cover" />
            <div class="space-y-1 p-4">
              <span class="inline-block rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-medium text-teal-700">${element.categorie}</span>
              <h3 class="text-lg font-semibold text-slate-900">${element.nom}</h3>
              <p class="text-sm text-slate-600">${element.duree}, avec ${element.coach}</p>
              <p class="pt-1 text-base font-bold text-slate-900">${element.prix} € <span class="text-sm font-normal text-slate-500">par place</span></p>
            </div>
          </article>
            `
  coursesContainer.appendChild(article);

});

// ------------------------------------------------------------
// ÉTAPE 4 : Sélectionner un cours (US02)
// ------------------------------------------------------------
// TODO : au clic sur une carte, mémorisez le cours choisi.
//  - Le cours sélectionné doit être identifiable visuellement
//    (observez les classes de la carte statique sélectionnée).
//  - Un seul cours peut être sélectionné à la fois.
// Questions :
//  - Faut-il un écouteur par carte, ou un seul sur le conteneur ? Quels sont les avantages ?
//  - Comment retrouver le cours à partir de l'id lu dans la carte ?
//  - Que faut-il réinitialiser quand on change de cours ?

const coursesC = document.querySelectorAll(".cursor-pointer");

//const coursesCont = document.getElementById("courses-container") ;

coursesC.forEach(function (cour) {
  
  cour.addEventListener('click', function () {

    coursesC.forEach(function (c) {
      c.classList.remove('ring-2', 'ring-teal-600');
    });
    cour.classList.add('ring-2', 'ring-teal-600');

    let selectedCourse = cours.find(item => cour.dataset.id === item.id );
    
    
      //console.log(selectedCourse);
      
    selectedCourseTitle.textContent = selectedCourse.nom;
    slotsContainer.textContent = "";
    selectedCourse.creneaux.forEach(function (crn) {
     //console.log(crn);
      const button = document.createElement('button');
     
      button.innerHTML = ` <button type="button" class="rounded-xl border px-4 py-2 text-sm font-medium transition  " data-id="${crn.id}">
            ${crn.jour} <span class="font-normal">${crn.heure}</span>
          </button>`
     slotsContainer.appendChild(button);

    //console.log(crn.occupes);

    });
    slotsContainerr();
    
  });

})
//bg-teal-600 text-white



// ------------------------------------------------------------
// ÉTAPE 5 : Afficher et sélectionner un créneau (US03)
// ------------------------------------------------------------
// TODO : affichez les créneaux du cours sélectionné.
//  - Mettez à jour #selected-course-title avec le nom du cours.
//  - Le créneau choisi doit être identifiable visuellement.
//  - Changer de créneau doit vider la sélection d'emplacements.
// Questions :
//  - Quand cette fonction doit-elle être appelée ?
//  - Que se passe-t-il si aucun cours n'est encore sélectionné ?
//const selectedCourseTitle = document.getElementById("selected-course-title");

function slotsContainerr() {
  let buttons = slotsContainer.querySelectorAll("button");
  //console.log(buttons);
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      buttons.forEach(function (c) {
        c.classList.remove('bg-teal-600','text-white')
      });
      btn.classList.add('bg-teal-600', 'text-white')
    })
   
  })
}
 

cours.forEach(function (occup) {
  console.log(occup.creneaux);
//occup.creneaux.forEach(function (c) {
  //console.log(c.occupes);
  
}
)
    
  
//)
//}



// ------------------------------------------------------------
// ÉTAPE 6 : Afficher le plan de la salle (US04)
// ------------------------------------------------------------
// TODO : générez les 30 emplacements (5 rangées x 6 tapis) avec des boucles.
//  - Identifiants attendus : A1, A2... A6, B1... E6.
//  - Les emplacements présents dans `occupes` du créneau choisi doivent être
//    visuellement différents et NON sélectionnables.
// Questions :
//  - Comment construire "A1" à partir d'une rangée et d'un numéro ?
//  - Comment savoir si un emplacement est dans la liste des occupés (includes) ?
//  - Faut-il une boucle imbriquée ? Pourquoi ?





  
  
  













// ------------------------------------------------------------
// ÉTAPE 7 : Sélectionner / désélectionner des emplacements (US05)
// ------------------------------------------------------------
// TODO : au clic sur un emplacement libre :
//  - s'il n'est pas sélectionné, ajoutez-le à votre tableau d'état ;
//  - s'il l'est déjà, retirez-le ;
//  - la modification doit être visible immédiatement.
// Questions :
//  - Quelle méthode de tableau permet d'ajouter ? De retirer (filter, splice) ?
//  - Comment vérifier qu'un id est déjà dans le tableau ?
//  - Que doit-il se passer si on clique sur un emplacement occupé ?


// ------------------------------------------------------------
// ÉTAPE 8 : Calculer et afficher le récapitulatif (US06)
// ------------------------------------------------------------
// TODO : écrivez une fonction qui met à jour la zone "Récapitulatif" :
//  cours, créneau, emplacements, nombre de places et total.
//  - Total = nombre de places x prix du cours.
//  - Appelez-la après CHAQUE sélection ou désélection.
// Questions :
//  - Que doit afficher le récapitulatif quand rien n'est sélectionné ?
//  - Comment transformer un tableau en texte lisible ("C3, C4") (join) ?


// ------------------------------------------------------------
// ÉTAPE 9 : Confirmer une réservation fictive (US07)
// ------------------------------------------------------------
// TODO : au clic sur #confirm-button :
//  - si aucun emplacement n'est sélectionné, affichez un message d'erreur clair ;
//  - sinon, affichez dans #message : cours, créneau, emplacements, montant total.
//  - Rien ne doit être enregistré durablement (pas de localStorage ici).
// Questions :
//  - Comment afficher ou masquer #message (classe "hidden") ?
//  - Faut-il réinitialiser la sélection après confirmation ? Quelles en sont les conséquences ?


// ------------------------------------------------------------
// ÉTAPE 10 : Initialisation
// ------------------------------------------------------------
// TODO : au chargement, sélectionnez par défaut le premier cours
//  et affichez toute l'interface à partir des données.
// Question : dans quel ordre faut-il appeler vos fonctions ?


// ------------------------------------------------------------
// BONUS (Partie 2 : page « Mes réservations »)
// ------------------------------------------------------------
// Comment partager la liste des réservations confirmées entre deux pages
// sans rien enregistrer durablement ? Réfléchissez aux options et à leurs limites.
