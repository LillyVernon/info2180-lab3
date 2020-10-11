document.addEventListener("DOMContentLoaded", function() { mainfunction() });

function mainfunction() {

    let addsquare = document.getElementById("board").children;
    var player_one = 1;
    var player1arr = [];
    var player2arr = [];

    for (let i = 0; i < addsquare.length; i++) {
        addsquare[i].classList.add("square")
        addsquare[i].onclick = function() { myFunction() };
        addsquare[i].addEventListener('mouseover',
            function(e) { e.target.classList.add('hover') });

        addsquare[i].addEventListener('mouseout',
            function(e) { e.target.classList.remove('hover') });


        function myFunction() {




            if (player_one == 1) {

                addsquare[i].innerHTML = "X";
                addsquare[i].classList.add("X")
                player_one = 0;
                player1arr.push(i);
                addsquare[i].onclick = false;
                if (player1arr.includes(0) && player1arr.includes(1) && player1arr.includes(2) ||
                    player1arr.includes(3) && player1arr.includes(4) && player1arr.includes(5) ||
                    player1arr.includes(6) && player1arr.includes(7) && player1arr.includes(8)) {
                    document.getElementById("status").classList.add("you-won")
                    document.getElementById("status").innerHTML = "Congratulations! X is the Winner!"
                }



            } else {

                addsquare[i].innerHTML = "O";
                addsquare[i].classList.add("O")
                player_one = 1;
                player2arr.push(i);
                addsquare[i].onclick = false;

                if (player2arr.includes(0) && player2arr.includes(1) && player2arr.includes(2) ||
                    player2arr.includes(3) && player2arr.includes(4) && player2arr.includes(5) ||
                    player2arr.includes(6) && player2arr.includes(7) && player2arr.includes(8)) {
                    document.getElementById("status").classList.add("you-won")
                    document.getElementById("status").innerHTML = "Congratulations! O is the Winner!"
                }

            }
        }

        const restartGame = document.getElementsByClassName("btn")
        restartGame[0].addEventListener('click', function() {
            addsquare[i].innerHTML = ""
            mainfunction();

        });


    }

    console.log(player1arr)
    console.log(player2arr)
        /*if ((player1arr.includes("0") && player1arr.includes("1") && player1arr.includes("2")) ||
            (player1arr.includes("3") && player1arr.includes("4") && player1arr.includes("5")) ||
            (player1arr.includes("6") && player1arr.includes("7") && player1arr.includes("8"))) {
            alert("Player 1 is the winner");*/
}