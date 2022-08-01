function myFunction() {

    var element = document.getElementById("main");

    element.classList.toggle("darkerMain");
}
var name = sessionStorage.getItem ("name");

var collectPts = 0;
sessionStorage.setItem("pointCollection5", collectPts);
document.getElementById("pnts").innerHTML = "Points: 0";


var timeT = sessionStorage.getItem("timeTaken");
sessionStorage.setItem("timeTaken5", timeT);



function door(){
    collectPts + 10;
    sessionStorage.setItem("pointCollection5", collectPts);
    document.getElementById("pnts").innerHTML = "Points: " + collectPts;
    document.getElementById("game").src = "imgs/17 final door.jpg";
    document.getElementById("Door").innerHTML = "";
    document.getElementById("Back").innerHTML = "";
    document.getElementById("playerSpeech").innerHTML = "["+name+"] I can use the prison card to escape!";
    document.getElementById("narration").innerHTML = "[Narrator] Click on the card to open the door.";
    pass();
}

function back(){
    window.location.href = "../LosePage/LosePage.html";
}

function pass(){
    document.getElementById("pass card").innerHTML = '<img id = "passC" onclick = "escape()" src = "imgs/pass card.png" alt = "pass card" height = 70px, width = 80px;>';
}
function escape(){
    collectPts + 20;
    sessionStorage.setItem("pointCollection5", collectPts);
    document.getElementById("pnts").innerHTML = "Points: " + collectPts;
    document.getElementById ("game").src = 'imgs/18 escaping.jpg';
    document.getElementById("playerSpeech").innerHTML = "["+name+"] Freedom!!";
    document.getElementById("narration").innerHTML = "[Narrator] Well Done!";
    setTimeout(WinPage, 3000);
}
function WinPage() {
    window.location.href = "../WinPage/WinPage.html";
}

function howToPlay(){
    document.getElementById("instructions").innerHTML = '<div id = "instructionList"><ul> <li>After reading the narration, choose if you want to go back or go to the door </li><br><li>Click on the pass card in your inventory</li><br> <li>You have completed the game!</li> </ul> <button id = "exith2p" onclick = "exitInstructions()">Done</button></div>';
}
function exitInstructions(){
    document.getElementById("instructions").innerHTML = '';
}

