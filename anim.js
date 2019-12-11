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

	if (c == "danish" && b == 69){
		alert ("Correct")
	} else {
		alert ("Username Or Passord is Incorrect")
	}
}

function m4e3(){
	var a = prompt("Enter a string")
	var b = "";

	for (var i = 1; i <= a.length; i+=2) {
	
	b += a[i-1].toUpperCase();
	b += a[i-1].toLowerCase();

	}
	alert (b)
}

function pl(){
  var string = prompt("enter")
  var a = string.toLowerCase()
  var b = a[0];
  var c = a.substring(1)+b
    if (/[0-9]/.test(a)){
      alert ("null")
    }else if (b === "a"||b === "e"||b === "i"||b === "o"||b === "u") {
      alert (a +"way")
    }else{ 
      alert (c+"ay")
    }
  }

function CC(){
  var a = prompt("Enter the keyword")
  var b = ("abcdefghijklmnopqrstuv")
  var c = (b.split(""))
  var d = (c.substring(3) + c.substring(0,2))
  var e = a.toLowerCase()
  var f = e.replace("a", "d").replace("a", "d").replace("a", "d").replace("a", "d").replace("a", "d").replace("a", "d").replace("a", "d").replace("a", "d").replace("a", "d").replace("a", "d").replace("a", "d").replace("a", "d").replace("a", "d").replace("a", "d").replace("a", "d").replace("a", "d").replace("a", "d").replace("a", "d").replace("a", "d").replace("a", "d").replace("a", "d").replace("a", "d").replace("a", "d").replace("a", "d").replace("a", "d").replace("a", "d")
   if (/[0-9]/.test(a)){
      alert("null")
    }else{
      alert(f)
    }
}

function encrypt(){
  var a = prompt("Enter the keyword")
  const b = a.toLowerCase()
  var c = b.replace(/a/g, "!").replace(/b/g, "@").replace(/c/g, "#").replace(/d/g, "1").replace(/e/g, "%").replace(/f/g, "2").replace(/g/g, "&").replace(/h/g, ";").replace(/i/g, "4").replace(/j/g, "'").replace(/k/g, "5").replace(/l/g, "-").replace(/m/g, "6").replace(/n/g, "3").replace(/o/g, ":").replace(/p/g, "<").replace(/q/g, ">").replace(/r/g, ",").replace(/s/g, "0").replace(/t/g, "9").replace(/u/g, "`").replace(/v/g, "8").replace(/w/g, "=").replace(/x/g, "7").replace(/y/g, "_").replace(/z/g, "~")
   if (/[0-9]/.test(a)){
      alert("null")
    }else{
      alert(c)
    }
}

function decrypt(){
  var a = prompt("Enter the keyword")
  const b = a.toLowerCase()
  var c = b.replace(/!/g, "a").replace(/@/g, "b").replace(/#/g, "c").replace(/1/g, "d").replace(/%/g, "e").replace(/2/g, "f").replace(/&/g, "g").replace(/;/g, "h").replace(/4/g, "i").replace(/'/g, "j").replace(/5/g, "k").replace(/-/g, "l").replace(/6/g, "m").replace(/3/g, "n").replace(/:/g, "o").replace(/</g, "p").replace(/>/g, "q").replace(/,/g, "r").replace(/0/g, "s").replace(/9/g, "t").replace(/`/g, "u").replace(/8/g, "v").replace(/=/g, "w").replace(/7/g, "x").replace(/_/g, "y").replace(/~/g, "z")
  
      alert(c)
    
}

