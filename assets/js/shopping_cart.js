function openCity(cityName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(cityName).style.display = "block";
    elmnt.style.backgroundColor = color;

}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// // turn off tab switch
// function myFunction(x) {
//     if (x.matches) { // If media query matches
//         document.getElementById("action_pack").style.display = "inline-block";
//         document.getElementById("relax_pack").style.display = "inline-block";
//         document.getElementById("discovery_pack").style.display = "inline-block";
//     } // else {
//     //  document.body.style.backgroundColor = "pink";
//     // }
// }

// var x = window.matchMedia("(min-width: 700px)")
// myFunction(x) // Call listener function at run time
// x.addListener(myFunction) // Attach listener function on state changes