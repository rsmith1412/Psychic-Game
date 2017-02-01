var alphabet = ("abcdefghijklmnopqrstuvwxyz").split("");
      var wins = 0;
      var losses = 0;
      var guessesLeft = 9;
      var guessesSoFar = "";
      var computerLetter = randomCharacter();

restartGame();

function randomCharacter() {

	var randomIndex = Math.random() * alphabet.length;

	randomIndex = Math.floor(randomIndex);

	console.log("Computer choice: " + alphabet[randomIndex]);

	//Use number to return a value from array
	return alphabet[randomIndex];
}      

function restartGame () {
	console.log("Restarting Game");

	computerLetter = randomCharacter();

	guessesSoFar = "";

	guessesLeft = 9;

	ReplaceElementContent("player-wins", wins);
	ReplaceElementContent("player-losses", losses);
	ReplaceElementContent("guesses-left", guessesLeft);
	ReplaceElementContent("guesses-so-far", "None");
}

function ReplaceElementContent(id, content) {
	document.getElementById(id).innerHTML = content;
}

document.onkeyup = function(event) {

	//Get user key
	var userGuess = event.key.toLowerCase();

	if(alphabet.indexOf(userGuess) === -1) {
		return;
	}

	console.log("User choose: " + userGuess);

	if (guessesSoFar === "") {
		guessesSoFar = userGuess;
	}

	else {
		guessesSoFar = guessesSoFar + ", " + userGuess;
	}

	console.log("User chose: " + guessesSoFar);
	ReplaceElementContent("guesses-so-far", guessesSoFar);
	/*
	var computerLetter = alphabet[Math.floor(Math.random() * alphabet.length)]; */

	if (userGuess === computerLetter) {
		wins++;

		ReplaceElementContent("player-wins", wins);
		console.log("User has won!");

		restartGame();	

	}

	else {
		guessesLeft--;

		console.log("User lost one guess.")

		ReplaceElementContent("guesses-left", guessesLeft);
		
		//document.getElementById("guesses-left").innerHTML = guessesLeft;

		if (guessesLeft === 0) {
			losses++;

			ReplaceElementContent("player-losses", losses);

			restartGame();	
		}
	}
}      