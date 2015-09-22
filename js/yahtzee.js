

var die1;
var die2;
var die3;
var die4;
var die5;


function print(message){

	document.write(message);
}

var message = "Welcome to Yahtzee in Javascript";

print(message);

function randomRoll(){

	return Math.floor(Math.random() * (6 - 1 + 1)) + 1;

}

die1 = randomRoll();

message = "You throwed a ";
message += die1

print(message);