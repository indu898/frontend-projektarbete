function myFunction(x) {
    if (x.matches) {
        let myImage3 = new Image
        myImage3.src = "images/flexboy.png"
        document.id = body2.appendChild(myImage3)
        myImage3.setAttribute("id", "image")

        let myImage4 = new Image
        myImage4.src = "images/flexboy.png"
        document.id = body2.appendChild(myImage4)
        myImage4.setAttribute("id", "image2")

    } else {
        try { document.getElementById("image").remove(); } catch (e) {}
        try { document.getElementById("image2").remove(); } catch (e) {}
    }
}
var x = window.matchMedia("(min-width: 992px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes