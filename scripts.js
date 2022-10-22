let numberOfCards = 0;
let lockBoard = false;
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

function getImage(element) {
  let image = element.getAttribute("src");
  image = image.slice(9);
  const lastPosition = image.length -1;
  
  const extentionLastPosition = 3; 
  
  image = image.slice(0,lastPosition - extentionLastPosition);
  return image;
}
 
function placeCards (){

  const elemento = document.querySelector(".main-content");

      for (let i = 0; i < numberOfCards/2; i++) {
        cardsList.push(`<div onclick ="makeMove(this,${cardsImage[i]})" class="cards">
        <img class = "parrot" src="./images/back.png" alt="">
    </div> `)
        cardsList.push(`<div onclick ="makeMove(this,${cardsImage[i]})" class="cards">
        <img class = "parrot" src="./images/back.png" alt="">
    </div> `) ;
        
      }
      cardsList.sort(shuffle);
      elemento.innerHTML = cardsList.join(' ');
}
        
function shuffle(){
  return Math.random() - 0.5; 
}

function makeMove(card, image) {

  const cardSelected = document.querySelector(".flip:not(.match)");
  
  flip(card,image);

  if(cardSelected === null) return;

  const cardSelectedImg = getImage(cardSelected.querySelector('img'));
  
  if (cardSelectedImg === image) {
    card.setAttribute('onclick','');
    cardSelected.setAttribute('onclick','');
    card.classList.add('match');
    cardSelected.classList.add('match');
  } else {
    setTimeout(flip,1000, card);
    setTimeout(flip,1000, cardSelected);
  }

}


function flip(card,image='') {

  

  if(card.classList.contains("flip")) {
    
    card.classList.remove("flip");
    card.innerHTML = '<img class = "parrot"src="./images/back.png" alt="">';
  } else {
    
    card.classList.add("flip");
    card.innerHTML = `<img class = "parrot"src="./images/${image}.gif" alt=""></img>`
    }
}

//cada clique some uma jogada
// comparar as duas cartas clicadas 
// se imagem da primeira === imagem da segunda, entao permaneça virada
// caso contrario, desvire as duas cartas e conte uma jogada 
