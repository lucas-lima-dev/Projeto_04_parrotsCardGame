let numberOfCards = 0;
let moveCount = 0;
let matchCount = 0;
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
  moveCount++;
  const cardSelected = document.querySelector(".flip:not(.match)");
  
  flip(card,image);

  if(cardSelected === null) return;

  const cardSelectedImg = getImage(cardSelected.querySelector('img'));
  
  if (cardSelectedImg === image) {
    matchCount++;
    card.setAttribute('onclick','');
    cardSelected.setAttribute('onclick','');
    card.classList.add('match');
    cardSelected.classList.add('match');
    
  } else {
    setTimeout(flip,1000, card);
    setTimeout(flip,1000, cardSelected);
  }

  if (matchCount === cardsList.length/2) endGame();
  

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

function endGame(){

    setTimeout (()=> {alert (`Você ganhou em ${moveCount} jogadas!`);
  }, 1000)
}
