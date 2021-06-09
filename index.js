import fs from "fs";
import Automato from "./src/Automato.mjs";

// Recebe o arquivo
const file = fs.readFileSync(process.argv.slice(2).toString(), "utf-8");

// Armazena o conteúdo de cada linha do arquivo em um array
let linhas = file.split("\n");

// Transfere a primeira linha do arquivo para a variável primeira_linha
let primeira_linha = linhas.shift();

// Substitui parenteses e chaves por colchetes
primeira_linha = primeira_linha.replaceAll(/\(|\{/g, "[");
primeira_linha = primeira_linha.replaceAll(/\)|\}/g, "]");

// Adiciona aspas duplas, aos elementos
primeira_linha = primeira_linha.replace(/(\w\d|\w{2}|\w)/g, '"$1"');

// Avalia a String string, para transforma-lá em um array
let componentes_automato = eval(primeira_linha);

// Transforma as linhas seguintes, das regras de transição, cada uma em um array
let regras_transicao = linhas;
for (let i in linhas){
  regras_transicao[i] = linhas[i].split(", ");
}

// Instância um objeto Automato, a apartir das informações extraídas do arquivo
let automato = new Automato({
  alfabeto: componentes_automato[0],
  estados: componentes_automato[1],
  funcao_transicao: componentes_automato[2],
  estado_inicial: componentes_automato[3],
  estados_finais: componentes_automato[4],
  pilha: componentes_automato[5],
});

console.log("🤖", automato);
console.log("📏 Regras de Transição: ", regras_transicao);
