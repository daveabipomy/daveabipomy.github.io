//"use strict";

var timer=null;
var count=5;

function bigger(){

	/*This is to change the font once only by 2pt */
	// var text = document.getElementById("textarea1");
	// var font = text.style.fontSize;
	// font = parseInt(text.style.fontSize) + 2 +"pt";
	// text.style.fontSize = font;

	if(count>0){
		var text = document.getElementById("textarea1");
		var font = text.style.fontSize;
		font = parseInt(font) + 2 +"pt";
		text.style.fontSize=font;
		count--;
	}
	else{
		clearInterval(timer);
		timer=null;
		count=5;
	}

}

function bling(){
	var check = document.getElementById("bling");
	var text = document.getElementById("textarea1");
	if(check.checked){
		
		text.style.fontWeight = "bold";
		text.style.color="green";
		text.style.textDecoration="underline";
		document.body.style.backgroundImage = "url(http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg)";
	}
	else{
		text.style.fontWeight = "normal";
		text.style.color="black";
		text.style.textDecoration="none";
		document.body.style.backgroundImage = "none";
	}

}
function biggerx(){
	if(timer==null){
		timer = setInterval(bigger,500);
	}
}

function pig(){

	var text1 = document.getElementById("textarea1").value;
	var textarr = text1.split(" ");
	var text="";
	
	
	var final="";

	for(let j=0;j<textarr.length;j++){
		text = textarr[j];
		var result="";

	if(text.match(/^[^aeiou]/)){

		for(let i=0;i<text.length;i++){
			if(!text.charAt(i).match(/^[^aeiou]/)){
				result = text.substring(i,text.length) + text.substring(0,i) + "ay";
				i=text.length;
			}
		}
	}

	if(text.match(/^[aeiou]/)){
		result=text+"ay";
	}

	if(j==0) final+=result;
	else final+=" "+result;

}

	document.getElementById("textarea1").value =final;
}

function malkovitch(){

	var text = document.getElementById("textarea1").value;
	var textarr = text.split(" ");
	var result = "";

	for(let i=0;i<textarr.length;i++){
		if(textarr[i].length>4){
			textarr[i] = "Malkovitch";
		}
	}

	result = textarr.join(" ");
	

	document.getElementById("textarea1").value = result;
}

function load(){
	document.getElementById("bigger").onclick = biggerx;
	document.getElementById("bling").onchange = bling;
	document.getElementById("igpay").onclick = pig;
	document.getElementById("malkovitch").onclick = malkovitch;
}


window.onload = load;

