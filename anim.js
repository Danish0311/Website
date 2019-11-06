function ask(){
	var x =prompt("What's your name?");
		if (x === 'Danish' || x === 'danish'){
			alert(x + " " + "is a good name");
		} else {
			alert(x + " " + "is an okay name");
		}
	}


function pop(){
	alert("heyOOOOOOO");
}


function ask2(){
	var x = prompt("Guess the number between 1 & 100:");
		while (x != 69) {
		if (x <= 68) {
			x = prompt("higher");
		} else if (x >= 70) {
			x = prompt("lower");
		} else {
			x = prompt("error");
		}
	}
		if (x = 69) {
			alert("Nice");
		}
}

function e(){
	var x = prompt("Please enter a number");
	var y = prompt("Enter another one");
		if (x >= y){
			alert(x);
		}
		else if (x <= y){
			alert(y);
		}
}

function o(){
	var x = 0;
	while (x <= 99){
		x = x + 1;
			if(x % 4 == 0 && x % 10 == 0){
				console.log("fourten");
			}else if(x % 10 == 0){
				console.log("ten");
			}else if(x % 4 == 0){
				console.log("four");
			}else{
				console.log(x);
			}
		}
	}


function c(){
	var x = prompt("Enter any year");
	var y =(x/100);
	var z =(Math.floor(y + 1));
		if (z == 12){
			alert("This year is in the" + " " + z + "th century");
		} else if (z == 13){
			alert("This year is in the" + " " + z + "th century");
		} else if (z == 11){
			alert("This year is in the" + " " + z + "th century");
		} else if (z % 10 == 1 ){
			alert("This year is in the" + " " + z + "st century");
		} else if (z % 10 == 2 ){
			alert("This year is in the" + " " + z + "nd century");
		} else if (z % 10 == 3){
			alert("This year is in the" + " " + z + "rd century");
		} else {
			alert("This year is in the" + " " + z + "th century");
		}
	}

function angle(){
	var x = prompt("Enter one angle of a triangle (the number only)")
	var y = prompt("Enter the other angle (the number only)")
		alert(180 - x - y + " " + "Degrees is the other angle of the triangle")
}

function calculator(){
	var a = parseInt(document.querySelector("#value1").value);
	var b = parseInt(document.querySelector("#value2").value);
	var op = parseInt(document.querySelector("#operator").value);
	var calculate;

	if (op == "add"){
		calculate = a + b;
	} else if (op == "min"){
		calculate = a - b;
	} else if (op == "mul"){
		calculate = a * b;
	} else if (op == "div"){
		calculate = a / b;
	}

	document.querySelector("#result").innerHTML = calculate;
}

function m4e1(){
	var a = prompt("Enter a string")
	var b = a.length
	alert (b)
}

function m4e2(){
	var a = prompt("Enter Username")
	var b = prompt("Enter Password")
	var c = a.toLowerCase()

	if (c == "danish" && b == 123){
		alert ("Correct")
	} else {
		alert ("Username Or Passord is Incorrect")
	}
}

function m4e3(){
	var a = prompt("Enter a string")
	var c = a.toLowerCase()

	for (var i = 1; i <= a.length; i+=2) {
	
	var b = (a[i].toUpperCase())

	}
}
	