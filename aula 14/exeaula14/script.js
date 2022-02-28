function contar(){
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if(ini.value == 0 || fim.value == 0 || passo.value == 0){
        alert ('erro dados invalidos tente novamente')
    }
    else{
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        res.innerHTML = 'Contando:'
        for (var c = i; c <= f; c += p ){
            res.innerHTML += `${c} \u{1F449}`
        }
        for (var c = i; c >= f; c -= p ){
            res.innerHTML += `${c} \u{1F449}`
        }
    } res.innerHTML += '\u{1f3c1}'
}