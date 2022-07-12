

const calculateSumButton = document.querySelector('button');


function calculateSum(){
const userNumberElement = document.getElementById('user-number');
const enteredNumber = userNumberElement.value;
let sumUpToNumber = 0;

for ( let i=0; i <= enteredNumber; i++){
    sumUpToNumber = sumUpToNumber + i;
 }
 const outputResultElement= document.getElementById('calculated-sum');
 outputResultElement.textContent = sumUpToNumber;
 outputResultElement.style.display = 'block';
}

calculateSumButton.addEventListener('click', calculateSum);



// const highlightButtonSelector= document.getElementById('highlight-btn');

// const displayUserDataButton = document.getElementById('display-btn');

// const rollTheDiceButton = document.getElementById('roll-btn');
