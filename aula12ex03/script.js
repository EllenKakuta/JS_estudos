function verificar(){
    var data= new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fAno.value.length == 0 || Number(fAno.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        var fSex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fSex[0].checked){
            genero='Homem'
            if(idade >=0 && idade < 8) {
                img.setAttribute('src', 'imagens/menino1.png')
            }else if (idade < 18){
                img.setAttribute('src', 'imagens/menino2.png')
            }else if (idade < 30){
                img.setAttribute('src', 'imagens/menino3.png')
            }else if (idade < 50){
                img.setAttribute('src', 'imagens/menino4.png')
            }else {
                img.setAttribute('src', 'imagens/menino5.png')
            }
        } else if(fSex[1].checked){
            genero='Mulher'      
            if(idade >=0 && idade < 8) {
                img.setAttribute('src', 'imagens/menina1.png')
            }else if (idade < 18){
                img.setAttribute('src', 'imagens/menina2.png')
            }else if (idade < 30){
                img.setAttribute('src', 'imagens/menina3.png')
            }else if (idade < 50){
                img.setAttribute('src', 'imagens/menina4.png')
            }else {
                img.setAttribute('src', 'imagens/menina5.png')
            }
            
        }
        // res.style.textAlign = 'center'
        res.innerHTML=`Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}