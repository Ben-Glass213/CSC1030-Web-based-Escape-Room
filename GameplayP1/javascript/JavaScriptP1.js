function myFunction() {

    var element = document.getElementById("main");

    element.classList.toggle("darkerMain");
}
var name;


var collectPts = 0;
 sessionStorage.setItem("pointCollection", collectPts);

var timeT = sessionStorage.getItem("timeTaken");
sessionStorage.setItem("timeTaken1", timeT);

function nextFunction() {
    name = document.getElementById("name").innerHTML;
    sessionStorage.setItem("userName", name);

    var comb = document.getElementById("comb").innerHTML = '<p id = "pickUpC" onclick = "pickUpComb()" > Pick up comb </p>' ;

    var speech = document.getElementById("playerSpeech").innerHTML = "["+name+"] : Wait, there's something engraved on the wall!";

    var nar = document.getElementById("narration").innerHTML = "[Narration]: Click on magnifying glass to get a closer look!";

    document.getElementById("nextPart").innerHTML = '';

    var magnifyingGlass = document.getElementById("magImg").innerHTML = '<img id = "magnify" src = "imgs/magnifying glass.png" alt = "magnifying glass" onclick = "wordPuzzle()" width = 190px height = 160px;>'
    }

function pickUpComb(){
    //Comb image: https://www.pexels.com/photo/comb-placed-on-white-surface-6045181/
    var combInv = document.getElementById("combInInv").innerHTML = '<img id = "combImg" src = "imgs/comb.png" alt = "comb" height = 70px width = 80px;>' ;
    sessionStorage.setItem("CombInInv", combInv);
     var comb = document.getElementById("comb").innerHTML = '' ;
    collectPts += 5;
    sessionStorage.setItem("pointCollection", collectPts);
    document.getElementById("pnts").innerHTML = "Points: " + collectPts;
     
}


function wordPuzzle(){
    /*Engraving font: https://www.1001fonts.com/refrigeration-font.html  */
    document.getElementById("game").src = "imgs/engraving 2.2.png";
    var comb = document.getElementById("comb").innerHTML = '' ;
    document.getElementById("playerSpeech").innerHTML = "["+name+"] : I think it says... find Aldger Rdwa? Hmm... that doesn't seem right...";

    document.getElementById("narration").innerHTML = "[Narration]: Click guess to unjumble the word puzzle, but hurry! Time's running out! HINT: The first name begins with G and the last rhymes with record! ";

    document.getElementById("magImg").innerHTML = '';


    document.getElementById("nextPart").innerHTML = '<img id = "nextButton" onclick = "promptUser()" src = "imgs/guess.png" alt = "next arrow" height = 180px width = 200px;>';

}
var errorCount = 0;
function promptUser(){
    var person = prompt("Guess here:", "G_____ ____");
    if (person.toUpperCase() === "Gerald Ward".toUpperCase()) {
        window.alert("Well done! You got it!");
        if (errorCount == 0){
            collectPts += 15;
            sessionStorage.setItem("pointCollection", collectPts);
            document.getElementById("pnts").innerHTML = "Points: " + collectPts;
        } else if (errorCount == 1){
             collectPts += 10;
            sessionStorage.setItem("pointCollection", collectPts);
            document.getElementById("pnts").innerHTML = "Points: " + collectPts;
        } else if (errorCount == 2){
             collectPts += 5;
            sessionStorage.setItem("pointCollection", collectPts);
            document.getElementById("pnts").innerHTML = "Points: " + collectPts;
        }
        nextDialogue();
    } else {
        errorCount++;
        if (errorCount == 1){
            window.alert("Nope! Click the next button to try again! You have 3 tries left");
            error1();
        } 
        else if (errorCount == 2){
            window.alert("Nope! Click the next button to try again! Be careful! You have 2 tries left!");
            error2();
        }
        else if (errorCount == 3){
            window.alert("Nope! Last try!");
            error2();
        } else {
            window.alert("Oh no! You ran out of tries!");
            window.location.href = "../LosePage/LosePage.html";
        }
    }

}
function error1(){
    document.getElementById("game").src = "imgs/engraving 1.3.png";
}
function error2(){
    document.getElementById("game").src = "imgs/engraving 1.2.png";
}



function nextDialogue(){

    document.getElementById("nextPart").innerHTML = '';
    document.getElementById("playerSpeech").innerHTML = "["+name+"] : It says Gerald Ward! I've heard whispers from other prison mates that he's in solitary confinement...";

    document.getElementById("narration").innerHTML = "[Narration]: Looks like yard time is here... could be a good opportunity to stop by solitary confinement";

    document.getElementById("game").src = "imgs/engraving.png";
    window.setTimeout(guardCalls, 4500);

}
function guardCalls(){
    document.getElementById("game").src = "imgs/playerTurnsToDoor.gif";
    document.getElementById("nextPart").innerHTML = '<a href = "../GameplayP2/GameplayP2.html"> <button id = "next" onclick = "setPoints()"> Next </button> </a>';
}

function howToPlay(){
    document.getElementById("instructions").innerHTML = '<div id = "instructionList"><ul> <li>After reading the narration, click on the next arrow </li><br><li>When finding the engravement, you click on the magnifying glass</li><br> <li>For the name puzzle, the console prompts you to input your guesses</li> <br><li>You get 3 guesses, if you pass you move on to the next part of the game, if you fail you have to reset the game</li>  </ul> <button id = "exith2p" onclick = "exitInstructions()">Done</button></div>';
}
function exitInstructions(){
    document.getElementById("instructions").innerHTML = '';
}




