function qSel(selectors) {
    return document.querySelector(selectors);
}
;
var nfe = qSel("header nav.navigation-fixed");
function scrollEndHandler() {
    if (scrollY < 500) {
        nfe.classList.add("hide");
    }
    else {
        nfe.classList.remove("hide");
    }
    ;
}
;
addEventListener("scroll", scrollEndHandler);
