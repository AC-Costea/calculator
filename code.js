function add(a,b){
    return a+b
}

function subtract(a,b){
    return a-b
}

function multiply(){
    firstNumber=list2[0]
    
    
    lastNumber=list2[1]
    if(isNaN(lastNumber)===true){
        lastNumber=1
    }
    
    result=firstNumber*lastNumber
    list2[0]=result

                
    list2.splice(1,1)
    console.log(result) 
    console.log(list2)

}

function divide(a,b){
    return a/b
}

function getNumbers(e){
    
    a=e.target.innerText 
    console.log(a) 
    list.push(a)
}

function operatorSelection(e){
    counter=list2.length
    console.log(counter)
    
    operator=e.target.innerText
    fullNumber=parseInt(list.join(""))
    nanCheck=isNaN(fullNumber)
    console.log(nanCheck)
    if(nanCheck===false){
        list2.push(fullNumber)
        list=[]
        console.log(list2)
    }
    
    if(counter===1){

        multiply()
    }
}

let list=[]
let a=0

let operator=0
let fullNumber=0
let counter=0
let list2=[]
let firstNumber=0
let lastNumber=0
let listLenght=list2.length
const numberButtons=document.querySelectorAll("#bt")
const operatorButtons=document.querySelectorAll("#bt2")

numberButtons.forEach(button=>button.addEventListener("click",getNumbers))

operatorButtons.forEach(button=>button.addEventListener("click",operatorSelection))

