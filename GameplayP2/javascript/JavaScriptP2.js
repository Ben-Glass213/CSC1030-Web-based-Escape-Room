function myFunction() {

    var element = document.getElementById("main");

    element.classList.toggle("darkerMain");
}
var name;


var collectPoints = 0;
sessionStorage.setItem("pointCollection2", collectPoints);

var timeT = sessionStorage.getItem("timeTaken");
sessionStorage.setItem("timeTaken2", timeT);


function nextFunction() {
    name = document.getElementById("name").innerHTML;
    sessionStorage.setItem("userName", name);

    var door = document.getElementById("game").src = "imgs/6 note to cell door.jpg";

    var speech = document.getElementById("playerSpeech").innerHTML = "["+name+"] : I have slid the note under Gerald's door, hopefully nobody sees.";

    var nar = document.getElementById("narration").innerHTML = "[Narration]: You drop the note and slide it under, making your way to the yard for some well earned yard time!";

    document.getElementById("nextPart").innerHTML = '<img id = "nextButton" onclick = "nextPage()" src = "imgs/arrow.png" alt = "next arrow" height = 180px width = 200px;>';

}

function nextPage(){
    //Note used : https://www.pexels.com/photo/postit-scrabble-to-do-todo-3299/ 
    document.getElementById("game").src = 'imgs/7.2 note on pillow.jpg';

    document.getElementById("nextPart").innerHTML = '';

    var speech = document.getElementById("playerSpeech").innerHTML = "["+name+"] : Who put this note on my bed?";

    var nar = document.getElementById("narration").innerHTML = "[Narration]: You come back from the yard and notice someone has left a note on your bed?";

    var magnifyingGlass = document.getElementById("magImg").innerHTML = '<img id = "magnify" src = "imgs/magnifying glass.png" alt = "magnifying glass" onclick = "nextPage2()" width = 190px height = 160px;>'

    }

function nextPage2(){

    document.getElementById("game").src = 'imgs/8 zoomed pillow.jpg';

    document.getElementById("magImg").innerHTML = '';

    var speech = document.getElementById("playerSpeech").innerHTML = "["+name+"] : What? These look like symbols. What could I use this for and why is it in my room?";

    var nar = document.getElementById("narration").innerHTML = "[Narration]: You look at the note and pick it up, this might help you later on!";

    document.getElementById("note").innerHTML = '<button id="pickUp" onclick="nextPage3()">Pick Up</button>';

}

function nextPage3(){

    document.getElementById("game").src = 'imgs/9 wall.jpg';

    document.getElementById("nextPart").innerHTML = '';

    document.getElementById("note").innerHTML = '<img id="noteImg" src="imgs/noteOnPillow.jpg" height=70px width=70px>';

    var magnifyingGlass = document.getElementById("magImg1").innerHTML = '<img id = "magnify1" src = "imgs/magnifying glass.png" alt = "magnifying glass" onclick = "poster()" width = 190px height = 160px;>'

    var magnifyingGlass1 = document.getElementById("magImg2").innerHTML = '<img id = "magnify2" src = "imgs/magnifying glass.png" alt = "magnifying glass" onclick ="playAudio1()" width = 190px height = 160px;>'

    var magnifyingGlass2 = document.getElementById("magImg3").innerHTML = '<img id = "magnify3" src = "imgs/magnifying glass.png" alt = "magnifying glass" onclick = "web()" width = 190px height = 160px;>'

    var speech = document.getElementById("playerSpeech").innerHTML = "["+name+"] : There must be something in here that I need these symbols for!";

    var nar = document.getElementById("narration").innerHTML = "[Narration]: You stand at the side wall of your cell looking to see if there is anything hidden in the room.";


}

function poster(){
    //Poster: https://www.pexels.com/photo/grayscale-photo-of-cars-on-road-4480543/ 
    collectPoints + 10;
    sessionStorage.setItem("pointCollection2", collectPoints);
    document.getElementById("points").innerHTML = "Points: 10";
    document.getElementById("game").src = 'imgs/10 wall with poster.png';
    document.getElementById("magImg1").innerHTML = '';
    document.getElementById("magImg2").innerHTML = '';
    document.getElementById("magImg3").innerHTML = '';

    var speech = document.getElementById("playerSpeech").innerHTML = "["+name+"] :Hmmmmmm. There must be something around here.";

    var nar = document.getElementById("narration").innerHTML = "[Narration]: You stand on top of your bed staring at the poster on your wall. Maybe there is something behind it?";
    setTimeout(page3,3700);
}

function page3(){
    window.location.href = "../GameplayP3/GameplayP3.html";
}

function playAudio1(){
    //Breaking sound source: https://freesound.org/people/InspectorJ/sounds/344272/
    //Radio off source: https://freesound.org/people/dylanh.sound/sounds/524205/
    //Radio on source: https://freesound.org/people/lextrack/sounds/346323/
    var bedBreak = document.getElementById("bedSound");
    bedBreak.play();
    document.getElementById("magImg1").innerHTML = '';
    document.getElementById("magImg2").innerHTML = '';
    document.getElementById("magImg3").innerHTML = '';

    var speech = document.getElementById("playerSpeech").innerHTML = "["+name+"] : Uh oh, that was loud...";

    var nar = document.getElementById("narration").innerHTML = "[Narration]: Here come the guards...";

    setTimeout(lose, 3500);
}

function web(){
    //Spider Image Source: https://minecraft.fandom.com/wiki/File:Spider_JE4_BE3.png
    document.getElementById("game").src = 'imgs/9.1 wall.jpg';
    document.getElementById("magImg1").innerHTML = '';
    document.getElementById("magImg2").innerHTML = '';
    document.getElementById("magImg3").innerHTML = '';

    var speech = document.getElementById("playerSpeech").innerHTML = "["+name+"] : Uh oh, that spider wasnt too happy about me touching his web he just bit me! Im starting to feeeeel a bit sleeeeepppyyyy....... ";

    var nar = document.getElementById("narration").innerHTML = "[Narration]: You put your hand in the web and the spider bites your hand. The spider seems to be venomous as you black out and fall unconscious.";

    var spiderSound = document.getElementById("spiderSound");
    spiderSound.play();

    //Hiss Noise: https://freesound.org/people/crcavol/sounds/154636/


    document.getElementById("nextPart").innerHTML = '<img id = "nextButton" onclick = "endGameScreen" src = "imgs/arrow.png" alt = "next arrow" height = 180px width = 200px;>';
    setTimeout(lose, 3500);
}

function lose(){
    window.location.href = "../LosePage/LosePage.html";
}

function howToPlay(){
    document.getElementById("instructions").innerHTML = '<div id = "instructionList"><ul> <li>After reading the narration, click on the next arrow </li><br><li>Pick up the note from the pillow</li><br> <li>Choose an area of the cell very carefully</li> <br><li>If you choose the wrong area, you lose!</li>  </ul> <button id = "exith2p" onclick = "exitInstructions()">Done</button></div>';
}
function exitInstructions(){
    document.getElementById("instructions").innerHTML = '';
}

function end(){

}

