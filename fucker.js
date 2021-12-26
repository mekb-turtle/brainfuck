// variables used for code golf thingy
const args=process.argv.splice(2);printf=e=>{process.stdout.write(e?`${e}`:"");};const fs=require("fs");

// beautified
for (programsIndex = 0; programsIndex < args.length; ++programsIndex) {
	array = Array(5e3).fill(0);
	loops = [];
	falsedLoops = index = 0;
	pointer = Math.floor(array.length/2);
	for (program = args[programsIndex]; index < program.length; ++index) {
		if (program[index] == "]") {
			if (falsedLoops > 0) {
				--falsedLoops;
			} else if (loops.length) {
				if (array[pointer]) {
					index = loops[loops.length - 1];
				} else {
					loops.pop();
				}
			}
		}
		if (program[index] == "[") {
			if (array[pointer] && falsedLoops < 1) {
				loops.push(index + 1);
			} else {
				++falsedLoops;
			}
		}
		if (falsedLoops) {
			continue;
		}
		if (program[index] == ">") ++pointer;
		if (program[index] == "<") --pointer;
		if (program[index] == "+") ++array[pointer];
		if (program[index] == "-") --array[pointer];
		if (program[index] == ".") printf(String.fromCharCode(array[pointer]));
		if (program[index] == ",") {
			buffer = Buffer.alloc(1);
			fs.readSync(0, buffer, 0, 1);
			array[pointer] = buffer[0];
		}
	}
	printf("\n");
}
