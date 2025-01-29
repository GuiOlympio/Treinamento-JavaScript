function carregar() {
    // Obtém os elementos do HTML onde serão exibidas as mensagens e a imagem
    var msg = window.document.getElementById("msg"); // Div onde será exibida a mensagem
    var img = window.document.getElementById("imagem"); // Imagem que será alterada dinamicamente

    // Obtém o horário atual do sistema
    var agr = new Date(); // Cria um objeto de data e hora atual
    var hora = agr.getHours(); // Pega apenas as horas do objeto de data
    //var hora = 8
    // msg.innerHTML irá mostrar a hora atual na tela
    msg.innerHTML = `<p>Agora são ${hora} horas</p>`;

    // Condicional para verificar o período do dia
    if (hora >= 5 && hora < 12) { 
        // Se for entre 5h e 11h59, é manhã
        msg.innerHTML += `<p>BOM DIA!!</p>`; // Exibe "Bom dia" na mensagem
        img.src = "Manha.png.jpg"; // Troca a imagem para a imagem da manhã
        document.body.style.background = "#FFCE9B"; // Altera o fundo para um tom de manhã
    } else if (hora >= 12 && hora <= 18) { 
        // Se for entre 12h e 18h, é tarde
        msg.innerHTML += `<p>BOA TARDE!!</p>`; // Exibe "Boa tarde" na mensagem
        img.src = "Tarde.png.jpg"; // Troca a imagem para a imagem da tarde
        document.body.style.background = "#56798C"; // Altera o fundo para um tom de tarde
    } else if (hora >= 18) { 
        // Se for 18h ou mais, é noite
        msg.innerHTML += `<p>BOA NOITE!!</p>`; // Exibe "Boa noite" na mensagem
        img.src = "Noite.png.jpg"; // Troca a imagem para a imagem da noite
        document.body.style.background = "#182538"; // Altera o fundo para um tom de noite
    }
}
