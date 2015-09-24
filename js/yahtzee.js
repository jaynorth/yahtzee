
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
	Counter++;
	return results;
}

function showResults(results, hold){
		
		var message = 'Counter : ' + Counter + '<br />' ;

	for (var i=1; i<6; i++){
		message += "Die " + i + " : <img src='img/" + results[i] + ".png' height=50 />";
		if (hold[i]==false && Counter<3 ){
			//var status = true;
			message += "<button id='" + i + "' onclick='keep("+ i +", true)' >Hold?</button>"; 

		}else if (hold[i]==true && Counter<3 ){
			//var status = false;
			message += "<button id='" + i + "' onclick='keep("+ i +", false)' >UnHold?</button>";
		}

	}
	document.getElementById('content').innerHTML = message;
}

function keep(i, status){
	//document.getElementById('i')
	hold[i]=status;
	if (status===true){
		document.getElementById(i).innerHTML="Unhold?";
		showResults(results, hold);
	}
	else if(status===false){
		document.getElementById(i).innerHTML="Hold?";
		showResults(results, hold);
	}

}

var clickButton = document.getElementById('rollButton');
clickButton.onclick = function (){
	Roll(results, hold);
	showResults(results, hold);
}

