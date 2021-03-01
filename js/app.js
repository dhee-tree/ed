"use strict";
//Get the button:
mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

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


// For Faq button

/* When the user clicks on the button, 
       toggle between hiding and showing the dropdown content */
function faq1() {
    document.getElementById("myDropdown").classList.toggle("show");
}
function faq2() {
    document.getElementById("myDropdown2").classList.toggle("show");
}
function faq3() {
    document.getElementById("myDropdown3").classList.toggle("show");
}
function faq4() {
    document.getElementById("myDropdown4").classList.toggle("show");
}
function faq5() {
    document.getElementById("myDropdown5").classList.toggle("show");
}
function faq6() {
    document.getElementById("myDropdown6").classList.toggle("show");
}
function faq7() {
    document.getElementById("myDropdown7").classList.toggle("show");
}
function faq8() {
    document.getElementById("myDropdown8").classList.toggle("show");
}
function faq9() {
    document.getElementById("myDropdown9").classList.toggle("show");
}
function faq10() {
    document.getElementById("myDropdown10").classList.toggle("show");
}
function faq11() {
    document.getElementById("myDropdown11").classList.toggle("show");
}
function faq12() {
    document.getElementById("myDropdown12").classList.toggle("show");
}
function faq13() {
    document.getElementById("myDropdown13").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.faqbtn')) {
        var dropdowns = document.getElementsByClassName("faqdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}