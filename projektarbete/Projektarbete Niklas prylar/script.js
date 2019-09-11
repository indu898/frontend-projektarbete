
/*
function myFunction(x) {
    if (x.matches) { // If media query matches
        let element = document.getElementById("floatH1");
        element.innerHTML = "Float (width: över 1200px)";

    }
    else {
        let element = document.getElementById("floatH1");
        element.innerHTML = "Float";

    }
}
var x = window.matchMedia("(min-width: 1200px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
*/



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
        if (window.matchMedia("(min-width: 1200px)").matches) {
            let element = document.getElementById("floatH1");
            element.innerHTML = "Float (över 1200px)";
        }
        if (window.matchMedia("(min-width: 992px) and (max-width: 1199.999px)").matches) {
            let element = document.getElementById("floatH1");
            element.innerHTML = "Float (992-1200px)";
        }
        if (window.matchMedia("(min-width: 768px) and (max-width: 991.999px)").matches) {
            let element = document.getElementById("floatH1");
            element.innerHTML = "Float (768-992px)";
        }
        if (window.matchMedia("(min-width: 576px) and (max-width: 767.999px)").matches) {
            let element = document.getElementById("floatH1");
            element.innerHTML = "Float (576-768px)";
        }
        if (window.matchMedia("(max-width: 575.999px)").matches) {
            let element = document.getElementById("floatH1");
            element.innerHTML = "Float (under 576px)";
        }

        let mq = window.matchMedia("(min-width: 1200px)")
        myFunction(mq) // Call listener function at run time
        mq.addListener(myFunction)
        function myFunction(mq) {
            if (mq.matches) {
                let element = document.getElementById("floatH1");
                element.innerHTML = "Float (width: över 1200px)";
            }
        }


        let mq1 = window.matchMedia("(min-width: 992px) and (max-width: 1199.999px)")
        function myFunction(mq1) {
            if (mq1.matches) {
                let element = document.getElementById("floatH1");
                element.innerHTML = "Float bredd 992-1200px";
            }
        }
        myFunction(mq1) // Call listener function at run time
        mq1.addListener(myFunction)

        let mq2 = window.matchMedia("(min-width: 768px) and (max-width: 991.999px)")
        function myFunction(mq2) {
            if (mq2.matches) {
                let element = document.getElementById("floatH1");
                element.innerHTML = "Float (width: 768-992px)";
            }
        }
        myFunction(mq2) // Call listener function at run time
        mq2.addListener(myFunction)

        let mq3 = window.matchMedia("(min-width: 576px) and (max-width: 767.999px)")
        function myFunction(mq3) {
            if (mq3.matches) {
                let element = document.getElementById("floatH1");
                element.innerHTML = "Float (width: 576-768px)";
            }
        }
        myFunction(mq3) // Call listener function at run time
        mq3.addListener(myFunction)

        let mq4 = window.matchMedia("(max-width: 575.999px)")
        function myFunction(mq4) {
            if (mq4.matches) {
                let element = document.getElementById("floatH1");
                element.innerHTML = "Float (width: under 576px)";
            }
        }
        myFunction(mq4) // Call listener function at run time
        mq4.addListener(myFunction)

*/