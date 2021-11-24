// >>> start action slide
var slideIndexAction = 0;
showSlidesAction();

function showSlidesAction() {
    var i;
    var slidesAction = document.getElementsByClassName("mySlidesAction");
    // hides all slides by setting there display: none;
    for (i = 0; i < slidesAction.length; i++) {
        slidesAction[i].style.display = "none";
    }
    // if the slide index becomes longer than the total length of the slides, than it is set back to 1
    slideIndexAction++;
    if (slideIndexAction > slidesAction.length) {
        slideIndexAction = 1
    }
    // changes the slide to display:block, so it is visible
    slidesAction[slideIndexAction - 1].style.display = "block";
    // calls the slide function again in 10 seconds
    setTimeout(showSlidesAction, 10000);
}
// <<< end action slide

// >>> start relax slide, works the same as action slide, see action slide for explanation
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
    setTimeout(showSlidesRelax, 10000);
}
// <<< end relax slide

// >>> start discover slide, works the same as action slide, see action slide for explanation
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
    setTimeout(showSlidesDiscover, 10000);
}
// <<< end discovery slide