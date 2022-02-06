let dataHoje = new Date ()
let dataEvento = new Date('03/10/2022')


if (dataEvento > dataHoje) {
    let nomePalestrante = "Thiago"
    let idadeParticipantes = 18
    if (idadeParticipantes >= 18) {

        let listaParticipantes = ["Henrique", "Luisa", "Viviane"]
        console.log("Os participantes do evento são:")
        for (let contadorParticipantes = 0; contadorParticipantes <listaParticipantes.length; contadorParticipantes++){
            console.log(listaParticipantes[contadorParticipantes])
        }
    } else {
        console.log("Idade do participante menor do que a mínima permitida")}
       
let quantidadeParticipantes = 3
if (quantidadeParticipantes > 100) {
console.log("Não será mais permitido cadastrar participantes")
}
console.log ("\nNome do palestrante:" + nomePalestrante)
} else {
    console.log("Data do evento inválida, evento não será permitido.")
}
