function convert() {
	var temperature = parseFloat(document.getElementById("temperature").value);
	var unit = document.getElementById("unit").value;
	var result;

	if (unit === "fahrenheit") {
		result = (temperature - 32) * 5 / 9;
		result = result.toFixed(2) + " degrees Celsius";
	} else {
		result = temperature * 9 / 5 + 32;
		result = result.toFixed(2) + " degrees Fahrenheit";
	}

	document.getElementById("result").innerHTML = result;
}
