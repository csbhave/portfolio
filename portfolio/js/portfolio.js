
// loading page
var preloader = document.getElementById('cf');

function myFunction(){
    preloader.style.display="none";  
}

// top button
var mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {  
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//toggle button
  // Get the checkbox
  function themeChange() {
  var checkBox = document.getElementById("myonoffswitch");
  var body = document.getElementById("body");
  var info = document.getElementById("pinfo");
  if (checkBox.checked == true){
    body.style.background = "#fff";
    body.style.color = "#333";
    info.style.color="#333";
  } else {
    body.style.background = "#333";
    body.style.color = "#fff";
    info.style.color="#fff";
  }
}