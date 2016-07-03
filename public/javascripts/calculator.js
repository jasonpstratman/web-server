// Give every active element a variable
var number = document.getElementById("number");
var overview = document.getElementById("overview");
var clearEverything = document.getElementById("cleareverything");
var clear = document.getElementById("clear");
var backspace = document.getElementById("backspace");
var divide = document.getElementById("divide");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var multiply = document.getElementById("multiply");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var minus = document.getElementById("minus");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var plus = document.getElementById("plus");
var sign = document.getElementById("sign");
var zero = document.getElementById("zero");
var decimal = document.getElementById("decimal");
var equals = document.getElementById("equals");

// Special buttons click events
clearEverything.addEventListener("click", clearEverythingFunction);
clear.addEventListener("click", clearFunction);
backspace.addEventListener("click", backspaceFunction);
plus.addEventListener("click", function() {operationClicked(1)});
minus.addEventListener("click", function() {operationClicked(2)});
multiply.addEventListener("click", function() {operationClicked(3)});
divide.addEventListener("click", function() {operationClicked(4)});
equals.addEventListener("click", equalsFunction);

// Number buttons
one.addEventListener("click", function() {numberClicked(1)});
two.addEventListener("click", function() {numberClicked(2)});
three.addEventListener("click", function() {numberClicked(3)});
four.addEventListener("click", function() {numberClicked(4)});
five.addEventListener("click", function() {numberClicked(5)});
six.addEventListener("click", function() {numberClicked(6)});
seven.addEventListener("click", function() {numberClicked(7)});
eight.addEventListener("click", function() {numberClicked(8)});
nine.addEventListener("click", function() {numberClicked(9)});
zero.addEventListener("click", function() {numberClicked(0)});
decimal.addEventListener("click", decimalFunction);
sign.addEventListener("click", signFunction);

var operation = 0; // add:1, subtract:2, multiply:3, divide:4
var topnum = 0;
var bottomnum = 0;
var fresh = 0;

// Make sure that no non-numerical input is entered.
function isNumberKey(evt)
       {
          var charCode = (evt.which) ? evt.which : evt.keyCode;
          if (charCode != 46 && charCode > 31 
            && (charCode < 48 || charCode > 57))
             return false;

          return true;
       }

// Special Buttons
function clearEverythingFunction(){
	console.log("Function clearEverythingFunction activated.");
	operation = 0;
	topnum = 0;
	bottomnum = 0;
	fresh = 0;
	document.getElementById("overview").innerHTML = "";
	document.getElementById("number").value = "";
}

function clearFunction(){
	console.log("Function clearFunction activated.");
	document.getElementById("number").value = "";
	fresh = 0;
}

function backspaceFunction(){
	console.log("Function backspaceFunction activated.");
	fresh = 1;
	$(number).val(
	    function(index, value){
	        return value.substr(0, value.length - 1);
	})
}

function operationClicked(operationSelected){
	console.log("Function operationClicked called with argument" + operationSelected);
	topnum = parseFloat(document.getElementById("number").value);
	switch(operationSelected){
		case 1: 
			operation = 1;
			document.getElementById("overview").innerHTML = topnum + " +";
			break;
		case 2:
			operation = 2;
			document.getElementById("overview").innerHTML = topnum + " -";
			break;
		case 3:
			operation = 3;
			document.getElementById("overview").innerHTML = topnum + " X";
			break;
		case 4:
			operation = 4;
			document.getElementById("overview").innerHTML = topnum + " /";
			break;
	}
	fresh = 0;
}

function equalsFunction(){
	console.log("Function equalsFunction called.");
	bottomnum = parseFloat(document.getElementById("number").value);
	if (bottomnum == ""){
		bottomnum = topnum;
	}
	switch(operation){
		case 1: 
			bottomnum = topnum + bottomnum;
			break;
		case 2:
			bottomnum = topnum - bottomnum;
			break;
		case 3:
			bottomnum = topnum * bottomnum;
			break;
		case 4:
			bottomnum = topnum / bottomnum;
			break;
	}
	document.getElementById("number").value = bottomnum;
	document.getElementById("overview").innerHTML = "";
	fresh = 0;
}

// Number Buttons
function numberClicked(num){
	if (!fresh){
		switch(num){
			case 1:
				$('#number').val('1');
				break;
			case 2:
				$('#number').val('2');
				break;
			case 3:
				$('#number').val('3');
				break;
			case 4:
				$('#number').val('4');
				break;
			case 5:
				$('#number').val('5');
				break;
			case 6:
				$('#number').val('6');
				break;
			case 7:
				$('#number').val('7');
				break;
			case 8:
				$('#number').val('8');
				break;
			case 9:
				$('#number').val('9');
				break;
			case 0:
				$('#number').val('0');
				break;
		}
	}
	else {
		switch(num){
			case 1:
				$('#number').val($('#number').val() + '1');
				break;
			case 2:
				$('#number').val($('#number').val() + '2');
				break;
			case 3:
				$('#number').val($('#number').val() + '3');
				break;
			case 4:
				$('#number').val($('#number').val() + '4');
				break;
			case 5:
				$('#number').val($('#number').val() + '5');
				break;
			case 6:
				$('#number').val($('#number').val() + '6');
				break;
			case 7:
				$('#number').val($('#number').val() + '7');
				break;
			case 8:
				$('#number').val($('#number').val() + '8');
				break;
			case 9:
				$('#number').val($('#number').val() + '9');
				break;
			case 0:
				$('#number').val($('#number').val() + '0');
				break;
		}
	}
	fresh = 1;
}

function decimalFunction(){
	if (fresh){
		console.log("Number.value is : " + number.value);
		//Check to see if there is already a decimal
		if((number.value).indexOf('.') > -1)
		{
			//Do nothing
			console.log("Decimal detected already.");
		}
		else{
			$('#number').val($('#number').val() + '.');
		}
	}
	else{
		$('#number').val('0.');
	}
	fresh = 1;
}
function signFunction(){
	$('#number').val($('#number').val() * -1);
	fresh = 1;
}