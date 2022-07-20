function startnewGame(){
    if(players[0].name ===''||players[1].name === ''){
        alert('Please set a player name for both players');
        return;
    }
    activePlayerNameElement.textContent=players[activePlayer].name;
    gameAreaElement.style.display='block';
}
function switchPlayer(){
    if(activePlayer === 0){
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
    activePlayerNameElement.textContent=players[activePlayer].name;

}

function selectGameField(event){
if(event.target.tagName !== 'LI'){
    return;
}
    const selectedField = event.target;
    const selectedColumn = selectedField.dataset.col - 1;// subtracting 1 because the array in css starts with 1 and not 0
    const selectedRow = selectedField.dataset.row - 1;
    //to solve the problem of double clickiing the X O so once clicked it is locked
    if(gameData[selectedRow][selectedColumn] > 0 ){
        alert('please slect and emply field');
        return;

    }
    // accessing the first player which is playes[0] as const activePlayer=0; in app.js and then acess the element symbol which is X or O 
    selectedField.textContent = players[activePlayer].symbol;
    selectedField.classList.add('disabled'); // check this later as it is not clear lesson 315-316

  
    gameData[selectedRow][selectedColumn]= activePlayer + 1;
    // add 1 because activePlayer in app.js file is 0 by default to set the 1st player to 1 and 2nd player to 2
    const winnerId = checkGameOver();   // check this again in lesson 319
    if (winnerId !== 9){
        endGame(winnerId);
    }
    currentRound++;
    switchPlayer();

    function checkGameOver(){

        //checking the rows
    for( let i = 0; i< 3; i++){
    if( gameData[i][0]> 0 && 
        gameData[i][0] === gameData[i][1] &&
        gameData[i][1] ===  gameData[i][2]){return gameData[i][0];}
  } for( let i = 0; i < 3; i++){
    if( gameData[0][i]> 0 && 
        gameData[0][i] === gameData[1][i] &&
        gameData[0][i] ===  gameData[2][i]){ return gameData[0][i]; } 
    
        //diagonal top left to bottom right

    } if (gameData[0][0] > 0 &&
        gameData[0][0] === gameData[1][1] &&
        gameData[1][1] === gameData[2][2]  ){ return gameData[0][0];}

 //diagonal Botom left to top right
    } if (gameData[2][0] > 0 &&
        gameData[2][0] === gameData[1][1] &&
        gameData[2][1] === gameData[0][2]  
    ) { 
        return gameData[2][0];
      }

    if (currentRound === 9){
        return -1;
    }

    return 0;
    }

    function endGame(winnerId){
        gameOverElement.style.display='block';

        if(winnerId > 0 ) {
        const winnerName = players[winnerId - 1].name;
        gameOverElement.firstElementChild.firstElementChild.textContent = winnerName;

     } else {
         gameOverElement.firstElementChild.textContent= 'it\'s a draw!'
     }


}
