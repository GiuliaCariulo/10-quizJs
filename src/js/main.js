// Quiz: Veuillez répondre aux questions ci-dessous. (1 heure) (+20 min pour les personnes bénéficiant de mesures supplémentaires)
// Lorsqu'il y a des sous-points (questions 7, 8 et 11), ils vous guident dans les diverses étapes de l'exercice.
// Le quiz est individuel. Vous avez cependant accès à tous les supports de cours, ainsi qu'internet.
// -----------------------

// Je commence ce quizz à 20: 10

// 1. Expliquez ce qu'est-ce qu'une variable.
// REPONSE: une variable est une manière de prendre en main un élément de l'index.html ou bien un chiffre ou bien avoir une chaîne de caractère, c'est comme transformer un/plusieurs élément en un pion qu'on peut ensuite manipuler. On utilise let pour une variable qui peut changer, et const pour une variable inchangeable.

// -----------------------
// 2. Déclarez une variable s'appelant "firstName" et dont la valeur est votre prénom.

const firstName = "Giulia";

// -----------------------
// 3. Déclarez une variable s'appelant "age" et dont la valeur est votre âge. Attention, sa valeur pourrait être modifiée par la suite.

let age = 19;

// -----------------------
// 4. Dans le code HTML (lignes 17 - 23), citez les divers éléments composant l'élément HTML <input>:
// - Balise HTML: <input/>
// - Classe(s): .card-input
// - Attribut(s): type, name, placeholder, id, class

// -----------------------
// 5. Expliquez la différence entre une class et un ID.
// REPONSE: Une class est utilisée pour donner un même style à des éléments qui se répètes alors que l'id est utilisée pour donner un style à un élément uniquement.

// -----------------------
// 6. A quoi sert la méthode document.querySelector("..."); ?
// REPONSE: Elle sert à sélectionner un élément dans le html

// -----------------------
// 7. A l'aide de la méthode document.querySelector("..."), sélectionnez l'élément <p> (ligne 14 du code HTML):
// 7.1 Créez une variable appelée "cardContent".
// 7.2 Assignez lui l'élément <p> (ligne 14 du code HTML) que vous avez sélectionné en 7.1.

const cardContent = document.querySelector("#card-1 p");

// -----------------------
// 8. Utilisez la variable "cardContent" créée à l'exercice 7:
// 8.1 Utilisez la propriété   -> .classList <-   pour ajouter   -> .add("...") <-   la class "highlight" à l'élément HTML.
// 8.2 De même, retirez la class .cardContent

cardContent.classList.add("highlight");
cardContent.classList.remove("card-content");

// -----------------------
// 9. Récupérez la valeur de l'attribut "placeholder"   -> .getAttribute("...") <-   de l'élément HTML <input> (ligne 17 du code HTML).

//on sélectionne l'élément dont on veut connaître l'id
const passwordInput = document.querySelector("#password-input");
//là on cherche l'attribut.
passwordInput.getAttribute("placeholder");
// pour modifier un attribut on met setAttribute, premier "valeur de l'attribut" "nouvelle valeur de l'attribut"
passwordInput.setAttribute("placeholder", "***");

// -----------------------
// 10. Expliquez ce qu'est un écouteur d'événement.
// REPONSE: c'est une fonction qui attend une action de l'utilisateurice comme un "click"/"scroll" pour exécuter des instructions.

// -----------------------
// 11. Sur l'élément HTML button (ligne 26 du code HTML), écoutez l'événement "click":
// 11.1 : Sélectionnez l'élément HTML <button> (ligne 26 du code HTML).
// 11.2 : Utilisez la méthode   -> .addEventListener("...", function() {...}) <-   sur l'élément HTML sélectionné en 11.1 pour écouter l'événement "click".
// 11.3 : Lorsqu'un.e utilisateurice clique sur le bouton, ajoutez/supprimez (toggle) la class "hide" de l'élément HTML <p> (ligne 29-31 du code HTML).

const btnCard = document.querySelector("#card-btn");

btnCard.addEventListener("click", function () {
  const toggleText = document.querySelector("#toggle-text");
  toggleText.classList.toggle("hide");
});
