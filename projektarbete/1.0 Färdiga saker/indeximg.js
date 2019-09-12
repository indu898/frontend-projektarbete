// Loads and writes  OR deletes two images with below properties 
// if the width property is or is not true

function addRemoveImage(y) {
    if (y.matches) {
        let myImage = new Image
        myImage.src = "images/float5.png"
        document.id = body1.appendChild(myImage)
        myImage.setAttribute("id", "image")

        let myImage2 = new Image
        myImage2.src = "images/float5.png"
        document.id = body1.appendChild(myImage2)
        myImage2.setAttribute("id", "image2")

    } else {
        // try { document.getElementById("image").remove(); } catch (e) { }
        // try { document.getElementById("image2").remove(); } catch (e) { }
        const image1 = document.getElementById("image");
        const image2 = document.getElementById("image2");

        if (image1) {
            image1.remove();
        }

        if (image2) {
            image2.remove();
        }
    }
}
var mediaQueryList = window.matchMedia("(min-width: 992px)")
addRemoveImage(mediaQueryList) // Call listener function at run time
mediaQueryList.addListener(addRemoveImage) // Attach listener function on state changes