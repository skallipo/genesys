

// *** I couldnt get this to work without being flaky.  It would not scoll to the last section at all.
/* function closeOnBlur() {
    console.log("Debug: Collapsing");
    var navbarCollapse = document.getElementById("navbarNavAltMarkup");
    var collapsableNavbar = new bootstrap.Collapse(navbarCollapse, { toggle: false });
    collapsableNavbar.toggle();
} */

var form1 = document.getElementById("formPage1");
var form2 = document.getElementById("formPage2");
var form3 = document.getElementById("formPage3");
var form4 = document.getElementById("formPage4");

var nextButton1 = document.getElementById("nextButton1");
var prevButton1 = document.getElementById("prevButton1");

form2.hidden = true;
form3.hidden = true;
form4.hidden = true;



nextButton1.addEventListener("click", function () { 
    nextForm(form1, form2);
});


prevButton1.addEventListener("click", function () { 
    prevForm(form1, form2);
});

function nextForm(f1, f2) {
    f1.hidden = true;
    f2.hidden = false;
}

function prevForm(f1, f2) {
    f1.hidden = false;
    f2.hidden = true;
}