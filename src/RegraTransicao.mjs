export default class RegraTransicao {
  constructor([
    estado_origem,
    simbolo_lido_palavra,
    simbolo_lido_pilha,
    estado_destino,
    simbolo_escrito_pilha
  ]) {
    this.estado_origem = estado_origem;
    this.simbolo_lido_palavra = simbolo_lido_palavra;
    this.simbolo_lido_pilha = simbolo_lido_pilha;
    this.estado_destino = estado_destino;
    this.simbolo_escrito_pilha = simbolo_escrito_pilha;
  }
}
