function count(error, content){
  var cont = content.split('\n');
  console.log(cont.length-1);
}
var fs = require('fs');
fs.readFile(process.argv[2],'utf-8',count);
