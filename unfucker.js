// variables used for code golf thingy
const args=process.argv.splice(2);

for (textsIndex = 0; textsIndex < args.length; ++textsIndex) {
	function dist(a, b) { return Math.abs(a - b); };
	array = Array(5e3).fill(0);
	pointer = Math.floor(array.length/2);
	code = "";
	for (index = 0; index < args[textsIndex].length; ++index) {
		charCode = args[textsIndex][index].charCodeAt(0);
		max = 0;
		while (dist(array[pointer+1], charCode) < dist(array[pointer], charCode)) {
			code += ">";
			++pointer;
			if (++max > 8) break;
		}
		if (!max) {
			max = 0;
			while (dist(array[pointer-1], charCode) < dist(array[pointer], charCode)) {
				code += "<";
				--pointer;
				if (++max > 8) break;
			}
		}
		max = 0;
		while (array[pointer] < charCode) {
			code += "+";
			++array[pointer];
			max = 1;
		}
		if (!max) {
			max = 0;
			while (array[pointer] > charCode ) {
				code += "-";
				--array[pointer];
				max = 1;
			}
		}
		code += ".";
	}
	console.log(code);
}
