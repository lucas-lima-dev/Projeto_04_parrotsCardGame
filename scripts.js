let numberOfCards = 0;
const cardsList = [];
const cardsImage = ["'bobrossparrot'","'explodyparrot'","'fiestaparrot'","'metalparrot'","'revertitparrot'","'tripletsparrot'","'unicornparrot'"];

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

      for (let i = 0; i < numberOfCards/2; i++) {
        cardsList.push(`<div onclick ="flipCards(this,${cardsImage[i]})" class="cards">
        <img class = "parrot" src="./images/back.png" alt="">
    </div> `)
        cardsList.push(`<div onclick ="flipCards(this,${cardsImage[i]})" class="cards">
        <img class = "parrot" src="./images/back.png" alt="">
    </div> `) ;
        console.log(cardsImage[i]);
      }
      cardsList.sort(shuffle);
      elemento.innerHTML = cardsList.join(' ');
}
        
function shuffle(){
  return Math.random() - 0.5; 
}

function flipCards(card, image) {

  if(card.classList.contains("flip")) {
    card.classList.remove("flip");
    card.innerHTML = '<img class = "parrot"src="./images/back.png" alt="">';
  } else {
    card.classList.add("flip");
    card.innerHTML = `<img class = "parrot"src="./images/${image}.gif" alt=""></img>`
    }
}