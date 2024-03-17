window.onscroll = function () {myFunction()};

var secondNav = document.getElementById("second-nav-fixed");

var fixedPos = secondNav.offsetTop;

function myFunction {
    if (window.pageYOffset > fixedPos) {
        secondNav.classList.add("fixedPos");
    } else {
        secondNav.classList.remove("fixedPos");
    }
}