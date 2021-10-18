// variables used for code golf thingy
const A=process.argv.splice(2);printf=e=>{process.stdout.write(e?`${e}`:"");};

// golfed version
for(j=0;j<A.length;++j){a=Array(5e3).fill(0);z=[];y=i=0;p=0;for(c=A[j];i<c.length;++i){if(c[i]=="]"){if(y>0)--y;else if(z.length){if(a[p])i=z[z.length-1];else z.pop();}}if(c[i]=="[")if(a[p]&&y<1)z.push(i+1);else ++y;if(y)continue;if(c[i]==">")++p;if(c[i]=="<")--p;if(c[i]=="+")++a[p];if(c[i]=="-")--a[p];if(c[i]==".")printf(String.fromCharCode(a[p]));}}printf("\n");

// beautified
for (programsIndex = 0; programsIndex < A.length; ++programsIndex) {
	a = Array(5e3).fill(0);
	z = [];
	falsedLoops = i = 0;
	pointer = 0;
	for (c = A[programsIndex]; i < c.length; ++i) {
		if (c[i] == "]") {
			if (falsedLoops > 0) {
				--falsedLoops;
			} else if (z.length) {
				if (a[pointer]) {
					i = z[z.length - 1];
				} else {
					z.pop();
				}
			}
		}
		if (c[i] == "[") {
			if (a[pointer] && falsedLoops < 1) {
				z.push(i + 1);
			} else {
				++falsedLoops;
			}
		}
		if (falsedLoops) {
			continue;
		}
		if (c[i] == ">") ++pointer;
		if (c[i] == "<") --pointer;
		if (c[i] == "+") ++a[pointer];
		if (c[i] == "-") --a[pointer];
		if (c[i] == ".") printf(String.fromCharCode(a[pointer]));
	}
}
printf("\n");