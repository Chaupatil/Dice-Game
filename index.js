function rollDice() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
  document.querySelector(".img1").setAttribute("src", randomImageSource1);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
  document.querySelector(".img2").setAttribute("src", randomImageSource2);

  var header = document.querySelector("#message");
  if (randomNumber1 > randomNumber2) {
    header.innerHTML = "🚩 Player 1 Wins! Roll Again!";
  } else if (randomNumber2 > randomNumber1) {
    header.innerHTML = "Player 2 Wins! 🚩 Roll Again!";
  } else {
    header.innerHTML = "Draw! Roll Again!";
  }
}

document.addEventListener("DOMContentLoaded", function() {
  var header = document.querySelector("#message");
  header.innerHTML = "Roll the Dice!";
});
