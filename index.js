var Drop = document.querySelectorAll(".nav-outer > li");
var DropMenus = document.querySelectorAll(".nav-inner");
var ArrowDark = document.querySelectorAll(".nav-outer li img:nth-child(2)");
var Arrowlight = document.querySelectorAll(".nav-outer li img:nth-child(1)");
var hamburger = document.querySelectorAll("nav img:last-child");


for (let i = 0; i < Drop.length; i++) {
  Drop[i].addEventListener("click", function () {
    if (DropMenus[i].style.display === "block") {
        DropMenus[i].style.display = "none";
        ArrowDark[i].style.transform = "rotate(0deg)";
        Arrowlight[i].style.transform = "rotate(0deg)";
    } else {
        DropMenus[i].style.display = "block";
        ArrowDark[i].style.transform = "rotate(180deg)";
        Arrowlight[i].style.transform = "rotate(180deg)";
    }
  });
}

function show() {
    let navOuter = document.querySelector('.nav-outer');
    if (navOuter.style.display === "block" ) {
        navOuter.style.display = "none";
        
    } else {
        navOuter.style.display = "block";
    }
    
}