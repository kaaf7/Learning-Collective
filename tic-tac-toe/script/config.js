function openPlayerConfig(){
playerConfigOverlayElement.style.display = 'block';
backdropElement.style.display = 'block';

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
        }else {

        }

}

     

