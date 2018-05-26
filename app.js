var easy = document.getElementById("easy");
var hard = document.getElementById("hard");
var winningColor = document.getElementById("color");
var tit = document.querySelector("h1");
var n = document.getElementById("new");
var corr = document.getElementById("win");
var container = document.querySelector("#container");
var sqr4 = document.querySelector(".sqr4");
var sqr5 = document.querySelector(".sqr5");
var sqr6 = document.querySelector(".sqr6");
var squares = document.querySelectorAll(".square");
var isEasy = false;
var isHard = true;
var num = 6;
corr.style.color = "white";

easy.onclick = function () {
    if (isHard) {
        var sqr4 = document.querySelector(".sqr4");
        var sqr5 = document.querySelector(".sqr5");
        var sqr6 = document.querySelector(".sqr6");
        sqr4.remove();
        sqr5.remove();
        sqr6.remove();
        easy.style.color = "white";
        easy.style.backgroundColor = "steelblue";
        tit.style.backgroundColor = "steelblue";
        hard.style.color = "black";
        hard.style.backgroundColor = "white"
        n.textContent = "New Colors";
        corr.style.color = "white";
        isHard = false;
        isEasy = true;
        num = 3;
        game();

        console.log("num " + num)
    }
}

hard.onclick = function () {
    if (isEasy) {
        container.appendChild(sqr4);
        container.appendChild(sqr5);
        container.appendChild(sqr6);
        tit.style.backgroundColor = "steelblue";
        n.textContent = "New Colors";
        corr.style.color = "white";
        isHard = true;
        isEasy = false;
        num = 6;
        game();
        hard.style.color = "white";
        hard.style.backgroundColor = "steelblue";
        easy.style.color = "black";
        easy.style.backgroundColor = "white";
        tit.style.backgroundColor = "steelblue";
        n.textContent = "New Colors";
        corr.style.color = "white";
    }
}

function game() {
    function rand() {
        return Math.floor(Math.random() * 254) + 1;
    }

    for (var i = 0; i < squares.length; i++) {
        var RGB = [rand(), rand(), rand()];
        var R = RGB[0].toString();
        var G = RGB[1].toString();
        var B = RGB[2].toString();
        squares[i].style.backgroundColor = "rgb(" + R + ", " + G + ", " + B + ")";

    }

    function getColor() {
        var ind = Math.floor(Math.random() * num);
        var sty = squares[ind].style.backgroundColor;
        winningColor.textContent = sty;

        return sty;
    }
    var win = getColor();

    for (var x = 0; x < squares.length; x++) {
        squares[x].addEventListener("click", function () {
            if (this.style.backgroundColor == win) {
                for (var z = 0; z < squares.length; z++) {
                    squares[z].style.backgroundColor = win;
                    tit.style.backgroundColor = win;
                }
                n.textContent = "Play Again ?";
                corr.textContent = "*** Correct ***"
                corr.style.color = "red";
            } else {
                corr.textContent = "Try Again!";
                corr.style.color = "black";
            }
        })
    }
}

game();

n.addEventListener("click", function () {
    game();
    tit.style.backgroundColor = "steelblue";
    n.textContent = "New Colors";
    corr.style.color = "white";

});