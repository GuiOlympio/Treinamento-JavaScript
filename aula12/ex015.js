var agora = new Date()
var hora = agora.getHours()
if (hora < 12){
    console.log("Bom Dia!! :) ")
}else if(hora < 18){
    console.log("Boa Tarde!! :)")
}else if(hora > 18){
    console.log("Boa Noite!! :)")
}

// confirmação de hora , para bons modos