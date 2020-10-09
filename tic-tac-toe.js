document.addEventListener("DOMContentLoaded", function() {

    let addsquare = document.getElementById("board").children;
    for (let i = 0; i < addsquare.length; i++) {
        addsquare[i].classList.add("square")
    }

});