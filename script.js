// Selecting DOM elements for different parts of the calculator
const hourEl = document.querySelector('.hour'); // Displays the current hour
const minEl = document.querySelector('.minute'); // Displays the current minute
const valueEl = document.querySelector('.display'); // The main calculator display

// Selecting functional buttons
const acEl = document.querySelector('.acl'); // AC (All Clear) button
const pmEl = document.querySelector('.pm'); // Plus/Minus toggle button
const percentEl = document.querySelector('.percent'); // Percentage button

// Selecting operator buttons
const addEl = document.querySelector('.addition'); // Addition button
const subEl = document.querySelector('.subtraction'); // Subtraction button
const multiEl = document.querySelector('.multiplication'); // Multiplication button
const divEl = document.querySelector('.division'); // Division button
const equalEl = document.querySelector('.equals'); // Equals button

// Selecting number and decimal buttons
const deciEl = document.querySelector('.numberdel'); // Decimal point button
const num0El = document.querySelector('.number0');
const num1El = document.querySelector('.number1');
const num2El = document.querySelector('.number2');
const num3El = document.querySelector('.number3');
const num4El = document.querySelector('.number4');
const num5El = document.querySelector('.number5');
const num6El = document.querySelector('.number6');
const num7El = document.querySelector('.number7');
const num8El = document.querySelector('.number8');
const num9El = document.querySelector('.number9');

// Storing number elements in an array for easy access
const numElArr = [num0El,num1El, num2El, num3El, num4El ,num5El, num6El, num7El, num8El, num9El];

// Variables to store the last entered number and the selected operator
let strMemory = null;
let operatorMemory = null;

// Function to get the current value from the display as a string
const getValueStr = () => valueEl.textContent.split(',').join('');

// Function to convert the display value string to a number
const getValueNum = () => {
    return parseFloat(getValueStr());
};

// Function to update the display with a formatted number string
const setStrValue = (valueStr) => {
    if (valueStr[valueStr.length - 1] === '.'){
        valueEl.textContent += '.';
        return;
    }
    
    const [wholeNumStr, decimalStr] = valueStr.split('.');
    if (decimalStr){
        valueEl.textContent = parseFloat(wholeNumStr).toLocaleString() + '.' + decimalStr;
    }
    else{
        valueEl.textContent = parseFloat(valueStr).toLocaleString();
    }
};

// Handles number button clicks
const numClick = (numStr) => {
    const currentStr = getValueStr();
    if (currentStr === '0'){
        setStrValue(numStr);
    }
    else{
        setStrValue(currentStr + numStr);
    }
}; 

// Function to compute the result based on the operator selected
const getStrResult = () =>{
    const currentNum = getValueNum();
    const numMemory = parseFloat(strMemory); 
    let newNum;
    
    if (operatorMemory === 'addition'){
        newNum = numMemory + currentNum;
    }
    else if (operatorMemory === 'subtraction'){
        newNum = numMemory - currentNum;
    }
    else if (operatorMemory === 'multiplication'){
        newNum = numMemory * currentNum;
    }
    else if (operatorMemory === 'division'){
        newNum = numMemory / currentNum;
    }
    return newNum.toString();
};

// Handles operator button clicks
const operatorClick = (operation) => {
    const currentStr = getValueStr();
    if (!strMemory){
        strMemory = currentStr;
        operatorMemory = operation;
        setStrValue('0');
        return;
    }
    strMemory = getStrResult();
    operatorMemory = operation;
    setStrValue('0');
};

// Event listeners for function buttons
acEl.addEventListener('click', () => {
    setStrValue('0'); // Reset display
    strMemory = null;
    operatorMemory = null;
});

pmEl.addEventListener('click', () => {
    const currentNum = getValueNum();
    const currentStr = getValueStr();
    if (currentStr === '-0'){
        setStrValue('0');
        return;
    }
    if (currentNum >= 0){
        setStrValue('-' + currentStr);
    }
    else{
        setStrValue(currentStr.substring(1));
    }
});

percentEl.addEventListener('click', () => {
    const currentNum = getValueNum();
    const newNum = currentNum / 100;
    setStrValue(newNum.toString());
    strMemory = null;
    operatorMemory = null;
});

// Event listeners for operator buttons
addEl.addEventListener('click', ()=> {
    operatorClick('addition');
});

subEl.addEventListener('click', ()=> {
    operatorClick('subtraction');
});

multiEl.addEventListener('click', ()=> {
    operatorClick('multiplication');
});

divEl.addEventListener('click', ()=> {
    operatorClick('division');
});

equalEl.addEventListener('click', ()=> {
    if (strMemory){
       setStrValue(getStrResult());
       strMemory = null;
       operatorMemory = null;
    }
});

// Event listeners for number buttons
for(let i = 0; i < numElArr.length; i++){
    const numEl = numElArr[i];
    numEl.addEventListener('click', () => {
        numClick(i.toString());
    });
}

// Event listener for decimal button
deciEl.addEventListener('click', () => {
    const currentStr = getValueStr();
    if (!currentStr.includes('.')){
        setStrValue(currentStr + '.');
    }
});

// Function to update the time display
const updateTime = () => {
    const currentTime = new Date();
    let currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();

    // Convert 24-hour format to 12-hour format
    if (currentHour > 12){
        currentHour -= 12;
    }

    hourEl.textContent = currentHour.toString();
    minEl.textContent = currentMinute.toString().padStart(2, '0'); // Ensure two-digit format
}

// Update the time every second
setInterval(updateTime, 1000);
updateTime();
