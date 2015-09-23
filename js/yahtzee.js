
var results =[]  ;
var rollCount;

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

function Roll(results){

	for (var i=1; i<6; i++){
		results[i]=randomRoll();
		console.log(results[i]);
	}

	return results;
}

function displayResults(results){

	for (var i=1; i<6; i++){
		message = 'Die ' + i + ': ' + results[i];
		message += '<br />';
		print(message);
	}

}

Roll(results);
console.log(results);
displayResults(results);


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

