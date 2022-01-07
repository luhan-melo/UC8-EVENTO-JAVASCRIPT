let dataHoje = "03/01/2022";
let dataEvento = "13/01/2021";
console.log("A data de hoje é: " + dataHoje);
console.log("A data do evento é: " + dataEvento);
let verifDataEvento = "Sim"
console.log("A data do evento é posterior a data atual? " + verifDataEvento )
if (verifDataEvento == "Sim") {
    let numParticipant = 99
    console.log("Número de participantes cadastrados até o momento: " + numParticipant)
    if (numParticipant<=100) {
    let idadeParticipante = 17
    console.log("Idade do participante é de: "+ idadeParticipante + " anos")
    if (idadeParticipante >= 18) {
        console.log("Participante poderá ser cadastrado")
    } else {
        console.log("Idade do participante menor do que a mínima permitida")
    }
} else {
    console.log("Cadastro de participante não será permitido, limite de 100 participantes atingido")
}
} else {
    console.log("Data do evento inválida, evento não será permitido")
}