const startButton = document.getElementById('startClicked');
let middle = document.getElementsByClassName('middle-bar')[0];

let totalQuestions = ["What is a variable for" , "What is an array for"];
let options = ["1. store information to be refrencedW", "2. a term only used in math ", "3. can only be used in javascript","1 shapes"," 2. options","3. list of dataW"];





function Questions(){
    let index = 0;
    for(let i=0;i<5;i++){
        let firstElement = document.createElement("p");
        let secondElement = document.createElement("p");
        let thirdElement = document.createElement("p");
        let question = document.createElement("p");
        question.innerText = totalQuestions[i];
        firstElement.setAttribute("id", "firstElementInfo");
        secondElement.setAttribute("id", "secondElementInfo");
        thirdElement.setAttribute("id", "thirdElementInfo");

        firstElement.innerText = options[index];
        secondElement.innerText = options[index+1];
        thirdElement.innerText = options[index+2];
        question.setAttribute('style','font-weight:bold');
        middle.append(question);
        middle.append(firstElement);
        middle.append(secondElement);
        middle.append(thirdElement);

        document.querySelector('#firstElementInfo').addEventListener('click',function(){
            document.getElementById("firstElementInfo").classList.add('winner');
            setTimeout(Remove, 1000);
        });
        document.querySelector('#secondElementInfo').addEventListener('click',function(){
            document.getElementById("secondElementInfo").className = "loser";
            setTimeout(Remove, 1000);
        })
        document.querySelector('#thirdElementInfo').addEventListener('click',function(){
            document.getElementById("thirdElementInfo").className = "loser";
            setTimeout(Remove, 1000);
        });

        index+=3;
    }

    

    
    
    
}



function RemoveMain(){
    console.log(middle.childNodes);
    while(middle.hasChildNodes()){
        middle.removeChild(middle.childNodes[0]);
    }
    Questions();
    
}

function Remove(){
    while(middle.hasChildNodes()){
        middle.removeChild(middle.childNodes[0]);
    }
}

startButton.addEventListener('click',RemoveMain);