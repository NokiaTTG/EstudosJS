# Escopo

Dentro de todo o código JS temos seus escopos, espaços delimitados por chaves"{}"

Perceba que no exemplo acima, existem duas constantes chamadas 'a', mas elas não estão tendo conflito de redeclaração de variavel justamente por estarem e contextos diferentes.

Escopos "filho" podem acessar tudo o que estiver em Escopos "pai", mas o contrário é impossível de ocorrer.

Neste exemplo o 'console.log(c)' irá exibir como resultado o número 12, não pelo fato da constante ter sido redeclarada (para falar a verdade, nem ouve redeclaração), isto ocorre por que o escopo filho sempre que precisar buscar alguma referência dentro do código ele irá atrás do referente mais proxímo (neste caso a 'const c = 12')

escopos podem ser representados em qualquer função que utilize chaves "{}"