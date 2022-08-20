let dataAtual = new Date (2022,08,16);
let dataEvento = new Date (2022,08,28)
let idadeParticipante = 24
let listaDeParticipantes = ["Henrique","Keila","Celso","Ana","Gracinda","duda","Márcio"]
console.log("-----------------------------------------------------------------")
console.log("----------------- Cadastro de evento -----------------")
if (dataEvento>dataAtual) {
    console.log("Data válida, agendar evento")
} else {
    console.log("Data inválida, evento não permitido")
}
console.log("-----------------------------------------------------------------")
if (idadeParticipante >= 18) {
    console.log("Entrada Permitida")
} else {
    console.log("Idade inválida")
}
console.log("-----------------------------------------------------------------")
console.log(listaDeParticipantes)
console.log("-----------------------------------------------------------------")
if (listaDeParticipantes.length < 100 ) {
    console.log("Permitir Cadastro")
} else {
    console.log("Limite de participantes excedido! Hà um limite de 99 participantes por evento")
}
console.log("-----------------------------------------------------------------")
console.log(" Fim do agendamento! Cadastro realizado com sucesso!")
console.log("-----------------------------------------------------------------")