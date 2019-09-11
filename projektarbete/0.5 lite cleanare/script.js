let mqls = [
    window.matchMedia("(min-width: 1200px)"),
    window.matchMedia("(min-width: 992px) and (max-width: 1199.999px)"),
    window.matchMedia("(min-width: 768px) and (max-width: 991.999px)"),
    window.matchMedia("(min-width: 576px) and (max-width: 767.999px)"),
    window.matchMedia("(max-width: 575.999px)")
]

function mediaqueryresponse(mql) {
    if (mqls[0].matches) {
        let element = document.getElementById("h1");
        element.innerHTML = "> 1200px";
    }
    if (mqls[1].matches) {
        let element = document.getElementById("h1");
        element.innerHTML = "992-1200px";
    }
    if (mqls[2].matches) {
        let element = document.getElementById("h1");
        element.innerHTML = "768-992px";
    }
    if (mqls[3].matches) {
        let element = document.getElementById("h1");
        element.innerHTML = "576-768p";
    }
    if (mqls[4].matches) {
        let element = document.getElementById("h1");
        element.innerHTML = "< 576px";
    }
}
for (let i = 0; i < mqls.length; i++) {
    mediaqueryresponse(mqls[i]) // call listener function explicitly at run time
    mqls[i].addListener(mediaqueryresponse) // attach listener function to listen in on state changes
}
/*
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
    /*
    let myImage3 = new Image
    myImage.src = "images/flexboy.png"
    document.id = body2.appendChild(myImage3)
    myImage3.setAttribute("id", "image")

    let myImage4 = new Image
    myImage4.src = "images/flexboy.png"
    document.id = body2.appendChild(myImage4)
    myImage4.setAttribute("id", "image2")*/