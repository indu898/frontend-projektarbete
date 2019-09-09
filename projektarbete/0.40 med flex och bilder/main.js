function myFunction(x) {
    if (x.matches) { // If media query matches
        document.getElementById("img").remove();
        document.getElementById("img2").remove();
    }
}

var x = window.matchMedia("(max-width: 991.98px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes