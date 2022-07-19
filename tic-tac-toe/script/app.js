const gameData= [
  [0, 0, 0]
, [0, 0, 0], 
  [0, 0, 0]];
let editedPlayer= 0;
const players=[ {name:'', symbol:'X', },{name:'', symbol:'O'} ];
let activePlayer=0;
let currentRound =1;

const playerConfigOverlayElement = document.getElementById('config-overlay') ;
const backdropElement= document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorOutputElement =  document.getElementById('config-error');
const gameAreaElement = document.getElementById('active-game');
const activePlayerNameElement = document.getElementById('active-player-name');


const editPlayer1BtnElement = document.getElementById('edit-player-1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player-2-btn');
const cancelConfigBtnElement = document.getElementById('cancel-config-btn');
const confirmlConfigBtnElement = document.getElementById('confirm-config-btn');
const startNewGameBtnElement = document.getElementById('start-game-btn');

// querySelectorall function selects all the array (li) children of the id gameboard in css for
const gamFieldElements = document.querySelectorAll('#game-board li'); 

editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
editPlayer2BtnElement.addEventListener('click', openPlayerConfig);
cancelConfigBtnElement.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);
 // access to confirm Button in HTML through type submit and then adding an Eventlistener which is the function savePlayerConfig to save the data
 formElement.addEventListener('submit',savePlayerConfig);
 startNewGameBtnElement.addEventListener('click', startnewGame);
//now going through the array so we can use each array element as individual separated element for X O Button

for( const gamFieldElement of gamFieldElements){
    gamFieldElement.addEventListener('click', selectGameField);

 }
