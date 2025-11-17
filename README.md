Firstly, I got to understand that a WC tool is a word count tool. A tool that reads a file or input and execute commands I type in the terminal

I imported the fs module so i can read and write the file.
 
process.argv is an array that contains everything typed in the terminal.
Lets my script know what operation to do (-c, -l, -w, -m) and which file to work on

if (!fileName) {
  let input = "";  This line checks if I’m not providing a file name. That’s why there is if (!fileName). The next line sets input to an empty string so it can accept whatever command or text I type in the terminal

  process.stdin.on("data", chunk => {
    input += chunk.toString();
  });
process.stdin is for reading input typed into the terminal. The 'data' event is triggered automatically whenever Node receives input. Since Node receives input in chunks, the chunk variable represents each piece, and we convert it to a string as it comes in

The line process.stdin.on('end', …) runs after all input has been received. This ensures the program only starts processing once the user has finished typing in the terminal or all piped input from another command or file has been fully sent.

Inside this block, the program checks which flag was provided and performs the corresponding count:

-c → counts bytes

-m → counts characters

-l → counts lines

-w → counts words
