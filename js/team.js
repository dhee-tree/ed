// Get the modal
var ganiyu = document.getElementById("ganiyu");
var vanette = document.getElementById("vanette");
var francis = document.getElementById("francis");
var lionel = document.getElementById("lionel");
var walter = document.getElementById("walter");
var ighomena = document.getElementById("ighomena");

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");
var btn5 = document.getElementById("myBtn5");
var btn6 = document.getElementById("myBtn6");

// Get the <span> element that closes the modal
var span1 = document.getElementById("close1");
var span2 = document.getElementById("close2");
var span3 = document.getElementById("close3");
var span4 = document.getElementById("close4");
var span5 = document.getElementById("close5");
var span6 = document.getElementById("close6");

// When the user clicks on the button, open the modal
btn1.onclick = function () {
  ganiyu.style.display = "block";
}
btn2.onclick = function () {
  vanette.style.display = "block";
}
btn3.onclick = function () {
  francis.style.display = "block";
}
btn4.onclick = function () {
  lionel.style.display = "block";
}
btn5.onclick = function () {
  walter.style.display = "block";
}
btn6.onclick = function () {
  ighomena.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span1.onclick = function () {
  ganiyu.style.display = "none";
}
span2.onclick = function () {
  vanette.style.display = "none";
}
span3.onclick = function () {
  francis.style.display = "none";
}
span4.onclick = function () {
  lionel.style.display = "none";
}
span5.onclick = function () {
  walter.style.display = "none";
}
span6.onclick = function () {
  ighomena.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == ganiyu) {
    ganiyu.style.display = "none";
  }
  if (event.target == vanette) {
    vanette.style.display = "none";
  }
  if (event.target == francis) {
    francis.style.display = "none";
  }
  if (event.target == lionel) {
    lionel.style.display = "none";
  }
  if (event.target == walter) {
    walter.style.display = "none";
  }
  if (event.target == ighomena) {
    ighomena.style.display = "none";
  }
}

