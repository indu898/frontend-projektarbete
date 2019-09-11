function myFunction(x) {
    if (x.matches) {
        let myImage = new Image
        myImage.src = "images/float5.png"
        document.id = body1.appendChild(myImage)
        myImage.setAttribute("id", "image")

        let myImage2 = new Image
        myImage2.src = "images/float5.png"
        document.id = body1.appendChild(myImage2)
        myImage2.setAttribute("id", "image2")

    } else {
        try { document.getElementById("image").remove(); } catch (e) {}
        try { document.getElementById("image2").remove(); } catch (e) {}
    }
}
var x = window.matchMedia("(min-width: 992px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes