
var Counter = 0;
var results =[0, 0, 0, 0, 0, 0];
var hold = [false, false, false, false, false, false];

function rollDice(){
console.log("rollDice");
randomRoll();
}

function showResult(){
console.log("showResult");
}

function randomRoll(){
	console.log('randomRoll');
	return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
}

function Roll(results, hold){
	console.log('Roll');
	for (var i=1; i<6; i++){
		if(hold[i]==false){
			results[i]=randomRoll();
		}
	}
	return results;
}

function showResults(results, hold){
		Counter++;
		var message = 'Counter : ' + Counter + '<br />' ;

	for (var i=1; i<6; i++){
		message += "Die " + i + " : <img src='img/" + results[i] + ".png' height=50 />";
		if (hold[i]==false && Counter<3 ){
			message += "<button id='" + i + "' onclick='keep("+ i +")' >Hold?</button>"; 

		}

	}
	document.getElementById('content').innerHTML = message;
}

function keep(i){
	//document.getElementById('i')
	hold[i]=true;


}

var clickButton = document.getElementById('rollButton');
clickButton.onclick = function (){
	Roll(results, hold);
	showResults(results, hold);
}

