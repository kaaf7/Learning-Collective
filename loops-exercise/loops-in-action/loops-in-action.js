

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
 highlightButtonSelector.addEventListener('click',highLightLinks);

// const displayUserDataButton = document.getElementById('display-btn');

// const rollTheDiceButton = document.getElementById('roll-btn');
