
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

var header = document.getElementById("header");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {  
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    header.style.background = "rgba(0,0,0,0.5)";
  } else {
    header.style.background="transparent";
  
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
  var info= document.getElementById("pinfo");
  if (checkBox.checked == true){
    body.style.background = "#fff";
    body.style.color = "#333";
    skillbox.style.color="000";    
  } else {
    body.style.background = "#333";
    body.style.color = "#fff";
  }
}