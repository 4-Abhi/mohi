window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 30) {
        document.querySelector(".header-navg ").style.height = "107px";
        document.querySelector(".header-navg").style.backgroundColor = "white";
        document.querySelector(".header-navg").style.boxShadow = "0  1px 25px 1px #1b2838";



    } else {
        document.querySelector(".header-navg").style.height = "115px";
        document.querySelector(".header-navg").style.backgroundColor = "transparent";
        document.querySelector(".header-navg").style.boxShadow = "none";

    }
}