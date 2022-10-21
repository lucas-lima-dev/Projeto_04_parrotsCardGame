let numberOfCards = 0;
const cardsList = [];

do {
  numberOfCards = Number(prompt("Digite um numero de cartas que seja PAR entre 4 e 14:"));
} while (verify(numberOfCards) === false);

placeCards ();

function verify(numberOfCards){

//if ((numberOfCards % 2 !== 0) && (numberOfCards < 4) && (numberOfCards > 14)){
  if ((numberOfCards % 2 !== 0)){
    alert("Quantidade de cartas inválida!")
    return false;
      } else if (numberOfCards < 4){
        alert("Quantidade de cartas inválida!")
          return false;
      }else if (numberOfCards > 14){
        alert("Quantidade de cartas inválida!")
          return false;
      } else {
          return true;
      }
}
 
function placeCards (){

  const elemento = document.querySelector(".main-content");
      for (let i = 0; i < numberOfCards; i++) {
        elemento.innerHTML +=  `<div onclick ="flipCards(this)" class="cards">
        <img class = "parrot" src="./images/back.png" alt="">
    </div>`;
      }
}
        

function flipCards(card) {

  if(card.classList.contains("flip")) {
    card.classList.remove("flip");
    card.innerHTML = '<img class = "parrot"src="./images/back.png" alt="">';
  } else {
    card.classList.add("flip");
    card.innerHTML = '<img class = "parrot"src="./images/bobrossparrot.gif" alt=""></img>'
    }
}