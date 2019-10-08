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
	while (x <= 100){
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
	var x = prompt("Enter any year")
	var y =(x/100)
	var z =(y + 1)
		alert("This year is in the" + " " + Math.floor(z) + "th century")
}

function angle(){
	var x = prompt("Enter one angle of a triangle (the number only)")
	var y = prompt("Enter the other angle (the number only)")
		alert(180 - x - y + " " + "Degrees is the other angle of the triangle")
}