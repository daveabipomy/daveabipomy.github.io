"use strict";
var delay = 250;
var timerID = "";
var originalText = "";


function setSize(){       
    var selectedSizeIndex = document.getElementById("size").selectedIndex;
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
    document.getElementById("animationType").disabled = false;
    originalText = document.getElementById("textarea").value = originalText;
}

function chooseGame()
{    
    setSize();  
    var selectedSizeIndex = document.getElementById("animationType").selectedIndex;
    if(selectedSizeIndex == "0"){ displayTextArea("blank"); } 
    if(selectedSizeIndex == "1"){ displayTextArea("juggler"); } 
    else if (selectedSizeIndex=="2"){ displayTextArea("exercise");}
    else if (selectedSizeIndex=="3"){ displayTextArea("dive");}
    else if (selectedSizeIndex=="4"){ displayTextArea("bike");}
    else if (selectedSizeIndex=="5"){ displayTextArea("custom");}
    else {return;}  
}

function displayTextArea(animationType)
{    
    if(animationType == "blank"){document.getElementById("play").value =" ";}
    else if(animationType == "juggler"){document.getElementById("play").value =JUGGLER;}
    else if(animationType == "exercise"){document.getElementById("play").value =EXERCISE;}
    else if(animationType == "dive"){document.getElementById("play").value =DIVE;}
    else if(animationType == "bike"){document.getElementById("play").value =BIKE;}
    else if(animationType == "custom"){document.getElementById("play").value =CUSTOM;}
    else{return;} 
}


function animationStart(){
    setSize();
    document.getElementById("btnstop").disabled = false;
    document.getElementById("btnstart").disabled = true;
    document.getElementById("animationType").disabled = true;
    clearInterval(timerID);
    originalText = document.getElementById("play").value;
    var animationType = document.getElementById("animationType").value;    
    if(animationType == "juggler"){displayAnimation("juggler");}  
    else if(animationType=="exercise"){displayAnimation("exercise");}
    else if(animationType=="dive"){displayAnimation("dive");}
    else if(animationType=="bike"){displayAnimation("bike");}
    else{return; }  
}

function displayAnimation(animationType){
   if(animationType == "juggler"){var splitted = ANIMATIONS["juggler"].split("=====\n");}
    else if(animationType=="exercise"){var splitted = ANIMATIONS["exercise"].split("=====\n");}   
    else if(animationType=="dive"){var splitted = ANIMATIONS["dive"].split("=====\n");}  
    else if(animationType=="bike"){var splitted = ANIMATIONS["bike"].split("=====\n");} 
    else {return;}
    var i=0;
    timerID=setInterval(function dis(){       
            document.getElementById("play").value = splitted[i];
            i=i+1;
            if(i>=splitted.length){i=0;}       
    },delay);    
}
