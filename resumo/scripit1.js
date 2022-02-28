var num = document.getElementById('fnum')
var lista = document.getElementById('tab')
var res = document.getElementById('res')
var valores = []

function isNumero(n){
    if (num.value >= 1 && num.value <= 100 ){
        return true
    }
    else {
        return false
    }
}
function inLista (n1, n2){
    if (n2.indexOf(Number(n1)) != -1){
        return true
    }
    else {
        return false
    }
}



function add(){
    if (isNumero(num.value) && !inLista (num.value, valores)){
valores.push(Number(num.value))
var item = document.createElement('option')
item.text = `adicionado ${num.value}`
lista.appendChild(item)
res.innerHTML = ''
    }
    else {
        alert ('erro')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        alert ('adicione um numero!')
    }
    else{
        var tot = valores.length
var maior = valores[0]
var menor = valores[0]
var soma = 0
var media = 0

for (var pos in valores){
    soma += valores[pos]
    if (valores [pos] > maior)
maior = valores[pos]
 if (valores[pos] < menor)
menor = valores[pos]

}
media = soma / tot


        res.innerHTML = `<p>Tem ${tot} numeros</p>`
        res.innerHTML += `<p>o maior valor e ${maior}</p>`
        res.innerHTML += `<p>o menor valor e ${menor}</p>`
        res.innerHTML += `<p>a soma dos valores e ${soma}</p>`
        res.innerHTML += `<p>a media  e ${media}</p>`

    }
}