const filePath = './texto.txt';

let file = Deno.open(filePath);

console.log(file);