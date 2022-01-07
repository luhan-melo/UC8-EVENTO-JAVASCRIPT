let dataHoje = "03/01/2022";
let dataEvento = "13/01/2021";
console.log("A data de hoje é: " + dataHoje);
console.log("A data do evento é: " + dataEvento);
let verifDataEvento = "Sim"
console.log("A data do evento é posterior a data atual? " + verifDataEvento )
if (verifDataEvento == "Sim") {
    let nomeEvento = "Webinar Logica de Programação"
    let nomePalestrante1 = "Thiago"
    let contador = 1
        while (contador <= 100) {
    let nomeParticipante = "Lucas"
    let idadeParticipante = 18
    console.log("Idade do participante é de: "+ idadeParticipante)
    if (idadeParticipante >= 18) {
        console.log("Participante poderá ser cadastrado")
    } else {
        console.log("Idade do participante menor do que a mínima permitida")
    }
    contador = contador+1
}
console.log("Limite de participantes atingido")
console.log("O evento: ", nomeEvento)
console.log("Será ministrado pelo(s) seguinte(s) palestrante(s): ", nomePalestrante1)
console.log("Contando com os seguintes participantes:", nomeParticipante)
} else {
    console.log("Data do evento inválida, evento não será permitido")
}