/*--------BEGIN cards and numbers vectors*/
let mycards = ['&spades;','&hearts;','&diams;','&clubs;'];
let mycardnumbers = [2,3,4,5,6,7,8,9,10,J,Q,K,A];

/*-------END random cards and numbers */


/*------BEGIN random cards and numbers Math.random */

let randomNumbers = Math.floor(Math.random()* 13);

let randomSharp = Math.floor(Math.random() * 4);
/*-----END random cards and numbers Math.random */

/*--------BEGIN gencard-number ----*/
let cardSharp = mycards[randomCards];
let numberGen = mycardnumbers[randomNumbers];

/*------- END gencard-number ---*/

/*------- BEGIN data => IDs -----*/

let idHead = document.getElementsByClassName('head-path');
    idHead.innerHTML = cardGen;
let idBody = document.getElementsByClassName('main-path');
    idBody.innerHTML = numberGen;
let idFooter = document.getElementsByClassName('footer-path');
    idFooter.innerHTML = cardGen;

/*----- END data => IDs ----*/
