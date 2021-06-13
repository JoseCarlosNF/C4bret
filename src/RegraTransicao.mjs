export default class RegraTransicao {
  constructor([
    estado_origem,
    simbolo_lido_palavra,
    simbolo_consumido_pilha,
    estado_destino,
    simbolo_inserido_pilha
  ]) {
    this.estado_origem = estado_origem;
    this.simbolo_lido_palavra = simbolo_lido_palavra;
    this.simbolo_consumido_pilha = simbolo_consumido_pilha;
    this.estado_destino = estado_destino;
    this.simbolo_inserido_pilha = simbolo_inserido_pilha;
  }
}
