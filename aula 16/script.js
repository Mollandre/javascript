var num = document.getElementById('txtn')
var lista = document.getElementById('tab')
var res = document.getElementById('res')
var valores = []
function isNumero(n){
    if (num.value  >= 1 && num.value <= 100){
        return true
    }
    else {
        return false
    }
    
    }
    function inLista(n1, n2){
    if (n2.indexOf(Number(n1)) != -1){
        return true
    }
    else{
        return false
    }
    }
    

function adicionar(){
    if (isNumero (num.value) && !inLista(num.value, valores)){
    valores.push(Number(num.value))
    var item = document.createElement('option')
    
    item.text = `adicionado ${num.value}`
    lista.appendChild(item)
    res.innerHTML = ''
}

    else {
        alert ('Valor invalido ou ja encontrado na lista!')
    }
    num.value =''
    num.focus()
}
function verificar(){
    if (valores.length == 0){
        alert ('Adicione um valor')
    }
    else{
    var tot = valores.length
    var maior = valores[0]
    var menor = valores[0]
    var soma = 0
    var media = 0
for (var pos in valores){
    soma += valores[pos]
    if(valores[pos] > maior)
    maior = valores[pos]
    if (valores[pos] < menor)
    menor = valores[pos]
}
media = soma / tot
res.innerHTML = ''
res.innerHTML += `<p> Ao todo temos ${tot} numeros cadastrado </p>`
res.innerHTML += `<p> O maior valor informado ${maior}</p>`
res.innerHTML += `<p> O menor valor informado ${menor}</p>`
res.innerHTML += `<p> A soma dos valores ${soma} <p/>.`
res.innerHTML += `<p> A media dos numeros ${media} </p>`

}
}

