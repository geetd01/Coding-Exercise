var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

  let str = '', filename = '', ext = '';
  let count = 0, num = 0, newline = 0;
  console.log("Enter the number of files");
  rl.on('line', function (line) {
    if(isNaN(parseInt(line)) && count == 0){
    	console.log("Enter the number of files");
    } else {
    	if(count == 0){
    		num = parseInt(line);
        count++;
    	} else {   
          if(line == ''){
            newline++;
          } else if(line.includes('.')){
            let temp = [];
            temp = line.split('.');
            if (filename == '') {
              filename = filename + temp[0];
              ext = temp[1];
            } else {
              if(ext == temp[1]){
                filename = filename + temp[0].toUpperCase();
              } else {
                console.log("File extention should be the same.Please re-enter file name with ." + ext + " extention");
              }
            }
          } else {
            str = str + line.replace(/\$/g, '') + '+';
            newline = 0;
          }
          if(newline == 2){
            count++;
            newline = 0;
          }
      }
    	if(count == num+1){
        	var lines = [];
        	str = str.trim();
        	lines = str.split("+");
          console.log(filename+'.'+ext);
    		  for (var l in lines) {
    			 console.log(lines[l]);
    		  }
    		  rl.close();
    	}
    }
  });


