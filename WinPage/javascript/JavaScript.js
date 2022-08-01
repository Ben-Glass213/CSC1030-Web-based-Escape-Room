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


function tryAgain(){
    var attempt = 1;
    sessionStorage.setItem("attempts", attempt);
    window.location.href = "../Main Menu/MainMenu.html"
}