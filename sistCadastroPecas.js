const listaPecas = [{
    nomePeca: "teclado", 
    pesoPeca: 679, 
    quantPeca: 5
    },
{
    nomePeca: "caixas de som", 
    pesoPeca: 345, 
    quantPeca: 6
    },
{
    nomePeca: "mouse", 
    pesoPeca: 112, 
    quantPeca: 18
    },
{    
    nomePeca: "cabo USB", 
    pesoPeca: 49, 
    quantPeca: 3
    },
{
    nomePeca: "carregador", 
    pesoPeca: 235, 
    quantPeca: 9
    }
]
console.log("------------------------------------")
console.log("---------Iniciando Cadastro---------")
console.log("------------------------------------")
for (let index = 0; index < listaPecas.length; index++){
    let pesoPeca = 0
    let nomePeca = ""

    if (listaPecas[index].pesoPeca < 100) {
        console.log("Peso inferior a 100g, peca nao cadastrada: ", listaPecas[index].nomePeca)
    } else {
        console.log("Peso superior a 100g, peca cadastrada: ", listaPecas[index].nomePeca)
    }
}

console.log("-------------------------------------")
for (let index = 0;  index < listaPecas.length; index++) {
    let nomePeca = ""

    if (listaPecas[index].nomePeca.length < 3) {
    } else if (listaPecas[index].pesoPeca < 100) {
        console.log("Erro no nome ou peso da peca: ", listaPecas[index].nomePeca)
    } else {
            console.log("Cadastro completo da peca:", listaPecas[index].nomePeca)
    }
}

// Professor eu queria fazer com que a peça não chegasse a esse última etapa caso uma das condições -
// acima não fossem atendidas. por exemplo o Cabo USB que tem peso inferior a 100g e não deveria nem -
// chegar a ser embalado. Porém tentei com "else if", "if", "&&" mas não consegui. vou consultar alguém pra--
// tentar me desenrrascar kk.

console.log("-------------------------------------")
for (let index = 0; index < listaPecas.length; index++) {
    let quantPeca = 0
    let nomePeca = ""

    if (listaPecas[index].quantPeca > 10) {
        console.log("Ultrapassou o limite da caixa, peca nao autorizada: ", listaPecas[index].nomePeca)
    } else { 
        console.log("Caixa ok, peca autorizada: ", listaPecas[index].nomePeca)
    }
}
console.log("-------------------------------------")
console.log("-----------Fim do Cadastro!----------")