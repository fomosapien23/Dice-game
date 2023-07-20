document.addEventListener("DOMContentLoaded", function() {
    const n1 = Math.floor(Math.random() * 6) + 1;
    const n2 = Math.floor(Math.random() * 6) + 1;

    const imgList = [
        "images/dice1.png",
        "images/dice2.png",
        "images/dice3.png",
        "images/dice4.png",
        "images/dice5.png",
        "images/dice6.png"
    ];

    if (n1 < n2) {
        document.getElementById("title").innerHTML = " 👎 Player 2 wins 👑 ";
    } else if (n1 == n2) {
        document.getElementById("title").innerHTML = "Draw 😅 ";
    } else {
        document.getElementById("title").innerHTML = " 👑 Player 1 wins 👎 ";
    }
    document.getElementById("d1").setAttribute("src", imgList[n1 - 1]);
    document.getElementById("d2").setAttribute("src", imgList[n2 - 1]);
});

 // Check if content is already loaded
 if (document.readyState === 'complete') {
    // Content already loaded, display random images immediately
    displayRandomImages();
} else {
    // Wait for DOMContentLoaded event to display random images
    document.addEventListener("DOMContentLoaded", displayRandomImages);
}

function ref(){
    location.reload();
}