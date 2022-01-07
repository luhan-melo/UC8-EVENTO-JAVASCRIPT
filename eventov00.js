let dataHoje = "03/01/2022";
let dataEvento = "13/01/2021";
console.log("A data de hoje é: " + dataHoje);
console.log("A data do evento é: " + dataEvento);
let verifDataEvento = "Não"
console.log("A data do evento é posterior a data atual? " + verifDataEvento )
if (verifDataEvento == "Sim") {
    let contador = 1
    while (contador <= 100) {
    let idadeParticipante = 18
    console.log("Idade do participante é de: "+ idadeParticipante)
    if (idadeParticipante >= 18) {
        console.log("Participante poderá ser cadastrado")
    } else {
        console.log("Idade do participante menor do que a mínima permitida")
    }
    contador = contador+1
}
} else {
    console.log("Data do evento inválida, evento não será permitido")
}