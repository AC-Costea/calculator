function nanChecker(){
    if(isNaN(result)===true){
        list2=[]
        screen.textContent=`0`
    }else{
        screen.textContent=`${result}`
    }
}

function equalCheck1(){
    if(operatorList[0]==="="){
        operatorList=[]
        list=[];
    }
}

function equalCheck2(){
    if(operatorList[0]==="="){
        operatorList=[]
        list=[];
        if(isNaN(result)===false){
            list2[0]=result
        }
        
    }
}

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
    console.log(firstNumber)
    lastNumber=list2[1];
    if(isNaN(lastNumber)===true){
        lastNumber=1
    }
    result=firstNumber*lastNumber;
    list2[0]=result;
    nanChecker();
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
    nanChecker();
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
    nanChecker();
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
    nanChecker();
    shiftOperator();
    removeLastElement();
}

function getNumbers(e){
    a=e.target.innerText; 
    console.log(a); 
    list.push(a);
    showNumber()
}

function operatorSelection(e){
    operator=e.target.innerText;
    operatorList.push(operator);
    
    equalCheck1();
    
    fullNumber=parseInt(list.join(""));
    nanVerify=isNaN(fullNumber);
    console.log("k")
    if(nanVerify===false){
        list2.push(fullNumber);
        list=[];
    
    }
    decision();
    operatorList.splice(1,1)
    equalCheck2();
    list3=[];
    counter=0;
    
}

function showNumber(){
    
    counter+=1
    if(counter<20){
        list3.push(a);
        fullScreenNumber=list3.join("");
        screen.textContent=`${fullScreenNumber}`
    }
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
let list3=[];
let fullScreenNumber=0;
let result=0;

const screen=document.querySelector(".screen")
const numberButtons=document.querySelectorAll("#bt");
const operatorButtons=document.querySelectorAll("#bt2");
const equalButton=document.querySelector(".equal")

equalButton.addEventListener("click",operatorSelection)
numberButtons.forEach(button=>button.addEventListener("click",getNumbers));
operatorButtons.forEach(button=>button.addEventListener("click",operatorSelection));

