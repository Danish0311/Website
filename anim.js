function ask(){
	var x =prompt("What's your name?");
		if (x === 'Danish' || x === 'danish'){
			alert(x + " " + "is a good name")
		} else {
			alert(x + " " + "is an okay name")
		}
	}


function pop(){
	alert("heyOOOOOOO");
}


function ask2(){
	var x = prompt("Guess the number between 1 & 100:");
		while (x != 69) {
		if (x <= 68) {
			x = prompt("higher")
		} else if (x >= 70) {
			x = prompt("lower")
		} else {
			x = prompt("error")
		}
	}
		if (x = 69) {
			alert("Nice")
		}
}

function e(){
	var x = prompt("Please enter a number");
	var y = prompt("Enter another one");
		if (x >= y){
			alert(x)
		}
		else if (x =< y){
			alert(y)
		}
}

