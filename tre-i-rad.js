var marker = "X";

function markSquare(id) {
    var elem = document.getElementById(id);
    if (elem.innerHTML != "") return;
    elem.innerHTML = marker;

    if (marker == "X") marker = "O";
    else marker = "X";


    var isAllFull = true;
    var elems = document.getElementsByClassName("square");
    for (e of elems) {
        if (e.innerHTML === "") isAllFull = false;
    }
    if (isAllFull) {
        document.getElementById("message").innerHTML = "GAME OVER";
    } else {
        document.getElementById("message").innerHTML = "Fortsätt spela!"
    }
}

function resetGame() {
    var elem = document.getElementsByClassName("square");
    for (let element of elem) {
        element.innerHTML = "";
    }
}
