function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById ('res')
    
    if (fano.value.length == 0 || fano.value > ano){
        alert ('[ERRO] Dados invalidos tente novamente!')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - (fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute ('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute ('src', 'hmenino.png')
            }
            else if (idade < 21){
                img.setAttribute ('src', 'hjovem.png')
            }
            else if (idade < 50){
                img.setAttribute ('src', 'hadulto.png')
            }
            else if (idade < 80){
                img.setAttribute ('src', 'hmaduro.png')
            }
            else{
                img.setAttribute ('src', 'hidoso.png')
            }
        }
        else if(fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute ('src', 'mmulher.png')
            }
            else if (idade < 21){
                img.setAttribute ('src', 'mjovem.png')
                
            }else if(idade < 50){
                img.setAttribute('src', 'mjovem1.png')
            }
            else if (idade < 80){
                img.setAttribute ('src', 'madulta.png')
            }
            else{
                img.setAttribute ('src', 'midoso.png')
            }
        }
        res.innerHTML = `${genero} com ${idade} anos. <br/>`
    res.appendChild (img)
    res.style.textAlign = 'center'

    }

}