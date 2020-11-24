/** Fonction 1-bis */
var x =0
function compteur() {
  x += 1;
  document.querySelector('footer');
  console.log(`Clique numéro ${x}`)
}

/** Fonction 2 */
var menuBurger = document.querySelector('#navbarHeader');
var buttonBurger = document.querySelector('span.navbar-toggler-icon')
var toggler =  function() {
  menuBurger.classList.toggle('collapse')
}
buttonBurger.addEventListener('click',toggler)
/** pour activer la function, soit on laisse la derniére ligne 
 * soit on rajouter onclick="toggler() 
 * dans l'html ligne 37"
 */

 /** Fonction 3  */
var card = document.querySelector('.card'); /** carte entière */
var edit = document.querySelector('.btn-outline-secondary'); /** bouton edit */
var text = document.querySelector('p.card-text') /** texte carte */
var red = function () {
  text.style.color = 'red';
}

edit.addEventListener('click', red)

/** Fonction 4  */
function greenText(){
  let textCard = document.querySelectorAll('.card-text')[1]
  let btnEdit  = document.querySelectorAll(".btn-outline-secondary")[1]
  btnEdit.addEventListener("click", function(){
    if (textCard.style.color === 'green') {
      textCard.style.color = 'black'
    } else {
      textCard.style.color = 'green'
    }
  })};
 greenText();


 /** Fonction 5  */
 function noBoot() {
  let navbar = document.querySelector('.navbar')
  let link = document.querySelector("head > link")
  navbar.addEventListener('dblclick', function() {
    if(link.disabled === false) {
  link.disabled = true;
} else {
  link.disabled = false;
}})};
noBoot();

/** Fonction 6 */
function removeCard() {
  let btnView = document.querySelectorAll('.btn-success');
  let image = document.querySelectorAll('.card-img-top');
  let text = document.querySelectorAll('.card-text');
  for (let i = 0; i < btnView.length ; i++)
  btnView[i].addEventListener('mouseover', function(){
    if(text[i].style.visibility !== "hidden") {
    image[i].style.width = "20%";
    text[i].style.visibility = 'hidden';
  } else {
    image[i].style.width = "";
    text[i].style.visibility = 'visible';
  };
  })};
removeCard()


/** Fonction 7  */
function wtf(){
  let btnArrow = document.querySelector(".btn-secondary");
  let parent = document.querySelectorAll('.row')[1];
  btnArrow.addEventListener("click", function(){
    let cardMove = document.querySelectorAll('.col-md-4')[5]
    parent.prepend(cardMove);
  })
};
wtf()

/** Fonction 8  */
function wtfReverse(){
  let btnArrowLeft = document.querySelector(".btn-primary");
  let parent = document.querySelectorAll('.row')[1];
  btnArrowLeft.addEventListener("click", function(e){
    e.preventDefault()
    let cardMove = document.querySelectorAll('.col-md-4')[0]
    parent.append(cardMove);
  })
};
wtfReverse()

/** Fonction 9  */

