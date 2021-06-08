import fs from 'fs';
import Estado from './Estado.mjs';
import Transicao from "./RegraTransicao.mjs";

class Automato {
  constructor(
    alfabeto,
    estados,
    transicoes,
    estado_inicial,
    estados_finais,
    pilha
  ) {
    this.alfabeto = alfabeto;
    this.estados = estados;
    this.transicoes = transicoes;
    this.estado_inicial = estado_inicial;
    this.estados_finais = estados_finais;
    this.pilha = pilha;
  }
}
let file = fs.readFileSync("automato.txt", "utf-8");
let lines = file.split("\n");

for( let i = 1; i < lines.length; i++){
  lines[i] = lines[i].split(', ');
}

let with_bracktes = lines[0].match(/{.*?}/gs)

console.log(with_bracktes);
