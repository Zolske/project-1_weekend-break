// >>> start action slide
var slideIndexAction = 0;
showSlidesAction();

function showSlidesAction() {
    var i;
    var slidesAction = document.getElementsByClassName("mySlidesAction");
    for (i = 0; i < slidesAction.length; i++) {
        slidesAction[i].style.display = "none";
    }
    slideIndexAction++;
    if (slideIndexAction > slidesAction.length) {
        slideIndexAction = 1
    }
    slidesAction[slideIndexAction - 1].style.display = "block";
    setTimeout(showSlidesAction, 10000); // Change image every 10 seconds
}

// >>> start relax slide
var slideIndexRelax = 0;
showSlidesRelax();

function showSlidesRelax() {
    var i;
    var slidesRelax = document.getElementsByClassName("mySlidesRelax");
    for (i = 0; i < slidesRelax.length; i++) {
        slidesRelax[i].style.display = "none";
    }
    slideIndexRelax++;
    if (slideIndexRelax > slidesRelax.length) {
        slideIndexRelax = 1
    }
    slidesRelax[slideIndexRelax - 1].style.display = "block";
    setTimeout(showSlidesRelax, 10000); // Change image every 10 seconds
}

// >>> start discover slide
var slideIndexDiscover = 0;
showSlidesDiscover();

function showSlidesDiscover() {
    var i;
    var slidesDiscover = document.getElementsByClassName("mySlidesDiscover");
    for (i = 0; i < slidesDiscover.length; i++) {
        slidesDiscover[i].style.display = "none";
    }
    slideIndexDiscover++;
    if (slideIndexDiscover > slidesDiscover.length) {
        slideIndexDiscover = 1
    }
    slidesDiscover[slideIndexDiscover - 1].style.display = "block";
    setTimeout(showSlidesDiscover, 10000); // Change image every 10 seconds
}