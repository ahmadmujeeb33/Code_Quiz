const startButton = document.getElementById('startClicked');
let middle = document.getElementsByClassName('middle-bar')[0];
let element = document.createElement('h1');
let par = document.createElement('p');



let intoFinal = false;

listOfScores = [];


const timer = document.getElementById('timer');

let totalQuestions = ["What is a variable for" , "What is an array for", "What is an for loop"];
let options = ["1. store information to be refrencedW", "2. a term only used in math ", "3. can only be used in javascript","1 shapes"," 2. options","3. list of dataW","1 a keyword in math"," 2. used for iterating over a sequenceW","3. only used in javascript"];
let index = -3;
let i = -1;

let numQuestion = 0;

let secondsleft = 50;

let finalScore = 0;

let initals = "";

//localStorage.clear();




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
            finalScore+=10;
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
            finalScore+=10;
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
            finalScore+=10;
        }
        else{
            document.getElementById("thirdElementInfo").classList.add('loser');
            secondsleft-=10;
        }
        setTimeout(RemoveMain, 1000);
    });

    
        
}



function RemoveMain(){
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



startButton.addEventListener('click',function(){
    RemoveMain();
    setTime();
});

function HighScores(){
    initals = document.querySelector('INPUT').value + " ";
    while(middle.hasChildNodes()){
        middle.removeChild(middle.childNodes[0]);
    }
    element.innerText = "Scores";
    par.innerText = initals
    middle.append(element);

    
    

    if(localStorage.getItem('items') == null){
        listOfScores.push(initals.concat(finalScore.toString()));
        localStorage.setItem('items', JSON.stringify(listOfScores));

        
    }

    else{
        listOfScores = JSON.parse(localStorage.getItem('items'));
        listOfScores.push(initals.concat(finalScore.toString()));
        localStorage.setItem('items',JSON.stringify(listOfScores));

    }
    console.log(listOfScores.length);
    for(let i=0;i<listOfScores.length;i++){
        let h3element = document.createElement('h3');
        h3element.innerText = listOfScores[i];
        console.log(listOfScores[i])
        middle.append(h3element);
    }
    
    
    

}

function final(){
    intoFinal = true;
    
    let currentScore = document.createElement('h3');
    let input = document.createElement('INPUT');
    let box = document.createElement('DIV');
    let button = document.createElement('BUTTON');
    

    let submit = document.createTextNode("Submit");
    button.appendChild(submit);

    input.setAttribute('type', 'text');
    input.setAttribute("style","padding-left:10px;");
    
    par.innerText = "Enter Initals";
    box.setAttribute('class','flexbox');
    box.append(par);
    box.append(input);
    
    button.setAttribute("style", "margin-top: 10px");

    currentScore.textContent = "Score: " + finalScore;

    

    middle.append(currentScore);
    middle.append(box);
    middle.append(button);

    console.log("rhurilus");
    console.log(document.querySelector('INPUT').value);

    document.querySelector('BUTTON').addEventListener('click',HighScores);

    
}


function setTime() {
    
        var timerInterval = setInterval(function() {
            timer.innerText = secondsleft;
            secondsleft-=1; 

            if(secondsleft === -1) {
                if(!intoFinal){
                    while(middle.hasChildNodes()){
                        middle.removeChild(middle.childNodes[0]);
                    }
                    final();
                }
                clearInterval(timerInterval);
                
            }

            if(intoFinal){
                clearInterval(timerInterval);
            }

           
        
    }, 1000);
}
