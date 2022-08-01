function myFunction() {

    var element = document.getElementById("main");

    element.classList.toggle("darkerMain");
}

document.getElementById("myVid").addEventListener("ended", myFunction2);

function myFunction2() {
    document.getElementById("begin").innerHTML = "Begin";
}
function gameBeginning(){
    var element = document.getElementById("gamescreen");
    element.classList.toggle("");


}
function nextButton(){
    document.getElementById("gamescreen").innerHTML = ' <video id = "myVid"  width="100%" height="100%" controls autoplay onended="myFunction2()" ><source src = "Video.mp4" type = "video/mp4">Your browser does not support the video tag</video><a href ="../GameplayP1/GameplayP1.html"><button id = "demo" ></button></a>'
    
}
function howToPlay(){
    document.getElementById("gamescreen").innerHTML = '<div id = "instructionList"><ul> <li>Once the game intro page loads, there will be a video in the gamescreen </li><br><li>Play the video</li><br> <li>Click the begin button that will appear whenever the video ends</li> <br><li>The begin button is a link to part 1 of our game</li>  </ul> <button id = "exith2p" onclick = "exitInstructions()">Done</button></div>';

}
function exitInstructions(){
    document.getElementById("gamescreen").innerHTML = ' <video id = "myVid"  width="100%" height="100%" controls autoplay onended="myFunction2()" ><source src = "Video.mp4" type = "video/mp4">Your browser does not support the video tag</video><a href ="../GameplayP1/GameplayP1.html"><button id = "demo" ></button></a>'
}

function nextPage(){
    window.location.href = "../GameplayP1/GameplayP1.html";
}