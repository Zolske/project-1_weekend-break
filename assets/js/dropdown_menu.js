 /* When the user clicks on the button, toggle between hiding and showing the dropdown content */
 function showHamburger() {
     document.getElementsByClassName("nav-bar__hamburger")[0].classList.toggle("show");
 }

 //  opens the details menu
 function detailsOpener_faq() {
     document.getElementById("faq").setAttribute("open", "");
 }

 function detailsOpener_about_us() {
     document.getElementById("about_us").setAttribute("open", "");
 }

 function detailsOpener_contact_us() {
     document.getElementById("contact_us").setAttribute("open", "");
 }