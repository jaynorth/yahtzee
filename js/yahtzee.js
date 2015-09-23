
var results = [
{	rollCounter: 0},
{	dieNumber: 1, rollResult: 'NULL', check: 'NULL'},
{	dieNumber: 2, rollResult: 'NULL', check: 'NULL'},
{	dieNumber: 3, rollResult: 'NULL', check: 'NULL'},
{	dieNumber: 4, rollResult: 'NULL', check: 'NULL'},
{	dieNumber: 5, rollResult: 'NULL', check: 'NULL'}
];

var clickButton = document.getElementById('rollButton');

var Counter = results[0].rollCounter;


function print(message){
	document.getElementById('content').innerHTML = message;
}

function randomRoll(){
	return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
}

function rollDice(results){

	for (var i=1; i<6; i++){
		if (results[i].check == 'NULL'){
			results[i].rollResult = randomRoll();
		}
	}
	results[0].rollCounter +=1;
	console.log(results);
	return results;
}



 function displayResults(results){
 		var message = 'Results : <br />';
 	for (var i=1; i<6; i++){
 		message += 'Die number ' ;
 		message += results[i].dieNumber + ': '  + results[i].rollResult + '<br />';
 	}
		print(message);

 }
 clickButton.onclick = function(){
 	rollDice(results);
 	displayResults(results);
 	
 }
 

//console.log(results);

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

