const numberOfTurns = 7;
let deck = createDeck();
let myDeck = [];
let yourDeck = [];
let yourRealDeck = [];
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
  createDeck();
  for(let round = 0; round < numberOfTurns -1; round++){
    console.log(`Round ${round}`);
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
  myScore = comboCounts[determineCombo[myDeck]];
  yourScore = comboCounts[determineCombo[yourRealDeck]];
  console.log("Your combo: ", determineCombo(myDeck));
  console.log("Enemy's combo: ", determineCombo(yourRealDeck));
  if(myScore > yourScore){
    console.log("You win!");
  }else if(myScore === yourScore){
    console.log("Draw");
  }else{
    console.log("Your lose!");
  }
}


// Function to identify a Royal Flush
function isRoyalFlush(hand) {
  return isStraightFlush(hand) && Math.min(...hand.map(card => card.number)) === 10;
}

// Function to identify a Straight Flush
function isStraightFlush(hand) {
  return isFlush(hand) && isStraight(hand);
}

// Function to identify a Four of a Kind
function isFourOfAKind(hand) {
  const counts = getCardCounts(hand);
  return Object.values(counts).includes(4);
}

// Function to identify a Full House
function isFullHouse(hand) {
  const counts = getCardCounts(hand);
  return Object.values(counts).includes(3) && Object.values(counts).includes(2);
}

// Function to identify a Flush
function isFlush(hand) {
  const suits = hand.map(card => card.hand);
  return suits.every(suit => suit === suits[0]);
}

// Function to identify a Straight
function isStraight(hand) {
  const numbers = hand.map(card => card.number).sort((a, b) => a - b);
  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] + 1 !== numbers[i + 1]) return false;
  }
  return true;
}
function isTwoPair(hand) {
  const counts = Object.values(getCardCounts(hand));
  return counts.filter(count => count === 2).length === 2;
}

// Function to identify One Pair
function isPair(hand) {
  const counts = getCardCounts(hand);
  return Object.values(counts).includes(2);
}

// Function to count card numbers in the hand
function getCardCounts(hand) {
  const counts = {};
  for (let card of hand) {
    counts[card.number] = (counts[card.number] || 0) + 1;
  }
  return counts;
}

// Function to determine the best combo of a hand and count it
function determineCombo(hand) {
  if (isRoyalFlush(hand)) return "Royal Flush";
  if (isStraightFlush(hand)) return "Straight Flush";
  if (isFourOfAKind(hand)) return "Four of a Kind";
  if (isFullHouse(hand)) return "Full House";
  if (isFlush(hand)) return "Flush";
  if (isStraight(hand)) return "Straight";
  if (isTwoPair(hand)) return "Two Pair";
  if (isPair(hand)) return "Pair";
  return "High Card"; // Default to High Card if no other combo
}

// Counting system

const comboCounts = {
    "Royal Flush": 10,
    "Straight Flush": 8,
    "Four of a Kind": 7,
    "Full House": 6,
    "Flush": 5,
    "Straight": 4,
    "Two Pair": 3,
    "Pair": 2,
    "High Card": 1,
  };

  main();