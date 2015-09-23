
function print(message){

	document.write(message);
}

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

function firstRoll(){
	for (var i=1; i<6; i++){
		resultMessage(i);
	}
}

firstRoll();

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

