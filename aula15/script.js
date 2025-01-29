function verificar(){
    var data = new Date()
    var anoA = data.getFullYear()
    var cxtano = window.document.getElementById("txtano")
    var res = window.document.getElementById("res")
    if (cxtano.value.length == 0 || Number(cxtano.value) > anoA){
        window.alert("[ERRO] Verifique se os dados estao corretos")
    } else {
        var fsex = window.document.getElementsByName("radsex")
        var idade = anoA - Number(cxtano.value)
        var genero = ''
        var img = document.createElement("img")
        img.setAttribute('id',"foto")
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade <= 10){
                //Criança
                img.setAttribute('src',"bebe-m.jpg")
            }else if (idade < 21){
                //Adolescente
                img.setAttribute('src', "adolescen-m.jpg")
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src', "adulto-m.jpg")
            }else{
                //Idoso
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10){
                //Criança
                img.setAttribute('src',"bebe-f.jpg")
            }else if(idade < 21){
                //Adolescente
                img.setAttribute('src', "adolescente-f.jpg")
            }else if (idade <50){
                //Adulto
                img.setAttribute('src',"adulto-f.jpg")
            }else{
                //Idoso
            }
        }
        res.innerHTML = `<p>Detectamos ${genero} de ${idade} anos</p>`
        res.appendChild(img)
    }
}
