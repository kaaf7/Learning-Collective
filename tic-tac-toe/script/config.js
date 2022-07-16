function openPlayerConfig(event){ 
//const editedPlayer = evenmt.getElementById();// to access data element in HTML in edit-player-1-btn or edit-player--btn
//const editedPlayer = document.querySelector('#game-configuration');
//editedPlayer = document.getElementById('player-1-data');
playerConfigOverlayElement.style.display = 'block';
backdropElement.style.display = 'block';
//const editedPlayer =event.target.dataset.playerid;

 


}
function closePlayerConfig(){
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorOutputElement.textContent = '';


}
// function savePlayerConfig(event){
//      event.preventDefault();
//      const formData = new FormData(event.target);
//      const enteredPlayername= formData.get('playername');
//      console.log(enteredPlayername);

//      }


     function savePlayerConfig(event){
       // this function to fetch the data from the form and the executed 
        event.preventDefault();
        const formData= new FormData(event.target).get('playername').trim(); // trim will get rid of white space around the name for example ( karim ) => (karim)
        const enteredPlayerName = formData;
        if(!enteredPlayerName) {
        event.target.firstElementChild.classList.add('error') // to add the word error to the div class form-control in HTML
        errorOutputElement.textContent = 'please enter a valid name';
        return;
        }
        
        updatePlayerDataElement = document.getElementById('player-'+ 2' + '-data'); 
        updatePlayerDataElement.children[1].textContent=enteredPlayerName;


       //players [editedPlayer-1].name=enteredPlayerName;
        //const updatedPlayerData = document.getElementById('player-1-data');
       // updatedPlayerData.children[1].textcontent = enteredPlayerName;
        
 
}

     

