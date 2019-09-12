let mqli = [
    window.matchMedia("(min-width: 1200px)"),
    window.matchMedia("(min-width: 992px) and (max-width: 1199.999px)"),
    window.matchMedia("(min-width: 768px) and (max-width: 991.999px)"),
    window.matchMedia("(min-width: 576px) and (max-width: 767.999px)"),
    window.matchMedia("(max-width: 575.999px)")
]

function responsiveHeader() {
    if (mqli[0].matches) {
        let headerEl = document.getElementById("h1");
        headerEl.innerHTML = "> 1200px";
    }
    if (mqli[1].matches) {
        let headerEl = document.getElementById("h1");
        headerEl.innerHTML = "992-1200px";
    }
    if (mqli[2].matches) {
        let headerEl = document.getElementById("h1");
        headerEl.innerHTML = "768-992px";
    }
    if (mqli[3].matches) {
        let headerEl = document.getElementById("h1");
        headerEl.innerHTML = "576-768p";
    }
    if (mqli[4].matches) {
        let headerEl = document.getElementById("h1");
        headerEl.innerHTML = "< 576px";
    }
}
for (let i = 0; i < mqli.length; i++) {
    responsiveHeader(mqli[i]) // call listener function explicitly at run time
    mqli[i].addListener(responsiveHeader) // attach listener function to listen in on state changes
}