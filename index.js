import fs from "fs";

// Recebe o arquivo
const file = fs.readFileSync(process.argv.slice(2).toString(), "utf-8");

// Armazena o conteúdo de cada linha do arquivo em um array
let linhas = file.split("\n");

// Transfere a primeira linha do arquivo para a variável primeira_linha
let primeira_linha = linhas.shift();

// Transforma as linhas seguintes, das regras de transição, cada uma em um array
let regras_transicao = linhas;
for (let i = 0; i < linhas.length; i++) {
  regras_transicao[i] = linhas[i].split(", ");
}

let with_bracktes = lines[0].match(/{.*?}/gs);

console.log(with_bracktes);
