

var die1;
var die2;
var die3;
var die4;
var die5;
var dieNumber;


function print(message){

	document.write(message);
}

//var message = "Welcome to Yahtzee in Javascript ";

//print(message);

function randomRoll(){

	return Math.floor(Math.random() * (6 - 1 + 1)) + 1;

}

function resultMessage(dieNumber){
	
	message = 'die number: ' 
	message += dieNumber;
	message += " You threw a ";
	message += randomRoll();
	message += '<br />'
	

	print(message);

}

//die1 = randomRoll();
for (var i=1; i<6; i++){
	resultMessage(i);
}

/* STEPS REQUIRED

Roll 1, Throw all Dices
	With RandomGenerator
Roll 2, 
	Analyse Dice, 
	Show Combinations
	Choose What to keep (checkboxes)
	THrow again or stop?
Roll 3, 
	Throw Remaining
	Analyse Dice
	Show Combination
	Choose

Submit Result into Table


*/