function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById ('txtano')
    var res = document.getElementById ('res')
    
    
    
    if (fano.value == 0 || fano.value > ano){
        alert ('[Erro] dados invalidos tente novamente!')
    }
    else {
        var fsex = document.getElementsByName ('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade <= 10){
                res.innerHTML = `Sua idade é ${idade} anos e voce é ${genero}`
            }
        }
    }
}