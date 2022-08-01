function myFunction() {

    var element = document.getElementById("main");

    element.classList.toggle("darkerMain");
}
var name;


var collectPts = 0;
sessionStorage.setItem("pointCollection3", collectPts);

var timeT = sessionStorage.getItem("timeTaken");
sessionStorage.setItem("timeTaken3", timeT);

function nextPage() {
    document.getElementById("gameS").innerHTML ='<img id = "game" src="imgs/11 wall without poster.png" alt="Poster on Wall" width = 100% height = 100%>'
    document.getElementById("nextPart").innerHTML='<img id="nextButton" onclick = "promptUser()" src="imgs/guess.png" alt="next arrow" height=180px width=200px;>'
    sessionStorage.setItem("userName", name);
    document.getElementById("playerSpeech").innerHTML="[" + name + "] Oh Look! Some symbols on the wall.";
    document.getElementById("narration").innerHTML="[narration]: Convert the symbols to numbers."
    
}
var errorCount = 0;
function promptUser(){
    var code = prompt("Decode Here", "");
    if (code === "5297") {
        window.alert("Well Done youve decoded the puzzle.");
        if (errorCount == 0) {
            collectPts + 15;
            sessionStorage.setItem("pointCollection3", collectPts);
            document.getElementById("pnts").innerHTML = "points: " + collectPts
        }
        else if (errorCount == 1) {
            collectPts + 10;
            sessionStorage.setItem("pointCollection3", collectPts);
            document.getElementById("pnts").innerHTML = "points: " + collectPts
}

        else if (errorCount == 2) {
            collectPts + 5;
            sessionStorage.setItem("pointCollection3", collectPts);
            document.getElementById("pnts").innerHTML = "points: " + collectPts

        }
        nextPage2();
    }  else {
        errorCount++; 
        if (errorCount == 1) {
            window.alert("Nope! Click the next button to try again. You have 3 trys left. ")
        }
       else if (errorCount == 2) {
            window.alert("Nope! Click the next button to try again. You have 2 trys left. ")
       }
        else if (errorCount == 3) {
            window.alert("Nope! Click the next button to try again. You have 1 try left. ")
        }
        else {
            window.alert("Oh No! You have ran out of trys. ");
            window.location.href = "../LosePage/LosePage.html"
        }
            
        }
    }
function nextPage2() {
    document.getElementById("game").src="imgs/12 door closer up.jpg"
    document.getElementById("nextPart").innerHTML='<img id="nextButton" onclick = "promptUser2()" src="imgs/guess.png" alt="next arrow" height=180px width=200px;>'
    document.getElementById("playerSpeech").innerHTML="[" + name + "] I better remember those numbers.";
    document.getElementById("narration").innerHTML="[narration]: These numbers are useful to open the door."
    
    
}

function promptUser2() {
    var code = prompt("Enter the passcode", "");
    if (code === "5297") {
        window.alert("The door is unlocked.");
        if (errorCount == 0) {
            collectPts += 15;
            sessionStorage.setItem("pointCollection3", collectPts);
            document.getElementById("pnts").innerHTML = "points: " + collectPts
        }
        else if (errorCount == 1) {
            collectPts += 10;
            sessionStorage.setItem("pointCollection3", collectPts);
            document.getElementById("pnts").innerHTML = "points: " + collectPts
}

        else if (errorCount == 2) {
            collectPts += 5;
            sessionStorage.setItem("pointCollection3", collectPts);
            document.getElementById("pnts").innerHTML = "points: " + collectPts

}
        window.location.href="../GameplayP4/GameplayP4.html"
         }  else {
        errorCount++; 
        if (errorCount == 1) {
            window.alert("Nope! Click the next button to try again. You have 3 trys left. ")
        }
       else if (errorCount == 2) {
            window.alert("Nope! Click the next button to try again. You have 2 trys left. ")
       }
        else if (errorCount == 3) {
            window.alert("Nope! Click the next button to try again. You have 1 try left. ")
        }
        else {
            window.alert("Oh No! You have ran out of trys. ");
            window.location.href = "../LosePage/LosePage.html"
        }
         }
}


function howToPlay(){
    document.getElementById("instructions").innerHTML = '<div id = "instructionList"><ul> <li>After reading the narration, click on the poster </li><br><li>Decode the symbols to numbers</li><br> <li>Make sure you remember those numbers! You need them to open the door</li> <br><li>You get 3 trys when inputting the answer</li>  </ul> <button id = "exith2p" onclick = "exitInstructions()">Done</button></div>';
}
function exitInstructions(){
    document.getElementById("instructions").innerHTML = '';
}

function end(){

}


