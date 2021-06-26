function botao() {
    document.getElementById('clicou').innerHTML = 'Valeu!'
    open('https://github.com/Thico10/Aula-JavaScript') // abre outra janela
    window.location.href = 'https://www.facebook.com/thiago.silvadossantos.509/' // abre na mesma pagina
}

function mouse() {
    document.getElementById('mouse')
    .innerHTML='Ai que delicia'
}

function fora() {
    document.getElementById('mouse')
    .innerHTML= 'Passe o mouse aqui'
}

function load() {
    alert('pagina carregada')
}

function funcaoChange(elemento) {
    alert(elemento.value)
}
/*function validaIdade(idade) {
       var validar
       if (idade <= 18) {
           validar = true
       } else {
           validar = false
       }
       return validar
}
 var idade = prompt('Qual é a sua idade ?')
*/

/*var d = new Date()
alert(d.getDate())*/
/*var count
for (count = 0; count <= 5; count++){
    alert(count)
}*/

/*var count = 0
while (count <= 5){
    console.log(count)
    alert(count)
    count++ 
}*/

/*var idade = prompt('Qual é a sua idade?')
if (idade >= 18) {
    alert('Maior de idade')
} else {
    alert('menor de idade')
}*/