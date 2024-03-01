/*window.alert("Aviso")
window.confirm("salve")
window.prompt("Qual é o seu nome? ")*/

var nome = window.prompt("Qual o seu nome ? ")
window.alert("É um prazer conhece-lo, " + nome +"!")

var nota1 = Number.parseInt(window.prompt("Qual a nota ciclo 1 ? "))
var nota2 = Number.parseInt(window.prompt("Qual a nota ciclo 2 ? "))
var nota3 = Number.parseInt(window.prompt("Qual a nota ciclo 3 ? "))

var media = Number.parseInt(nota1 + nota2 + nota3 ) /3

window.alert("Sua média é,  " + media)
if(media>= 70){
   window.alert("Parabens " + nome + " você está aprovado(a)")

}
else{
    window.alert("Lamento " + nome + " você está reprovado")
}