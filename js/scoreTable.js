  

var Identifiers=["ace", "twos", "threes", "fours", "fives", "sixes"];

/*
function initElement(){
var a = document.getElementById('ace');
a.onmouseover = showMouseover(id, num);
//a.onmouseout = showMouseOut;
}
*/
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

/*
  function initElement()  
    {  
       // for (var i=0; i<6; i++){
            
        var a = document.getElementById("ace");  

        a.onmouseover = showMouseOver;
        a.onmouseout = showMouseOut;

        var b = document.getElementById("twos");  

        b.onmouseover = showMouseOver;
        b.onmouseout = showMouseOut;

        var c = document.getElementById(Identifiers[2]);  

        c.onmouseover = showMouseOver;
        c.onmouseout = showMouseOut;

        var d = document.getElementById(Identifiers[3]);  

        d.onmouseover = showMouseOver;
        d.onmouseout = showMouseOut;

        var e = document.getElementById(Identifiers[4]);  

        e.onmouseover = showMouseOver;
        e.onmouseout = showMouseOut;

        var f = document.getElementById("sixes");  

        f.onmouseover = showMouseOver;
        f.onmouseout = showMouseOut;

    };  

    function showMouseOver()  
    {  
        //console.log(Identifiers);
        var notice1 = document.getElementById("ace");
        notice1.innerHTML = sumForNum(results, 1);

        var notice2 = document.getElementById("twos");
        notice2.innerHTML = sumForNum(results, 2);

        var notice3 = document.getElementById("threes");
        notice3.innerHTML = sumForNum(results, 3);

         var notice4 = document.getElementById("fours");
        notice4.innerHTML = sumForNum(results, 4);

        var notice5 = document.getElementById("fives");
        notice5.innerHTML = sumForNum(results, 5);

        var notice6 = document.getElementById("sixes");
        notice6.innerHTML = sumForNum(results, 6);

    }
    
    function showMouseOut()
    {
        var notice1 = document.getElementById("ace");
        notice1.innerHTML = 'out';

        var notice2 = document.getElementById("twos");
        notice2.innerHTML = 'out';

        var notice3 = document.getElementById("threes");
        notice3.innerHTML = 'out';

        var notice4 = document.getElementById("fours");
        notice4.innerHTML = 'out';

        var notice5 = document.getElementById("fives");
        notice5.innerHTML = 'out';

        var notice6 = document.getElementById("sixes");
        notice6.innerHTML = 'out';
    
       
    }

// Function for adding upper section
    function sumForNum(results, number){
        sum = 0;
        for (var i=1; i<6; i++ ){
            if (results[i]==number){
                sum +=number;
            }
        }
        return sum;

    }

 */