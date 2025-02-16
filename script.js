//DOM Elements 
const hourEl = document.querySelector('.hour');
const minEl = document.querySelector('.minute');
const valueEl = document.querySelector('.display')

const acEl = document.querySelector('.acl');
const pmEl = document.querySelector('.pm');
const percentEl = document.querySelector('.percent');

const addEl = document.querySelector('.addition');
const subEl = document.querySelector('.subtraction');
const multiEl = document.querySelector('.multiplication');
const divEl = document.querySelector('.division');
const equalEl = document.querySelector('.equals');

const deciEl = document.querySelector('.numberdel');
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
const numElArr = [num0El,num1El, num2El, num3El, num4El ,num5El, num6El, num7El, num8El, num9El];

//Varibales
let strMemory = null;
let operatorMemory = null;

//Functions
const getValueStr = () => valueEl.textContent.split(',').join('');

const getValueNum = () => {
    return parseFloat(getValueStr());
}

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

const numClick = (numStr) => {
    const currentStr = getValueStr();
    if (currentStr === '0'){
        setStrValue(numStr);
    }
    else{
        setStrValue(currentStr + numStr)
    }
}; 

const getStrResult = () =>{
    const currentNum = getValueNum();
    const numMemory = parseFloat(strMemory); 
    let newNum;
    if (operatorMemory === 'addition'){
        newNum = strMemory - (-currentNum);
    }
    else if (operatorMemory === 'subtraction'){
        newNum = strMemory - currentNum;
    }
    else if (operatorMemory === 'multiplication'){
        newNum = strMemory * currentNum;
    }
    else if (operatorMemory === 'division'){
        newNum = strMemory / currentNum;
    }
    return newNum.toString();
};


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

//Event listeners for functions
acEl.addEventListener('click', () => {
    setStrValue('0');
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
    const newNum = currentNum/100;
    setStrValue(newNum.toString());
    strMemory = null;
    operatorMemory = null;
});

//Event listens for operators
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

//Event listeners for numbers and decimal 
for(let i=0; i < numElArr.length; i++){
    const numEl = numElArr[i];
    numEl.addEventListener('click', () => {
        numClick(i.toString());
    });
}

deciEl.addEventListener('click', () => {
    const currentStr = getValueStr();
    if (!currentStr.includes('.')){
        setStrValue (currentStr + '.');
    }
});

//Time Set Up
const updateTime = () => {
    const currentTime = new Date();

    let currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();

    if (currentHour>12){
        currentHour -= 12;
    }

    hourEl.textContent = currentHour.toString();
    minEl.textContent = currentMinute.toString().padStart(2, '0');
}
setInterval(updateTime, 1000);
updateTime();