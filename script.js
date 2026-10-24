let count = 0;

function increase() {
    count++;
    document.getElementById("number").innerHTML = count;
}

function decrease() {
    count--;
    document.getElementById("number").innerHTML = count;
}

function reset() {
    count = 0;
    document.getElementById("number").innerHTML = count;
}