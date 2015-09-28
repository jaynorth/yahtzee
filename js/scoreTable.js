  

var Identifiers=["ace", "twos", "threes", "fours", "fives", "sixes"];
var score = [];
var scoreCounter= 0; //max 13, ends at 13


function showMouseover(id, num){
    //alert(id);
    var b= document.getElementById(id);
    b.innerHTML = sumForNum(results, num);


}

function showMouseOut(id){
    var b= document.getElementById(id);
    b.innerHTML = "";

}

function sumForNum(results, number){
        sum = 0;
        for (var i=1; i<6; i++ ){
            if (results[i]==number){
                sum +=number;
            }
        }
        return sum;


    }

function addToScore(id, num){
console.log('Adding to Score');
var points = sumForNum(results, num);
score[id]=points;
console.log(score);
console.log(id);
document.getElementById(id).innerHTML = points;

scoreCounter++;

console.log(scoreCounter);
reset();

}

function reset(){
    console.log('reseting');
    
    Counter=0;
    console.log(Counter);
    clickButton.type ="button"  ;
    results =[0, 0, 0, 0, 0, 0];
    hold = [false, false, false, false, false, false];
    document.getElementById('content').innerHTML = '';
    

}