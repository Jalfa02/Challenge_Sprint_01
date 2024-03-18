const keys = {
	a: "ai",
	e: "enter",
	i: "imes",
	o: "ober",
	u: "ufat",
};

function botonEnc() {
	const input = document.getElementById("texto").value;
	const output = encrypt(input);

	if (input) {
		document.getElementById("imagen").style.display = "none";
		document.getElementById("resultado").style.display = "block";
		document.getElementById("copiar").style.display = "inline-block";
	} else {
		document.getElementById("imagen").style.display = "block";
		document.getElementById("resultado").style.display = "none";
		document.getElementById("copiar").style.display = "none";
	}
	document.getElementById("resultado").value = output;
}

function botonDes() {
	const input = document.getElementById("texto").value;
	const output = decrypt(input);
	if (input) {
		document.getElementById("imagen").style.display = "none";
		document.getElementById("resultado").style.display = "block";
		document.getElementById("copiar").style.display = "block";
	} else {
		document.getElementById("imagen").style.display = "block";
		document.getElementById("resultado").style.display = "none";
		document.getElementById("copiar").style.display = "none";
	}
	document.getElementById("resultado").value = output;
}

function encrypt(text) {
	let result = "";

	for (let i = 0; i < text.length; i++) {
		const char = text.charAt(i);

		if (keys[char]) {
			result += keys[char];
		} else {
			result += char;
		}
	}

	return result;
}

function decrypt(text) {
	const keysArray = Object.entries(keys);
	let result = text;
	keysArray.forEach(([key, value]) => {
		const regex = new RegExp(value, "g");
		result = result.replace(regex, key);
	});
	return result;
}

function botonCopiar() {
	const output = document.getElementById("resultado");

	output.select();
	output.setSelectionRange(0, 99999);

	document.execCommand("botonCopiar");
}