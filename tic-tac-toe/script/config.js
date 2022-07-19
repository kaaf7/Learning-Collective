function openPlayerConfig(event){ 
editedPlayer = +event.target.dataset.playerid;// to access data element in HTML in edit-player-1-btn or edit-player--btn
playerConfigOverlayElement.style.display = 'block';
backdropElement.style.display = 'block';

 
}
 function closePlayerConfig(){
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorOutputElement.textContent = '';
}

function savePlayerConfig(event){
       // this function to fetch the data from the form and the executed 
        event.preventDefault();
        const formData= new FormData(event.target).get('playername').trim(); // trim will get rid of white space around the name for example ( karim ) => (karim)
        const enteredPlayerName = formData;

        if(!enteredPlayerName) {
        event.target.firstElementChild.classList.add('error') // to add the word error to the div class form-control in HTML
        errorOutputElement.textContent = 'please enter a valid name!';
        return;
        }
        
        const  updatePlayerDataElement = document.getElementById('player-'+ editedPlayer + '-data'); 
        updatePlayerDataElement.children[1].textContent = enteredPlayerName;
        players[editedPlayer - 1].name= enteredPlayerName;
        closePlayerConfig();

        

               
 
}

     

