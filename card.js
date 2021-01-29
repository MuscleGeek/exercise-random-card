let cards = ['♥', '♣', '♦', '♠'];
let numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']; 


/*--------- Function Showing card -------------*/
function showCard() {
  let Card = cards[Math.floor(Math.random() * cards.length)];
  let Number = numbers[Math.floor(Math.random() * numbers.length)];
  let theCard = `${number}`;
  let thenumber = `${card}`;
  
/*--------- END Function Showing Card -----------*/

/*--------- get IDs ------------------*/
  document.getElementById("Symbol").innerHTML = theCard;
  document.getElementById("bodyNumber").innerHTML = theNumber;
}

/*--------- END get IDs -------------------*/
