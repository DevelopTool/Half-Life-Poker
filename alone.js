const startbtn = document.getElementById('start-btn');
const holdswitch = document.getElementById('hold-switch');
const main = document.getElementById('main-game');
const playergame = document.getElementById('player-game');
const botgame = document.getElementById('bot-game');
const playercards = document.getElementById('player-cards');
const botcards = document.getElementById('bot-cards');

//player cards
const pcard1 = document.getElementById('player-cards1');
const pcard2 = document.getElementById('player-cards2');
const pcard3 = document.getElementById('player-cards3');
const pcard4 = document.getElementById('player-cards4');
const pcard5 = document.getElementById('player-cards5');
//bot cards
const bcard1 = document.getElementById('bot-cards1');
const bcard2 = document.getElementById('bot-cards2');
const bcard3 = document.getElementById('bot-cards3');
const bcard4 = document.getElementById('bot-cards4');
const bcard5 = document.getElementById('bot-cards5');


let playerCardsArray = ['0', '0', '0', '0', '0'];
let botCardsArray = ['0', '0', '0', '0', '0'];

//start game

startbtn.onclick = function start(){

    //player
    for (i=0; i < playerCardsArray.length; i++){
    playerCardsArray[i] = Math.floor(Math.random() * 6) + 1;
    
    }
    //bot
    for (i=0; i < botCardsArray.length; i++){
        botCardsArray[i] = Math.floor(Math.random() * 6) + 1;
        
        }
        console.log(playerCardsArray);
        console.log(botCardsArray);

}
// Make card go up
var statusc1 = 'down';

if(statusc1 == 'down'){
pcard1.onclick = function() {
// Make card go up

        console.log('its down');
       pcard1.style.bottom += 10;
       console.log('its going up + 10')
        statusc1 = 'up';
    console.log(statusc1);
};
}

if(statusc1 == 'up'){
pcard1.onclick = function() {
// Make card go down
    console.log('its up');
    pcard1.style.bottom -= 10;
    console.log('its going down - 10')
    statusc1 = 'down';
    console.log(statusc1);
};
}


//testing
console.log(playerCardsArray);
console.log(botCardsArray);