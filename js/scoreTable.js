  

var Identifiers=["ace", "twos", "threes", "fours", "fives", "sixes"];
var score = [];
var scoreCounter= 0; //max 13, ends at 13


function showMouseover(id, num){
    //alert(id);
    var b= document.getElementById(id);
    if (score[id]==undefined && Counter>0){
        b.innerHTML = sumForNum(results, num);
    }


}

function showMouseOut(id){
    var b= document.getElementById(id);
    if (score[id]==undefined){
        b.innerHTML = ''
    }else{
    b.innerHTML = score[id];
    }

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
    if (Counter>0 && score[id]==undefined){
    console.log('Adding to Score');
    //console.log('Counter is ' + Counter);
    var points = sumForNum(results, num);
    score[id]=points;
    console.log(score);
    console.log(id);
    document.getElementById(id).innerHTML = points;


    scoreCounter++;

    console.log(scoreCounter);
    reset();
    }
}

function reset(){
    console.log('reseting');
    
    Counter=0;
    console.log(Counter);
    clickButton.type ="button"  ;
    results =[0, 0, 0, 0, 0, 0];
    hold = [false, false, false, false, false, false];
    document.getElementById('content').innerHTML = 'roll the dice';
    

}





function checkOccurence(array){
    var occurences = {};
console.log('checking occurences');
    for (var i=1; i<array.length; i++){//changed i=0 to i=1 to remove the 0 value in the object
        
       if (occurences[array[i]]){
        occurences[array[i]]++;
       } else {
          occurences[array[i]] = 1;
       }      
    }
    console.log(occurences);

    //return occurences;
    checkDiceHand(occurences);
}


function checkDiceHand(object){
    console.log('check dice hand');
    var fullHouse=0;
    var straightCheck=0;
    var threeOfaKind=0;
    var fourOfaKind=0;
    var Yahtzee=0;
    var keyList=[];

    for (var key in object){
        keyList.push([key]);
        var value = object[key];
        console.log(key + ': ' +value);

        if (value==5){
            console.log('yahtzee');
            Yahtzee+=1;
            break;
        }
        if (value==4){
            console.log('four of a kind');
            fourOfaKind+=1;
            break;
        }
        if (value==3){
            console.log('Three of a kind');
            fullHouse +=1;
            threeOfaKind+=1;
        }
        if (value==2){
            console.log('Pair');
            fullHouse +=1;
        }
         if (value==1 ){
            //console.log('Possible straight');
            fullHouse -=1;
            straightCheck +=1;
        }

       
        


    }

    console.log('keylist is :' + keyList);
    console.log('straightcheck is ' +straightCheck);

    if (fullHouse==2){
        console.log('full House');
    }
  
        console.log('straight check small straight possible');
        arr1= [2, 3, 4, 5];
        arr2= [1, 2, 3, 4];
        arr3= [3, 4, 5, 6];
        console.log(arr1);
        if(keyList===arr1 || keyList===arr2 || keyList===arr3){
            console.log('SMALL STRAIGHT!!!!!!!!!!!! : ' + keyList);
        }

     
        
    
    if (straightCheck==5 ){
        console.log('BIG STRAIGHT : ' + keyList);
    }


};

