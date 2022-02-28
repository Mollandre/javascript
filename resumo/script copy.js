function verificar(){
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var data = new Date()
    var ano = data.getFullYear()

    if (fano.value.length == 0 || fano.value > ano){
        alert ('[ERRO] verifique os dados e tente novamente!')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - (fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute ('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade <= 10 ){
                img.setAttribute
            }
            else if (idade < 21){
                img.setAttribute
            }
            else if (idade < 50){
img.setAttribute
            }
            else {
img.setAttribute
            }
        }
        else if(fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10 ){
                img.setAttribute
            }
            else if (idade < 21){
                img.setAttribute
            }
            else if (idade < 50){
img.setAttribute
            }
            else {
img.setAttribute
            }
        }
    }
}