// import Estado from './Estado.js';
// import Transicao from "./RegraTransicao.js";

export default class Automato {
  constructor({
    alfabeto,
    estados,
    funcao_transicao,
    estado_inicial,
    estados_finais,
    pilha,
  }) {
    this.alfabeto = alfabeto;
    this.estados = estados;
    this.funcao_transicao = funcao_transicao;
    this.estado_inicial = estado_inicial;
    this.estados_finais = estados_finais;
    this.pilha = pilha;
  }
}
