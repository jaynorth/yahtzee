  



  function initElement()  
    {  
        var p = document.getElementById("one");  

        p.onmouseover = showMouseOver;
        p.onmouseout = showMouseOut;
    };  

    function showMouseOver()  
    {  
        var notice = document.getElementById("one");
        notice.innerHTML = sumForNum(results, 1);

    }
    
    function showMouseOut()
    {
        var notice = document.getElementById("one");
        notice.innerHTML = 'out';
        
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