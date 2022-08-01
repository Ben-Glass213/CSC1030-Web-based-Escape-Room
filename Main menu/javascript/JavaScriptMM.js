function myFunction() {
    var element = document.getElementById("column1");
    var element2 = document.getElementById("column2");
    var element3 = document.getElementById("column3");
    var element4 = document.getElementById("title");
    element.classList.toggle("darkerColumns");
    element2.classList.toggle("darkerColumns");
    element3.classList.toggle("darkerColumns");
    element4.classList.toggle("darkTitle");
}

//These variables are used to set the players name
var x, y;

function setName(){

    x = document.getElementById("form1");
    y = x.elements["playerName"].value;
    if (y == ""){
        alert("You forgot to input your name!");
    } else {
        window.location.href = "../GameIntro/GameIntro.html";  
        sessionStorage.setItem("name", y);
    }


}



function getName(){
    document.getElementById("name").innerHTML += sessionStorage.getItem("name");
}




var c;
var choice;
var test;

function setSelectedCrime(){
    c = document.getElementById("crimes");
    choice = c.options[c.selectedIndex].text;
    sessionStorage.setItem("choice", choice);
    getSelectedCrime();
}

function getSelectedCrime(){

    var changeNarration = document.getElementById("aCrime").innerHTML =  sessionStorage.getItem("choice");

}


function startTimer(){
    var timer = setTimeout(outOfTime, 60000);
}


function outOfTime(){
    window.location.href = "../LosePage/LosePage.html";
}

const cDown = setInterval(updateCountdown, 1000);
var startingMinutes = 1;

let time = startingMinutes * 60;


function updateCountdown(){
    const minutes = Math.floor(time/60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    document.getElementById("timeLeft").innerHTML = "Timer: " +minutes+ ':' +seconds;
    time--;
    sessionStorage.setItem("timeTaken", time);
    sessionStorage.setItem("timeT5", seconds);
    if (time == 20){
        var nar = document.getElementById("narration").innerHTML += " <b>Hurry! Only 20 seconds left!</b>";
    }


}




function getInfo(){

    startTimer();
    getName();
    getSelectedCrime();



}

function getInfo4(){

    startTimer();
    getName();
    


}

function endPage(){
    document.getElementById("text").innerHTML += sessionStorage.getItem("name")+"!";
    document.getElementById("nameAndCrime").innerHTML = '<b id = "statName">Name</b> ' + sessionStorage.getItem("name")+'  <b id = "statCrime">Crime</b> ' + sessionStorage.getItem("choice");
    
    
    var point1 = sessionStorage.getItem("pointCollection");
    var point2 = sessionStorage.getItem("pointCollection2");
    var point3 = sessionStorage.getItem("pointCollection3");
    var point4 = sessionStorage.getItem("pointCollection4");
    var point5 = sessionStorage.getItem("pointCollection5");
    
    if (point1 == null){
        document.getElementById("pointsP1").innerHTML += "0";
    } else if (point1 != null){
         document.getElementById("pointsP1").innerHTML += sessionStorage.getItem("pointCollection");
    }
    
    if (point2 == null){
        document.getElementById("pointsP2").innerHTML += "0";
    } else if (point2 != null){
         document.getElementById("pointsP2").innerHTML += sessionStorage.getItem("pointCollection2");
    }
    
    if (point3 == null){
        document.getElementById("pointsP3").innerHTML += "0";
    } else if (point3 != null){
         document.getElementById("pointsP3").innerHTML += sessionStorage.getItem("pointCollection3");
    }
    
    if (point4 == null){
        document.getElementById("pointsP4").innerHTML += "0";
    } else if (point1 != null){
         document.getElementById("pointsP4").innerHTML += sessionStorage.getItem("pointCollection4");
    }
    
    if (point5 == null){
        document.getElementById("pointsP5").innerHTML += "0";
    } else if (point5 != null){
         document.getElementById("pointsP5").innerHTML += point5;
    }
    
    
    var time1 = sessionStorage.getItem("timeTaken");
    var time2 = sessionStorage.getItem("timeTaken2");
    var time3 = sessionStorage.getItem("timeTaken3");
    var time4 = sessionStorage.getItem("timeTaken4");
    var time5 = sessionStorage.getItem("timeTaken");
    
   
    if (time1 > 0){
        document.getElementById("timeP1").innerHTML += (60 - time1) + " Seconds" ;
    } else if (time1 <= 0 || time1 == null){
        document.getElementById("timeP1").innerHTML +="0 Seconds" ;
    }
       
    
    
    if (time2 > 0){
        document.getElementById("timeP2").innerHTML += (60 - time2) + " Seconds" ;
    } else if (time2 <= 0 || time2 == null){
        document.getElementById("timeP2").innerHTML +="0 Seconds" ;
    }
    
    if (time3 > 0){
        document.getElementById("timeP3").innerHTML += (60 - time3) + " Seconds" ;
    } else if (time3 <= 0 || time3 == null){
        document.getElementById("timeP3").innerHTML +="0 Seconds" ;
    }
    
    if (time4 > 0){
        document.getElementById("timeP4").innerHTML += (60 - time4) + " Seconds" ;
    } else if (time4 <= 0 || time4 == null){
        document.getElementById("timeP4").innerHTML +="0 Seconds" ;
    }

    if (time5 > 0){
        document.getElementById("timeP5").innerHTML += (60 - time5) + " Seconds" ;
     } else if (time5 <= 0 || time5 == null){
        document.getElementById("timeP5").innerHTML +=  "0 Seconds" ;
    } 
    
   
    document.getElementById("trys").innerHTML += sessionStorage.getItem("attempts");

}




