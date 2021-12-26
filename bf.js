// variables used for code golf thingy
const args=process.argv.splice(2);printf=e=>{process.stdout.write(e?`${e}`:"");};const fs=require("fs");

// golfed version
for(j=0;j<args.length;++j){a=Array(5e3).fill(0);z=[];y=i=0;p=Math.floor(a.length/2);for(c=args[j];i<c.length;++i){if(c[i]=="]"){if(y>0)--y;else if(z.length){if(a[p])i=z[z.length-1];else z.pop();}}if(c[i]=="[")if(a[p]&&y<1)z.push(i+1);else ++y;if(y)continue;if(c[i]==">")++p;if(c[i]=="<")--p;if(c[i]=="+")++a[p];if(c[i]=="-")--a[p];if(c[i]==".")printf(String.fromCharCode(a[p]));if(c[i]==","){b=Buffer.alloc(1);fs.readSync(0,b,0,1);a[p]=b[0];}}printf("\n");}

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

