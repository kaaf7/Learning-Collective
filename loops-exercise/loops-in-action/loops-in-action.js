
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
function rollDice (){
return (Math.random() * 6) + 1;
}
function deriveNumberOfDiceRolls()
{
    const targetNumberInputElement = document.getElementById('user-target-number');
    const diceRollsListElement = document.getElementById('dice-rolls');
    const enteredNumber = targetNumberInputElement.value;
    diceRollsListElement.innerHTML='';
    let hasRolledtargetNumbe= false;
    let numberOfRolls = 0;

    while (!hasRolledtargetNumbe){
      const rollednumber =  rollDice();
    //   if(rolledNumber == enteredNumber) {
    //     hasRolledtargetNumbe=true;
    //   }
    numberOfRolls++; 
    const newRollListitemElement = document.createElement('li');
    const outPutText = 'Roll' + numberOfRolls + ': ' + rollednumber;
    newRollListitemElement.textContent = outpuText;
    diceRollsListElement.append(newRollListitemElement);
    hasRolledtargetNumbe = rollednumber == enteredNumber;


    }
       const outputTotalRollsElement = document.getElementById('output-total-rolls')
       const outputTargetNumberElement = document.getElementById('output-target-number')
       outputTargetNumberElement.textContent = enteredNumber;
       outputTotalRollsElement.textContent = numberOfRolls;
}
rollDiceButtonElement.addEventListener('click', deriveNumberOfDiceRolls);
