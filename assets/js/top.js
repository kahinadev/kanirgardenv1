let backTop = document.getElementById("btn-top");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

        backTop.style.display = "block";

    } else {
        backTop.style.display = "none";
    }

}

function backToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}