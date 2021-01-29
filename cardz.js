window.onload = () =>{

/*--------BEGIN cards and numbers vectors*/
let myCards = ['♣','♦','♥','♠'];
let myCardNumbers = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];

/*-------END random cards and numbers */


/*------BEGIN random cards and numbers Math.random */

let randomNumbers = Math.floor(Math.random()* 13);

let randomSharp = Math.floor(Math.random()* 4);
/*-----END random cards and numbers Math.random */

/*--------BEGIN genCard-genNumber ----*/
let cardSharp = myCards[randomSharp];
let numberGen = myCardNumbers[randomNumbers];

/*------- END genCard-genNumber ---*/

/*------- BEGIN data => IDs -----*/

let idHead = document.querySelector('#colorSuit1');
    idHead.innerHTML = cardSharp;
    /*---BEGIN Red Ones --- ****/
if(cardSharp === '♦' || cardSharp === '♥'){
    document.querySelector('#colorSuit1').style.color = "red";
    document.querySelector('#colorSuit2').style.color = "red";
}
    /*---END Red Ones ---*/
let idBody = document.querySelector('h1');
    idBody.innerHTML = numberGen;
    
let idFooter = document.querySelector('#colorSuit2');
    idFooter.innerHTML = cardSharp;
    /*---BEGIN Black Ones---*/
    if(cardSharp === '♣'|| cardSharp === '♠'){
    document.querySelector('#colorSuit1').style.color = "black";
    document.querySelector('#colorSuit2').style.color = "black";
    }
    /*---END Black Ones---*/
} /*----END Window.onload Event ---*/
