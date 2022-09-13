function decision(){
    if(operatorList[0]==="x"){
        multiply()
    }else if(operatorList[0]==="/"){
        divide()
    }else if(operatorList[0]==="+"){
        add()
    }else if(operatorList[0]==="-"){
        subtract()
    }
}

function shiftOperator(){
    firstOperator=operatorList[0];    
    firstOperator=operatorList[operatorList.length-1];
    operatorList[0]=firstOperator;    
}

function removeLastElement(){
    list2.splice(1,1);
    console.log(result); 
    console.log(list2);
    console.log(operatorList);
    operatorList.splice(1,1);
}

function multiply(){

    firstNumber=list2[0];
    lastNumber=list2[1];
    if(isNaN(lastNumber)===true){
        lastNumber=1
    }
    result=firstNumber*lastNumber;
    list2[0]=result;

    shiftOperator();
    removeLastElement();
}

function divide(){

    firstNumber=list2[0];
    lastNumber=list2[1];
    if(isNaN(lastNumber)===true){
        lastNumber=1
    }
    result=firstNumber/lastNumber;
    list2[0]=result;

    shiftOperator();
    removeLastElement();      
}

function add(){
    
    firstNumber=list2[0];
    lastNumber=list2[1];
    if(isNaN(lastNumber)===true){
        lastNumber=0
    }
    result=firstNumber+lastNumber;
    list2[0]=result;

    shiftOperator();
    removeLastElement();
}

function subtract(){
    
    firstNumber=list2[0];
    lastNumber=list2[1];
    if(isNaN(lastNumber)===true){
        lastNumber=0
    }
    result=firstNumber-lastNumber;
    list2[0]=result;

    shiftOperator();
    removeLastElement();
}

function getNumbers(e){
    a=e.target.innerText; 
    console.log(a); 
    list.push(a);
}

function operatorSelection(e){
    operator=e.target.innerText;
    operatorList.push(operator);
    fullNumber=parseInt(list.join(""));
    nanCheck=isNaN(fullNumber);
    if(nanCheck===false){
        list2.push(fullNumber);
        list=[];
    }
    
    decision();
}

let firstOperator=0;
let list=[];
let a=0;
let operatorList=[];
let operator=0;
let fullNumber=0;
let counter=0;
let list2=[];
let firstNumber=0;
let lastNumber=0;
let listLenght=list2.length;
const numberButtons=document.querySelectorAll("#bt");
const operatorButtons=document.querySelectorAll("#bt2");

numberButtons.forEach(button=>button.addEventListener("click",getNumbers));
operatorButtons.forEach(button=>button.addEventListener("click",operatorSelection));

