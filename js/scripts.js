
var navbarButton = document.getElementById("navbarToggle");
var navbarCollapse = document.getElementById("navbarNavAltMarkup");

var collapsableNavbar = new bootstrap.Collapse(navbarCollapse, { toggle: false });

navbarButton.addEventListener("blur", function () {
    collapsableNavbar.toggle();
});



