document.addEventListener("DOMContentLoaded", function() {

    let addsquare = document.getElementById("board").children;
    var player_one = 1;

    for (let i = 0; i < addsquare.length; i++) {
        addsquare[i].classList.add("square")
        addsquare[i].onclick = function() { myFunction() };
        var player1arr = [, , ];
        var player2arr = [, , ];
        addsquare[i].addEventListener('mouseover',
            function(e) { e.target.classList.add('hover') });

        addsquare[i].addEventListener('mouseout',
            function(e) { e.target.classList.remove('hover') });


        function myFunction() {

            ranNum = Math.floor(Math.random() * 2) + 1;

            clicked = false;
            if (player_one == 1) {

                addsquare[i].innerHTML = "X";
                addsquare[i].classList.add("X")
                player_one = 0;
                player1arr.push(i);
                addsquare[i].onclick = false;

            } else {

                addsquare[i].innerHTML = "O";
                addsquare[i].classList.add("O")
                player_one = 1;
                player2arr.push(i);
                addsquare[i].onclick = false;

            }

        }

    }
    console.log(player1arr)
    console.log(player2arr)
});