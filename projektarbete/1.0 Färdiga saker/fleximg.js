// Loads and writes  OR deletes two images with below properties 
// if the width property is or is not true

function addRemoveImage(y) {
    if (y.matches) {
        let myImage3 = new Image
        myImage3.src = "images/flexboy.png"
        document.id = body2.appendChild(myImage3)
        myImage3.setAttribute("id", "image")

        let myImage4 = new Image
        myImage4.src = "images/flexboy.png"
        document.id = body2.appendChild(myImage4)
        myImage4.setAttribute("id", "image2")

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