var marker = "X";

function markSquare(id) {
    var elem = document.getElementById(id);
    if (elem.innerHTML != "") return;
    elem.innerHTML = marker;
    if (marker == "X") marker = "O";
    else marker = "X";
}
