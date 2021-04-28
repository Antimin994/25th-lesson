var buttons = document.getElementsByTagName('button');


for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (event) => {
       for (var j = 1; j <= 4; j++) {
        if(j == event.target.dataset.page) {document.querySelector(`.block_${j}`).classList.add('active_block')}
        else {document.querySelector(`.block_${j}`).classList.remove('active_block')}
        }
    });
}


var genderBox = document.querySelectorAll('input[name="gender"]');
var heightRange = document.querySelector('input[name="heightRange"]');
var valueHeightRange = document.querySelector('#rangeN');
var currWeight = document.querySelector('input[name="currWeight"]');
var wishWeight = document.querySelector('input[name="wishWeight"]');
var activityRange = document.querySelector('input[name="activityRange"]');
var valueActivityRange = document.querySelector('#rangeA');
var resultRange = document.querySelector('input[name="resultRange"]');
var valueResultRange = document.querySelector('#rangeR');
var printBlock = document.querySelector('#printBlock');


valueHeightRange.textContent = heightRange.value;
valueActivityRange.textContent = activityRange.value;
valueResultRange.textContent = resultRange.value;
printBlock.value = '';

for (var i = 0; i < genderBox.length; i++) {
genderBox[i].addEventListener('change', onChange);
}
heightRange.addEventListener('change', onChange);
currWeight.addEventListener('input', onChange);
wishWeight.addEventListener('input', onChange);
activityRange.addEventListener('change', onChange);
resultRange.addEventListener('change', onChange);


function onChange() {     
        
    //gender box 
    var genderIndex = 0;
    if (genderBox[0].checked) {genderIndex = 1.3}
    else  {genderIndex = 1};
    console.log('genderindex', genderIndex);
    
    
    //height range
    valueHeightRange.textContent = heightRange.value;
    var heightRangeIndex = heightRange.value / 170;
    console.log('heightRangeIndex', heightRange.value);
    
    
    //current weight
    if ((currWeight.value === "") || (isNaN(currWeight.value) === true)) {
       currWeight.value = "";
       }  
    let currWeightValue = Number(currWeight.value);
    console.log('currWeightValue', currWeightValue);
    
    
    //wish weight
    if ((wishWeight.value === "") || (isNaN(wishWeight.value) === true)) {
       wishWeight.value = "";
       }  
    let wishWeightValue = Number(wishWeight.value);
    console.log('wishWeightValue', wishWeightValue);
    
    //activity range
    valueActivityRange.textContent = activityRange.value;
    var activityRangeIndex = activityRange.value / 5000;
    console.log('activityRangeIndex', activityRange);
    
    
    //result range
    console.log(resultRange);
    valueResultRange.textContent = resultRange.value;
    var resultRangeIndex = resultRange.value / 65;
    console.log('resultRangeIndex', resultRangeIndex);  
        
       
    //Result
    printBlock.textContent = 1000 * genderIndex * heightRangeIndex * Math.abs(wishWeightValue - currWeightValue) * 0.1 * activityRangeIndex * resultRangeIndex;
        
   }

