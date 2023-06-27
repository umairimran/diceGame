var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;
if (randomNumber1>randomNumber2) {
    document.querySelector("h1").innerText = "Player 1 Wins";
} else {
        document.querySelector("h1").innerText = "Player 2 Wins";
}
if (randomNumber1 == randomNumber2)
{
            document.querySelector("h1").innerText = "Draw";
    }
var image1 = "images/dice" + randomNumber1+".png";
var image2 = "images/dice" + randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src", image2);
document.querySelectorAll("img")[0].setAttribute("src", image1);

