// *** I couldnt get this to work without being flaky.  It would not scoll to the last section at all.
/* function closeOnBlur() {
    console.log("Debug: Collapsing");
    var navbarCollapse = document.getElementById("navbarNavAltMarkup");
    var collapsableNavbar = new bootstrap.Collapse(navbarCollapse, { toggle: false });
    collapsableNavbar.toggle();
} */


// ***************** Quote Form Code *******************************
//Starting page index global variable
var currentFormIndex = 0;
//get all the buttons
var nextButton = document.getElementById("nextButton");
var prevButton = document.getElementById("prevButton");
var submitButton = document.getElementById("submitButton");
//get all the pages
var formPages = document.getElementsByClassName("quote-form-container");

// Hide all of the form pages after page 1
for (let i = 1; i < formPages.length; i++) {
    formPages[i].hidden = true;
}
// initialize the buttons
setButtonState(currentFormIndex);

nextButton.addEventListener("click", function () { 
    //console.log("Current Index Before: " + currentFormIndex.toString())
    if (currentFormIndex < formPages.length) {
        nextForm(formPages[currentFormIndex], formPages[currentFormIndex+1]);
        currentFormIndex++;
        //console.log("Current Index After: " + currentFormIndex.toString())
    }
    setButtonState(currentFormIndex);
});

prevButton.addEventListener("click", function () { 
    //console.log("Current Index Before: " + currentFormIndex.toString())
    if (currentFormIndex > 0) {
        prevForm(formPages[currentFormIndex-1], formPages[currentFormIndex]);
        currentFormIndex--;
        //console.log("Current Index After: " + currentFormIndex.toString())
    }
    setButtonState(currentFormIndex);
});

function setButtonState(pageNum) {
    if (pageNum == 0) {
    nextButton.hidden = false;
    prevButton.hidden = true;
    submitButton.hidden = true;
    }
    else if (pageNum == formPages.length - 1) {
        nextButton.hidden = true;
        prevButton.hidden = false;
        submitButton.hidden = false;
    }
    else {
        nextButton.hidden = false;
        prevButton.hidden = false;
        submitButton.hidden = true;
    }
}

function nextForm(f1, f2) {
    //hide current
    f1.hidden = true;
    //show next
    f2.hidden = false;
}

function prevForm(f1, f2) {
    //show prev
    f1.hidden = false;
    //hide current
    f2.hidden = true;
}

//***************** End Quote form code ******************************
