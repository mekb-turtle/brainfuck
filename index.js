// variables used for code golf thingy
const args=process.argv.splice(2);printf=e=>{process.stdout.write(e?`${e}`:"");};const fs=require("fs");

// golfed version
for(j=0;j<args.length;++j){a=Array(5e3).fill(0);z=[];y=i=0;p=Math.floor(a.length/2);for(c=args[j];i<c.length;++i){if(c[i]=="]"){if(y>0)--y;else if(z.length){if(a[p])i=z[z.length-1];else z.pop();}}if(c[i]=="[")if(a[p]&&y<1)z.push(i+1);else ++y;if(y)continue;if(c[i]==">")++p;if(c[i]=="<")--p;if(c[i]=="+")++a[p];if(c[i]=="-")--a[p];if(c[i]==".")printf(String.fromCharCode(a[p]));if(c[i]==","){b=Buffer.alloc(1);fs.readSync(0,b,0,1);a[p]=b[0];}}printf("\n");}
