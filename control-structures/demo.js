 const productNameInputElement = document.getElementById('product-name');
 const remainingCharsElement = document.getElementById('remaining-chars');
 const maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCharacters(event) {
 const enteredText = event.target.value;
 const enteredTextLength = enteredText.length; 
 const remainingCharacters = maxAllowedChars - enteredTextLength;

remainingCharsElement.textContent = remainingCharacters;
 
 if (remainingCharacters === 0) {
     remainingCharsElement.classList.add('error');
     productNameInputElement.classList.add('error');
  } 
  else if( remainingCharacters>=10) {
     remainingCharsElement.classList.remove('error', 'warning');
     productNameInputElement.classList.remove('error','warning');
  } else {
     remainingCharsElement.classList.remove('error', 'warning');
     productNameInputElement.classList.remove('error', 'warning');
  }
}

productNameInputElement.addEventListener('input', updateRemainingCharacters);