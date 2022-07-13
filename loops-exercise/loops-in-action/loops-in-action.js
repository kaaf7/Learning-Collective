
const calculateSumButton = document.querySelector('#calculator button');
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



 const highlightButtonSelector= document.querySelector('#highlight-links button');
 function highLightLinks(){
 const anchorElements=document.querySelectorAll('#highlight-links a');
 for( const anchorElement of anchorElements){
 anchorElement.classList.add('highlight');
}
};
 highlightButtonSelector.addEventListener('click', highLightLinks);



 const displayUserDataButton = document.querySelector('#user-data button');
 function displayUserData(){
 const outputDataElement = document.getElementById('output-user-data');
 outputDataElement.innerHTML='';

 for (const key in dummyUserData) {
    const newUserDataListItemsElement = document.createElement('li');
    const outpuText = key.toUpperCase() + ':' + dummyUserData[key];
    newUserDataListItemsElement.textContent = outpuText;
    outputDataElement.append(newUserDataListItemsElement);
 }
 }

const rollTheDiceButton = document.querySelector('#statistics button');
function rollDice (){}
function deriveNumberOfDiceRolls()
{
    const targetNumberInputElement = document.getElementById('user-target-number');
    const enteredNumber = targetNumberInputElement.value;
}
rollDiceButtonElement.addEventListener('click', deriveNumberOfDiceRolls);
