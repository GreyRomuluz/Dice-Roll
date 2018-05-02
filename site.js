// The function of this code is to simulate the rolling of 2 dice.

// This fucntion begins the rolling process
function newRoll(){

	// The following variables clear the previous styling of the dice
	var dice1 = document.getElementById('dice1').style.border = "";
	var dice2 = document.getElementById('dice2').style.border = "";
	var dice3 = document.getElementById('dice3').style.border = "";
	var dice4 = document.getElementById('dice4').style.border = "";
	var dice5 = document.getElementById('dice5').style.border = "";
	var dice6 = document.getElementById('dice6').style.border = "";
	var dice7 = document.getElementById('dice7').style.border = "";
	var dice8 = document.getElementById('dice8').style.border = "";
	var dice9 = document.getElementById('dice9').style.border = "";
	var dice10 = document.getElementById('dice10').style.border = "";
	var dice11 = document.getElementById('dice11').style.border = "";
	var dice12 = document.getElementById('dice12').style.border = "";

	// The total number span is cleared with this command
	var spanTotalNumber = document.getElementById('spanTotalNumber');
	spanTotalNumber.innerText = "";

	// Here we call the function that gets two random dice rolls
	rollDice();
}

function rollDice(){

	// Generates the first dice number and saves it as a variable
	var diceOne = parseInt(Math.random() * 6)+1;

	// Generates the second dice number and saves it as a variable
	var diceTwo = parseInt(Math.random() * 6)+1;

	// Allows the JS to access each dice image as a seperate dice

	var dice1 = document.getElementById('dice1');
	var dice2 = document.getElementById('dice2');
	var dice3 = document.getElementById('dice3');
	var dice4 = document.getElementById('dice4');
	var dice5 = document.getElementById('dice5')
	var dice6 = document.getElementById('dice6');
	var dice7 = document.getElementById('dice7');
	var dice8 = document.getElementById('dice8');
	var dice9 = document.getElementById('dice9');
	var dice10 = document.getElementById('dice10');
	var dice11 = document.getElementById('dice11');
	var dice12 = document.getElementById('dice12');

	// Highlighting options for the first dice roll


	if(diceOne == "1"){
		dice1.style.border = "2px solid yellow";
	}
	if(diceOne == "2"){
		dice2.style.border = "2px solid yellow";
	}
	if(diceOne == "3"){
		dice3.style.border = "2px solid yellow";
	}
	if(diceOne == "4"){
		dice4.style.border = "2px solid yellow";
	}
	if(diceOne == "5"){
		dice5.style.border = "2px solid yellow";
	}
	if(diceOne == "6"){
		dice6.style.border = "2px solid yellow";
	}

	// highlighting for the second dice roll
	if(diceTwo == "1"){
		dice7.style.border = "2px solid yellow";
	}
	if(diceTwo == "2"){
		dice8.style.border = "2px solid yellow";
	}
	if(diceTwo == "3"){
		dice9.style.border = "2px solid yellow";
	}
	if(diceTwo == "4"){
		dice10.style.border = "2px solid yellow";
	}
	if(diceTwo == "5"){
		dice11.style.border = "2px solid yellow";
	}
	if(diceTwo == "6"){
		dice12.style.border = "2px solid yellow";
	}

	// Generates a variable for the total of the two dice rolled
	var sum = diceOne + diceTwo;

	// Access for the answer span
	var spanTotalNumber = document.getElementById('spanTotalNumber');

	// displaying the sum of the dice in the answer span
	spanTotalNumber.innerText = sum;

	// Alert was used as test to check Math.Random
	// alert("Dice 1: " + diceOne + "\nDice 2: " + diceTwo + "\nTotal: " + sum);
}
