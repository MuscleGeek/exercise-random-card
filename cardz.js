window.onload = () =>{

/*--------BEGIN cards and numbers vectors*/
let myCards = ['&spades;','&clubs;','&diams;','&hearts;'];
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

let idHead = document.querySelector('.my-head');
    idHead.innerHTML = cardSharp;
    /*---BEGIN Red Ones ---
if(myCards == myCards[myCardNumbers[3]] || myCards == myCards[myCards[4]]){
    document.querySelector('.my-header').style.color = 'red';
    document.querySelector('.my-footer').style.color = 'red';
}
    /*---END Red Ones ---*/
let idBody = document.querySelector('h1');
    idBody.innerHTML = numberGen;
let idFooter = document.querySelector('.my-footer');
    idFooter.innerHTML = cardSharp;
    /*---BEGIN Black Ones---
    if(myCards == myCards[myCards[0]] || myCards == myCards[myCards[1]]){
    document.querySelector('my-header').style.color = 'black';
    document.querySelector('my-footer').style.color = 'black';
    }
    /*---END Black Ones---*/

/*----- END data => IDs ----*/
/*-----BEGIN Red Ones or Black Ones----*/

/*-----END Red Ones or Black Ones----*/
