 /* When the user clicks on the button, toggle between hiding and showing the dropdown content */
 function myFunction() {
     document.getElementById("toggel_js").classList.toggle("show");
 }

 //  opens the details menu
 function detailsOpener_faq() {
     document.getElementById("faq").setAttribute("open", "");
     document.getElementById("toggel_js").classList.toggle("show");
 }

 function detailsOpener_about_us() {
     document.getElementById("about_us").setAttribute("open", "");
     document.getElementById("toggel_js").classList.toggle("show");
 }

 function detailsOpener_contact_us() {
     document.getElementById("contact_us").setAttribute("open", "");
     document.getElementById("toggel_js").classList.toggle("show");
 }