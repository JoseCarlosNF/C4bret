export default class Automato {
  constructor({
    alfabeto,
    estados,
    funcao_transicao,
    estado_inicial,
    estados_finais,
    alfabeto_pilha,
  }) {
    this.alfabeto = alfabeto;
    this.estados = estados;
    this.funcao_transicao = funcao_transicao;
    this.estado_inicial = estado_inicial;
    this.estados_finais = estados_finais;
    this.alfabeto_pilha = alfabeto_pilha;
    this.pilha = [];
  }

  processaPalavra(regras_transicao, palavra) {
    let aceita = false;
    palavra += " ";
    let estado_atual = this.estado_inicial;

    for (const simbolo_atual of palavra) {
      for (const regra of regras_transicao) {
        if ((estado_atual == regra.estado_origem) && (simbolo_atual == regra.simbolo_lido_palavra || regra.simbolo_lido_palavra == "?" || regra.simbolo_lido_palavra == "-")) {
          if (this.#testePilhaVazia(regra.simbolo_lido_pilha, simbolo_atual)){
            aceita = true;
          }
          else if ((this.pilha.length > 0) && (regra.simbolo_lido_pilha == this.pilha[this.pilha.length - 1])){
            this.pilha.pop();
          }
          else if (regra.simbolo_escrito_pilha != "-")
            this.pilha.push(regra.simbolo_escrito_pilha);
          this.#imprimirProcessamento(regra);
          estado_atual = regra.estado_destino;
          break;
        }
      }
    }
    return aceita;
  }

  #imprimirProcessamento(regra) {
    console.log(
      `(${regra.estado_origem}, ${regra.simbolo_lido_palavra}, ${regra.simbolo_lido_pilha}) = {(${regra.estado_destino}, ${regra.simbolo_escrito_pilha}}) - Pilha: ${this.pilha}`
    );
  }

  #testePilhaVazia(simbolo_lido_pilha, simbolo_atual) {
    if ( this.pilha.length == 0 && simbolo_lido_pilha == "?" && simbolo_atual == " ")
      return true;
    return false;
  }
}
