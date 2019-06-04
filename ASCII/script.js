'use strict';
let delay = 250;
let timerID = "";


function setSize(){
    let selectedSizeIndex = document.getElementById("size").selectedIndex;
    if(selectedSizeIndex == "0"){ document.getElementById("play").style.fontSize = "7pt";  }
    else if(selectedSizeIndex == "1"){ document.getElementById("play").style.fontSize = "10pt";  }
    else if(selectedSizeIndex == "2"){ document.getElementById("play").style.fontSize = "12pt";  } 
    else if(selectedSizeIndex == "3"){ document.getElementById("play").style.fontSize = "16pt";  } 
    else if(selectedSizeIndex == "4"){ document.getElementById("play").style.fontSize = "24pt";  } 
    else { document.getElementById("play").style.fontSize = "32pt";}
}
function turboCharger(){
    if(document.getElementById("turbo").checked === true ){ delay = 100;  }
    else{ delay = 250; }
    animationStart();
}

function endAnimation()
{
    clearInterval(timerID);
    document.getElementById("btnstart").disabled = false;
    document.getElementById("animtype").disabled = false;
    originalText = document.getElementById("textarea").value = originalText;
}

function animationStart(){
    setSize();
    document.getElementById("btnstop").disabled = false;
    document.getElementById("btnstart").disabled = true;
    document.getElementById("animtype").disabled = true;
    clearInterval(timerID);
    originalText = document.getElementById("play").value;
    let animationType = document.getElementById("animtype").value;
    
    if(animationType == "juggler")
    { 
        displayAnimation("juggler");         
    }  
    else if(animationType=="exercise")
    {
        displayAnimation("exercise"); 
    }
    else if(animationType=="dive")
    {
        displayAnimation("dive"); 
    }
    else if(animationType=="bike")
    {
        displayAnimation("bike"); 
    }
    else
    {
         return; 
    }  
}

function displayAnimation(animationType){
   if(animationType == "juggler")
   {
        let splitted = ANIMATIONS["juggler"].split("=====\n");        
    }
    else if(animationType=="exercise")
    {
        let splitted = ANIMATIONS["exercise"].split("=====\n");  
    }   
    else if(animationType=="dive")
    {
        let splitted = ANIMATIONS["dive"].split("=====\n");  
    }  
    else if(animationType=="bike")
    {
        let splitted = ANIMATIONS["bike"].split("=====\n");  
    } 
    else
    {
        return; 
    }

   

    let i=0;
    timerID=setInterval(
        function dis()
    {
       
            document.getElementById("play").value = splitted[i];
            i=i+1;
            if(i>=splitted.length){i=0;}
        
    },delay);
    
}
