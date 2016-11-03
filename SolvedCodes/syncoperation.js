var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var string = buf.toString();
var qtdLinhas = string.split('\n').length-1;

console.log(qtdLinhas);
