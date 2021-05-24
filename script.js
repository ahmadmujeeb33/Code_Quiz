const startButton = document.getElementById('startClicked');
let middle = document.getElementsByClassName('middle-bar')[0];

let totalQuestions = ["What is a variable for"];
let options = ["1. store information to be refrenced ", "2. a term only used in math ", "3. can only be used in javascript"]



function Winner(){
    
}

function Loser(){

}



function Questions(){
    let firstElement = document.createElement("p");
    let secondElement = document.createElement("p");
    let thirdElement = document.createElement("p");
    let question = document.createElement("p");
    question.innerText = totalQuestions[0];
    firstElement.innerText = options[0];
    secondElement.innerText = options[1];
    thirdElement.innerText = options[2];
    question.setAttribute('style','font-weight:bold');
    middle.append(question);
    middle.append(firstElement);
    middle.append(secondElement);
    middle.append(thirdElement);
    
}



function RemoveMain(){
    console.log(middle.childNodes);
    while(middle.hasChildNodes()){
        middle.removeChild(middle.childNodes[0]);
    }
    Questions();
    
}

startButton.addEventListener('click',RemoveMain);