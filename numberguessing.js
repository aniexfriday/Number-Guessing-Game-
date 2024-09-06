let userGuess = null;

function guessNumber(number) {
  userGuess = number;
  document.getElementById("user-guess").textContent = number; 
}

function checkGuess() {
  if (userGuess === null) {
    alert("Please enter your number");
    return;
  }

  const computerGuess = Math.floor(Math.random() * 10);
  document.getElementById("computer-guess").textContent = computerGuess; 

  if (computerGuess === userGuess) {
    alert("you won")
    // document.getElementById("result-message").textContent = "You Won!";
    // document.getElementById("result-message").style.color = "green";
  } else {
    alert("Ooops Sorry Try Again");
    // document.getElementById("result-message").textContent = "You Lost !";
    // document.getElementById("result-message").style.color = "red";
  }


  setTimeout(resetGame, 2000);
}

function resetGame() {
  userGuess = null;
  document.getElementById("user-guess").textContent = "-";
  document.getElementById("computer-guess").textContent = "-";

  document.getElementById("result-message").textContent = "";
  document.getElementById("result-message").style.color = "";
}





