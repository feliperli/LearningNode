var entrada = process.argv;
var soma = 0;
for (i = 2; i < entrada.length; i++) {
  soma += Number(entrada[i]);
}
console.log(soma);
