const fs = require('fs')

// Get arguments from terminal
const flag = process.argv[2]; 
const fileName = process.argv[3]; 

if (!fileName) {
  let input = "";

  process.stdin.on("data", chunk => {
    input += chunk.toString();
  });

  process.stdin.on("end", () => {

    if (flag === '-c'){
        const character = input.length;
        console.log(` ${character} `);
    } 
    else if (flag === '-l'){
        const lines = input.split('\n').length - 1;
        console.log(`${lines}`);
    } else if (flag ==='-w') {
        const words = input.trim().split(/\s+/).length;
        console.log(` ${words}`);
    } else if (flag === '-m') {
        const character = input.length;
        console.log(` ${character}`);
    }else if  (!flag){
        const lines = input.split('\n').length - 1;
        const words = input.trim().split(/\s+/).length;
        const bytes = input.length;

        console.log(` ${lines}  ${words} ${bytes} `);
    }
    else {
        console.error('Unsupported flag:', flag);
    }
});
return;
}

fs.readFile(fileName, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err.message);
    process.exit(1);
  }
  
  if (flag === "-c") {
    console.log(`  ${data.length} ${fileName}`);
  }
  else if (flag === "-l") {
    const lines = data.split("\n").length - 1;
    console.log(`  ${lines} ${fileName}`);
  }
  else if (flag === "-w") {
    const words = data.trim().split(/\s+/).length;
    console.log(`  ${words} ${fileName}`);
  }
  else if (flag === "-m") {
    console.log(`  ${data.length} ${fileName}`);
  }
  else if (!flag) {
    const lines = data.split("\n").length - 1;
    const words = data.trim().split(/\s+/).length;
    const bytes = data.length;
    console.log(`  ${lines}   ${words}  ${bytes} ${fileName}`);
  }
  else {
    console.error("Unsupported flag:", flag);
  }
});
