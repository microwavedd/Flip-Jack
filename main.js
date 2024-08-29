const numberOfTurns = 7;
let deck = createDeck();
let myDeck = [];
let yourDeck = [];
let yourRealDeck = [];
let myNumbers = [];
let mySuit = [];
let yourNumbers = [];
let yourSuit = [];
let myCombo = [];
let yourCombo = [];
let myScore = 0;
let yourScore = 0;


function createDeck() {
    const suits = ['D', 'S', 'H', 'C']; 
    const deck = [];
  
    for (let suit of suits) {
      for (let number = 1; number <= 13; number++) {
        const card = {
          number: number,
          hand: suit
        };
        deck.push(card);
      }
    }
  
    return deck;
  }
  shuffle(deck);
function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
}
function main(numberOfTurns){
  for(let round = 0; round < numberOfTurns -1; round++){
    let answer = prompt(deck[0]);
    if(answer === "y"){
      myDeck.push(deck[0]);
      yourDeck.push(deck[1]);
      yourRealDeck.push(deck[1]);
    }else{
      yourDeck.push("X");
      yourRealDeck.push(deck[0]);
      myDeck.push(deck[1]);
    }
    myNumbers.push(myDeck[round].number);
    yourNumbers.push(yourDeck[round].number);
    mySuit.push(myDeck[round].hand);
    yourSuit.push(yourDeck[round].hand);
    deck.splice(0,1);
    deck.splice(1,1);
    console.log("Your hand:");
    console.log(yourDeck);
    console.log("Enemy hand:");
    console.log(yourDeck);
  }
}
