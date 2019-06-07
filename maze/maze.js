(function () {
    "use strict"
    let timerid = null;
    let lostGame = false;
    let illegal = false;
    let clickStart=false;
    let mazeMouseOut=false;
    $(function () {
        $(".boundary").mouseover(lose);
        $("#maze").mouseleave(illegalMove);
        $("#start").mouseover(start);
        $("#end").mouseover(end);
    });

    let lose = function (event) {       
        $(".boundary").css("background-color", "#ff8888"); 
       
        setTimeout(function () {
                    alert("You Lost The Game!! Press enter to Start Over.");
                }, 50)  
        clickStart=false;      
        mazeMouseOut=false;  
    }

    let start = function () {        
        $(".boundary").css("background-color", "#eeeeee"); 
        clickStart=true;
        mazeMouseOut=true;
    }

    let end = function () {   
        if(clickStart)   
        {  
                alert("You won the Game!!!");  
        }
        clickStart=false;
        mazeMouseOut=false;
    }
    let illegalMove = function () {  
        if(mazeMouseOut)
        {      
            alert("Illegal Move!!! Press enter to Start Over.");
        }
    }
})();

