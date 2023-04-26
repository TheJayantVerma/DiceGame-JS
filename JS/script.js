var p1Score = Math.ceil(Math.random() * 6);
var p2Score = Math.ceil(Math.random() * 6);

document.querySelectorAll("img")[0].setAttribute("src", "Images/dice"+p1Score+".png");
document.querySelectorAll("img")[1].setAttribute("src", "Images/dice"+p2Score+".png"); 

if (p1Score > p2Score) {
    document.querySelector("h2").textContent = "P1 Wins";
}
else if (p2Score > p1Score) {
    document.querySelector("h2").textContent = "P2 Wins";
}
else {
    document.querySelector("h2").textContent = "Draw";
}