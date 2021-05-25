const startButton = document.getElementById('startClicked');
let middle = document.getElementsByClassName('middle-bar')[0];

const timer = document.getElementById('timer');

let totalQuestions = ["What is a variable for" , "What is an array for", "What is an for loop"];
let options = ["1. store information to be refrencedW", "2. a term only used in math ", "3. can only be used in javascript","1 shapes"," 2. options","3. list of dataW","1 a keyword in math"," 2. used for iterating over a sequenceW","3. only used in javascript"];
let index = -3;
let i = -1;

let numQuestion = 0;

let secondsleft = 70;



function Questions(){

    index+=3;
    i+=1;
    numQuestion+=1;

    console.log("index " + index);
    
    
    let firstElement = document.createElement("p");
    let secondElement = document.createElement("p");
    let thirdElement = document.createElement("p");
    let question = document.createElement("p");
    question.innerText = totalQuestions[i];
    firstElement.setAttribute("id", "firstElementInfo");
    secondElement.setAttribute("id", "secondElementInfo");
    thirdElement.setAttribute("id", "thirdElementInfo");

    let value1 = options[index];
    let value2 = options[index+1];
    let value3 = options[index+2];

    firstElement.innerText = value1.slice(0,value1.length-1);
    secondElement.innerText = value2.slice(0,value2.length-1);
    thirdElement.innerText = value3.slice(0,value3.length-1);
    question.setAttribute('style','font-weight:bold');
    middle.append(question);
    middle.append(firstElement);
    middle.append(secondElement);
    middle.append(thirdElement);

    document.querySelector('#firstElementInfo').addEventListener('click',function(){
        if(value1[value1.length-1] === 'W'){
            document.getElementById("firstElementInfo").classList.add('winner');
        }
        else{
            document.getElementById("firstElementInfo").classList.add('loser');
            secondsleft-=10;
        }
        
        setTimeout(RemoveMain, 1000);
    });
    document.querySelector('#secondElementInfo').addEventListener('click',function(){
        if(value2[value2.length-1] === 'W'){
            document.getElementById("secondElementInfo").classList.add('winner');
        }
        else{
            document.getElementById("secondElementInfo").classList.add('loser');
            secondsleft-=10;
        }
        setTimeout(RemoveMain, 1000);
    })
    document.querySelector('#thirdElementInfo').addEventListener('click',function(){
        if(value3[value3.length-1] === 'W'){
            document.getElementById("thirdElementInfo").classList.add('winner');
        }
        else{
            document.getElementById("thirdElementInfo").classList.add('loser');
            secondsleft-=10;
        }
        setTimeout(RemoveMain, 1000);
    });

    
        
}



function RemoveMain(){
    setTime();
    console.log(middle.childNodes);
    while(middle.hasChildNodes()){
        middle.removeChild(middle.childNodes[0]);
    }
    if(numQuestion<3){
        console.log("in thiaaaaassss");
        Questions();
    }
    else{
        final();
    }
    
}



startButton.addEventListener('click',RemoveMain);

function final(){
    alert("finished");
}


function setTime() {
    
        var timerInterval = setInterval(function() {
            timer.innerText = secondsleft;
            secondsleft-=1; 

            if(secondsleft === 0) {
                clearInterval(timerInterval);
                score();
            }

           
        
    }, 1000);
}
