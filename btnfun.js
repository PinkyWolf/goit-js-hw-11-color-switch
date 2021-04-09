document.querySelector(".stopBtn").addEventListener("mouseenter", run);
function run() {
    var btn = document.querySelector(".stopBtn");
    if (!btn.style.left) {
        btn.style.left = "200px";
    } else {
        var posLeft = parseInt(btn.style.left); 
        if (posLeft >= 800) {
            btn.style.left = "200px";
        } else if (posLeft > 150) {
            posLeft += 150;
            btn.style.left = (posLeft + 150) + "px";
        }
    }
}