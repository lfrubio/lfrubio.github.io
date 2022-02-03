function evalNumber(){
  var inputValue = (prompt("Enter any five digit number without commas"))
  if (isNaN(inputValue)) {
    alert ("'" + inputValue + "'" + " is not a number.")
  } else if (inputValue % 2 == 0) {
    alert (inputValue + " is an even number.")
  } else {
    alert (inputValue + " is an odd number.")
  }
}  

function getMinute(){
	let selElement = document.getElementById("getMinute");
	var today = new Date();
	var currentMinute = today.getMinutes();
	if (currentMinute == 1){
		selElement.innerText = "It is " + currentMinute + " minute past the hour."
	} else {
		selElement.innerText = "It is " + currentMinute + " minutes past the hour."
	}
}

function alakazam(){
	let selElement = document.getElementById("alakazam");
	selElement.style.display = "none"
}