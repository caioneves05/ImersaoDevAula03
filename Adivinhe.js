var numeroSecreto = parseInt(Math.random()*10)
var tentativasDoUsuario = 3
while(tentativasDoUsuario > 0) {

  var chute = parseInt(prompt('Digite um número entre 0 e 10'))

  if (numeroSecreto == chute){
      alert('Parabéns!!! Você acertou.')
    break
  }else if (chute > numeroSecreto) {
      alert('DICA:  número escolhido foi MAIOR que o número secreto. ')
    tentativasDoUsuario = tentativasDoUsuario - 1
  }else if (chute < numeroSecreto) {
      alert('DICA: número escholido foi MENOR que o número secreto. ')
    tentativasDoUsuario = tentativasDoUsuario - 1
  }
}
if (chute != numeroSecreto){
  alert('Suas tentativas acabarm,o número secreto era ' + numeroSecreto)
}

//Math.random = escolhe um número aleatório entre 1 e 0,por isso precisa multiplicar por 10 para sortear um número que não seja somente negativo.
//while = estrutura de repetição.
//console.log = teste de uma parte do código no console.
