function myFunction() {

    var element = document.getElementById("main");

    element.classList.toggle("darkerMain");
}
var name;

var collectPts = 0;
sessionStorage.setItem("pointCollection4", collectPts);


var timeT = sessionStorage.getItem("timeTaken");
sessionStorage.setItem("timeTaken4", timeT);

document.getElementById("pnts").innerHTML = "Points: " + collectPts;
var ab = parseInt(collectPts);


function right(){
    document.getElementById("game").src = "imgs/14.fail caught by guard.jpg";
    document.getElementById("Right").innerHTML = "";
    document.getElementById("Left").innerHTML = "";
    fail();
}

function left(){
    document.getElementById("game").src = "imgs/14.pass guards office.jpg";
    document.getElementById("Right").innerHTML = "";
    document.getElementById("Left").innerHTML = "";
    pass();

}

function fail(){
    document.getElementById("Right").innerHTML = "";
    document.getElementById("Left").innerHTML = "";
    document.getElementById("playerSpeech").innerHTML = "[" + name + "]: Oh no! I've been caught!";
    document.getElementById("narration").innerHTML = "[Narrator]: Uh oh! you bumped into a guard!";
    window.setTimeout(lose, 3500);
}

function pass(){

    document.getElementById("Right").innerHTML = "";
    document.getElementById("Left").innerHTML = "";
    name = document.getElementById("name").innerHTML;
    sessionStorage.setItem("username", name);
    document.getElementById("playerSpeech").innerHTML = "[" + name + "]: The prison guards office! Maybe theres something in there that will help me escape.";
    document.getElementById("narration").innerHTML = "[Narrator]: Press next to go inside";
    document.getElementById("nextPart").innerHTML = '<img id = "nextButton" onclick = "nextPart()" src = "imgs/arrow.png" alt = "next arrow" height = 180px width = 200px;>';
    collectPts + 10;
    sessionStorage.setItem("pointCollection4", collectPts);
    document.getElementById("pnts").innerHTML = "Points: " + collectPts;

}

var guardWakes;

function nextPart(){
    document.getElementById("game").src = "imgs/15 sleeping guard.jpg";
    document.getElementById("Card").innerHTML = '<p id = "Pass Card" onclick = "card()">steal card</p>';
    guardWakes = setTimeout(caught,10000);
    document.getElementById("playerSpeech").innerHTML = "[" + name + "]: He has a Prison Pass!";
    document.getElementById("narration").innerHTML = "[Narrator]: Hurry and grab it before he wakes up!";
}

function caught(){
    document.getElementById("game").src = "imgs/guardWakesUp.gif";
    document.getElementById("Card").innerHTML = '';
    document.getElementById("playerSpeech").innerHTML = "[" + name + "]: AHH!";
    document.getElementById("narration").innerHTML = "[Narrator]: Oh no, they have you surrounded...";
    window.setTimeout(lose, 4000);
}
function lose(){
    window.location.href = "../LosePage/LosePage.html";
}
function card(){
    collectPts + 10;
    sessionStorage.setItem("pointCollection4", collectPts);
    document.getElementById("pnts").innerHTML = "Points: " + collectPts;
    document.getElementById("Card").innerHTML = '';
    document.getElementById("game").src = "imgs/leavingOffice.png";
    //Prison pass: https://unsplash.com/photos/PbZ79P_M4IA
    document.getElementById("pass card").innerHTML = '<img id = "passC" src = "imgs/pass card.png" height = 70px, width = 80px;>';
    document.getElementById("playerSpeech").innerHTML = "[" + name + "]: Got it!";
    document.getElementById("narration").innerHTML = "[Narrator]: Time to get out of here...";
    guardWakes = setTimeout(nextPage,5000);
      document.getElementById("nextPart").innerHTML = '';
}

function nextPage(){
    window.location.href = "../GameplayP5/GameplayP5.html";
}

function howToPlay(){
    document.getElementById("instructions").innerHTML = '<div id = "instructionList"><ul> <li>After reading the narration, choose which way to go </li><br><li>If you choose correcting you will end up outside the prison office</li><br> <li>You need to steal the prison guards pass card!</li> <br><li>There is a time limit so make should to steal it before he wakes up!</li>  </ul> <button id = "exith2p" onclick = "exitInstructions()">Done</button></div>';
}
function exitInstructions(){
    document.getElementById("instructions").innerHTML = '';
}

function end(){

}

