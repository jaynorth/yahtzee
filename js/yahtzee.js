
var results = [
{	rollCounter: 0},
{	dieNumber: 1, rollResult: 'NULL', check: 'NULL'},
{	dieNumber: 2, rollResult: 'NULL', check: 'NULL'},
{	dieNumber: 3, rollResult: 'NULL', check: 'NULL'},
{	dieNumber: 4, rollResult: 'NULL', check: 'NULL'},
{	dieNumber: 5, rollResult: 'NULL', check: 'NULL'}
];

function print(message){

	document.write(message);
}

function randomRoll(){
	return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
}


function Roll(results){

	for (var i=1; i<6; i++){
		results[i].rollResult=randomRoll();
		console.log(results[i]);
	
	}


	return results;
}

function displayResults(results){

	for (var i=1; i<6; i++){
		message = 'Die ' + results[i].dieNumber + ': ' + results[i].rollResult;
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

