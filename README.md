<p align="center">
<img src="https://ascom.ufpa.br/images/Brasao/UFPA.png" height="150px">
</p>
<p align="center">UNIVERSIDADE FEDERAL DO PARÁ</p>
<p align="center">INSTITUTO DE CIÊNCIAS EXATAS E NATURAIS</p>
<p align="center">FACULDADE DE COMPUTAÇÃO</p>
<p align="center">2021.1</p>

<h1 align="center">C4bret</h1>

# Descrição

🇧🇷 pt-br

```
Trabalho final da disciplina de Linguagens Formais e Autômatos.
Implementação de um Automâto com Pilha.
```

🇬🇧 en

```
Final work of the discipline of Formal Languages and Automata.
Implementation of a Pushdown Automaton.
```

# Execução

Exemplo de execução com os aquivos do próprio repositório.

```
node index.js test/auto-slide-1.txt ab
```

### ⚠ Compativel apenas com Node.js >= 15.0.0

O arquivo do parâmetro deve obdecer a formatação descrita no [tópico sobre o arquivo](#arquivo-de-entrada)

## Arquivo de entrada

O caminho do arquivo deve ser utilizado como parâmetro no comando de execução. O arquivo deve ter a seguinte formatação:

```
({a, b}, {q0, q1, qf}, D, q0, {qf}, {B})
q0, a, -, q0, B
q0, b, B, q1, -
q0, ?, ?, qf, -
q1, b, B, q1, -
q1, ?, ?, qf, -
```

### Composição do arquivo

A **primeira linha** do arquivo é uma 6-tupla ordenada da seguinte maneira:

```
({alfabeto}, {estados_possiveis}, funcao_de_transicao, estado_inicial, {estados_finais}, {alfabeto_pilha})
```

As **linhas seguites** são suas regras de transisção, representadas da seguinte maneira:

```
estado_origem, simbolo_lido_palavra, simbolo_lido_pilha, estado_destino, simbolo_escrito_pilha
```
