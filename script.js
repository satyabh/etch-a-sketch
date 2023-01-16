const canvas = document.getElementById("canvas");
const res = document.querySelector("rangeSlider");

function createGrid(size) {
for (let i = 1; i <= size; i++) {
    var r = document.createElement("div");
    r.setAttribute("class","row");

    canvas.appendChild(r);
    for (let i = 1; i <= size; i++) {
        var p = document.createElement("div");
        p.setAttribute("id","pixel");
        p.addEventListener('mouseover', function() {
            this.style.backgroundColor = "black";
        });
        r.appendChild(p);
    }
}
}
createGrid(16);

function update(value) {
    const rows = document.querySelectorAll(".row");
    rows.forEach((e) => {
        e.parentNode.removeChild(e);
        console.log("removed row");
    })
    document.getElementById("a").innerHTML = value;
    document.getElementById("b").innerHTML = value;
    createGrid(value);
}
