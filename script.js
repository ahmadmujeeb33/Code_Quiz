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
            }
            
            setTimeout(Remove, 1000);
        });
        document.querySelector('#secondElementInfo').addEventListener('click',function(){
            if(value2[value2.length-1] === 'W'){
                document.getElementById("secondElementInfo").classList.add('winner');
            }
            else{
                document.getElementById("secondElementInfo").classList.add('loser');
            }
            setTimeout(Remove, 1000);
        })
        document.querySelector('#thirdElementInfo').addEventListener('click',function(){
            if(value3[value3.length-1] === 'W'){
                document.getElementById("thirdElementInfo").classList.add('winner');
            }
            else{
                document.getElementById("thirdElementInfo").classList.add('loser');
            }
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