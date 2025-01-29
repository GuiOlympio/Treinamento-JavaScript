var agora = new Date(); // Cria um objeto com a data e hora atual
var diaS = agora.getDay(); // Obtém o dia da semana como um número (0 para Domingo, 1 para Segunda, etc.)

console.log(diaS); // Exibe no console o número correspondente ao dia da semana

// Usa o switch para traduzir o número do dia da semana em texto
switch (diaS) {
    case 0: // Caso o número seja 0
        console.log('Domingo'); // Exibe "Domingo"
        break; // Sai do switch
    case 1: // Caso o número seja 1
        console.log('Segunda'); // Exibe "Segunda"
        break; // Sai do switch
    case 2: // Caso o número seja 2
        console.log("Terça"); // Exibe "Terça"
        break; // Sai do switch
    case 3: // Caso o número seja 3
        console.log("Quarta"); // Exibe "Quarta"
        break; // Sai do switch
    case 4: // Caso o número seja 4
        console.log("Quinta"); // Exibe "Quinta"
        break; // Sai do switch
    case 5: // Caso o número seja 5
        console.log('Sexta'); // Exibe "Sexta"
        break; // Sai do switch
    case 6: // Caso o número seja 6
        console.log("Sábado"); // Exibe "Sábado"
        break; // Sai do switch
}
